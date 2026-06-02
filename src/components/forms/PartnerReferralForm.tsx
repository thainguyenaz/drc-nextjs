"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

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
  smsConsent: false,
};

const ACCEPTED_FILE_TYPES = ".jpg,.jpeg,.png,.gif,.pdf";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function PartnerReferralForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileReady, setTurnstileReady] = useState(false);
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

  useEffect(() => {
    type W = Window &
      typeof globalThis & {
        onPartnerReferralTurnstileSuccess?: () => void;
        onPartnerReferralTurnstileExpired?: () => void;
        onPartnerReferralTurnstileError?: () => void;
      };
    const w = window as W;
    w.onPartnerReferralTurnstileSuccess = () => setTurnstileReady(true);
    w.onPartnerReferralTurnstileExpired = () => setTurnstileReady(false);
    w.onPartnerReferralTurnstileError = () => setTurnstileReady(false);
    return () => {
      delete w.onPartnerReferralTurnstileSuccess;
      delete w.onPartnerReferralTurnstileExpired;
      delete w.onPartnerReferralTurnstileError;
    };
  }, []);

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

    // Client-side required-files guard (server enforces too).
    const missingErrors: { front?: string; back?: string } = {};
    if (!formData.frontCard) missingErrors.front = "Front of insurance card is required";
    if (!formData.backCard) missingErrors.back = "Back of insurance card is required";
    if (missingErrors.front || missingErrors.back) {
      setFileErrors(missingErrors);
      return;
    }

    setSubmitting(true);
    setStatus("idle");

    const form = formRef.current;
    const tokenInput = form?.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]'
    );
    const turnstileToken = tokenInput?.value || "";
    const honeypotInput = form?.querySelector<HTMLInputElement>(
      'input[name="hp_check"]'
    );
    const honeypot = honeypotInput?.value || "";

    try {
      const body = new FormData();
      body.append("firstname", formData.firstName);
      body.append("lastname", formData.lastName);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("insurance_carrier", formData.insuranceCarrier);
      body.append("member_id", formData.memberId);
      body.append("date_of_birth", formData.dateOfBirth);
      body.append("hp_check", honeypot);
      body.append("turnstileToken", turnstileToken);
      if (formData.frontCard) body.append("front_card", formData.frontCard);
      if (formData.backCard) body.append("back_card", formData.backCard);

      const response = await fetch("/api/partner-referral", {
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
        if (warning) {
          setWarningMessage(warning);
          setStatus("partial");
        } else {
          setStatus("success");
        }
        setFormData(initialFormData);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
          We received your referral
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
        <h3 className="font-display text-xl text-forest font-semibold mb-3">Referral Received</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our admissions team will verify the patient&apos;s insurance and contact you within the hour to coordinate admission.
          For urgent matters, call{" "}
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
      {TURNSTILE_SITE_KEY && (
        <Script
          id="cf-turnstile-script"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      )}
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
          with the patient&apos;s insurance card photos.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pr-first" className="block text-sm font-medium text-forest mb-1.5">
            Patient First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="pr-first"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>
        <div>
          <label htmlFor="pr-last" className="block text-sm font-medium text-forest mb-1.5">
            Patient Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="pr-last"
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
        <label htmlFor="pr-email" className="block text-sm font-medium text-forest mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="pr-phone" className="block text-sm font-medium text-forest mb-1.5">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="pr-carrier" className="block text-sm font-medium text-forest mb-1.5">
          Insurance Carrier <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-carrier"
          name="insuranceCarrier"
          type="text"
          required
          value={formData.insuranceCarrier}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="pr-member" className="block text-sm font-medium text-forest mb-1.5">
          Member ID <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-member"
          name="memberId"
          type="text"
          required
          value={formData.memberId}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          placeholder="Found on the insurance card"
        />
      </div>

      <div>
        <label htmlFor="pr-dob" className="block text-sm font-medium text-forest mb-1.5">
          Patient Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-dob"
          name="dateOfBirth"
          type="date"
          required
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="pr-front" className="block text-sm font-medium text-forest mb-1.5">
          Front of Insurance Card <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-front"
          type="file"
          accept={ACCEPTED_FILE_TYPES}
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
        <label htmlFor="pr-back" className="block text-sm font-medium text-forest mb-1.5">
          Back of Insurance Card <span className="text-red-500">*</span>
        </label>
        <input
          id="pr-back"
          type="file"
          accept={ACCEPTED_FILE_TYPES}
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
            By submitting this referral, you agree to receive communications from Desert Recovery Centers about this patient. Reply STOP to unsubscribe. Message and data rates may apply.{" "}
            <Link href="/privacy-policy" className="text-sage underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {/* Honeypot - must stay empty. Hidden from humans + screen readers.
          Name avoids common autofill taxonomies (company, website, address)
          so password managers and browser autofill leave it alone. */}
      <div aria-hidden="true" className="absolute left-[-10000px] w-px h-px overflow-hidden">
        <label htmlFor="pr-hp-check">Leave this field empty</label>
        <input
          id="pr-hp-check"
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
        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="light"
          data-size="flexible"
          data-callback="onPartnerReferralTurnstileSuccess"
          data-expired-callback="onPartnerReferralTurnstileExpired"
          data-error-callback="onPartnerReferralTurnstileError"
        />
      )}

      <button
        type="submit"
        disabled={submitting || (!!TURNSTILE_SITE_KEY && !turnstileReady)}
        className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting
          ? "Submitting..."
          : !TURNSTILE_SITE_KEY || turnstileReady
            ? "Refer Patient"
            : "Verifying..."}
      </button>

      <p className="text-xs text-gray-600 text-center">
        Protected by HIPAA &amp; 42 CFR Part 2. All patient information is completely confidential.
      </p>
      </form>
    </>
  );
}
