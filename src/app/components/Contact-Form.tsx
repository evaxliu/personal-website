"use client"
import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "4987eae9-12c3-4233-910b-8784d8a05729");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setIsSuccess(data.success);

    setResult(
      data.success
        ? "Thanks for reaching out! I’ll review your message and get back to you within 1–2 business days."
        : "Something went wrong while sending your message. Please try again in a moment."
    );
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 text-white min-w-0">
      <div className="flex gap-3">
        <input type="text" name="name" required placeholder="Name" className="flex border border-[#322851] bg-[#1F1838] rounded-2xl p-3 shrink w-full" />
        <input type="email" name="email" required placeholder="Email" className="flex border border-[#322851] bg-[#1F1838] rounded-2xl p-3 shrink w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-40 w-full overflow-hidden rounded-2xl border border-[#322851] bg-[#1F1838]">
          <textarea
            name="message"
            required
            placeholder="Type your message here."
            className="
              h-full w-full resize-none overflow-y-auto overscroll-y-contain
              bg-transparent p-3 outline-none

              [scrollbar-color:auto]

              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-violet-300

              [&::-webkit-scrollbar-button]:hidden
              [&::-webkit-scrollbar-button]:size-0
            "
          />
        </div>
        <button type="submit" className="flex items-center justify-center h-12 border bg-violet-200 text-[#171129] py-2.5 px-5 rounded-xl font-bold hover:cursor-pointer">Submit</button>
        <p
          className={`
            w-0 min-w-full whitespace-normal wrap-anywhere text-left text-sm
            ${isSuccess === true ? "text-green-300" : ""}
            ${isSuccess === false ? "text-red-300" : ""}
          `}
        >
          {result}
        </p>
      </div>
    </form>
  );
}