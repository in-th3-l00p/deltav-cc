import LegalLayout from '../components/LegalLayout'
import { Section, P, Ul } from '../components/LegalSection'

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Last updated: January 1, 2025"
    >
      <Section title="1. Who we are">
        <P>
          Delta V operates deltav.cc and is committed to protecting your personal data
          in accordance with the EU General Data Protection Regulation (GDPR) and the
          Swiss Federal Act on Data Protection (nFADP).
        </P>
        <P>
          Data controller: Delta V — contact@deltav.cc
        </P>
      </Section>

      <Section title="2. Data we collect">
        <P>
          We collect only the minimum data necessary to operate our services. This may include:
        </P>
        <Ul items={[
          'Contact information you provide voluntarily (email address, name)',
          'Technical data such as IP address and browser type, collected automatically when you visit the site',
          'Communication data when you contact us via email or Signal',
        ]} />
        <P>
          We do not use tracking cookies, advertising pixels, or third-party analytics tools.
        </P>
      </Section>

      <Section title="3. How we use your data">
        <P>
          Data collected is used solely for the following purposes:
        </P>
        <Ul items={[
          'Responding to your enquiries and delivering contracted services',
          'Ensuring the security and proper functioning of the site',
          'Complying with legal obligations',
        ]} />
        <P>
          We do not sell, rent, or share your personal data with third parties for commercial purposes.
        </P>
      </Section>

      <Section title="4. Legal basis for processing">
        <P>
          Processing is based on one or more of the following legal grounds:
        </P>
        <Ul items={[
          'Your explicit consent',
          'Performance of a contract to which you are a party',
          'Compliance with a legal obligation',
          'Our legitimate interests in operating a secure and functional website',
        ]} />
      </Section>

      <Section title="5. Data retention">
        <P>
          We retain personal data only for as long as necessary for the purposes for which
          it was collected, or as required by applicable law. Contact data is deleted within
          3 years of the last interaction unless a contractual relationship requires otherwise.
        </P>
      </Section>

      <Section title="6. Your rights">
        <P>
          Under the GDPR and nFADP, you have the following rights regarding your personal data:
        </P>
        <Ul items={[
          'Right of access — obtain a copy of the data we hold about you',
          'Right of rectification — request correction of inaccurate data',
          'Right of erasure — request deletion of your data',
          'Right to restriction of processing',
          'Right to data portability',
          'Right to object to processing',
        ]} />
        <P>
          To exercise any of these rights, contact us at contact@deltav.cc. We will respond
          within 30 days.
        </P>
      </Section>

      <Section title="7. Security">
        <P>
          We take the security of your data seriously and implement appropriate technical and
          organisational measures to protect it against unauthorised access, alteration,
          disclosure or destruction.
        </P>
        <P>
          For sensitive communications, we recommend using Signal (@DeltaV.01), which provides
          end-to-end encryption by default.
        </P>
      </Section>

      <Section title="8. Third-party services">
        <P>
          This site embeds a generative animation served from a third-party domain
          (joannezichenpeng.github.io). No personal data is transmitted to this service.
          It is loaded in a sandboxed iframe with no interaction or tracking capability.
        </P>
      </Section>

      <Section title="9. Changes to this policy">
        <P>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated date. We encourage you to review this policy periodically.
        </P>
      </Section>

      <Section title="10. Contact">
        <P>
          For any questions or concerns about this Privacy Policy or how we handle your data,
          please reach out at contact@deltav.cc or via Signal at @DeltaV.01.
        </P>
      </Section>
    </LegalLayout>
  )
}
