import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "Page Not Found | Sentrix Global Technologies",
  description: "The page you're looking for can't be found. Explore Sentrix solutions or get in touch.",
};

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <section className="err" id="main">
      <div className="hero-bg" aria-hidden="true">
        <div className="glow-a" />
        <div className="glow-b" />
      </div>
      <div className="container-x" style={{ position: "relative", zIndex: 2 }}>
        <div className="err-code">404</div>
        <h1>This signal went quiet.</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
            <Icon name="home" /> Back to home
          </Link>
          <Link href="/solutions" className="btn btn-ghost btn-lg">
            Explore solutions
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-lg">
            Contact us
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
