"use client";
import React, { useState } from "react";
import { Button, FadeIn, Input } from "../ui";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.name = "hidden-iframe";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://your-newsletter-service.com/api/v1/free";
    form.target = "hidden-iframe";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = email;
    form.appendChild(emailInput);

    const firstUrlInput = document.createElement("input");
    firstUrlInput.type = "hidden";
    firstUrlInput.name = "first_url";
    firstUrlInput.value = window.location.href;
    form.appendChild(firstUrlInput);

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 1000);

    setIsSubmitted(true);
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <section className="space-y-6">
        <FadeIn delay={0.2}>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed">
              You&apos;re subscribed!
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed max-w-md mx-auto">
              Check your email for a confirmation link. Thanks for joining!
            </p>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <FadeIn delay={0.2}>
        <div className="text-center space-y-4">
          <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed">
            Subscribe to my Newsletter
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed max-w-md mx-auto">
            Add your newsletter description here. What value will subscribers
            get? How often will you send emails? What topics will you cover?
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="flex justify-center">
          <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-zinc-200/60"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full text-sm rounded-xl lg:text-base py-3"
              >
                Subscribe Now
              </Button>
            </form>

            <p className="text-xs text-zinc-400 text-center mt-3">
              No spam, unsubscribe anytime. [Add subscriber count or remove this
              line]
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export { Newsletter };
