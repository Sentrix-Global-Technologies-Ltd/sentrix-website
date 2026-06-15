import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "You Don't Need More Cameras. You Need Smarter Ones. | Sentrix Insights",
  description:
    "Organisations are sitting on underused video. The opportunity isn't more hardware — it's intelligence layered onto the cameras you already own.",
  alternates: { canonical: "/insight-smarter-cameras" },
};

export default function SmarterCamerasArticle() {
  return (
    <>
      <SkipLink />
      <article>
      <section className="legal-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="glow-a" data-parallax="0.06" />
        </div>
        <div className="container-x" style={{ maxWidth: 820 }}>
          <div className="breadcrumb reveal">
            <Link href="/insights">Insights</Link> <Icon name="arrow" /> <span>Smarter cameras</span>
          </div>
          <div
            className="meta reveal"
            style={{ fontFamily: "var(--font-mono),monospace", fontSize: 12, color: "var(--teal-600)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14 }}
          >
            AI Surveillance · 5 min read
          </div>
          <h1 className="reveal d1" style={{ fontSize: "clamp(30px,4.4vw,48px)", lineHeight: 1.12 }}>
            You don&apos;t need more cameras. You need smarter ones.
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(16px,2vw,30px)" }} id="main">
        <div className="container-x">
          <div className="prose reveal" style={{ marginInline: "auto" }}>
            <p>
              Walk into almost any organisation and you&apos;ll find cameras — often a lot of them.
              Lobbies, car parks, corridors, perimeters. They represent real investment. And yet, for
              most of their working lives, they do one thing: record. The intelligence in the footage
              stays locked until someone goes looking for it.
            </p>
            <p>
              That&apos;s the quiet inefficiency at the heart of traditional surveillance. The
              hardware is capable; the <strong>insight is missing</strong>. And the instinct, when
              security needs improving, is usually to buy more cameras — adding pixels to a problem
              that isn&apos;t really about pixels.
            </p>

            <h2>The real gap is interpretation</h2>
            <p>
              A human can watch one feed attentively for a while. They cannot watch fifty,
              continuously, without fatigue. So most footage is never watched live at all — it&apos;s
              a record for later, not a sensor for now. The gap isn&apos;t coverage. It&apos;s{" "}
              <strong>interpretation at scale, in real time.</strong>
            </p>

            <h2>Intelligence as a layer, not a replacement</h2>
            <p>
              AI surveillance treats your existing cameras as inputs. It interprets every feed at once
              — recognising people and objects, learning what normal looks like for a space, and
              flagging what doesn&apos;t fit: a weapon-like shape, a sudden crowd surge, movement in a
              restricted zone, a fall. The same cameras you already own become a system that notices.
            </p>
            <ul>
              <li>Works with the CCTV, IP cameras, dashcams and bodycams already deployed.</li>
              <li>Surfaces threats and anomalies the moment they appear, not after.</li>
              <li>Routes alerts to people who can act, with the context to act well.</li>
            </ul>

            <h2>Why this matters commercially</h2>
            <p>
              Adding cameras adds cost, cabling and maintenance — and still leaves the interpretation
              problem unsolved. Adding intelligence to existing infrastructure multiplies the value of
              what&apos;s already there. It&apos;s the difference between buying more eyes and finally
              giving the eyes you have a brain.
            </p>

            <h2>The takeaway</h2>
            <p>
              Before the next hardware order, it&apos;s worth asking a sharper question: not{" "}
              <em>&ldquo;how many cameras do we have?&rdquo;</em> but{" "}
              <em>&ldquo;how much of what they see do we actually understand — in time to do something about it?&rdquo;</em>{" "}
              For most organisations, that&apos;s where the real upside is hiding.
            </p>

            <p>
              That&apos;s exactly what <Link href="/visionguard">VisionGuard</Link> is built to do.{" "}
              <Link href="/contact">See it on your own cameras.</Link>
            </p>
          </div>
          <div className="center" style={{ marginTop: 42 }}>
            <Link href="/insights" className="btn btn-ghost">
              <Icon name="arrow-left" /> Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </article>
    </>
  );
}
