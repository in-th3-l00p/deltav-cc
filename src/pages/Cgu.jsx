import LegalLayout from '../components/LegalLayout'
import { Section, P, Ul } from '../components/LegalSection'

export default function Cgu() {
  return (
    <LegalLayout
      title="Terms of Use"
      subtitle="Last Updated: March 30, 2025"
    >
      <Section title="1. Acceptance of Terms">
        <P>
          By accessing or using the website deltav.com (the "Site") or any services provided by
          Delta V SRL ("Delta V", "we", "us", or "our"), you agree to be bound by these Terms of
          Use ("Terms"). If you do not agree, you must not use the Site or our services. These
          Terms apply to all users, including visitors, clients, and partners.
        </P>
      </Section>

      <Section title="2. Company Information">
        <P>
          Delta V SRL is a Romanian company registered with the Trade Registry under number
          [51301377], with its registered office at [Bucuresti Sector 1], Romania.
          Contact: contact@deltav.cc.
        </P>
      </Section>

      <Section title="3. Services">
        <P>
          Delta V provides IT solutions, AI security, cryptocurrency services, research, and
          related consulting ("Services"). Service details, pricing, and availability are subject
          to change without notice. Specific terms may apply to individual contracts, which take
          precedence over these Terms where applicable.
        </P>
      </Section>

      <Section title="4. User Obligations">
        <P>You agree to:</P>
        <Ul items={[
          'Use the Site and Services lawfully and in accordance with these Terms.',
          'Not misuse, disrupt, or attempt to gain unauthorized access to our systems.',
          'Provide accurate information when engaging with us.',
          'Be solely responsible for any content you submit (e.g., via forms or emails).',
        ]} />
        <P>
          Failure to comply may result in suspension or termination of access without refund or
          liability on our part.
        </P>
      </Section>

      <Section title="5. Intellectual Property">
        <P>
          <strong>MIT License:</strong> Permission is hereby granted, free of charge, to any
          person obtaining a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including without limitation
          the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, subject to the following conditions: The above copyright notice
          and this permission notice shall be included in all copies or substantial portions of
          the Software. The Software is provided "as is," without warranty of any kind.
        </P>
        <P>
          <strong>Third-Party Content:</strong> Certain assets (e.g., images, iframes) may be
          owned by third parties and are not covered by this license. Their use is subject to
          their respective owners' terms. Delta V is not responsible for your use of third-party
          content.
        </P>
      </Section>

      <Section title="6. Limitation of Liability">
        <P>To the fullest extent permitted by Romanian law:</P>
        <Ul items={[
          'The Site and Services are provided "as is" without warranties of any kind, express or implied, including fitness for a particular purpose.',
          'Delta V shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Site or Services, including but not limited to loss of data, profits, or business opportunities.',
          'Our total liability for any claim shall not exceed the amount paid by you for the specific Service giving rise to the claim.',
        ]} />
      </Section>

      <Section title="7. Third-Party Content and Links">
        <P>
          The Site may include links to third-party websites (e.g., iframe content) or services
          not controlled by Delta V. We are not responsible for their availability, accuracy, or
          compliance with laws. Use them at your own risk.
        </P>
      </Section>

      <Section title="8. Termination">
        <P>
          We reserve the right to terminate or suspend your access to the Site or Services at our
          sole discretion, without notice, for any reason, including breach of these Terms,
          without liability.
        </P>
      </Section>

      <Section title="9. Force Majeure">
        <P>
          Delta V shall not be liable for any delays, failures, or interruptions in the
          performance of the Site or Services due to events beyond our reasonable control ("Force
          Majeure Events"), including but not limited to:
        </P>
        <Ul items={[
          'Natural disasters (e.g., earthquakes, floods).',
          'Governmental actions, wars, or civil unrest.',
          'Cyberattacks, hacking, or security breaches affecting our systems or third-party platforms.',
          'Failures, vulnerabilities, or exploits in third-party digital asset platforms or cryptocurrency protocols (e.g., Safe Wallet, Rabby Wallet, MetaMask, or other blockchain networks) that may result in loss of funds, data, or functionality.',
          'Disruptions or limitations in AI operation platforms (e.g., Hugging Face, Replicate) including model failures, API downtimes, or computational errors.',
          'Service outages or technical failures in infrastructure providers (e.g., Cloudflare), including CDN downtimes, DNS issues, or DDoS attacks.',
        ]} />
        <P>
          In the event of a Force Majeure Event affecting digital asset or AI operations, Delta V
          is expressly relieved of liability for any resulting losses, including but not limited
          to loss of cryptocurrency, tokens, or digital assets; inaccuracies or failures in
          AI-generated outputs; or interruptions in service availability. Users acknowledge the
          inherent risks of using decentralized and third-party technologies and assume full
          responsibility for such risks.
        </P>
      </Section>

      <Section title="10. Governing Law and Jurisdiction">
        <P>
          These Terms are governed by the laws of Romania. Any disputes shall be resolved
          exclusively in the courts of Bucharest, Romania. If you are an EU consumer, you may
          also have rights to pursue claims in your home jurisdiction under EU law.
        </P>
      </Section>

      <Section title="11. Amendments">
        <P>
          We may update these Terms at any time by posting the revised version on the Site.
          Continued use after changes constitutes acceptance. Check this page periodically.
        </P>
      </Section>

      <Section title="12. Contact Us">
        <P>
          For questions or complaints, contact us at contact@deltav.cc or via Signal at
          @DeltaV.01.
        </P>
      </Section>
    </LegalLayout>
  )
}
