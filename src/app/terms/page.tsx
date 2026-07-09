import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import LegalPage from "@/components/ui/LegalPage";
import SkipLink from "@/components/ui/SkipLink";
import { EMAILS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Sentrix Global Technologies",
  description: "The terms that govern your use of the Sentrix website and services.",
  alternates: { canonical: "/terms" },
};

const TOC = [
  { id: "acceptance", label: "1. Acceptance" },
  { id: "services", label: "2. The services" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "use", label: "4. Acceptable use" },
  { id: "accounts", label: "5. Accounts" },
  { id: "ip", label: "6. Intellectual property" },
  { id: "third", label: "7. Third-party content" },
  { id: "disclaimer", label: "8. Disclaimers" },
  { id: "liability", label: "9. Limitation of liability" },
  { id: "indemnity", label: "10. Indemnification" },
  { id: "termination", label: "11. Termination" },
  { id: "law", label: "12. Governing law" },
  { id: "contact", label: "13. Contact" },
];

export default function TermsPage() {
  return (
    <>
      <SkipLink />
      <LegalPage crumb="Terms of Service" title="Terms of Service" updated="Last updated: 6 June 2026" toc={TOC}>
      <div className="legal-note">
        <Icon name="shield" />
        <div>
          <strong>Template notice.</strong> These terms are a starting point and should be reviewed
          and adapted by qualified legal counsel before publication. Enterprise deployments are
          governed by a separate Master Services Agreement.
        </div>
      </div>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website and
        informational services provided by Sentrix Global Technologies Limited (&ldquo;Sentrix&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing this website you agree to these Terms.
      </p>

      <h2 id="acceptance">1. Acceptance of terms</h2>
      <p>If you do not agree with these Terms, please do not use the website. We may update these Terms from time to time; continued use after changes constitutes acceptance.</p>

      <h2 id="services">2. The services</h2>
      <p>This website provides information about Sentrix products and lets you request a demonstration or contact us. Access to Sentrix software products (SentrixGo, VisionGuard, the Security Operations Centre and others) is provided under a separate commercial agreement.</p>

      <h2 id="eligibility">3. Eligibility</h2>
      <p>You must be at least 18 years old, or have the consent of a parent or guardian, and have the authority to enter into these Terms on behalf of yourself or the organisation you represent.</p>

      <h2 id="use">4. Acceptable use</h2>
      <p>You agree not to misuse the website. You will not attempt to gain unauthorised access, disrupt the service, scrape or harvest data unlawfully, introduce malicious code, or use the website for any unlawful or harmful purpose.</p>

      <h2 id="accounts">5. Accounts &amp; communications</h2>
      <p>If you submit a request, you are responsible for providing accurate information. You consent to receiving service-related communications relevant to your enquiry.</p>

      <h2 id="ip">6. Intellectual property</h2>
      <p>The website, its content, design, logos and the &ldquo;Sentrix&rdquo;, &ldquo;SentrixGo&rdquo; and &ldquo;VisionGuard&rdquo; names are owned by or licensed to Sentrix and protected by intellectual-property laws. You may not copy, modify or distribute them without our written permission.</p>

      <h2 id="third">7. Third-party content</h2>
      <p>The website may reference or link to third-party resources. We are not responsible for the content, policies or practices of third parties.</p>

      <h2 id="disclaimer">8. Disclaimers</h2>
      <p>The website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, to the maximum extent permitted by law. Informational content does not constitute professional security, legal or safety advice.</p>

      <h2 id="liability">9. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, Sentrix will not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of the website.</p>

      <h2 id="indemnity">10. Indemnification</h2>
      <p>You agree to indemnify and hold Sentrix harmless from claims arising out of your misuse of the website or violation of these Terms.</p>

      <h2 id="termination">11. Termination</h2>
      <p>We may suspend or terminate access to the website at any time, without notice, for conduct that we believe violates these Terms or is harmful to others.</p>

      <h2 id="law">12. Governing law</h2>
      <p>These Terms are governed by the laws of the jurisdiction in which Sentrix Global Technologies Limited is established, without regard to conflict-of-law principles. The specific jurisdiction should be confirmed by counsel.</p>

      <h2 id="contact">13. Contact</h2>
      <p>Questions about these Terms can be sent to <a href={`mailto:${EMAILS.legal}`}>{EMAILS.legal}</a> or via our <Link href="/contact">contact page</Link>.</p>
      </LegalPage>
    </>
  );
}
