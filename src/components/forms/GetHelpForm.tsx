"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTurnstile } from "./useTurnstile";
import {
  FORMS_API_BASE,
  FORMS_BACKEND,
  fetchAttribution,
  readCookie,
  submitGetHelpToAws,
} from "@/lib/forms-backend";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  seekingFor: string;
  insuranceProvider: string;
  situation: string;
  smsConsent: boolean;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  seekingFor: "",
  insuranceProvider: "",
  situation: "",
  smsConsent: false,
};

interface GetHelpFormProps {
  variant?: "lp" | "contact";
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function GetHelpForm({ variant = "lp" }: GetHelpFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const turnstile = useTurnstile(TURNSTILE_SITE_KEY);
  const turnstileReady = turnstile.ready;
  const turnstileDegraded = turnstile.degraded;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const thankYouRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") {
      thankYouRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
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
      // AWS forms API: the form JSON goes straight to AWS, never to a
      // Vercel route. The body matches today's route body, plus the
      // attribution values and JS cookies the cross-origin API cannot read.
      try {
        const attribution = await fetchAttribution((url, init) => fetch(url, init));
        const cookies = typeof document !== "undefined" ? document.cookie : "";
        const ok = await submitGetHelpToAws((url, init) => fetch(url, init), FORMS_API_BASE, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          seekingFor: formData.seekingFor,
          insuranceProvider: formData.insuranceProvider,
          situation: formData.situation,
          smsConsent: formData.smsConsent,
          variant,
          pageUri: typeof window !== "undefined" ? window.location.href : "",
          pageName: typeof window !== "undefined" ? document.title : "Get Help Today",
          hp_check: honeypot,
          turnstileToken,
          ...turnstileInfo,
          attribution,
          hutk: readCookie(cookies, "hubspotutk"),
          gaCookie: readCookie(cookies, "_ga"),
        });
        if (ok) {
          setStatus("success");
          if (typeof window !== "undefined" && variant === "lp") {
            window.gtag?.("event", "page_view", {
              page_path: "/get-help/thank-you/",
              page_location: window.location.origin + "/get-help/thank-you/",
              page_title: "Thank You - Get Help",
            });
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
      return;
    }

    try {
      const response = await fetch("/api/get-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          seekingFor: formData.seekingFor,
          insuranceProvider: formData.insuranceProvider,
          situation: formData.situation,
          smsConsent: formData.smsConsent,
          variant,
          pageUri: typeof window !== "undefined" ? window.location.href : "",
          pageName: typeof window !== "undefined" ? document.title : "Get Help Today",
          hp_check: honeypot,
          turnstileToken,
          ...turnstileInfo,
        }),
      });

      if (response.ok) {
        setStatus("success");
        if (typeof window !== "undefined" && variant === "lp") {
          window.gtag?.("event", "page_view", {
            page_path: "/get-help/thank-you/",
            page_location: window.location.origin + "/get-help/thank-you/",
            page_title: "Thank You - Get Help",
          });
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
          Our admissions team will contact you within the hour. If you need immediate help,
          call{" "}
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
            Something went wrong. Please call us directly at{" "}
            <a href="tel:+16233050496" className="font-medium underline">
              (623) 305-0496
            </a>
            .
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gh-first" className="block text-sm font-medium text-forest mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="gh-first"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
            />
          </div>
          <div>
            <label htmlFor="gh-last" className="block text-sm font-medium text-forest mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="gh-last"
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
          <label htmlFor="gh-email" className="block text-sm font-medium text-forest mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="gh-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>

        <div>
          <label htmlFor="gh-phone" className="block text-sm font-medium text-forest mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="gh-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-forest mb-2">
            I am seeking recovery for <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-4">
            {["Myself", "A Loved One", "Both"].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="radio"
                  name="seekingFor"
                  value={option}
                  required
                  checked={formData.seekingFor === option}
                  onChange={handleChange}
                  className="w-4 h-4 text-sage focus:ring-sage border-gray-300"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="gh-insurance" className="block text-sm font-medium text-forest mb-1.5">
            My insurance provider is <span className="text-red-500">*</span>
          </label>
          <select
            id="gh-insurance"
            name="insuranceProvider"
            required
            value={formData.insuranceProvider}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white"
          >
            <option value="">Select your insurance</option>
            <option value="Private Insurance">Private Insurance</option>
            <option value="Commercial Insurance">Commercial Insurance</option>
            <option value="Medicaid">Medicaid</option>
            <option value="Medicare">Medicare</option>
            <option value="Marketplace">Marketplace</option>
            <option value="Private Pay">Private Pay</option>
          </select>
        </div>

        <div>
          <label htmlFor="gh-situation" className="block text-sm font-medium text-forest mb-1.5">
            Tell us a little bit about your situation
          </label>
          <textarea
            id="gh-situation"
            name="situation"
            rows={4}
            value={formData.situation}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none"
          />
        </div>

        {/* Honeypot — must stay empty. Hidden from humans + screen readers.
            Name avoids common autofill taxonomies (company, website, address)
            so password managers and browser autofill leave it alone. */}
        <div aria-hidden="true" className="absolute left-[-10000px] w-px h-px overflow-hidden">
          <label htmlFor="gh-hp-check">Leave this field empty</label>
          <input
            id="gh-hp-check"
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
              ? "Get Help Today"
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
