"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileErrors, setFileErrors] = useState<{ front?: string; back?: string }>({});

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
    setSubmitting(true);
    setStatus("idle");

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
      if (formData.frontCard) body.append("front_card", formData.frontCard);
      if (formData.backCard) body.append("back_card", formData.backCard);

      const response = await fetch("/api/insurance-verification", {
        method: "POST",
        body,
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
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-forest font-semibold mb-3">Thank You</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our admissions team will review your insurance and contact you within the hour.
          For immediate help, call{" "}
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
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          Something went wrong. Please call{" "}
          <a href="tel:+14809313617" className="font-medium underline">
            (480) 931-3617
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
          Member ID
        </label>
        <input
          id="iv-member"
          name="memberId"
          type="text"
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

      <div>
        <label htmlFor="iv-front" className="block text-sm font-medium text-forest mb-1.5">
          Front of Insurance Card <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-front"
          type="file"
          required
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
        <label htmlFor="iv-back" className="block text-sm font-medium text-forest mb-1.5">
          Back of Insurance Card <span className="text-red-500">*</span>
        </label>
        <input
          id="iv-back"
          type="file"
          required
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

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Verify My Insurance"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Protected by HIPAA &amp; 42 CFR Part 2. Your information is completely confidential.
      </p>
    </form>
  );
}
