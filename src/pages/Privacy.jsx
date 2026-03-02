import LegalLayout from '../components/LegalLayout'
import { Section, P, Ul } from '../components/LegalSection'

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Last Updated: March 30, 2025"
    >
      <Section title="1. Our Commitment">
        <P>
          Delta V SRL ("Delta V", "we", "us", or "our") goes beyond legal minimums to protect
          your privacy. While compliant with the General Data Protection Regulation (GDPR) and
          Romanian Law No. 506/2004, we adopt stricter standards to ensure your data is handled
          with the utmost care, transparency, and respect. This Privacy Policy explains how we
          collect, use, and safeguard your personal data when you use deltav.com (the "Site") or
          our services.
        </P>
      </Section>

      <Section title="2. Data Controller">
        <P>
          Delta V SRL, registered with the Trade Registry under number [51301377], located at
          [Bucharest], Romania, is the data controller. Contact: contact@deltav.cc or Signal
          @DeltaV.01.
        </P>
      </Section>

      <Section title="3. Data We Collect">
        <P>We collect only what's strictly necessary:</P>
        <Ul items={[
          'Personal Data: Name, email address, phone number (if provided), and message content submitted via our contact form or direct communication.',
          'Usage Data: Minimal analytics (e.g., anonymized IP address, page visits) via privacy-first tools; no invasive tracking.',
          'Third-Party Data: None if you contact us through secure channels (e.g., Signal ID). We might use various proprietary services and protocols to work with you and you consent to their own terms of policy and we will do our best to inform you about the associated risks (Cloudflare, Google, HuggingFace, GitHub, Microsoft, MetaAI, Groq, Discord).',
        ]} />
        <P>
          We do not collect sensitive data (e.g., biometric, health) unless explicitly required
          for a service and consented to by you.
        </P>
      </Section>

      <Section title="4. How We Use Your Data">
        <P>We process data solely for:</P>
        <Ul items={[
          'Responding to your inquiries and delivering Services (e.g., IT, AI, crypto consulting). All data or knowledge (password, infrastructure plans) related to previous collaboration shall be deleted as soon as legally possible.',
          'Improving the Site with anonymized insights.',
          'Legal compliance (e.g., tax obligations).',
        ]} />
        <P>
          Legal bases include explicit consent (opt-in only), contract necessity, and limited
          legitimate interests (e.g., security). We avoid broad or vague processing purposes.
        </P>
      </Section>

      <Section title="5. Cookies">
        <P>
          We use only essential cookies for Site functionality (e.g., session management). No
          advertising or third-party tracking cookies are deployed. You can disable cookies via
          browser settings without losing core functionality.
        </P>
      </Section>

      <Section title="6. Data Sharing">
        <P>We share data only when unavoidable:</P>
        <Ul items={[
          'With vetted service providers under enhanced data protection agreements exceeding GDPR requirements.',
          'With authorities, only under a verified legal mandate.',
        ]} />
        <P>
          We never sell, rent, or monetize your data. Third-party recipients are contractually
          bound to delete data after use.
        </P>
      </Section>

      <Section title="7. Data Retention and Deletion">
        <P>We delete your data faster than required by law:</P>
        <Ul items={[
          'Contact Data: Personal data from inquiries (e.g., name, email, message) is deleted within 90 days of resolving your request, unless you explicitly request otherwise or a contract requires retention.',
          'Client Records: Data tied to Services (e.g., contracts, invoices) is retained for 1 year after the service ends, unless tax or legal obligations mandate longer (max 5 years under Romanian law), then deleted promptly.',
          'Usage Data: Anonymized analytics are kept for 30 days, then purged.',
        ]} />
        <P>
          You can request immediate deletion at any time (see Section 8), and we'll comply unless
          legally prevented. We proactively notify you before deletion deadlines to confirm your
          preferences.
        </P>
      </Section>

      <Section title="8. Your Enhanced Rights">
        <P>Beyond GDPR, we offer:</P>
        <Ul items={[
          'Access: Full data reports in human-readable format within 15 days (faster than GDPR\'s 30 days).',
          'Rectification/Erasure: Immediate updates or deletion upon request, no questions asked, unless legally required to retain.',
          'Restriction/Objection: Stop processing instantly upon request, beyond GDPR\'s scope.',
          'Portability: Data in open formats within 15 days.',
          'Consent Withdrawal: Revoke consent anytime with one click or message; no penalties.',
          'Proactive Disclosure: We\'ll notify you of any data use changes before they occur.',
          'Complaints: File with us directly or the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP).',
        ]} />
        <P>Exercise rights at contact@deltav.cc or Signal @DeltaV.01.</P>
      </Section>

      <Section title="9. Security">
        <P>We exceed GDPR with:</P>
        <Ul items={[
          'End-to-end encryption for all communications (e.g., Signal integration).',
          'Regular third-party security audits, results available upon request.',
          'Zero-knowledge principles where possible (e.g., we can\'t access your crypto wallet data).',
        ]} />
        <P>Despite this, no system is infallible; use at your own risk.</P>
      </Section>

      <Section title="10. International Transfers">
        <P>
          Data stays in the EEA unless you request otherwise. If transferred (e.g., to US
          providers like Hugging Face), we use enhanced safeguards (e.g., Standard Contractual
          Clauses plus encryption), exceeding GDPR baselines.
        </P>
      </Section>

      <Section title="11. Third-Party Links">
        <P>
          Links to third-party sites (e.g., Signal, Cloudflare) are not our responsibility. We
          vet them for privacy but can't control their practices.
        </P>
      </Section>

      <Section title="12. Updates">
        <P>
          We'll notify you of changes 30 days in advance via email or Site banner. Continued use
          post-update implies acceptance.
        </P>
      </Section>

      <Section title="13. Contact Us">
        <P>
          For privacy concerns, reach us at contact@deltav.cc or Signal @DeltaV.01.
        </P>
      </Section>
    </LegalLayout>
  )
}
