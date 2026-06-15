import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "Cookie Policy | Sentrix Global Technologies",
  description: "How Sentrix uses cookies and local storage, and how you can control them.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <SkipLink />
      <section className="legal-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="glow-a" />
        </div>
        <div className="container-x">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link> <Icon name="arrow" /> <span>Cookie Policy</span>
          </div>
          <span className="eyebrow reveal">Legal</span>
          <h1 className="reveal d1" style={{ fontSize: "clamp(32px,4.6vw,50px)", marginTop: 14 }}>
            Cookie Policy
          </h1>
          <p className="updated reveal d2">Last updated: 6 June 2026</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,36px)" }} id="main">
        <div className="container-x">
          <div className="prose reveal" style={{ marginInline: "auto" }}>
            <p>
              This Cookie Policy explains how Sentrix Global Technologies Limited uses cookies and
              similar technologies on this website, and how you can manage them. It should be read
              alongside our <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device by a website. &ldquo;Local
              storage&rdquo; is a related browser technology that stores small amounts of data on your
              device. Both let a site remember information between visits.
            </p>

            <h2>What we use today</h2>
            <p>We keep our footprint deliberately light. This website currently uses:</p>
            <ul>
              <li>
                <strong>Theme preference (local storage):</strong> when you switch between light and
                dark mode, your choice is saved in your browser under the key{" "}
                <code>sentrix-theme</code> so the site remembers it. This never leaves your device.
              </li>
              <li>
                <strong>Strictly necessary technologies:</strong> any data required for the website to
                function and load securely.
              </li>
            </ul>

            <h2>Categories you may encounter</h2>
            <ul>
              <li><strong>Essential</strong> — required for the site to work; cannot be switched off.</li>
              <li><strong>Preferences</strong> — remember your choices, such as theme.</li>
              <li><strong>Analytics</strong> — help us understand how the site is used so we can improve it. If we introduce analytics, we will update this policy and, where required, request your consent.</li>
              <li><strong>Marketing</strong> — we do not currently use marketing or advertising cookies.</li>
            </ul>

            <h2>Managing cookies</h2>
            <p>
              You can clear or block cookies and local storage through your browser settings. You can
              also reset your saved theme by clearing site data for this domain. Blocking essential
              technologies may affect how the site works.
            </p>

            <h2>Changes</h2>
            <p>We will update this policy if our use of cookies changes, and we will revise the &ldquo;last updated&rdquo; date above.</p>

            <h2>Contact</h2>
            <p>Questions about cookies? Email <a href="mailto:privacy@sentrix.global">privacy@sentrix.global</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
