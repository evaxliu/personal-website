"use client"

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "4987eae9-12c3-4233-910b-8784d8a05729");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 text-white">
      <div className="flex gap-3">
        <input type="text" name="name" required placeholder="Name" className="flex border border-[#322851] bg-[#1F1838] rounded-2xl p-3 shrink w-full" />
        <input type="email" name="email" required placeholder="Email" className="flex border border-[#322851] bg-[#1F1838] rounded-2xl p-3 shrink w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <textarea name="message" required placeholder="Type your message here." className="flex border border-[#322851] bg-[#1F1838] rounded-2xl w-full p-3 shrink" ></textarea>
        <button type="submit" className="flex items-center justify-center h-12 border bg-violet-200 text-[#171129] py-2.5 px-5 rounded-xl font-bold hover:cursor-pointer">Submit</button>
        <p>{result}</p>
      </div>
    </form>
  );
}