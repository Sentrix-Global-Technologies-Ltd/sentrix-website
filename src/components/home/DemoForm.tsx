"use client";

import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { API_BASE_URL, EMAILS } from "@/lib/site";

/**
 * Demo request form. Posts straight to sentrix-backend's public, unauthenticated
 * lead-intake endpoint (POST {API_BASE_URL}/public/leads) — no third-party form
 * service. A submission here lands directly in the same CRM Lead pipeline
 * platform staff already work from (stage=new, source=website), rather than
 * going somewhere the team has to separately check.
 */
const LEADS_ENDPOINT = `${API_BASE_URL}/public/leads`;

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
    const org = form.querySelector<HTMLInputElement>("#forg")!;
    const email = form.querySelector<HTMLInputElement>("#femail")!;
    const interest = form.querySelector<HTMLSelectElement>("#fint")!;
    const message = form.querySelector<HTMLTextAreaElement>("#fmsg")!;
    // Honeypot: real visitors never see or fill this field (visually hidden
    // below); a bot filling every input on the form will, and the backend
    // rejects any non-empty value.
    const honeypot = form.querySelector<HTMLInputElement>("#fwebsite")!;

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

    setSending(true);
    setNote(null);
    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.value.trim(),
          organization: org.value.trim() || undefined,
          email: email.value.trim(),
          interest: interest.value || undefined,
          message: message.value.trim() || undefined,
          company_website: honeypot.value || undefined,
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else if (res.status === 429) {
        throw new Error("Too many requests — please wait a moment and try again.");
      } else {
        throw new Error();
      }
    } catch (err) {
      setSending(false);
      setNote(
        err instanceof Error && err.message
          ? err.message
          : `Something went wrong. Please try again or email ${EMAILS.hello}.`,
      );
    }
  }

  return (
    <div className="form-card gradient-border">
      {!success && (
        <form ref={formRef} onSubmit={onSubmit} noValidate>
          <h3>Request a Demo</h3>
          <p className="fsub">We&apos;ll respond within one business day.</p>
          {/* Honeypot — hidden from real visitors (off-screen, not display:none
              so it stays in the tab order-free zone bots often still fill),
              never shown, never required. */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <label htmlFor="fwebsite">Website</label>
            <input id="fwebsite" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
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
