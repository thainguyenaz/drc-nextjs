"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTurnstile } from "./useTurnstile";
import { prepareCard } from "./cardImage";
import {
  AWS_CARD_ACCEPT,
  CARD_MAX_BYTES,
  FORMS_API_BASE,
  FORMS_BACKEND,
  cardContentType,
  fetchAttribution,
  readCookie,
  submitInsuranceToAws,
  type PreparedCard,
} from "@/lib/forms-backend";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Insurance card uploads on the legacy (Vercel/VPS) path are hidden until the
// AWS card flow is live: that path fails (the VPS relay rejects the request
// with 413) and those leads never reach admissions. Set
// NEXT_PUBLIC_CARD_UPLOAD_ENABLED=true to show them again. Off by default.
const CARD_UPLOAD_ENABLED = process.env.NEXT_PUBLIC_CARD_UPLOAD_ENABLED === "true";

// AWS mode: JPEG/PNG are re-encoded in the browser before upload, so larger
// originals are fine; the 5 MB limit applies to what is uploaded.
const AWS_MAX_ORIGINAL_BYTES = 25 * 1024 * 1024;

// The AWS card flow (NEXT_PUBLIC_FORMS_BACKEND=aws) always shows the card
// fields; the legacy path shows them only behind CARD_UPLOAD_ENABLED.
const SHOW_CARD_FIELDS = FORMS_BACKEND === "aws" || CARD_UPLOAD_ENABLED;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  insuranceCarrier: string;
  memberId: string;
  dateOfBirth: string;
  frontCard: File | null;
  backCard: File | null;
  howDidYouHear: string;
  smsConsent: boolean;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  insuranceCarrier: "",
  memberId: "",
  dateOfBirth: "",
  frontCard: null,
  backCard: null,
  howDidYouHear: "",
  smsConsent: false,
};

const ACCEPTED_FILE_TYPES = ".jpg,.jpeg,.png,.gif,.pdf";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function InsuranceVerificationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const turnstile = useTurnstile(TURNSTILE_SITE_KEY);
  const turnstileReady = turnstile.ready;
  const turnstileDegraded = turnstile.degraded;
  const [status, setStatus] = useState<"idle" | "success" | "partial" | "error">("idle");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [fileErrors, setFileErrors] = useState<{ front?: string; back?: string }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const thankYouRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "partial") {
      thankYouRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "frontCard" | "backCard") => {
    const file = e.target.files?.[0] || null;
    const errorField = field === "frontCard" ? "front" : "back";

    if (FORMS_BACKEND === "aws" && file) {
      const type = cardContentType(file.type, file.name);
      const reencodable = type === "image/jpeg" || type === "image/png";
      const error = !type
        ? "Please choose a JPG, PNG or HEIC image"
        : file.size > (reencodable ? AWS_MAX_ORIGINAL_BYTES : CARD_MAX_BYTES)
          ? `File must be under ${reencodable ? 25 : 5}MB`
          : undefined;
      if (error) {
        setFileErrors((prev) => ({ ...prev, [errorField]: error }));
        e.target.value = "";
        return;
      }
      setFileErrors((prev) => ({ ...prev, [errorField]: undefined }));
      setFormData((prev) => ({ ...prev, [field]: file }));
      return;
    }

    if (file && file.size > MAX_FILE_SIZE) {
      setFileErrors((prev) => ({ ...prev, [errorField]: "File must be under 5MB" }));
      e.target.value = "";
      return;
    }

    setFileErrors((prev) => ({ ...prev, [errorField]: undefined }));
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = formRef.current;
    // Read via the widget API (waits briefly for an in-flight solve) rather
    // than the hidden input, then capture the non-PII widget state.
    const turnstileToken = await turnstile.getToken();
    const turnstileInfo = turnstile.telemetry();
    const honeypotInput = form?.querySelector<HTMLInputElement>(
      'input[name="hp_check"]'
    );
    const honeypot = honeypotInput?.value || "";

    if (FORMS_BACKEND === "aws") {
      // AWS forms API: form JSON to the API, card bytes straight to S3.
      // Nothing is sent to a Vercel route.
      try {
        const cards: PreparedCard[] = [];
        for (const [side, file] of [
          ["front", formData.frontCard],
          ["back", formData.backCard],
        ] as const) {
          if (!file) continue;
          const prepared = await prepareCard(side, file);
          if (prepared) cards.push(prepared);
        }
        const attribution = await fetchAttribution((url, init) => fetch(url, init));
        const cookies = typeof document !== "undefined" ? document.cookie : "";
        const outcome = await submitInsuranceToAws({
          fetchFn: (url, init) => fetch(url, init),
          apiBase: FORMS_API_BASE,
          cards,
          fields: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            insuranceCarrier: formData.insuranceCarrier,
            memberId: formData.memberId,
            dateOfBirth: formData.dateOfBirth,
            howDidYouHear: formData.howDidYouHear,
            smsConsent: formData.smsConsent,
            hp_check: honeypot,
            turnstileToken,
            ...turnstileInfo,
            attribution,
            hutk: readCookie(cookies, "hubspotutk"),
            gaCookie: readCookie(cookies, "_ga"),
            pageUri: "https://desertrecoverycenters.com/insurance",
            pageName: "Insurance Verification",
            referrer: typeof document !== "undefined" ? document.referrer : "",
          },
        });
        if (outcome.status === "error") {
          setStatus("error");
          turnstile.reset();
          return;
        }
        if (typeof window !== "undefined") {
          const ty = window.location.pathname.replace(/\/$/, "") + "/thank-you/";
          window.gtag?.("event", "page_view", {
            page_path: ty,
            page_location: window.location.origin + ty,
            page_title: "Thank You",
          });
        }
        if (outcome.status === "partial") {
          setWarningMessage(outcome.warning);
          setStatus("partial");
        } else {
          setStatus("success");
        }
        setFormData(initialFormData);
      } catch {
        setStatus("error");
        turnstile.reset();
      } finally {
        setSubmitting(false);
      }
      return;
    }

    try {
      const body = new FormData();
      body.append("firstname", formData.firstName);
      body.append("lastname", formData.lastName);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("insurance_carrier", formData.insuranceCarrier);
      body.append("member_id", formData.memberId);
      body.append("date_of_birth", formData.dateOfBirth);
      body.append("how_did_you_hear", formData.howDidYouHear);
      body.append("smsConsent", String(formData.smsConsent));
      body.append("hp_check", honeypot);
      body.append("turnstileToken", turnstileToken);
      body.append("turnstileState", turnstileInfo.turnstileState);
      body.append("turnstileMs", String(turnstileInfo.turnstileMs));
      body.append("turnstilePreloaded", String(turnstileInfo.turnstilePreloaded));
      body.append("turnstileErrors", String(turnstileInfo.turnstileErrors));
      if (CARD_UPLOAD_ENABLED && formData.frontCard) body.append("front_card", formData.frontCard);
      if (CARD_UPLOAD_ENABLED && formData.backCard) body.append("back_card", formData.backCard);

      const response = await fetch("/api/insurance-verification", {
        method: "POST",
        body,
      });

      if (response.ok) {
        let warning = "";
        try {
          const data = await response.json();
          if (data && typeof data.warning === "string" && data.warning.length > 0) {
            warning = data.warning;
          }
        } catch {
          // body wasn't JSON; treat as plain success
        }
        // Lead is captured whenever the API returns 2xx — 200 clean success
        // OR 207 partial (HubSpot saved, notify relay failed). Fire the
        // thank-you page_view in both cases. The true error branch (non-2xx)
        // and the network/throw branch never reach here, so a lost lead
        // still fires nothing.
        if (typeof window !== "undefined") {
          const ty = window.location.pathname.replace(/\/$/, "") + "/thank-you/";
          window.gtag?.("event", "page_view", {
            page_path: ty,
            page_location: window.location.origin + ty,
            page_title: "Thank You",
          });
        }

        if (warning) {
          setWarningMessage(warning);
          setStatus("partial");
        } else {
          setStatus("success");
        }
        setFormData(initialFormData);
      } else {
        setStatus("error");
        turnstile.reset();
      }
    } catch {
      setStatus("error");
      turnstile.reset();
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "partial") {
    return (
      <div
        ref={thankYouRef}
        className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-forest font-semibold mb-3">
          We received your information
        </h3>
        <p className="text-amber-900 leading-relaxed mb-6">
          {warningMessage}
        </p>
        <a
          href="tel:+16233050496"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
        >
          Call (623) 305-0496
        </a>
        <p className="text-xs text-gray-500 mt-4">
          Or email{" "}
          <a
            href="mailto:admissions@desertrecoverycenters.com"
            className="font-medium underline text-sage"
          >
            admissions@desertrecoverycenters.com
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div ref={thankYouRef} className="bg-white rounded-2xl p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-forest font-semibold mb-3">Thank You</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our admissions team will review your insurance and contact you within the hour.
          For immediate help, call{" "}
          <a href="tel:+16233050496" className="text-sage font-medium">
            (623) 305-0496
          </a>
          .
        </p>
        <a
          href="tel:+16233050496"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
        >
          Call Now
        </a>
      </div>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
      >
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          Something went wrong. Please call{" "}
          <a href="tel:+16233050496" className="font-medium underline">
            (623) 305-0496
          </a>{" "}
          or email{" "}
          <a href="mailto:admissions@desertrecoverycenters.com" className="font-medium underline">
            admissions@desertrecoverycenters.com
          </a>{" "}
          with your insurance card photos.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="iv-first" className="block text-sm font-medium text-forest mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="iv-first"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>
        <div>
          <label htmlFor="iv-last" className="block text-sm font-medium text-forest mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="iv-last"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>
      </div>

      <div>
        <label htmlFor="iv-email" className="block text-sm font-medium text-forest mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="iv-phone" className="block text-sm font-medium text-forest mb-1.5">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="iv-carrier" className="block text-sm font-medium text-forest mb-1.5">
          Insurance Carrier <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-carrier"
          name="insuranceCarrier"
          type="text"
          required
          value={formData.insuranceCarrier}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="iv-member" className="block text-sm font-medium text-forest mb-1.5">
          Member ID <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-member"
          name="memberId"
          type="text"
          required
          value={formData.memberId}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          placeholder="Found on your insurance card"
        />
      </div>

      <div>
        <label htmlFor="iv-dob" className="block text-sm font-medium text-forest mb-1.5">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-dob"
          name="dateOfBirth"
          type="date"
          required
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      {SHOW_CARD_FIELDS && (
        <>
          <div>
            <label htmlFor="iv-front" className="block text-sm font-medium text-forest mb-1.5">
              Front of Insurance Card <span className="text-gray-600 text-xs font-normal">(optional)</span>
            </label>
            <input
              id="iv-front"
              type="file"
              accept={FORMS_BACKEND === "aws" ? AWS_CARD_ACCEPT : ACCEPTED_FILE_TYPES}
              onChange={(e) => handleFileChange(e, "frontCard")}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-sage/10 file:text-sage"
            />
            {formData.frontCard && (
              <p className="text-xs text-gray-500 mt-1">{formData.frontCard.name}</p>
            )}
            {fileErrors.front && (
              <p className="text-xs text-red-500 mt-1">{fileErrors.front}</p>
            )}
          </div>

          <div>
            <label htmlFor="iv-back" className="block text-sm font-medium text-forest mb-1.5">
              Back of Insurance Card <span className="text-gray-600 text-xs font-normal">(optional)</span>
            </label>
            <input
              id="iv-back"
              type="file"
              accept={FORMS_BACKEND === "aws" ? AWS_CARD_ACCEPT : ACCEPTED_FILE_TYPES}
              onChange={(e) => handleFileChange(e, "backCard")}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-sage/10 file:text-sage"
            />
            {formData.backCard && (
              <p className="text-xs text-gray-500 mt-1">{formData.backCard.name}</p>
            )}
            {fileErrors.back && (
              <p className="text-xs text-red-500 mt-1">{fileErrors.back}</p>
            )}
          </div>
        </>
      )}

      <div>
        <label htmlFor="iv-hear" className="block text-sm font-medium text-forest mb-1.5">
          How did you hear about us?
        </label>
        <input
          id="iv-hear"
          name="howDidYouHear"
          type="text"
          value={formData.howDidYouHear}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="smsConsent"
            required
            checked={formData.smsConsent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-sage focus:ring-sage border-gray-300 rounded"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            By providing your phone number and email, you agree to receive marketing text messages
            and/or emails from Desert Recovery Centers. Message frequency varies. Reply STOP to
            unsubscribe. Message and data rates may apply.{" "}
            <Link href="/privacy-policy" className="text-sage underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {/* Honeypot — must stay empty. Hidden from humans + screen readers.
          Name avoids common autofill taxonomies (company, website, address)
          so password managers and browser autofill leave it alone. */}
      <div aria-hidden="true" className="absolute left-[-10000px] w-px h-px overflow-hidden">
        <label htmlFor="iv-hp-check">Leave this field empty</label>
        <input
          id="iv-hp-check"
          name="hp_check"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          defaultValue=""
        />
      </div>

      {TURNSTILE_SITE_KEY && (
        <div ref={turnstile.containerRef} />
      )}

      <button
        type="submit"
        disabled={submitting || (!!TURNSTILE_SITE_KEY && !turnstileReady && !turnstileDegraded)}
        className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting
          ? "Submitting..."
          : !TURNSTILE_SITE_KEY || turnstileReady || turnstileDegraded
            ? "Verify My Insurance"
            : "Verifying..."}
      </button>

      {TURNSTILE_SITE_KEY && turnstileDegraded && !turnstileReady && (
        <p className="text-xs text-gray-600 text-center">
          Security check unavailable, you can still submit.
        </p>
      )}

      <p className="text-xs text-gray-600 text-center">
        Protected by HIPAA &amp; 42 CFR Part 2. Your information is completely confidential.
      </p>
      </form>
    </>
  );
}
