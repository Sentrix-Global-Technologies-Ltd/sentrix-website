import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import LegalPage from "@/components/ui/LegalPage";
import SkipLink from "@/components/ui/SkipLink";
import { EMAILS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Sentrix Global Technologies",
  description:
    "How Sentrix Global Technologies collects, uses, protects and shares personal information — and the rights you have over your data.",
  alternates: { canonical: "/privacy" },
};

const TOC = [
  { id: "scope", label: "1. Scope" },
  { id: "collect", label: "2. Information we collect" },
  { id: "use", label: "3. How we use it" },
  { id: "bases", label: "4. Legal bases" },
  { id: "share", label: "5. Sharing & disclosure" },
  { id: "retention", label: "6. Data retention" },
  { id: "security", label: "7. Security" },
  { id: "rights", label: "8. Your rights" },
  { id: "transfers", label: "9. International transfers" },
  { id: "children", label: "10. Children" },
  { id: "changes", label: "11. Changes" },
  { id: "contact", label: "12. Contact us" },
];

export default function PrivacyPage() {
  return (
    <>
      <SkipLink />
      <LegalPage crumb="Privacy Policy" title="Privacy Policy" updated="Last updated: 6 June 2026" toc={TOC}>
      <div className="legal-note">
        <Icon name="shield" />
        <div>
          <strong>Template notice.</strong> This policy is a professional starting point and should
          be reviewed and adapted by qualified legal counsel for your jurisdiction (e.g. GDPR, UK
          GDPR, NDPR, CCPA) before publication.
        </div>
      </div>
      <p>
        Sentrix Global Technologies Limited (&ldquo;Sentrix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
        is committed to protecting your privacy. This policy explains what personal information we
        collect, how we use and safeguard it, and the choices and rights you have. Because Sentrix
        builds safety-intelligence technology, responsible handling of data is core to who we are.
      </p>

      <h2 id="scope">1. Scope</h2>
      <p>
        This policy applies to information we process through this website and our communications
        with you. Where Sentrix processes data on behalf of an organisation that uses our products
        (for example, footage analysed by VisionGuard or telematics processed for a fleet operator),
        we act as a <strong>data processor</strong> and that organisation is the controller; their
        privacy notice and our data-processing agreement govern that data.
      </p>

      <h2 id="collect">2. Information we collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> name, organisation, work email, phone number and any details you include when you request a demo or contact us.</li>
        <li><strong>Usage information:</strong> pages visited, approximate location derived from IP, device and browser type, and interaction data.</li>
        <li><strong>Preferences:</strong> your theme choice is stored locally in your browser (see our <Link href="/cookies">Cookie Policy</Link>).</li>
      </ul>

      <h2 id="use">3. How we use it</h2>
      <ul>
        <li>To respond to enquiries and provide demos and information you request.</li>
        <li>To operate, secure, maintain and improve our website and services.</li>
        <li>To send service or marketing communications where you have consented or where permitted by law.</li>
        <li>To comply with legal obligations and protect our rights and users.</li>
      </ul>

      <h2 id="bases">4. Legal bases</h2>
      <p>
        Where applicable law (such as the GDPR) requires a legal basis, we rely on: your{" "}
        <strong>consent</strong>; performance of a <strong>contract</strong>; our{" "}
        <strong>legitimate interests</strong> in operating and improving our business; and compliance
        with <strong>legal obligations</strong>.
      </p>

      <h2 id="share">5. Sharing &amp; disclosure</h2>
      <p>
        We do not sell your personal information. We share it only with: trusted service providers who
        process data on our behalf under contract; professional advisers; authorities where required
        by law; and parties to a corporate transaction, subject to appropriate safeguards.
      </p>

      <h2 id="retention">6. Data retention</h2>
      <p>
        We keep personal information only for as long as necessary to fulfil the purposes described
        here, satisfy legal or contractual requirements, and resolve disputes — after which it is
        securely deleted or anonymised.
      </p>

      <h2 id="security">7. Security</h2>
      <p>
        We apply technical and organisational measures designed to protect personal information
        against unauthorised access, alteration, disclosure or destruction. Learn more on our{" "}
        <Link href="/security">Security &amp; Trust</Link> page. No method of transmission or storage
        is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 id="rights">8. Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete, restrict or
        object to processing of your personal information, to data portability, and to withdraw
        consent. To exercise any right, contact us using the details below. You also have the right to
        lodge a complaint with your data-protection authority.
      </p>

      <h2 id="transfers">9. International transfers</h2>
      <p>
        We may transfer information to countries other than your own. Where we do, we use appropriate
        safeguards such as standard contractual clauses to protect your information.
      </p>

      <h2 id="children">10. Children</h2>
      <p>
        Our website and services are not directed to children under 16, and we do not knowingly
        collect their personal information. Family-safety features are configured and consented to by
        a responsible adult.
      </p>

      <h2 id="changes">11. Changes</h2>
      <p>
        We may update this policy from time to time. We will post the revised version here and update
        the &ldquo;last updated&rdquo; date above. Material changes may be communicated more
        prominently.
      </p>

      <h2 id="contact">12. Contact us</h2>
      <p>
        For any privacy question or request, contact our team at{" "}
        <a href={`mailto:${EMAILS.privacy}`}>{EMAILS.privacy}</a> or via our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
      </LegalPage>
    </>
  );
}
