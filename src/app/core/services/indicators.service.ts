import { Injectable } from '@angular/core'

class Indicator {
  public text: string
  public SDGs: Set<number>

  constructor(text: string, SDGs: Array<number>) {
    this.text = text
    this.SDGs = new Set<number>([...SDGs])
  }
}

const INDICATORS: Indicator[] = [
  new Indicator(
    'Prozentuale Senkung des Anteils der Zielgruppe, der materiell depriviert ist seit Projektbeginn.',
    [1]
  ),
  new Indicator(
    'Prozentuale Erhöhung des Anteils des ökologischen Landbaus an der landwirtschaftlich genutzten Fläche seit Projektbeginn',
    [2]
  ),
  new Indicator(
    'Prozentuale Senkung Adipositasquote von Kindern und Jugendlichen seit Projektbeginn',
    [3]
  ),
  new Indicator(
    'Prozentuale Senkung Adipositasquote von Erwachsenen seit Projektbeginn',
    [3]
  ),
  new Indicator(
    'Prozentuale Reduktion der Luftschadstoffemissionen des Jahres xx auf (ungewichtetes Mittel der fünf Schadstoffe) seit Projektbeginn',
    [3]
  ),
  new Indicator(
    'Prozentuale Verringerung des Anteils früher Schulabgängerinnen und Schulabgängerauf seit Projektbeginn',
    [4]
  ),
  new Indicator(
    'Prozentualer Steigerung des Anteils von Frauen in Führungspositionen in der Wirtschaft sowie im öffentlichen Dienst seit Projektbeginn',
    [5]
  ),
  new Indicator(
    'Prozentuale Steigerung der beruflichen Qualifizierung von Frauen und Mädchen seit Projektbeginn.',
    [5]
  ),
  new Indicator(
    'Anzahl der Menschen, die seit Projektbeginn einen neuen oder hochwertigeren Zugang zu Trinkwasser- und Sanitärversorgung erhalten',
    [6]
  ),
  new Indicator(
    'Prozentuale/r Steigerung der Endenergieproduktivität / Reduktion Primärenergieverbrauch pro Jahr im Zeitraum von xx − xx',
    [7]
  ),
  new Indicator(
    'Prozentualer Anstieg auf des Anteil erneuerbarer Energien am Brutto-Endenergieverbrauch seit Projektbeginn',
    [7]
  ),
  new Indicator(
    'Prozentualer Anteil beobachteter Ausgaben für Forschung und Entwicklung im Zeitraum xx bis xx',
    [9]
  ),
  new Indicator(
    'Entwicklung Gini-Koeffizient des Einkommens nach Sozialtransfers bei beobachteter Gruppe seit Projektbeginn',
    [10]
  ),
  new Indicator(
    'Prozentuale Verringerung des einwohnerbezogenen Freiflächenverlustes bis xx',
    [11]
  ),
  new Indicator(
    'Veränderung des erreichter Indexwert für Artenvielfalt und Landschaftsqualität seit Projektbeginn',
    [15]
  ),
  new Indicator(
    'Prozentuale Reduzierung der Eutrophierung der Ökosysteme seit Projektbeginn',
    [15]
  ),
  new Indicator(
    'Prozentuale Steigerung der Anzahl der Studierenden und Forschenden aus Entwicklungsländern sowie LDCs pro Jahr seit Projektbeginn',
    [17]
  ),
  new Indicator(
    'Veränderung am Durchschnittseinkommen der Kleinproduzenten von Nahrungsmitteln, nach Geschlecht und indigenem Status seit Projektbeginn',
    [2]
  ),
  new Indicator(
    'Teilnahmequote von Jugendlichen und Erwachsenen an formaler und nicht-formaler Bildung und Ausbildung in den letzten 12 Monaten, nach Geschlecht',
    [4]
  ),
  new Indicator(
    'Paritätsindizes (weiblich/männlich, ländlich/städtisch, unterstes/oberstes Wohlstandsquintil und andere wie Behindertenstatus, indigene Völker und Konfliktbetroffene) hinsichtlich gleichberechtigtem Zugang zu allen Ebenen der allgemeinen und beruflichen Bildung',
    [4]
  ),
  new Indicator(
    'Anzahl Stipendien nach Sektor und Studienrichtung seit Projektbeginn',
    [4]
  ),
  new Indicator(
    'Prozentuale Verbesserung der Wassernutzungseffizienz seit Projektbeginn',
    [6]
  ),
  new Indicator(
    'Prozentuale Reduizierung des materiellen Fußabdrucks pro Kopf und materiellen Fußabdrucks pro BIP seit Projektbeginn',
    [8]
  ),
  new Indicator(
    'Veränderung des durchschnittlichen Stundenverdiensts von Arbeitnehmern, nach Geschlecht, Alter, Beruf und Menschen mit Behinderungen',
    [8]
  ),
  new Indicator(
    'Veränderung am Anteil der im verarbeitenden Gewerbe Beschäftigten an der Gesamtbeschäftigung',
    [9]
  ),
  new Indicator(
    'Veränderung am Anteil der mit einem Mobilfunknetz versorgten Bevölkerung seit Projektbeginn',
    [9]
  ),
  new Indicator(
    'Prozentuale Senkung des Anteils der Stadtbevölkerung, der in Slums, informellen Siedlungen oder unzureichenden Wohnungen lebt seit Projektbeginn',
    [11]
  ),
  new Indicator(
    'Veränderung der Pro-Kopf-Gesamtausgaben für die Erhaltung, den Schutz und die Bewahrung des gesamten Kultur- und Naturerbes, aufgeschlüsselt nach Finanzierungsquellen (öffentlich, privat), Art des Erbes (Kultur-, Naturerbe) und Regierungsebene (national, regional und lokal/kommunal) seit Projektbeginn',
    [11]
  ),
  new Indicator(
    'Anteil der in kontrollierten Anlagen gesammelten und entsorgten festen Siedlungsabfälle am gesamten Siedlungsabfallaufkommen, nach Städten seit Projektbeginn',
    [11]
  ),
  new Indicator(
    'Veränderung der nationale Recyclingquote, Tonnen an recyceltem Material seit Projektbeginn',
    [12]
  ),
  new Indicator(
    'Veränderung am Ausmaß, in dem (i) Bildung für globale Bürgerschaft und (ii) Bildung für nachhaltige Entwicklung in (a) nationalen Bildungspolitiken, (b) Lehrplänen, (c) Lehrerausbildung und (d) Schülerbeurteilung berücksichtigt werden',
    [12, 13]
  ),
  new Indicator(
    'Prozentuale Veränderung an der installierte Kapazität zur Erzeugung erneuerbarer Energie in Entwicklungsländern (in Watt pro Kopf) seit Projektbeginn',
    [12]
  ),
  new Indicator(
    'Positive Veränderung am Index der Küsteneutrophierung und Dichte des Plastikmülls seit Projektbeginn',
    [14]
  ),
  new Indicator(
    'Prozentuale Steigerung der Ausdehnung der Schutzgebiete im Verhältnis zu den Meeresgebieten seit Projektbeginn',
    [14]
  ),
  new Indicator(
    'Positive Veränderung am Anteil des gesamten Forschungsbudgets, der für Forschung im Bereich der Meerestechnologie bereitgestellt wird seit Projektbeginn',
    [14]
  ),
  new Indicator(
    'Prozentuale Verringerung des Anteils an der Bevölkerung, der in den letzten 12 Monaten (a) physischer, (b) psychischer und (c) sexueller Gewalt ausgesetzt war',
    [16]
  ),
  new Indicator(
    'Veränderung am Volumen der Rücküberweisungen (in US-Dollar) im Verhältnis zum gesamten BIP seit Projektbeginn.',
    [17]
  ),
  new Indicator(
    'Veränderung des Anteils der Entwicklungsländer und der am wenigsten entwickelten Länder an den weltweiten Ausfuhren seit Projektbeginn',
    [17]
  ),
  new Indicator(
    'Prozentuale Steigerung von Mobilisierung von Eigeneinnahmen der Zielgruppe seit Projektbeginn.',
    [1]
  ),
  new Indicator(
    'Anzahl erarbeiteter Strategien im Hinblick auf soziale Sicherung seit Projektbeginn',
    [1, 10]
  ),
  new Indicator(
    'Anzahl der Aktivitäten zur Reduzierung von Katastrophenrisiken (Risikobewertungen, strukturelle Präventionsmaßnahmen und Risikotransfersysteme und Aufbau Kapazitäten zur Reduzierung von Katastrophenrisiken seit Projektbeginn',
    [1, 11, 13]
  ),
  new Indicator(
    'Nahrungsmittel (Zwischen-)Mahlzeiten, inkl. Lebensmittelrationen zum mit nach Hause nehmen in Vorschul, Schulaktivitäten sowie Berufsbildungsprogrammen',
    [2, 4]
  ),
  new Indicator(
    'Anzahl der feministischen, frauengeführten und auf die Frauenrechte ausgerichteten Organisationen und Bewegungen die seit Projektbeginn unterstützt werden',
    [5]
  ),
  new Indicator(
    'Erhaltung von Wasserressourcen (einschließlich Datenerhebung); Erarbeitung und Weitergabe von Wissen in Bezug auf Wasser seit Projektende.',
    [6, 15]
  ),
  new Indicator(
    'Anzahl der unterstützten Maßnahmen zur Senkung der Energienachfrage durch Einsparung und Effizienz (Nachfrageseite) seit Projektbeginn',
    [7]
  ),
  new Indicator(
    'Anzahl der Mikro-, Kleinen und Mittleren Unternehmen im Industriesektor, die bei der Verbesserung der produktiven Kapazitäten und des Unternehmensmanagements seit Projektbeginn unterstützt wurden',
    [8]
  ),
  new Indicator(
    'Anzahl umgesetzter Maßnahmen zum Kapazitätsaufbau und Beratung zur Förderung des Sozialdialogs; Förderung der Kapazitäten von Arbeitnehmer- und Arbeitgeberorganisationen seit Projektbeginn',
    [8, 10]
  ),
  new Indicator(
    'Anzahl geschaffener Beschäftigungsmöglichkeiten und einkommensschaffende Maßnahmen; inkl. auf die Bedürfnisse gefährdeter Bevölkerungsgruppen seit Projektbeginn',
    [10]
  ),
  new Indicator(
    'Anzahl der Maßnahmen zur Begrenzung anthropogener Treibhausgasemissionen oder zur Förderung der Bindung von Treibhausgasen im Boden oder in Pflanzen beiträgt. Treibhausgasemissionen; sowie darauf zielender Institutionenaufbau, Kapazitätsentwicklung oder Forschung',
    [13]
  ),
  new Indicator(
    'Anzahl der Maßnahmen für die Aufrechterhaltung oder Erhöhung der Anpassungskapazität und der Widerstandsfähigkeit von Mensch und Natur gegenüber klimabedingte Risiken (Erarbeitung von Informationen und wissenschaftlichen Grundlagen; Kapazitätsentwicklung sowie Planung und Umsetzung von Maßnahmen)',
    [13]
  ),
  new Indicator(
    'Anzahl von Organisationen, die seit Projektbeginn unterstützt wurden bei der Vertretung von und beim Einsatz für ihre Mitglieder und deren Interessen, beim Monitoring von, kritischen Dialog mit und Einfordern von Rechenschaft gegenüber Regierungen, sowie bei der Schulung der Bürger im Hinblick auf Handeln im öffentlichen Raum',
    [16]
  ),
  new Indicator(
    'Prozentuale Steigerung der Anzahl der Maßnahmen zur Förderung eines freien und unzensierten Informationsflusses zu öffentlichen Fragen; Maßnahmen zur Steigerung der journalistischen und technischen Fähigkeiten und der Integrität von Printmedien und Radio/Fernsehen, z. B. Schulung von Journalisten seit Projektbeginn',
    [16]
  ),
]

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  constructor() {}

  public getIndicatorsForSDG(SDG: number, amount: number): string[] {
    var results = new Array<string>()

    INDICATORS.forEach(indicator => {
      if (results.length < amount && indicator.SDGs.has(SDG)) {
        results.push(indicator.text)
      }
    })

    return results
  }
}
