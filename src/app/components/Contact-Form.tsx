"use client";

import { ArrowRight, Calendar, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const options = ["Freelance project", "Full-time opportunity", "Other"];

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiry, setInquiry] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inquiry) {
      setIsSuccess(false);
      setResult("Please select an inquiry type.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "4987eae9-12c3-4233-910b-8784d8a05729");

    setIsSubmitting(true);
    setIsSuccess(null);
    setResult("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);
      setResult(
        "Thanks for reaching out! I’ll review your message and get back to you within 1–2 business days.",
      );

      form.reset();
      setInquiry("");
    } catch {
      setIsSuccess(false);
      setResult(
        "Something went wrong while sending your message. Please try again in a moment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex min-w-0 flex-col gap-3 text-[#baaae2]"
    >
      <Link
        href="https://calendar.app.google/cmuMv3VEZFdnffjE6"
        rel="noopener noreferrer"
        target="_blank"
        className="group grid min-h-12 w-full grid-cols-[24px_1fr_24px] items-center gap-3 rounded-xl border border-violet-200 bg-violet-200 px-4 py-2.5 text-[#171129] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 sm:px-5"
      >
        <Calendar
          aria-hidden="true"
          className="size-5 transition-transform duration-200 ease-out group-hover:scale-105"
        />

        <span className="text-center text-sm font-bold sm:text-base">
          Book an Initial Consultation
        </span>

        <ArrowRight
          aria-hidden="true"
          className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1.5"
        />
      </Link>

      <div className="flex items-center gap-3 py-3 sm:gap-5">
        <div className="h-px min-w-0 flex-1 bg-[#2b2148]" />

        <p className="shrink-0 whitespace-nowrap text-[10px] font-semibold tracking-[1px] text-violet-200 sm:text-xs sm:tracking-[1.5px]">
          or send a message
        </p>

        <div className="h-px min-w-0 flex-1 bg-[#2b2148]" />
      </div>

      <input type="hidden" name="subject" value={`[${inquiry}]`} />
      <input type="hidden" name="inquiry_type" value={inquiry} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      <fieldset>
        <legend className="sr-only">Inquiry type</legend>

        <div className="grid w-full grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 sm:gap-3">
          {options.map((option) => {
            const isSelected = inquiry === option;

            return (
              <button
                key={option}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setInquiry(option);
                  setResult("");
                  setIsSuccess(null);
                }}
                className={`flex min-h-12 items-center justify-center rounded-xl border px-3 text-center text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 ${
                  option === "Other" ? "xs:col-span-2 sm:col-span-1" : ""
                } ${
                  isSelected
                    ? "border-violet-200 bg-violet-200 font-bold text-[#171129]"
                    : "border-[#322851] bg-[#1F1838] text-[#8f82b0] hover:border-[#8f82b0] hover:text-violet-200"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
        <label className="min-w-0">
          <span className="sr-only">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Name"
            className="h-12 w-full min-w-0 rounded-xl border border-[#322851] bg-[#1F1838] px-4 outline-none transition-colors placeholder:text-[#70658f] focus:border-violet-300"
          />
        </label>

        <label className="min-w-0">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="Email"
            className="h-12 w-full min-w-0 rounded-xl border border-[#322851] bg-[#1F1838] px-4 outline-none transition-colors placeholder:text-[#70658f] focus:border-violet-300"
          />
        </label>
      </div>

      <label className="block">
        <span className="sr-only">Message</span>

        <textarea
          name="message"
          required
          placeholder="Tell me about your project, goals, timeline, or opportunity."
          className="
            h-36 w-full resize-y overflow-y-auto rounded-xl border
            border-[#322851] bg-[#1F1838] p-4 text-sm outline-none
            transition-colors placeholder:text-[#70658f] focus:border-violet-300
            sm:h-40 sm:rounded-2xl

            [scrollbar-color:auto]

            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-violet-300
            [&::-webkit-scrollbar-button]:hidden
            [&::-webkit-scrollbar-button]:size-0
          "
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex min-h-12 items-center justify-center gap-3 rounded-xl border border-violet-200 bg-violet-200 px-5 py-2.5 font-bold text-[#171129] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}

        <Send
          aria-hidden="true"
          className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </button>

      <p
        aria-live="polite"
        className={`min-h-5 wrap-break-word text-left text-sm ${
          isSuccess === true ? "text-green-300" : ""
        } ${isSuccess === false ? "text-red-300" : ""}`}
      >
        {result}
      </p>
    </form>
  );
}