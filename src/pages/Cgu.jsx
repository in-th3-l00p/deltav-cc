import LegalLayout from '../components/LegalLayout'
import { Section, P, Ul } from '../components/LegalSection'

export default function Cgu() {
  return (
    <LegalLayout
      title="Conditions Générales d'Utilisation"
      subtitle="Dernière mise à jour : 1er janvier 2025"
    >
      <Section title="1. Objet">
        <P>
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation
          du site web deltav.cc ainsi que l'ensemble des services proposés par Delta V.
        </P>
        <P>
          En accédant à ce site, vous acceptez sans réserve les présentes conditions. Si vous n'acceptez
          pas ces conditions, veuillez ne pas utiliser ce site.
        </P>
      </Section>

      <Section title="2. Description des services">
        <P>
          Delta V propose des services dans les domaines suivants :
        </P>
        <Ul items={[
          'Tech Foundations — développement web, mobile et infrastructure IT',
          'Growth Boost — accompagnement stratégique sur les marchés européens et suisses',
          'Cybersecurity — audits de sécurité, développement GenAI et surveillance des menaces',
          'Research Services — études de marché, analyses on-chain et OSINT, formations',
        ]} />
        <P>
          Les tarifs indiqués sur le site sont donnés à titre indicatif et peuvent être modifiés
          sans préavis. Tout engagement commercial fait l'objet d'un contrat spécifique.
        </P>
      </Section>

      <Section title="3. Accès au site">
        <P>
          Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet.
          Delta V se réserve le droit de restreindre, suspendre ou interrompre l'accès au site
          à tout moment, sans préavis ni indemnité.
        </P>
        <P>
          L'utilisateur est responsable de son matériel informatique, de sa connexion internet
          et de la sécurité de son environnement de navigation.
        </P>
      </Section>

      <Section title="4. Propriété intellectuelle">
        <P>
          L'ensemble des contenus présents sur ce site (textes, graphiques, logos, icônes, images)
          sont la propriété exclusive de Delta V ou de ses partenaires, et sont protégés par
          les lois applicables en matière de propriété intellectuelle.
        </P>
        <P>
          Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
          est strictement interdite sans accord préalable écrit de Delta V.
        </P>
      </Section>

      <Section title="5. Limitation de responsabilité">
        <P>
          Delta V s'efforce de maintenir les informations du site à jour et exactes, mais ne peut
          garantir leur exhaustivité ou leur exactitude à tout moment.
        </P>
        <P>
          Delta V ne saurait être tenu responsable de tout dommage direct ou indirect résultant
          de l'utilisation du site ou de l'impossibilité d'y accéder.
        </P>
      </Section>

      <Section title="6. Liens hypertextes">
        <P>
          Le site peut contenir des liens vers des sites tiers. Delta V n'exerce aucun contrôle
          sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques.
        </P>
      </Section>

      <Section title="7. Droit applicable">
        <P>
          Les présentes CGU sont soumises au droit suisse. Tout litige sera soumis à la compétence
          exclusive des tribunaux compétents en Suisse.
        </P>
      </Section>

      <Section title="8. Contact">
        <P>
          Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse
          suivante : contact@deltav.cc
        </P>
      </Section>
    </LegalLayout>
  )
}
