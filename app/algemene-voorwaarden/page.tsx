import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Algemene Voorwaarden — Nova Automations",
  description: "De algemene voorwaarden van Nova Automations.",
};

export default function AlgemeneVoorwaarden() {
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
          <h1 className="text-4xl font-extrabold text-[#0a0a0a] mb-3">Algemene Voorwaarden</h1>
          <p className="text-gray-400 text-sm">Laatst bijgewerkt: mei 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">1. Definities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Nova Automations:</strong> de opdrachtnemer, gevestigd te Poortland 66, Amsterdam.</li>
              <li><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met Nova Automations.</li>
              <li><strong>Diensten:</strong> alle werkzaamheden die Nova Automations verricht, waaronder het bouwen van AI-systemen, automatiseringen, chatbots en aanverwante dienstverlening.</li>
              <li><strong>Overeenkomst:</strong> elke schriftelijke of elektronische afspraak tussen Nova Automations en de opdrachtgever.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen en overeenkomsten van Nova Automations.
              Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen. De toepasselijkheid van eventuele inkoop- of
              andere voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">3. Aanbod en overeenkomst</h2>
            <p>
              Alle offertes en aanbiedingen van Nova Automations zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders
              aangegeven. Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte schriftelijk of
              elektronisch accepteert, of zodra Nova Automations met de uitvoering van de opdracht begint.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">4. Uitvoering van de opdracht</h2>
            <p>
              Nova Automations spant zich in om de diensten naar beste inzicht en vermogen uit te voeren. Het betreft een
              inspanningsverplichting, tenzij uitdrukkelijk schriftelijk een resultaatsverplichting is overeengekomen.
              De opdrachtgever draagt zorg voor tijdige aanlevering van alle benodigde informatie en medewerking.
            </p>
            <p className="mt-3">
              Indien de opdrachtgever niet tijdig de benodigde informatie verstrekt, heeft Nova Automations het recht de
              uitvoering van de opdracht op te schorten en/of de hieruit voortvloeiende extra kosten aan de opdrachtgever
              door te berekenen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">5. Tarieven en betaling</h2>
            <p>
              Alle tarieven zijn exclusief BTW, tenzij anders vermeld. Facturen dienen te worden voldaan binnen 14 dagen
              na factuurdatum, tenzij anders overeengekomen. Bij overschrijding van de betalingstermijn is de
              opdrachtgever van rechtswege in verzuim en is Nova Automations gerechtigd wettelijke (handels)rente in
              rekening te brengen.
            </p>
            <p className="mt-3">
              Nova Automations behoudt zich het recht voor een aanbetaling te vragen van maximaal 50% van het
              overeengekomen bedrag alvorens met de werkzaamheden te starten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">6. Intellectueel eigendom</h2>
            <p>
              Alle door Nova Automations ontwikkelde software, systemen, ontwerpen en overige materialen zijn en blijven
              eigendom van Nova Automations, tenzij schriftelijk anders overeengekomen. Na volledige betaling ontvangt
              de opdrachtgever een gebruiksrecht op de opgeleverde producten voor het overeengekomen doel.
            </p>
            <p className="mt-3">
              De opdrachtgever staat er voor in dat door hem aangeleverde materialen geen inbreuk maken op rechten van derden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">7. Geheimhouding</h2>
            <p>
              Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader
              van de overeenkomst van elkaar ontvangen. Deze verplichting geldt ook na beëindiging van de overeenkomst.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">8. Aansprakelijkheid</h2>
            <p>
              De aansprakelijkheid van Nova Automations is beperkt tot het bedrag dat in het desbetreffende geval door
              de beroepsaansprakelijkheidsverzekering wordt uitbetaald, vermeerderd met het eigen risico. Bij ontbreken
              van verzekeringsdekking is de aansprakelijkheid beperkt tot het factuurbedrag van de betreffende opdracht,
              met een maximum van € 5.000.
            </p>
            <p className="mt-3">
              Nova Automations is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of schade door
              het gebruik van AI-gegenereerde uitkomsten. De opdrachtgever is zelf verantwoordelijk voor het controleren
              en toepassen van door AI gegenereerde resultaten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">9. Opzegging en ontbinding</h2>
            <p>
              Beide partijen kunnen de overeenkomst tussentijds beëindigen met inachtneming van een opzegtermijn van
              30 dagen. Reeds verrichte werkzaamheden worden naar rato in rekening gebracht. Bij grove nalatigheid of
              wanprestatie van de opdrachtgever heeft Nova Automations het recht de overeenkomst met onmiddellijke
              ingang te ontbinden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">10. Toepasselijk recht en geschillen</h2>
            <p>
              Op alle overeenkomsten met Nova Automations is Nederlands recht van toepassing. Geschillen worden in
              eerste instantie via overleg opgelost. Indien partijen er niet uitkomen, worden geschillen voorgelegd
              aan de bevoegde rechter in het arrondissement Amsterdam.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0a0a0a] mb-3">11. Contact</h2>
            <p>
              Voor vragen over deze algemene voorwaarden kunt u contact opnemen via{" "}
              <a href="mailto:info@nova-automations.com" className="text-orange-600 hover:underline">info@nova-automations.com</a>{" "}
              of schriftelijk aan Poortland 66, Amsterdam.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Nova Automations — <Link href="/privacybeleid" className="hover:text-orange-600 transition-colors">Privacybeleid</Link></p>
      </footer>
    </div>
  );
}
