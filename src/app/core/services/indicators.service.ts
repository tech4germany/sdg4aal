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
    'Prozentuale Senkung des Anteils der Personen, die materiell depriviert sind, bis xx',
    [1]
  ),
  new Indicator(
    'Prozentuale Senkung des Anteils der Personen, die erheblich materiell depriviert sind, bis xx',
    [1]
  ),
  new Indicator(
    'Verringerung der Stickstoffüberschüsse der Gesamtbilanz für xx auf xx Kilogramm je Hektar landwirtschaftlich genutzter Fläche im Jahresmittel xx',
    [2]
  ),
  new Indicator(
    'Prozentuale Erhöhung des Anteils des ökologischen Landbaus an der landwirtschaftlich genutzten Fläche bis xx',
    [2]
  ),
  new Indicator(
    'Senkung vorzeitiger Sterblichkeit auf xx Todesfälle je xx Einwohner (Frauen) bis xx',
    [3]
  ),
  new Indicator(
    'Senkung vorzeitiger Sterblichkeit auf xx Todesfälle je xx Einwohner (Frauen) bis xx',
    [3]
  ),
  new Indicator(
    'Prozentuale Senkung der Raucherquote von Jugendlichen und Erwachsenen bis xx',
    [3]
  ),
  new Indicator('Senkung Adipositasquote von Kindern und Jugendlichen bis xx', [
    3,
  ]),
  new Indicator('Prozentuale Senkung Adipositasquote von Erwachsenen bis xx', [
    3,
  ]),
  new Indicator(
    'Prozentuale Reduktion der Luftschadstoffemissionen des Jahres xx auf (ungewichtetes Mittel der fünf Schadstoffe) bis xx',
    [3]
  ),
  new Indicator(
    'Prozentuale Senkung des Bevölkerunganteils mit erhöhter PM10-Feinstaubexposition über WHO-Richtwert von 20 Mikrogramm/Kubikmeter für PM10 im Jahresmittel',
    [3]
  ),
  new Indicator(
    'Steigerung der Ausgaben zur globalen Pandemieprävention und -reaktion bis xx',
    [3]
  ),
  new Indicator(
    'Prozentuale Verringerung des Anteils früher Schulabgängerinnen und Schulabgängerauf bis xx',
    [4]
  ),
  new Indicator(
    'Prozentuale Steigerung des Anteils akademisch Qualifizierter und beruflich Höherqualifizierter auf bis xx ',
    [4]
  ),
  new Indicator(
    'Prozentualer Anstieg der Ganztagsbetreuung für Kinder auf bis xx',
    [4]
  ),
  new Indicator(
    'Prozentuale Verringerung des Verdienstabstandes zwischen Frauen und Männern auf bis xx',
    [5]
  ),
  new Indicator(
    'Prozentualer Anteil von Frauen in Führungspositionen in der Wirtschaft sowie im öffentlichen Dienst des Bundes bis xx',
    [5]
  ),
  new Indicator(
    'Prozentualer Anteil von Väterbeteiligung beim Elterngeld bis xx',
    [5]
  ),
  new Indicator(
    'Prozentuale Steigerung der beruflichen Qualifizierung von Frauen und Mädchen bis xy',
    [5]
  ),
  new Indicator(
    'Unterschreitung der gewässertypischen Orientierungswerten für Phosphor in Fließgewässern an allen Messstellen bis xx ',
    [6]
  ),
  new Indicator(
    'Einhaltung des Nitrat Schwellenwertes im Grundwasser von 50 Milligramm pro Liter an allen Messstellen bis xx',
    [6]
  ),
  new Indicator(
    'Anzahl der Menschen, die einen neuen oder hochwertigeren Zugang zu Trinkwasser- und Sanitärversorgung erhalten bis xx',
    [6]
  ),
  new Indicator(
    'Prozentuale/r Steigerung der Endenergieproduktivität / Reduktion Primärenergieverbrauch pro Jahr im Zeitraum von xx − xx',
    [7]
  ),
  new Indicator(
    'Prozentualer Anstieg auf des Anteil erneuerbarer Energien am Brutto-Endenergieverbrauch bis xx',
    [7]
  ),
  new Indicator(
    'Prozentualer Anstieg des Anteil des Stroms aus erneuerbaren Energiequellen am Bruttostromverbrauch bis xx',
    [7]
  ),
  new Indicator(
    'Prozentuale Steigerung der Gesamtrohstoffproduktivität bis xx',
    [8]
  ),
  new Indicator('Erwerbstätigenquote in beobachteter Gruppe xx', [8]),
  new Indicator(
    'Prozentualer Anteil beobachteter Ausgaben für Forschung und Entwicklung im Zeitraum xx bis xx',
    [9]
  ),
  new Indicator('Anteil der Haushalte mit Zugang zu Breitbandversorgung', [9]),
  new Indicator(
    'Prozentuale Annäherung des Anteils ausländischer an die Quote deutscher Schulabsolventinnen und Schulabsolventen bis xx',
    [10]
  ),
  new Indicator(
    'Entwicklung Gini-Koeffizient des Einkommens nach Sozialtransfers bei beobachteter Gruppe bis xx',
    [10]
  ),
  new Indicator(
    'Anstieg/Sinken der Siedlungs- und Verkehrsfläche in ha pro Tag bis xx',
    [11]
  ),
  new Indicator(
    'Prozentuale Verringerung des einwohnerbezogenen Freiflächenverlustes bis xx',
    [11]
  ),
  new Indicator(
    'Prozentuale Verringerung der Siedlungsdichte in Region xx bis xx',
    [11]
  ),
  new Indicator(
    'Prozentuale Senkung des Endenergieverbrauch im Güterverkehr bis xx',
    [11]
  ),
  new Indicator(
    'Prozentuale Senkung des Endenergieverbrauch im Personenverkehr bis xx',
    [11]
  ),
  new Indicator(
    'Verringerung der durchschnittlichen Reisezeit mit öffentlichen Verkehrsmitteln zu Mittel- und Oberzentren bis xx',
    [11]
  ),
  new Indicator(
    'Prozentuale Senkung des Anteils der durch Wohnkosten überlasteten Personen an der Bevölkerung auf bis xx',
    [11]
  ),
  new Indicator('Steigerung der Zahl digital vernetzen Objekte auf xx bis xx', [
    11,
  ]),
  new Indicator(
    'Prozentuale Steigerung des Marktanteil von Produkten mit staatlichen Umweltzeichen bis xx',
    [12]
  ),
  new Indicator(
    'Senkung der Globale Umweltinanspruchnahme durch den Konsum privater Haushalte',
    [12]
  ),
  new Indicator(
    'Anzahl der durch Umweltmanagementsysteme wie EMAS zertifizierten Organisationsstandorte',
    [12]
  ),
  new Indicator(
    'Steigerung der nachhaltige beschafften Projektressourcen (Einsatz von Umweltpapier, CO2-Emissionen eingesetzter Kraftfahrzeugen)',
    [12]
  ),
  new Indicator('Prozentuale Minderung der Treibhausgasemissionen bis xx', [
    13,
  ]),
  new Indicator(
    'Veränderung des erreichter Indexwert für Artenvielfalt und Landschaftsqualität bis xx',
    [15]
  ),
  new Indicator(
    'Prozentuale Reduzierung der Eutrophierung der Ökosysteme bis xx',
    [15]
  ),
  new Indicator(
    'Zahlungeen für den Erhalt bzw. Wiederaufbau von Wäldern unter REDD+ sowie internationaler Bodenschutz bis xx',
    [15]
  ),
  new Indicator(
    'Rückgang der Zahl der erfassten Straftaten je xx Einwohner/ -innen auf xx bis xx',
    [16]
  ),
  new Indicator(
    'Anzahl der in betroffenen Weltregionen durchgeführten Projekte zur Sicherung, Registrierung und Zerstörung von Kleinwaffen und leichten Waffen durch Deutschland',
    [16]
  ),
  new Indicator(
    'Verbesserung des Corruption Perception Index gegenüber Jahr xx',
    [16]
  ),
  new Indicator(
    'Prozentuale Steigerungs des Anteils öffentlicher Entwicklungsausgaben am Bruttonationaleinkommen bis xx',
    [17]
  ),
  new Indicator(
    'Prozentuale Steigerung der Anzahl der Studierenden und Forschenden aus Entwicklungsländern sowie LDCs pro Jahr',
    [17]
  ),
  new Indicator(
    'Prozentuale Steigerung der Einfuhren aus am wenigsten entwickelten Ländern bis xx',
    [17]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der unterhalb der internationalen Armutsgrenze lebt, nach Geschlecht, Alter, Beschäftigungsstatus und geografischer Lage (Stadt/Land)',
    [1]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der durch Sozialschutzuntergrenzen/-systeme abgedeckt ist, nach Geschlecht, unterschieden nach Kindern, Arbeitslosen, älteren Menschen, Menschen mit Behinderungen, schwangeren Frauen, Neugeborenen, Opfern von Arbeitsunfällen sowie armen und gefährdeten Personen',
    [1]
  ),
  new Indicator('Öffentliche Sozialausgaben zugunsten der Armen', [1]),
  new Indicator('Verbreitung von Unterernährung', [2]),
  new Indicator(
    'Anzahl der (a) pflanzen- und (b) tiergenetischen Ressourcen für Ernährung und Landwirtschaft, die in mittel- oder langfristigen Erhaltungseinrichtungen gesichert sind',
    [2]
  ),
  new Indicator(
    'Durchschnittseinkommen der Kleinproduzenten von Nahrungsmitteln, nach Geschlecht und indigenem Status',
    [2]
  ),
  new Indicator(
    'Anteil der landwirtschaftlichen Fläche mit produktiver und nachhaltiger Landwirtschaft',
    [2]
  ),
  new Indicator(
    'Sterblichkeitsrate aufgrund von Herz-Kreislauf-Erkrankungen, Krebs, Diabetes oder chronischen Atemwegserkrankungen',
    [3]
  ),
  new Indicator('Abdeckung der wesentlichen Gesundheitsdienste', [3]),
  new Indicator('Dichte und Verteilung des Gesundheitspersonals', [3]),
  new Indicator(
    'Abschlussquote (Primarbereich, Sekundarbereich I, Sekundarbereich II)',
    [4]
  ),
  new Indicator(
    'Teilnahmequote von Jugendlichen und Erwachsenen an formaler und nicht-formaler Bildung und Ausbildung in den letzten 12 Monaten, nach Geschlecht',
    [4]
  ),
  new Indicator(
    'Anteil der Jugendlichen und Erwachsenen mit Kenntnissen der Informations- und Kommunikationstechnologie (IKT), nach Art der Qualifikation',
    [4]
  ),
  new Indicator(
    'Paritätsindizes (weiblich/männlich, ländlich/städtisch, unterstes/oberstes Wohlstandsquintil und andere wie Behindertenstatus, indigene Völker und Konfliktbetroffene) hinsichtlich gleichberechtigtem Zugang zu allen Ebenen der allgemeinen und beruflichen Bildung',
    [4]
  ),
  new Indicator(
    'Anteil der Schulen, die grundlegende Dienstleistungen und Bildungseinrichtungen anbieten, die kinder-, behinderten- und geschlechtsspezifisch ausgerichtet sind und ein sicheres, gewaltfreies, integratives und effektives Lernumfeld für alle bieten',
    [4]
  ),
  new Indicator('Anzahl Stipendien nach Sektor und Studienrichtung', [4]),
  new Indicator(
    'Lehrkräfte mit den erforderlichen Mindestqualifikationen für jeweiliges Bildungsniveau',
    [4]
  ),
  new Indicator(
    'Anteil der Zeit, die für unbezahlte Haus- und Pflegearbeit aufgewendet wird, nach Geschlecht, Alter und Wohnort',
    [5]
  ),
  new Indicator(
    'Anteil der von Frauen besetzten Sitze in (a) nationalen Parlamenten und (b) lokalen Regierungen',
    [5]
  ),
  new Indicator('Anteil von Frauen in Führungspositionen', [5]),
  new Indicator(
    'Anteil der gesamten landwirtschaftlichen Bevölkerung mit Eigentum oder gesicherten Rechten an landwirtschaftlichen Flächen nach Geschlecht und b) Anteil der Frauen an den Eigentümern oder Inhabern von Rechten an landwirtschaftlichen Flächen nach Art der Besitzverhältnisse',
    [5]
  ),
  new Indicator('Veränderung der Wassernutzungseffizienz im Laufe der Zeit', [
    6,
  ]),
  new Indicator(
    'Veränderung der Ausdehnung von wasserbezogenen Ökosystemen im Laufe der Zeit',
    [6]
  ),
  new Indicator('Anteil der Wasserkörper mit guter Wasserqualität', [6]),
  new Indicator(
    'Anteil der Bevölkerung, der primär auf saubere Brennstoffe und Technologien angewiesen ist',
    [7]
  ),
  new Indicator(
    'Installierte Kapazität zur Erzeugung erneuerbarer Energie in Entwicklungsländern (in Watt pro Kop',
    [7]
  ),
  new Indicator(
    'Anteil der erneuerbaren Energien am gesamten Endenergieverbrauch',
    [7]
  ),
  new Indicator(
    'Grad der nationalen Einhaltung der Arbeitnehmerrechte (Vereinigungsfreiheit und Tarifverhandlungen) auf der Grundlage von Textquellen der Internationalen Arbeitsorganisation (IAO) und nationalen Rechtsvorschriften, nach Geschlecht und Migrantenstatus',
    [8]
  ),
  new Indicator(
    'Anteil der Jugendlichen (im Alter von 15-24 Jahren), die sich nicht in der allgemeinen oder beruflichen Bildung befinden',
    [8]
  ),
  new Indicator('Jährliche Wachstumsrate des realen BIP pro Erwerbstätigen', [
    8,
  ]),
  new Indicator(
    'Anteil der informellen Beschäftigung an der Gesamtbeschäftigung, nach Sektor und Geschlecht',
    [8]
  ),
  new Indicator(
    'Materieller Fußabdruck, materieller Fußabdruck pro Kopf und materieller Fußabdruck pro BIP',
    [8]
  ),
  new Indicator(
    'Inländischer Materialverbrauch, inländischer Materialverbrauch pro Kopf und inländischer Materialverbrauch pro BIP',
    [8]
  ),
  new Indicator(
    'Durchschnittlicher Stundenverdienst von Arbeitnehmern, nach Geschlecht, Alter, Beruf und Menschen mit Behinderungen',
    [8]
  ),
  new Indicator(
    'Arbeitslosenquote, nach Geschlecht, Alter und Menschen mit Behinderungen',
    [8]
  ),
  new Indicator(
    'Beschäftigung im verarbeitenden Gewerbe als Anteil an der Gesamtbeschäftigung',
    [9]
  ),
  new Indicator(
    'Anteil des Kleingewerbes an der gesamten Wertschöpfung der Industrie',
    [9]
  ),
  new Indicator('CO2-Emissionen pro Einheit der Wertschöpfung', [9]),
  new Indicator(
    'Ausgaben für Forschung und Entwicklung im Verhältnis zum BIP',
    [9]
  ),
  new Indicator('Forscher (in Vollzeitäquivalenten) pro Million Einwohner', [
    9,
  ]),
  new Indicator(
    'Anteil der Wertschöpfung der Mittel- und Hochtechnologieindustrie an der Gesamtwertschöpfung',
    [9]
  ),
  new Indicator('Anteil der mit einem Mobilfunknetz versorgten Bevö', [9]),
  new Indicator(
    'Anteil der Menschen, die unter 50 Prozent des Medianeinkommens leben, nach Geschlecht, Alter und Menschen mit Behinderungen',
    [10]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der angibt, sich in den letzten 12 Monaten persönlich diskriminiert oder belästigt gefühlt zu haben, und zwar aufgrund eines Diskriminierungsgrundes, der nach den internationalen Menschenrechtsvorschriften verboten ist',
    [10]
  ),
  new Indicator('Anteil der Arbeit am BIP', [10]),
  new Indicator('Indikatoren für finanzielle Solidität', [10]),
  new Indicator(
    'Anzahl der Länder mit einer Migrationspolitik, die eine geordnete, sichere, regelmäßige und verantwortungsvolle Migration und Mobilität von Menschen ermöglicht',
    [10]
  ),
  new Indicator(
    'Anteil der Stadtbevölkerung, der in Slums, informellen Siedlungen oder unzureichenden Wohnungen lebt',
    [11]
  ),
  new Indicator(
    'Anteil der Bevölkerung, die bequemen Zugang zu öffentlichen Verkehrsmitteln hat, nach Geschlecht, Alter und Menschen mit Behinderungen',
    [11]
  ),
  new Indicator(
    'Verhältnis der Flächenverbrauchsrate zur Bevölkerungswachstumsrate',
    [11]
  ),
  new Indicator(
    'Anteil der Städte mit einer direkten Beteiligungsstruktur der Zivilgesellschaft an der Stadtplanung und -verwaltung, die regelmäßig und demokratisch funktioniert',
    [11]
  ),
  new Indicator(
    'Pro-Kopf-Gesamtausgaben für die Erhaltung, den Schutz und die Bewahrung des gesamten Kultur- und Naturerbes, aufgeschlüsselt nach Finanzierungsquellen (öffentlich, privat), Art des Erbes (Kultur-, Naturerbe) und Regierungsebene (national, regional und lokal/kommunal)',
    [11]
  ),
  new Indicator('Schäden an kritischen Infrastrukturen', [11]),
  new Indicator(
    'Anteil der in kontrollierten Anlagen gesammelten und entsorgten festen Siedlungsabfälle am gesamten Siedlungsabfallaufkommen, nach Städten',
    [11]
  ),
  new Indicator(
    'Durchschnittlicher Anteil der bebauten Fläche der Städte, der als Freiraum zur öffentlichen Nutzung für alle zur Verfügung steht, nach Geschlecht, Alter und Menschen mit Behinderungen',
    [11]
  ),
  new Indicator(
    'Anteil der Personen, die in den letzten 12 Monaten Opfer von körperlicher oder sexueller Belästigung wurden, nach Geschlecht, Alter, Behinderungsstatus und Ort des Vorfalls',
    [11]
  ),
  new Indicator(
    'Materialfußabdruck, Materialfußabdruck pro Kopf und Materialfußabdruck pro BIP',
    [12]
  ),
  new Indicator(
    'Inländischer Materialverbrauch, inländischer Materialverbrauch pro Kopf und inländischer Materialverbrauch pro BIP',
    [12]
  ),
  new Indicator(
    'Index der Lebensmittelverluste und (b) Index der Lebensmittelverschwendung',
    [12]
  ),
  new Indicator(
    'Pro-Kopf-Aufkommen an gefährlichen Abfällen und (b) Anteil der behandelten gefährlichen Abfälle, aufgeschlüsselt nach Behandlungsarten',
    [12]
  ),
  new Indicator('Nationale Recyclingquote, Tonnen an recyceltem Material', [
    12,
  ]),
  new Indicator(
    'Ausmaß, in dem (i) Bildung für globale Bürgerschaft und (ii) Bildung für nachhaltige Entwicklung in (a) nationalen Bildungspolitiken, (b) Lehrplänen, (c) Lehrerausbildung und (d) Schülerbeurteilung berücksichtigt werden',
    [12, 13]
  ),
  new Indicator(
    'Höhe der Subventionen für fossile Brennstoffe (Produktion und Verbrauch) pro Einheit des BIP',
    [12]
  ),
  new Indicator(
    'Installierte Kapazität zur Erzeugung erneuerbarer Energie in Entwicklungsländern (in Watt pro Kopf)',
    [12]
  ),
  new Indicator(
    'Anzahl der Todesfälle, vermissten Personen und direkt betroffenen Personen, die auf Katastrophen zurückzuführen sind, pro 100.000 Einwohner',
    [13]
  ),
  new Indicator(
    'Anteil der lokalen Regierungen, die lokale Strategien zur Katastrophenrisikominderung im Einklang mit den nationalen Strategien zur Katastrophenrisikominderung annehmen und umsetzen',
    [13]
  ),
  new Indicator('Gesamte Treibhausgasemissionen pro Jahr', [13]),
  new Indicator(
    'Index der Küsteneutrophierung und (b) Dichte des Plastikmülls',
    [14]
  ),
  new Indicator(
    'Durchschnittlicher Säuregehalt des Meeres (pH-Wert), gemessen an einer vereinbarten Reihe repräsentativer Probenahmestationen',
    [14]
  ),
  new Indicator(
    'Anteil der Fischbestände innerhalb des biologisch nachhaltigen Niveaus',
    [14]
  ),
  new Indicator(
    'Ausdehnung der Schutzgebiete im Verhältnis zu den Meeresgebieten',
    [14]
  ),
  new Indicator(
    'Anteil des gesamten Forschungsbudgets, der für Forschung im Bereich der Meerestechnologie bereitgestellt wird',
    [14]
  ),
  new Indicator('Anteil der Waldfläche an der Gesamtlandfläche', [15]),
  new Indicator(
    'Anteil der für die terrestrische und Süßwasser-Biodiversität wichtigen Gebiete, die von Schutzgebieten bedeckt sind, nach Ökosystemtyp',
    [15]
  ),
  new Indicator('Fortschritte bei der nachhaltigen Waldbewirtschaftung', [15]),
  new Indicator('Anteil der degradierten Flächen an der Gesamtfläche', [15]),
  new Indicator('Index der Roten Liste', [15]),
  new Indicator(
    'Anteil der gehandelten Wildtiere, die gewildert oder illegal gehandelt wurden',
    [15]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der in den letzten 12 Monaten (a) physischer, (b) psychischer und (c) sexueller Gewalt ausgesetzt wa',
    [16]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der sich sicher fühlt, wenn er nach Einbruch der Dunkelheit alleine in seinem Wohngebiet unterwegs ist',
    [16]
  ),
  new Indicator(
    'Anteil der Kinder im Alter von 1-17 Jahren, die im letzten Monat körperliche Bestrafung und/oder psychische Aggression durch Betreuungspersonen erfahren haben',
    [16]
  ),
  new Indicator(
    'Anteil der jungen Frauen und Männer im Alter von 18-29 Jahren, die im Alter von 18 Jahren sexuelle Gewalt erfahren haben',
    [16]
  ),
  new Indicator(
    'Anteil der Opfer von Gewalt in den letzten 12 Monaten, die ihre Viktimisierung den zuständigen Behörden oder anderen offiziell anerkannten Konfliktlösungsmechanismen gemeldet haben',
    [16]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der der Meinung ist, dass die Entscheidungsfindung integrativ und reaktionsfähig ist, nach Geschlecht, Alter, Behinderung und Bevölkerungsgruppe',
    [16]
  ),
  new Indicator(
    'Anteil der Bevölkerung, der angibt, sich in den letzten 12 Monaten aufgrund eines nach den internationalen Menschenrechtsnormen verbotenen Diskriminierungsgrundes persönlich diskriminiert oder belästigt gefühlt zu haben',
    [16]
  ),
  new Indicator(
    'Volumen der Rücküberweisungen (in US-Dollar) im Verhältnis zum gesamten BIP',
    [17]
  ),
  new Indicator('Anteil der Personen, die das Internet nutzen', [17]),
  new Indicator(
    'Anteil der Entwicklungsländer und der am wenigsten entwickelten Länder an den weltweiten Ausfuhren',
    [17]
  ),
  new Indicator(
    'Ausmaß der Nutzung von ländereigenen Ergebnisrahmen und Planungsinstrumenten durch Anbieter von Entwicklungszusammenarbei',
    [17]
  ),
  new Indicator(
    'Betrag in US-Dollar, der für öffentlich-private Partnerschaften im Infrastrukturbereich bereitgestellt wurde',
    [17]
  ),
  new Indicator('Mobilisierung von Eigeneinnahmen', [1]),
  new Indicator('Strategien im Hinblick auf soziale Sicherung', [1, 10]),
  new Indicator(
    'Aktivitäten zur Reduzierung von Katastrophenrisiken (Risikobewertungen, strukturelle Präventionsmaßnahmen und Risikotransfersysteme und Aufbau Kapazitäten zur Reduzierung von Katastrophenrisiken.',
    [1, 11, 13]
  ),
  new Indicator('Landwirtschaftliche Forschung', [2, 9]),
  new Indicator(
    'Landwirtschaftliche Beratung  (Informelle landwirtschaftliche Schulung)',
    [2]
  ),
  new Indicator(
    'Landwirtschaftsentwicklung (Integrierte Projekte; Entwicklung landwirtschaftlicher Betriebe)',
    [2, 15]
  ),
  new Indicator(
    'Nahrungsmittel (Zwischen-)Mahlzeiten, inkl. Lebensmittelrationen zum mit nach Hause nehmen in Vorschul, Schulaktivitäten sowie Berufsbildungsprogrammen',
    [2, 4]
  ),
  new Indicator(
    'Allgemeine medizinische Forschung [ausgenommen Basisgesundheitswesen, nichtübertragbaren Krankheiten]',
    [3, 9]
  ),
  new Indicator(
    'Sektorübergreifende Aus- und Fortbildung  (Einschließlich Stipendien)',
    [4]
  ),
  new Indicator('Umwelterziehung/-fortbildung', [4]),
  new Indicator(
    'Aus- und Fortbildung im Bereich Handel (u.a. auch Universitätskurse)',
    [4, 8, 17]
  ),
  new Indicator('Aus- und Fortbildung im Energiesektor', [4, 7]),
  new Indicator('Lehreraus- und -fortbildung; Lehrmaterialentwicklung', [4]),
  new Indicator('Grundschulbildung (formell/informell)', [4]),
  new Indicator(
    'Grundlegende Alltagsfähigkeiten für Jugendliche und Erwachsene durch formelle und informelle Unterweisung; Lese- und Rechenunterweisung',
    [4]
  ),
  new Indicator('Vorschulunterricht', [4]),
  new Indicator('Sekundarschulbildung (Stufen I und II)', [4]),
  new Indicator(
    'Berufliche Bildung (formal wie auch außerhalb des Bildungssystems, z. B. Ausbildung am Arbeitsplatz und Lehrlingsausbildung)',
    [4]
  ),
  new Indicator(
    'Hochschulbildung  (an Universitäten, technischen Hochschulen, Fachhochschulen); Stipendien',
    [4]
  ),
  new Indicator(
    'Unterstützung für feministische, frauengeführte und auf die Frauenrechte ausgerichtete Organisationen und Bewegungen',
    [5]
  ),
  new Indicator(
    'Unterstützung von Vorhaben zur Überwindung der Gewalt gegen Frauen und Mädchen',
    [5, 16]
  ),
  new Indicator(
    'Erhaltung von Wasserressourcen (einschließlich Datenerhebung); Erarbeitung und Weitergabe von Wissen in Bezug auf Wasser',
    [6, 15]
  ),
  new Indicator('Energieforschung', [7, 9]),
  new Indicator(
    'Unterstützung zur Senkung der Energienachfrage durch Einsparung und Effizienz (Nachfrageseite)   ',
    [7]
  ),
  new Indicator(
    'Unterstützung zur Verbesserung der produktiven Kapazitäten und des Unternehmensmanagements von Mikro-, Kleinen und Mittleren Unternehmen im Industriesektor',
    [8]
  ),
  new Indicator(
    'Unterstützung für Verantwortungsvolles unternehmerisches Handeln (Responsible Business Conduct, RBC) und Geschäftspraktiken die Stakeholder und Umwelt schützten',
    [8]
  ),
  new Indicator(
    'Kapazitätsaufbau und Beratung zur Förderung des Sozialdialogs; Förderung der Kapazitäten von Arbeitnehmer- und Arbeitgeberorganisationen.',
    [8, 10]
  ),
  new Indicator(
    'Lobbyarbeit für  Arbeitnehmerrechte; Formalisierung informeller Arbeitsverhältnisse, Arbeitsschutz.',
    [8, 10]
  ),
  new Indicator(
    'Beschäftigungsmöglichkeiten und einkommensschaffende Maßnahmen; inkl. auf die Bedürfnisse gefährdeter Bevölkerungsgruppen',
    [10]
  ),
  new Indicator('Technologieforschung und -entwicklung', [11]),
  new Indicator('Forschungs- und Wissenschaftseinrichtungen', [11]),
  new Indicator(
    'Abfallwirtschaft und -entsorgung aus Haushalten und Industrie, Kompostierung und Wiederverwertung.',
    [11, 12]
  ),
  new Indicator(
    'Klima - Minderung von Treibhausgasen: Maßnahmen zurr Begrenzung anthropogener Treibhausgasemissionen oder zur Förderung der Bindung von Treibhausgasen im Boden oder in Pflanzen beiträgt. Treibhausgasemissionen; sowie darauf zielender Institutionenaufbau, Kapazitätsentwicklung oder Forschung',
    [13]
  ),
  new Indicator(
    'Klima - Anpassung an den Klimawandel: Maßnahmen für die Aufrechterhaltung oder Erhöhung der Anpassungskapazität und der Widerstandsfähigkeit von Mensch und Natur gegenüber klimabedingte Risiken (Erarbeitung von Informationen und wissenschaftlichen Grundlagen; Kapazitätsentwicklung sowie Planung und Umsetzung von Maßnahmen)',
    [13]
  ),
  new Indicator(
    'Fischereientwicklung durch integrierte Fischereiprojekte, Nutzung von Fischreserven; Schutz des Fischbestandes; Aquakultur',
    [14]
  ),
  new Indicator(
    'Fischereiforschung (Pilot-Fischkulturen; Bio-Forschung in den Bereichen Meeres- und Süßwasser)',
    [9, 14]
  ),
  new Indicator(
    'Maßnahme zur Desertifikationsbekämpfung durch Schutz oder Rehabilitierung von Land- und Wasserressourcen oder der Behebeung bestehender Umweltschäden; Kapazitätsbildung und Forschung in nachhaltigen Land- und Dürremanagements',
    [13, 15]
  ),
  new Indicator(
    'Maßnahmen zum Schutz gefährdeter Arten und ihrer Lebensräume (z. B. Feuchtgebietserhaltung); Biodiversität',
    [15]
  ),
  new Indicator(
    'Förderung der demokratischen Teilhabe und Zivilgesellschaft; Unterstützung von Organisationen bei der Vertretung von und beim Einsatz für ihre Mitglieder und deren Interessen, beim Monitoring von, kritischen Dialog mit und Einfordern von Rechenschaft gegenüber Regierungen, sowie bei der Schulung der Bürger im Hinblick auf Handeln im öffentlichen Raum',
    [16]
  ),
  new Indicator(
    'Maßnahmen zur Förderung eines freien und unzensierten Informationsflusses zu öffentlichen Fragen; Maßnahmen zur Steigerung der journalistischen und technischen Fähigkeiten und der Integrität von Printmedien und Radio/Fernsehen, z. B. Schulung von Journalisten',
    [16]
  ),
  new Indicator(
    'Unterstützung von zivilen Maßnahmen im Bereich Friedensentwicklung, Krisenprävention und Konfliktlösung unter Einschluss von Kapazitätsaufbau, Monitoring, Dialog und Informationsaustausch',
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
