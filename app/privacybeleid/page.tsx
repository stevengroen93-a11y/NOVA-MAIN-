import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Privacybeleid — Nova Automations",
  description: "Lees hoe Nova Automations omgaat met jouw persoonsgegevens.",
};

export default function Privacybeleid() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-sm">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-[#0a0a0a]">
              Nova <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Automations</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
            ← Terug naar home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold text-[#0a0a0a] mb-3">Privacybeleid</h1>
          <p className="text-gray-400 text-sm">Laatst bijgewerkt: mei 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">1. Wie zijn wij?</h2>
            <p>
              Nova Automations is een onderneming gespecialiseerd in AI-automatisering en digitale oplossingen voor het MKB.
              Wij zijn gevestigd op Poortland 66, Amsterdam, Nederland. Voor vragen over dit privacybeleid kunt u contact
              met ons opnemen via <a href="mailto:info@nova-automations.com" className="text-orange-600 hover:underline">info@nova-automations.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">2. Welke persoonsgegevens verzamelen wij?</h2>
            <p>Wij verwerken persoonsgegevens die u zelf aan ons verstrekt, onder andere via het contactformulier op onze website. Het gaat om de volgende gegevens:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Bedrijfsnaam</li>
              <li>Inhoud van uw bericht</li>
              <li>Geselecteerde dienst</li>
            </ul>
            <p className="mt-3">
              Wij verzamelen geen bijzondere persoonsgegevens zoals gezondheids- of BSN-informatie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">3. Waarvoor gebruiken wij uw gegevens?</h2>
            <p>Wij gebruiken uw persoonsgegevens uitsluitend voor de volgende doeleinden:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Het beantwoorden van uw vragen en verzoeken via het contactformulier</li>
              <li>Het plannen en uitvoeren van een vrijblijvend intakegesprek</li>
              <li>Het uitbrengen van een offerte op maat</li>
              <li>Het uitvoeren van een overeenkomst die u met ons heeft gesloten</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">4. Grondslagen voor verwerking</h2>
            <p>Wij verwerken uw persoonsgegevens op basis van de volgende wettelijke grondslagen (art. 6 AVG):</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Uitvoering van een overeenkomst</strong> — wanneer u een opdracht of dienst bij ons afneemt,
                verwerken wij uw gegevens om die overeenkomst correct uit te voeren.
              </li>
              <li>
                <strong>Toestemming</strong> — wanneer u het contactformulier invult, geeft u actief toestemming voor
                het verwerken van uw gegevens voor het beantwoorden van uw verzoek. U kunt deze toestemming te allen
                tijde intrekken.
              </li>
              <li>
                <strong>Gerechtvaardigd belang (art. 6 lid 1 sub f AVG)</strong> — in bepaalde gevallen verwerken wij
                uw gegevens op basis van ons gerechtvaardigd belang. Wij doen dit uitsluitend wanneer uw belangen of
                grondrechten niet zwaarder wegen dan ons belang. Concreet gaat het om:
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Het opvolgen van eerder contact met (potentiële) zakelijke klanten in het kader van onze dienstverlening</li>
                  <li>Het versturen van relevante zakelijke informatie aan bestaande relaties</li>
                  <li>Het verbeteren van onze dienstverlening op basis van gebruikspatronen van de website</li>
                </ul>
                <p className="mt-2 text-sm">
                  U heeft te allen tijde het recht bezwaar te maken tegen verwerking op basis van gerechtvaardigd belang.
                  Neem hiervoor contact op via{" "}
                  <a href="mailto:info@nova-automations.com" className="text-orange-600 hover:underline">info@nova-automations.com</a>.
                  Wij zullen de verwerking dan staken, tenzij wij dwingende gerechtvaardigde gronden kunnen aanvoeren.
                </p>
              </li>
              <li>
                <strong>Wettelijke verplichting</strong> — voor zover wij wettelijk verplicht zijn gegevens te bewaren,
                bijvoorbeeld op grond van belastingwetgeving.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">5. Bewaartermijn</h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld.
              Gegevens van (potentiële) klanten bewaren wij maximaal 2 jaar na het laatste contact, tenzij een wettelijke
              bewaarplicht een langere termijn vereist (bijv. 7 jaar voor financiële administratie).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">6. Delen met derden</h2>
            <p>
              Wij verkopen uw gegevens nooit aan derden. Wij kunnen uw gegevens delen met zorgvuldig geselecteerde
              verwerkers die namens ons diensten verlenen, zoals e-mailproviders of projectmanagementsoftware. Met deze
              partijen sluiten wij verwerkersovereenkomsten af om een passend beveiligingsniveau te waarborgen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">7. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen
              verlies, ongeautoriseerde toegang of misbruik. Denk hierbij aan versleutelde verbindingen (HTTPS),
              toegangsbeveiliging en regelmatige controles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">8. Cookies en de Telecommunicatiewet</h2>
            <p>
              Wij houden ons aan de cookieregels zoals vastgelegd in de <strong>Telecommunicatiewet (Tw)</strong>,
              die de Nederlandse implementatie vormt van de Europese ePrivacy-richtlijn. Op grond hiervan mogen wij
              alleen cookies plaatsen na uw toestemming, tenzij de cookies strikt noodzakelijk zijn voor de gevraagde dienst.
            </p>
            <p className="mt-3"><strong>Wij maken gebruik van de volgende categorieën cookies:</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Functionele cookies (geen toestemming vereist)</strong> — strikt noodzakelijk voor het
                functioneren van de website, zoals het onthouden van formulierinvoer en sessiedata. Deze vallen
                onder de uitzondering van art. 11.7a lid 3 Tw.
              </li>
              <li>
                <strong>Analytische cookies (geanonimiseerd)</strong> — indien wij analytics gebruiken, doen wij
                dit uitsluitend geanonimiseerd (zonder koppeling aan een persoon), waarvoor op grond van de
                Telecommunicatiewet geen toestemming vereist is.
              </li>
              <li>
                <strong>Marketing- en trackingcookies</strong> — wij plaatsen geen marketing- of trackingcookies
                zonder uw voorafgaande, vrije en geïnformeerde toestemming.
              </li>
            </ul>
            <p className="mt-3">
              U kunt uw cookievoorkeuren te allen tijde aanpassen via de browserinstellingen. Houd er rekening mee
              dat het uitschakelen van functionele cookies de werking van de website kan beïnvloeden.
            </p>
            <p className="mt-3">
              <strong>E-mailcommunicatie:</strong> op grond van de Telecommunicatiewet is het verboden om zonder
              toestemming commerciële e-mail te sturen aan particulieren. Wij sturen uitsluitend commerciële berichten
              aan personen die hier expliciet toestemming voor hebben gegeven, of aan bestaande zakelijke relaties
              over vergelijkbare diensten (opt-out recht altijd aanwezig).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">9. Uw rechten</h2>
            <p>Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Inzage</strong> — u kunt opvragen welke gegevens wij van u hebben</li>
              <li><strong>Rectificatie</strong> — u kunt onjuiste gegevens laten corrigeren</li>
              <li><strong>Verwijdering</strong> — u kunt verzoeken uw gegevens te verwijderen</li>
              <li><strong>Beperking</strong> — u kunt de verwerking laten beperken</li>
              <li><strong>Bezwaar</strong> — u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang</li>
              <li><strong>Overdraagbaarheid</strong> — u kunt uw gegevens in een gangbaar formaat opvragen</li>
            </ul>
            <p className="mt-3">
              Om een beroep op uw rechten te doen, kunt u contact opnemen via{" "}
              <a href="mailto:info@nova-automations.com" className="text-orange-600 hover:underline">info@nova-automations.com</a>.
              Wij reageren binnen 30 dagen. U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">10. Wijzigingen</h2>
            <p>
              Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest actuele versie is altijd te vinden op
              onze website. Wij raden u aan dit beleid periodiek te raadplegen.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Nova Automations — <Link href="/algemene-voorwaarden" className="hover:text-orange-600 transition-colors">Algemene Voorwaarden</Link></p>
      </footer>
    </div>
  );
}
