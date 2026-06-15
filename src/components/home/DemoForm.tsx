"use client";

import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

/**
 * Demo request form — mirrors the original app.js behaviour. With no backend
 * wired (placeholder endpoint), it validates and shows the success state.
 * Set FORM_ENDPOINT to a real handler (Formspree, Basin, etc.) to go live.
 */
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export default function DemoForm() {
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function setError(field: HTMLInputElement, on: boolean) {
    field.style.borderColor = on ? "var(--threat)" : "";
    field.setAttribute("aria-invalid", on ? "true" : "false");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current!;
    const name = form.querySelector<HTMLInputElement>("#fname")!;
    const email = form.querySelector<HTMLInputElement>("#femail")!;
    let ok = true;
    [name, email].forEach((f) => {
      const bad =
        !f.value.trim() || (f.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
      setError(f, bad);
      if (bad) ok = false;
    });
    if (!ok) {
      (name.value.trim() ? email : name).focus();
      return;
    }

    const configured = FORM_ENDPOINT.indexOf("your-form-id") === -1;
    if (!configured) {
      setSending(true);
      setTimeout(() => setSuccess(true), 700);
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) setSuccess(true);
      else throw new Error();
    } catch {
      setSending(false);
      setNote("Something went wrong. Please try again or email hello@sentrix.global.");
    }
  }

  return (
    <div className="form-card gradient-border">
      {!success && (
        <form ref={formRef} onSubmit={onSubmit} noValidate>
          <h3>Request a Demo</h3>
          <p className="fsub">We&apos;ll respond within one business day.</p>
          <div className="form-row">
            <div className="field">
              <label htmlFor="fname">Full name</label>
              <input id="fname" name="fname" type="text" autoComplete="name" required placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label htmlFor="forg">Organisation</label>
              <input id="forg" name="forg" type="text" autoComplete="organization" placeholder="Company Ltd" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="femail">Work email</label>
            <input id="femail" name="femail" type="email" autoComplete="email" required placeholder="jane@company.com" />
          </div>
          <div className="field">
            <label htmlFor="fint">Area of interest</label>
            <select id="fint" name="fint" defaultValue="">
              <option value="">Select a solution…</option>
              <option>Personal Safety (SentrixGo)</option>
              <option>Verified Transportation</option>
              <option>AI Surveillance (VisionGuard)</option>
              <option>Security Operations Centre</option>
              <option>Insurance Intelligence</option>
              <option>Fleet &amp; Logistics</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="fmsg">How can we help?</label>
            <textarea id="fmsg" name="fmsg" placeholder="Tell us about your safety challenge…" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? "Sending…" : (<>Request a Demo <Icon name="arrow" /></>)}
          </button>
          <p className="form-note" style={note ? { color: "var(--threat)" } : undefined}>
            {note ?? "By submitting, you agree to be contacted by Sentrix. We respect your privacy."}
          </p>
        </form>
      )}
      {success && (
        <div className="form-success show">
          <div className="ic">
            <Icon name="check" />
          </div>
          <h3>Request received</h3>
          <p>Thank you. A Sentrix safety specialist will reach out within one business day.</p>
        </div>
      )}
    </div>
  );
}
