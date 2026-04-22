"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

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
    const tokenInput = form?.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]'
    );
    const turnstileToken = tokenInput?.value || "";
    const honeypotInput = form?.querySelector<HTMLInputElement>(
      'input[name="hp_check"]'
    );
    const honeypot = honeypotInput?.value || "";

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
          variant,
          pageUri: typeof window !== "undefined" ? window.location.href : "",
          pageName: typeof window !== "undefined" ? document.title : "Get Help Today",
          hp_check: honeypot,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setStatus("success");
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
          <a href="tel:+14809313617" className="text-sage font-medium">
            (480) 931-3617
          </a>
          .
        </p>
        <a
          href="tel:+14809313617"
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
            Something went wrong. Please call us directly at{" "}
            <a href="tel:+14809313617" className="font-medium underline">
              (480) 931-3617
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
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme="light"
            data-size="flexible"
          />
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Get Help Today"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Protected by HIPAA &amp; 42 CFR Part 2. Your information is completely confidential.
        </p>
      </form>
    </>
  );
}
