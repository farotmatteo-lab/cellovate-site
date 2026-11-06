// Germany: country hub + five city pages, served at /{lang}/peptides/{slug}.
// Same shape as lib/seo/places.js. Locales: English and German.

const DE_HUB = [
  "retatrutide-20mg",
  "tirzepatide",
  "bpc-157-tb-500-blend",
  "cjc-1295-without-dac-ipamorelin",
  "nad-1000mg",
  "mots-c-10mg",
];

const DE_BERLIN = [
  "nad-1000mg",
  "mots-c-10mg",
  "ss-31",
  "semax-10mg",
  "selank-10mg",
  "retatrutide-20mg",
];

const DE_MUNICH = [
  "bpc-157-tb-500-blend",
  "tb-500-10mg",
  "klow-80mg",
  "mots-c-10mg",
  "nad-1000mg",
  "retatrutide-20mg",
];

const DE_HAMBURG = [
  "retatrutide-20mg",
  "tirzepatide",
  "glow-70mg-bpc157-tb500-ghk-cu",
  "ghk-cu-50mg",
  "bpc-157-tb-500-blend",
  "cjc-1295-without-dac-ipamorelin",
];

const DE_FRANKFURT = [
  "nad-1000mg",
  "ss-31",
  "mots-c-10mg",
  "cjc-1295-without-dac-ipamorelin",
  "tesamorelin-10mg",
  "retatrutide-20mg",
];

const DE_COLOGNE = [
  "bpc-157-tb-500-blend",
  "klow-80mg",
  "kpv-alpha-10mg",
  "cjc-1295-without-dac-ipamorelin",
  "tesamorelin-10mg",
  "retatrutide-20mg",
];

export const GERMANY_PLACES = [
  // ───────────────────────────── GERMANY (country hub) ─────────────────────────────
  {
    slug: "germany",
    type: "country",
    country: "germany",
    locales: ["en", "de"],
    featured: DE_HUB,
    name: { en: "Germany", de: "Deutschland" },
    content: {
      en: {
        title: "Research Peptides Germany | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered across Germany in 7–10 business days: tracked, discreetly packed, as lyophilized vials or pre-filled pens. Card or crypto.",
        h1: "Research peptides delivered across Germany",
        intro:
          "Cellovate delivers research peptides to all sixteen German states, from Schleswig-Holstein to Bavaria, by tracked international shipping in 7 to 10 business days. Every compound comes as a lyophilized vial or a pre-filled multi-dose pen, and prices are shown in euros.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Tracked, plainly packed, straight to your door",
            p: [
              "Orders for Germany travel as tracked international parcels and usually arrive within 7 to 10 business days. The tracking link lets you see when the parcel reaches the local carrier, so you can plan to be in or let a neighbour know it is coming.",
              "Like any import, an international parcel can be inspected by customs, and the delivery window allows for that. The box itself is plain, with nothing on the outside that names the contents. We work by delivery only: there is no shop and no pick-up point.",
            ],
          },
          {
            h: "Vials or pre-filled pens",
            p: [
              "Each compound comes in two formats. The vial is the standard lyophilized powder, reconstituted with bacteriostatic water. The pen is pre-filled and multi-dose, which removes the reconstitution step altogether.",
              "Sealed lyophilized vials cope well with normal transit. Once reconstituted, material belongs in the fridge at 2–8°C, away from light: not in a cellar, on a balcony or in a parked car.",
            ],
          },
          {
            h: "Research areas in the range",
            p: [
              "The catalogue covers metabolic research (Retatrutide, Tirzepatide), recovery and tissue research (BPC-157, TB-500, the KLOW and GLOW blends, KPV), GH secretagogue research (CJC-1295 + Ipamorelin, Tesamorelin), longevity and cellular-energy research (NAD+, MOTS-c, SS-31), cognitive research (Semax, Selank) and copper peptide research (GHK-Cu).",
              "Every product is sold for research use only. If you are unsure which format or size fits your work, ask on WhatsApp before you order.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Germany take?", "7 to 10 business days by tracked international shipping, to any address in Germany."],
          ["Can customs open my parcel?", "Like any international parcel, it can be inspected by customs. The 7–10 business day window allows for that."],
          ["Can I order by WhatsApp?", "Yes. Send the product, size and format on WhatsApp and we confirm stock and delivery before you pay."],
          ["How do I pay, and what does shipping cost?", "By card or crypto at checkout, with prices in euros. Shipping is shown at checkout and is free above a basket threshold."],
        ],
      },
      de: {
        title: "Forschungspeptide Deutschland | 7–10 Werktage, diskret",
        description:
          "Forschungspeptide mit Lieferung nach ganz Deutschland in 7–10 Werktagen: mit Sendungsverfolgung, neutral verpackt, als Vial oder Fertigpen. Karte oder Krypto.",
        h1: "Forschungspeptide – Lieferung in ganz Deutschland",
        intro:
          "Cellovate liefert Forschungspeptide in alle sechzehn Bundesländer, von Schleswig-Holstein bis Bayern – als internationales Paket mit Sendungsverfolgung, in der Regel innerhalb von 7 bis 10 Werktagen. Jede Substanz gibt es als lyophilisiertes Vial oder als vorgefüllten Mehrfach-Pen, die Preise sehen Sie direkt in Euro.",
        delivery: "7–10 Werktage, mit Sendungsverfolgung",
        sections: [
          {
            h: "Neutral verpackt, mit Sendungsverfolgung bis zur Haustür",
            p: [
              "Bestellungen nach Deutschland gehen als internationales Paket mit Trackingnummer raus und sind meist nach 7 bis 10 Werktagen da. Über den Tracking-Link sehen Sie, wann das Paket beim Zusteller vor Ort ankommt – so können Sie zu Hause sein oder den Nachbarn vorwarnen.",
              "Wie jede Sendung aus dem Ausland kann auch dieses Paket vom Zoll kontrolliert werden; das Lieferfenster ist darauf ausgelegt. Der Karton ist schlicht und trägt außen keinerlei Hinweis auf den Inhalt. Wir arbeiten ausschließlich mit Lieferung – es gibt weder Ladengeschäft noch Abholung.",
            ],
          },
          {
            h: "Vial oder Fertigpen",
            p: [
              "Jede Substanz gibt es in zwei Varianten. Das Vial enthält das klassische lyophilisierte Pulver, das mit bakteriostatischem Wasser rekonstituiert wird. Der Pen ist vorgefüllt und für mehrere Anwendungen ausgelegt – das Rekonstituieren entfällt komplett.",
              "Verschlossene, lyophilisierte Vials überstehen den normalen Transport problemlos. Rekonstituiertes Material gehört lichtgeschützt in den Kühlschrank bei 2–8 °C – nicht in den Keller, nicht auf den Balkon und erst recht nicht ins geparkte Auto.",
            ],
          },
          {
            h: "Die Forschungsbereiche im Sortiment",
            p: [
              "Das Sortiment deckt Stoffwechselforschung (Retatrutide, Tirzepatide) ab, außerdem Regenerations- und Gewebeforschung (BPC-157, TB-500, die Blends KLOW und GLOW, KPV), GH-Sekretagoga-Forschung (CJC-1295 + Ipamorelin, Tesamorelin), Langlebigkeits- und Zellenergieforschung (NAD+, MOTS-c, SS-31), kognitive Forschung (Semax, Selank) sowie Kupferpeptid-Forschung (GHK-Cu).",
              "Alle Produkte sind ausschließlich für Forschungszwecke bestimmt. Wenn Sie nicht sicher sind, welche Variante oder Größe zu Ihrem Projekt passt, fragen Sie einfach vor der Bestellung per WhatsApp nach.",
            ],
          },
        ],
        faq: [
          ["Wie lange dauert die Lieferung nach Deutschland?", "7 bis 10 Werktage als internationales Paket mit Sendungsverfolgung – an jede Adresse in Deutschland."],
          ["Kann der Zoll mein Paket öffnen?", "Wie jede internationale Sendung kann auch Ihr Paket vom Zoll kontrolliert werden. Das Lieferfenster von 7–10 Werktagen ist darauf ausgelegt."],
          ["Kann ich per WhatsApp bestellen?", "Ja. Schicken Sie uns Produkt, Größe und Variante per WhatsApp – wir bestätigen Verfügbarkeit und Lieferung, bevor Sie bezahlen."],
          ["Wie bezahle ich und was kostet der Versand?", "Per Karte oder Krypto an der Kasse, die Preise sind in Euro. Die Versandkosten sehen Sie an der Kasse; ab einem bestimmten Warenkorbwert ist der Versand kostenlos."],
        ],
      },
    },
  },

  // ───────────────────────────── BERLIN ─────────────────────────────
  {
    slug: "berlin",
    type: "city",
    country: "germany",
    locales: ["en", "de"],
    featured: DE_BERLIN,
    name: { en: "Berlin", de: "Berlin" },
    content: {
      en: {
        title: "Research Peptides Berlin | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Berlin in 7–10 business days: Mitte, Prenzlauer Berg, Kreuzberg, Neukölln, Charlottenburg and Potsdam. Vials and pre-filled pens.",
        h1: "Research peptides delivered to Berlin",
        intro:
          "From a Kreuzberg Hinterhof to a new-build in Friedrichshain, Berlin orders arrive as tracked parcels within 7 to 10 business days. There is no shop to visit, so delivery to your flat or office is how you get them. Every compound comes as a lyophilized vial or a pre-filled pen, priced in euros.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Every Bezirk, plus Potsdam",
            p: [
              "We deliver across all twelve districts: Mitte and Prenzlauer Berg, Friedrichshain and Kreuzberg, Neukölln, Tempelhof and Schöneberg, Charlottenburg and Wilmersdorf, Wedding and Moabit, Pankow, Lichtenberg, Steglitz, Spandau and Köpenick.",
              "Beyond the city limits, the same tracked service reaches Potsdam and the Brandenburg towns around Berlin, such as Falkensee, Bernau, Oranienburg and Königs Wusterhausen.",
            ],
          },
          {
            h: "Altbau courtyards and the neighbour system",
            p: [
              "A lot of Berlin lives in Altbau blocks with a front building and a back house round the courtyard, where a courier can easily miss your door. If nobody answers, German parcels usually go to a neighbour, a nearby parcel shop or a Packstation, with a note in your letterbox. Put your full name on the bell and letterbox, and add Hinterhaus or Seitenflügel to the address if that is where you live.",
              "Top-floor flats under the roof get properly hot in July and August. Keep sealed vials in a cool cupboard and reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "A city of founders, runners and biohackers",
            p: [
              "Berlin has one of Europe's largest start-up and tech communities, and with it an active biohacking and longevity scene of meet-ups, podcasts and cold-plunge clubs. The research areas that match that world are longevity and cellular energy (NAD+, MOTS-c, SS-31) and cognitive research (Semax, Selank).",
              "The city also runs: laps of the Tiergarten and Tempelhofer Feld, the Berlin Marathon every September, and a dense network of climbing halls and strength gyms. Recovery research compounds such as BPC-157 and TB-500 sit in the same catalogue.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Berlin take?", "7 to 10 business days by tracked international shipping, to any Berlin district and to Potsdam."],
          ["What happens if I am not home?", "Parcels in Germany usually go to a neighbour, a parcel shop or a Packstation, and you get a note with where to collect it. Tracking helps you plan to be in."],
          ["Is there a shop in Berlin?", "No. We work by delivery only, straight to your flat or office."],
          ["Can I order by WhatsApp?", "Yes. Send the product, size and format and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
      de: {
        title: "Forschungspeptide Berlin | Lieferung in 7–10 Werktagen",
        description:
          "Forschungspeptide mit Lieferung nach Berlin in 7–10 Werktagen: Mitte, Prenzlauer Berg, Kreuzberg, Neukölln, Charlottenburg und Potsdam. Vials und Fertigpens.",
        h1: "Forschungspeptide mit Lieferung nach Berlin",
        intro:
          "Ob Hinterhof in Kreuzberg oder Neubau in Friedrichshain: Bestellungen nach Berlin kommen als Paket mit Sendungsverfolgung innerhalb von 7 bis 10 Werktagen an. Einen Laden gibt es nicht – geliefert wird direkt in Ihre Wohnung oder ins Büro. Jede Substanz gibt es als lyophilisiertes Vial oder als Fertigpen, mit Preisen in Euro.",
        delivery: "7–10 Werktage, mit Sendungsverfolgung",
        sections: [
          {
            h: "Alle Bezirke – und Potsdam gleich mit",
            p: [
              "Wir liefern in alle zwölf Bezirke: Mitte und Prenzlauer Berg, Friedrichshain und Kreuzberg, Neukölln, Tempelhof und Schöneberg, Charlottenburg und Wilmersdorf, Wedding und Moabit, Pankow, Lichtenberg, Steglitz, Spandau und Köpenick.",
              "Auch jenseits der Stadtgrenze funktioniert der Versand genauso: nach Potsdam und in die Brandenburger Orte rund um Berlin wie Falkensee, Bernau, Oranienburg oder Königs Wusterhausen.",
            ],
          },
          {
            h: "Altbau, Hinterhaus und die Sache mit den Nachbarn",
            p: [
              "Viele Berliner wohnen im Altbau mit Vorderhaus, Seitenflügel und Hinterhaus – und mancher Zusteller findet die richtige Tür im zweiten Hof nie. Ist niemand da, landet ein Paket in Deutschland meist beim Nachbarn, im Paketshop oder in der Packstation, plus Benachrichtigung im Briefkasten. Ihr voller Name an Klingel und Briefkasten hilft, ebenso der Zusatz „Hinterhaus“ oder „Seitenflügel“ in der Adresse.",
              "Dachgeschosswohnungen heizen sich im Juli und August ordentlich auf. Verschlossene Vials lagern Sie am besten in einem kühlen Schrank, rekonstituiertes Material im Kühlschrank bei 2–8 °C.",
            ],
          },
          {
            h: "Gründer, Läufer, Biohacker",
            p: [
              "Berlin hat eine der größten Start-up- und Tech-Szenen Europas – und damit auch eine lebendige Biohacking- und Longevity-Community mit Meet-ups, Podcasts und Eisbade-Gruppen. Thematisch passen dazu vor allem Langlebigkeits- und Zellenergieforschung (NAD+, MOTS-c, SS-31) und kognitive Forschung (Semax, Selank).",
              "Und Berlin läuft: Runden im Tiergarten und auf dem Tempelhofer Feld, jeden September der Berlin-Marathon, dazu unzählige Boulderhallen und Kraftstudios. Substanzen aus der Regenerationsforschung wie BPC-157 und TB-500 finden Sie im selben Sortiment.",
            ],
          },
        ],
        faq: [
          ["Wie lange dauert die Lieferung nach Berlin?", "7 bis 10 Werktage als internationales Paket mit Sendungsverfolgung – in jeden Berliner Bezirk und nach Potsdam."],
          ["Was passiert, wenn ich nicht zu Hause bin?", "In Deutschland geht das Paket dann meist an einen Nachbarn, in einen Paketshop oder eine Packstation, und Sie bekommen eine Benachrichtigung. Mit dem Tracking können Sie Ihre Anwesenheit planen."],
          ["Gibt es einen Laden in Berlin?", "Nein. Wir liefern ausschließlich – direkt in Ihre Wohnung oder ins Büro."],
          ["Kann ich per WhatsApp bestellen?", "Ja. Schicken Sie Produkt, Größe und Variante – wir bestätigen Verfügbarkeit und Lieferung, bevor Sie per Karte oder Krypto bezahlen."],
        ],
      },
    },
  },

  // ───────────────────────────── MUNICH ─────────────────────────────
  {
    slug: "munich",
    type: "city",
    country: "germany",
    locales: ["en", "de"],
    featured: DE_MUNICH,
    name: { en: "Munich", de: "München" },
    content: {
      en: {
        title: "Research Peptides Munich | Tracked Delivery, 7–10 Days",
        description:
          "Research peptides delivered to Munich in 7–10 business days: Schwabing, Maxvorstadt, Haidhausen, Sendling, Bogenhausen and the Landkreis. Vials and pens.",
        h1: "Research peptides delivered to Munich",
        intro:
          "Munich orders arrive as tracked parcels within 7 to 10 business days, whether you live in a Schwabing Altbau, a new flat in Freiham or a house out in the Landkreis. Every compound comes as a lyophilized vial or a pre-filled pen, with prices in euros.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "City districts and the towns around",
            p: [
              "We deliver across the city: Altstadt, Maxvorstadt and Schwabing, Haidhausen and Au, the Glockenbachviertel, Sendling, Neuhausen and Nymphenburg, Bogenhausen, Giesing, Pasing and Trudering.",
              "The same service covers the commuter belt, including Garching, Unterhaching, Ottobrunn, Germering, Dachau, Freising, Erding and Starnberg.",
            ],
          },
          {
            h: "Hausmeister, neighbours and a cold winter",
            p: [
              "Many Munich apartment buildings have a Hausmeister, but he is rarely around to sign for a parcel. When nobody answers, delivery usually falls back on a neighbour, a parcel shop or a Packstation. If you work in an office with a staffed reception, that is often the easier address.",
              "Munich winters are cold, and that cuts both ways: sealed vials are fine in a cool room, but reconstituted material should never sit on a balcony or in a car where it can freeze. The fridge at 2–8°C is the right place all year round, Föhn days and hot top floors included.",
            ],
          },
          {
            h: "An outdoor city with a life-science cluster",
            p: [
              "Munich trains outside: cycle paths along the Isar, runs around the Olympiapark, the Eisbach surfers in the Englischer Garten, and the Alps about an hour south for ski touring, climbing and mountain biking. Recovery and tissue research (BPC-157, TB-500 and the KLOW blend) is the natural match for that lifestyle.",
              "The region is also one of Germany's main life-science hubs, with two large universities and the biotech campus at Martinsried. Longevity and cellular-energy research compounds such as NAD+ and MOTS-c, and metabolic research with Retatrutide, are part of the same range.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Munich take?", "7 to 10 business days by tracked international shipping, in the city and across the surrounding Landkreis."],
          ["Can I have it sent to my office?", "Yes. An office with a staffed reception is often more reliable than a flat where nobody is home during the day."],
          ["How should I store vials in winter?", "Sealed vials keep well in a cool room. Reconstituted material goes in the fridge at 2–8°C, never on a balcony where it could freeze."],
        ],
      },
      de: {
        title: "Forschungspeptide München | Versand in 7–10 Werktagen",
        description:
          "Forschungspeptide mit Lieferung nach München in 7–10 Werktagen: Schwabing, Maxvorstadt, Haidhausen, Sendling, Bogenhausen und Landkreis. Vials und Fertigpens.",
        h1: "Forschungspeptide mit Lieferung nach München",
        intro:
          "Ob Altbau in Schwabing, Neubau in Freiham oder Reihenhaus im Landkreis: Bestellungen nach München kommen als Paket mit Sendungsverfolgung innerhalb von 7 bis 10 Werktagen. Jede Substanz gibt es als lyophilisiertes Vial oder als Fertigpen, die Preise in Euro.",
        delivery: "7–10 Werktage, mit Sendungsverfolgung",
        sections: [
          {
            h: "Stadtviertel und Umland",
            p: [
              "Wir liefern in ganz München: Altstadt, Maxvorstadt und Schwabing, Haidhausen und Au, Glockenbachviertel, Sendling, Neuhausen und Nymphenburg, Bogenhausen, Giesing, Pasing und Trudering.",
              "Genauso ins Umland, etwa nach Garching, Unterhaching, Ottobrunn, Germering, Dachau, Freising, Erding oder Starnberg.",
            ],
          },
          {
            h: "Hausmeister, Nachbarn und Münchner Winter",
            p: [
              "Viele Münchner Wohnanlagen haben einen Hausmeister – der aber selten da ist, wenn der Paketbote klingelt. Ist niemand zu Hause, geht das Paket meist an einen Nachbarn, in den Paketshop oder die Packstation. Wer in einem Büro mit besetztem Empfang arbeitet, fährt mit der Büroadresse oft besser.",
              "Der Münchner Winter ist kalt, und das hat zwei Seiten: Verschlossene Vials vertragen einen kühlen Raum gut, rekonstituiertes Material darf aber nie auf dem Balkon oder im Auto stehen, wo es gefrieren kann. Der richtige Platz ist das ganze Jahr über der Kühlschrank bei 2–8 °C – auch an Föhntagen und unterm Dach im Hochsommer.",
            ],
          },
          {
            h: "Outdoor-Stadt mit Life-Science-Standort",
            p: [
              "München trainiert draußen: Radwege an der Isar, Laufrunden im Olympiapark, die Eisbachwelle im Englischen Garten und eine knappe Stunde südlich die Alpen für Skitouren, Klettern und Mountainbiken. Thematisch passt dazu die Regenerations- und Gewebeforschung mit BPC-157, TB-500 und dem Blend KLOW.",
              "Gleichzeitig ist die Region einer der wichtigsten Life-Science-Standorte Deutschlands, mit zwei großen Universitäten und dem Biotech-Campus in Martinsried. Langlebigkeits- und Zellenergieforschung mit NAD+ und MOTS-c sowie Stoffwechselforschung mit Retatrutide gehören ebenfalls zum Sortiment.",
            ],
          },
        ],
        faq: [
          ["Wie lange dauert die Lieferung nach München?", "7 bis 10 Werktage als internationales Paket mit Sendungsverfolgung – in der Stadt und im gesamten Landkreis."],
          ["Kann ich ins Büro liefern lassen?", "Ja. Ein Büro mit besetztem Empfang ist oft zuverlässiger als eine Wohnung, in der tagsüber niemand da ist."],
          ["Wie lagere ich Vials im Winter?", "Verschlossene Vials halten sich gut in einem kühlen Raum. Rekonstituiertes Material gehört in den Kühlschrank bei 2–8 °C – nie auf den Balkon, wo es gefrieren könnte."],
        ],
      },
    },
  },

  // ───────────────────────────── HAMBURG ─────────────────────────────
  {
    slug: "hamburg",
    type: "city",
    country: "germany",
    locales: ["en", "de"],
    featured: DE_HAMBURG,
    name: { en: "Hamburg", de: "Hamburg" },
    content: {
      en: {
        title: "Research Peptides Hamburg | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Hamburg in 7–10 business days: Altona, Eimsbüttel, Eppendorf, Winterhude, St. Pauli, HafenCity and beyond. Vials and pens.",
        h1: "Research peptides delivered to Hamburg",
        intro:
          "Hamburg orders arrive as tracked parcels within 7 to 10 business days, from the red-brick blocks of Barmbek to the villas of Blankenese. There is no shop and no pick-up: everything is delivered to your door, as a lyophilized vial or a pre-filled pen, with prices in euros.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Both sides of the Elbe",
            p: [
              "We deliver to every part of the city: Altona and Ottensen, Eimsbüttel, St. Pauli and the Schanze, Eppendorf, Winterhude and Uhlenhorst, Barmbek, Wandsbek, the HafenCity, Blankenese, Bergedorf and, south of the river, Harburg and Wilhelmsburg.",
              "The tracked service also covers the towns around Hamburg in Schleswig-Holstein and Lower Saxony, such as Norderstedt, Pinneberg, Ahrensburg, Reinbek and Buxtehude.",
            ],
          },
          {
            h: "Stairwells, neighbours and Hamburg weather",
            p: [
              "Most Hamburg flats sit in multi-storey blocks with a shared front door, so a missed delivery normally goes to a neighbour, a parcel shop or a Packstation. Watch the tracking and collect promptly rather than letting a parcel wait for days.",
              "Hamburg is mild but damp. A parcel should never be left outside a door in the drizzle, and research material is best kept somewhere dry. Reconstituted material goes in the fridge at 2–8°C, away from light.",
            ],
          },
          {
            h: "Alster runners and a metabolic focus",
            p: [
              "The roughly 7 km loop around the Außenalster is the city's unofficial running track, the Hamburg Marathon fills the streets every spring, and rowers and paddlers share the Alster with the sailing boats. Recovery research with the BPC-157 + TB-500 blend and GH secretagogue research with CJC-1295 + Ipamorelin suit that crowd.",
              "Metabolic research is a large part of the catalogue too, with Retatrutide and Tirzepatide, alongside copper peptide research with GHK-Cu and the GLOW blend.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Hamburg take?", "7 to 10 business days by tracked international shipping, anywhere in Hamburg and the surrounding towns."],
          ["What if the courier cannot reach me?", "In Germany a parcel usually goes to a neighbour, a parcel shop or a Packstation, and you are told where to collect it."],
          ["Can I order by WhatsApp?", "Yes. Send the product, size and format, and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
      de: {
        title: "Forschungspeptide Hamburg | Lieferung in 7–10 Werktagen",
        description:
          "Forschungspeptide mit Lieferung nach Hamburg in 7–10 Werktagen: Altona, Eimsbüttel, Eppendorf, Winterhude, St. Pauli, HafenCity und Umland. Vials und Pens.",
        h1: "Forschungspeptide mit Lieferung nach Hamburg",
        intro:
          "Vom Rotklinkerbau in Barmbek bis zur Villa in Blankenese: Bestellungen nach Hamburg kommen als Paket mit Sendungsverfolgung innerhalb von 7 bis 10 Werktagen. Laden und Abholung gibt es nicht – alles wird geliefert, als lyophilisiertes Vial oder als Fertigpen, mit Preisen in Euro.",
        delivery: "7–10 Werktage, mit Sendungsverfolgung",
        sections: [
          {
            h: "Diesseits und jenseits der Elbe",
            p: [
              "Wir liefern in alle Stadtteile: Altona und Ottensen, Eimsbüttel, St. Pauli und die Schanze, Eppendorf, Winterhude und Uhlenhorst, Barmbek, Wandsbek, die HafenCity, Blankenese, Bergedorf und südlich der Elbe Harburg und Wilhelmsburg.",
              "Auch das Hamburger Umland in Schleswig-Holstein und Niedersachsen ist abgedeckt, etwa Norderstedt, Pinneberg, Ahrensburg, Reinbek oder Buxtehude.",
            ],
          },
          {
            h: "Treppenhaus, Nachbarn und Schietwetter",
            p: [
              "Die meisten Hamburger wohnen im Mehrfamilienhaus mit gemeinsamer Haustür. Klappt die Zustellung nicht, landet das Paket in der Regel beim Nachbarn, im Paketshop oder in der Packstation. Behalten Sie das Tracking im Blick und holen Sie es zügig ab, statt es tagelang liegen zu lassen.",
              "Hamburg ist mild, aber feucht. Ein Paket sollte nie bei Nieselregen vor der Tür stehen, und Forschungsmaterial lagern Sie am besten trocken. Rekonstituiertes Material gehört lichtgeschützt in den Kühlschrank bei 2–8 °C.",
            ],
          },
          {
            h: "Alsterläufer und Stoffwechselforschung",
            p: [
              "Die gut sieben Kilometer lange Runde um die Außenalster ist Hamburgs inoffizielle Laufbahn, im Frühjahr zieht der Hamburg-Marathon durch die Stadt, und auf der Alster teilen sich Ruderer und Paddler das Wasser mit den Segelbooten. Zu dieser Szene passen Regenerationsforschung mit dem Blend aus BPC-157 und TB-500 sowie GH-Sekretagoga-Forschung mit CJC-1295 + Ipamorelin.",
              "Einen großen Teil des Sortiments macht außerdem die Stoffwechselforschung mit Retatrutide und Tirzepatide aus, ergänzt um Kupferpeptid-Forschung mit GHK-Cu und dem Blend GLOW.",
            ],
          },
        ],
        faq: [
          ["Wie lange dauert die Lieferung nach Hamburg?", "7 bis 10 Werktage als internationales Paket mit Sendungsverfolgung – überall in Hamburg und im Umland."],
          ["Was, wenn der Zusteller mich nicht antrifft?", "In Deutschland geht das Paket dann meist an einen Nachbarn, in einen Paketshop oder eine Packstation, und Sie erfahren, wo Sie es abholen können."],
          ["Kann ich per WhatsApp bestellen?", "Ja. Schicken Sie Produkt, Größe und Variante – wir bestätigen Verfügbarkeit und Lieferung, bevor Sie per Karte oder Krypto bezahlen."],
        ],
      },
    },
  },

  // ───────────────────────────── FRANKFURT ─────────────────────────────
  {
    slug: "frankfurt",
    type: "city",
    country: "germany",
    locales: ["en", "de"],
    featured: DE_FRANKFURT,
    name: { en: "Frankfurt", de: "Frankfurt am Main" },
    content: {
      en: {
        title: "Research Peptides Frankfurt | Tracked, 7–10 Business Days",
        description:
          "Research peptides delivered to Frankfurt and the Rhine-Main area in 7–10 business days: Westend, Nordend, Sachsenhausen, Bornheim, Offenbach, Bad Homburg.",
        h1: "Research peptides delivered to Frankfurt",
        intro:
          "Frankfurt orders arrive as tracked parcels within 7 to 10 business days, at home in Nordend or at the office in the banking district. Every compound comes as a lyophilized vial or a pre-filled pen, with prices in euros, and there is no shop: delivery is the only way we work.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Frankfurt and the Rhine-Main area",
            p: [
              "We deliver across the city: the Innenstadt and banking district, Westend, Nordend, Bornheim and Ostend, Sachsenhausen on the south bank, Bockenheim, Gallus and the Europaviertel, Niederrad, Höchst and Riedberg.",
              "The tracked service reaches the whole Rhine-Main area as well, including Offenbach, Bad Homburg, Oberursel, Eschborn, Bad Vilbel and Neu-Isenburg.",
            ],
          },
          {
            h: "A commuter city: think about the address",
            p: [
              "Frankfurt's working population swells every morning with commuters, and plenty of residents spend long days at the office. If nobody is home in the daytime, an office address with a staffed reception is often the simplest option. Otherwise, a missed parcel usually goes to a neighbour, a parcel shop or a Packstation.",
              "The Rhine-Main area is among the warmer parts of Germany in summer. Collect parcels promptly on hot days, keep sealed vials somewhere cool and put reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "Endurance athletes and long working days",
            p: [
              "The city hosts an Ironman race every summer and the Frankfurt Marathon each October, and the Main riverbanks and Taunus trails are full of runners and cyclists before and after office hours. For that crowd, the matching research areas are longevity and cellular energy (NAD+, SS-31, MOTS-c) and GH secretagogue research (CJC-1295 + Ipamorelin, Tesamorelin).",
              "Metabolic research with Retatrutide is part of the same catalogue, with each compound offered as a vial or a pen.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Frankfurt take?", "7 to 10 business days by tracked international shipping, in Frankfurt and across the Rhine-Main area."],
          ["Can you deliver to my office in Frankfurt?", "Yes. An office with a staffed reception is often the most reliable address in a city where many people are out all day."],
          ["Is the packaging discreet?", "Yes. Parcels are plain, with nothing on the outside that names the contents."],
          ["How do I pay?", "By card or crypto at checkout, with prices in euros. Shipping is shown at checkout and is free above a basket threshold."],
        ],
      },
      de: {
        title: "Forschungspeptide Frankfurt | 7–10 Werktage, mit Tracking",
        description:
          "Forschungspeptide mit Lieferung nach Frankfurt und ins Rhein-Main-Gebiet in 7–10 Werktagen: Westend, Nordend, Sachsenhausen, Bornheim, Offenbach, Bad Homburg.",
        h1: "Forschungspeptide mit Lieferung nach Frankfurt",
        intro:
          "Ob nach Hause ins Nordend oder ins Büro im Bankenviertel: Bestellungen nach Frankfurt kommen als Paket mit Sendungsverfolgung innerhalb von 7 bis 10 Werktagen. Jede Substanz gibt es als lyophilisiertes Vial oder als Fertigpen, die Preise in Euro. Einen Laden gibt es nicht – wir liefern ausschließlich.",
        delivery: "7–10 Werktage, mit Sendungsverfolgung",
        sections: [
          {
            h: "Frankfurt und das Rhein-Main-Gebiet",
            p: [
              "Wir liefern in ganz Frankfurt: Innenstadt und Bankenviertel, Westend, Nordend, Bornheim und Ostend, Sachsenhausen auf der anderen Mainseite, Bockenheim, Gallus und Europaviertel, Niederrad, Höchst und Riedberg.",
              "Ebenso ins gesamte Rhein-Main-Gebiet, etwa nach Offenbach, Bad Homburg, Oberursel, Eschborn, Bad Vilbel oder Neu-Isenburg.",
            ],
          },
          {
            h: "Pendlerstadt: Die Lieferadresse macht den Unterschied",
            p: [
              "Jeden Morgen pendeln Zehntausende nach Frankfurt, und auch viele Frankfurter sind tagsüber lange im Büro. Wenn zu Hause niemand ist, ist eine Büroadresse mit besetztem Empfang oft die einfachste Lösung. Sonst geht ein verpasstes Paket in der Regel an einen Nachbarn, in den Paketshop oder die Packstation.",
              "Das Rhein-Main-Gebiet gehört im Sommer zu den wärmeren Regionen Deutschlands. Holen Sie Pakete an heißen Tagen zügig ab, lagern Sie verschlossene Vials kühl und rekonstituiertes Material im Kühlschrank bei 2–8 °C.",
            ],
          },
          {
            h: "Ausdauersport und lange Arbeitstage",
            p: [
              "Frankfurt ist jeden Sommer Austragungsort eines Ironman-Rennens und jeden Oktober des Frankfurt-Marathons, und vor und nach Büroschluss sind Mainufer und Taunus-Trails voller Läufer und Radfahrer. Passend dazu: Langlebigkeits- und Zellenergieforschung (NAD+, SS-31, MOTS-c) sowie GH-Sekretagoga-Forschung (CJC-1295 + Ipamorelin, Tesamorelin).",
              "Auch Stoffwechselforschung mit Retatrutide gehört zum Sortiment – jede Substanz wahlweise als Vial oder als Pen.",
            ],
          },
        ],
        faq: [
          ["Wie lange dauert die Lieferung nach Frankfurt?", "7 bis 10 Werktage als internationales Paket mit Sendungsverfolgung – in Frankfurt und im gesamten Rhein-Main-Gebiet."],
          ["Können Sie an meine Büroadresse in Frankfurt liefern?", "Ja. Ein Büro mit besetztem Empfang ist in einer Stadt, in der viele tagsüber unterwegs sind, oft die zuverlässigste Adresse."],
          ["Ist die Verpackung diskret?", "Ja. Die Pakete sind neutral, außen steht nichts, was auf den Inhalt hinweist."],
          ["Wie bezahle ich?", "Per Karte oder Krypto an der Kasse, die Preise sind in Euro. Die Versandkosten sehen Sie an der Kasse; ab einem bestimmten Warenkorbwert ist der Versand kostenlos."],
        ],
      },
    },
  },

  // ───────────────────────────── COLOGNE ─────────────────────────────
  {
    slug: "cologne",
    type: "city",
    country: "germany",
    locales: ["en", "de"],
    featured: DE_COLOGNE,
    name: { en: "Cologne", de: "Köln" },
    content: {
      en: {
        title: "Research Peptides Cologne | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Cologne in 7–10 business days: Ehrenfeld, Belgisches Viertel, Südstadt, Nippes, Sülz, Deutz and nearby towns. Vials and pens.",
        h1: "Research peptides delivered to Cologne",
        intro:
          "Cologne orders arrive as tracked parcels within 7 to 10 business days, in every Veedel on both banks of the Rhine. Every compound comes as a lyophilized vial or a pre-filled pen, with prices in euros. There is no shop and no pick-up, only delivery to your door.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Every Veedel, both sides of the Rhine",
            p: [
              "On the left bank we cover the Altstadt, the Belgisches Viertel, Ehrenfeld, Nippes, the Südstadt, Sülz, Lindenthal, Braunsfeld and Rodenkirchen. On the right bank, Deutz, Kalk, Mülheim and Porz.",
              "The tracked service also reaches the towns around Cologne, such as Leverkusen, Bergisch Gladbach, Hürth, Frechen, Pulheim and Brühl.",
            ],
          },
          {
            h: "Neighbours, Büdchen and the carnival week",
            p: [
              "Cologne's Veedel culture works in your favour: a neighbour will often take in a parcel, and the corner Büdchen frequently doubles as a parcel shop. Otherwise, a missed delivery goes to a Packstation, with a note in your letterbox. During the street carnival, from Weiberfastnacht to Rosenmontag, many people are out and some businesses close, so time an order to arrive before or after it.",
              "Summers in the Rhine valley can be hot and humid. Keep sealed vials somewhere cool and reconstituted material in the fridge at 2–8°C, away from light.",
            ],
          },
          {
            h: "Germany's sports-science city",
            p: [
              "Cologne is home to the German Sport University, the country's only university dedicated entirely to sport, and the Koelnmesse hosts FIBO, one of the world's biggest fitness trade fairs. Add the Rhine riverside runs and a dense network of strength gyms and CrossFit boxes, and the research areas that fit are recovery and tissue research (BPC-157, TB-500, KLOW, KPV) and GH secretagogue research (CJC-1295 + Ipamorelin, Tesamorelin).",
              "Metabolic research with Retatrutide is part of the same catalogue, as a vial or as a pen.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Cologne take?", "7 to 10 business days by tracked international shipping, on both banks of the Rhine and in the surrounding towns."],
          ["What if I am out when the parcel comes?", "It usually goes to a neighbour, a parcel shop or a Packstation, and you get a note telling you where to collect it."],
          ["Can I order by WhatsApp?", "Yes. Send the product, size and format, and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
      de: {
        title: "Forschungspeptide Köln | Lieferung in 7–10 Werktagen",
        description:
          "Forschungspeptide mit Lieferung nach Köln in 7–10 Werktagen: Ehrenfeld, Belgisches Viertel, Südstadt, Nippes, Sülz, Deutz und Umland. Vials und Fertigpens.",
        h1: "Forschungspeptide mit Lieferung nach Köln",
        intro:
          "Bestellungen nach Köln kommen als Paket mit Sendungsverfolgung innerhalb von 7 bis 10 Werktagen – in jedes Veedel, links- wie rechtsrheinisch. Jede Substanz gibt es als lyophilisiertes Vial oder als Fertigpen, die Preise in Euro. Laden und Abholung gibt es nicht, nur die Lieferung bis zur Haustür.",
        delivery: "7–10 Werktage, mit Sendungsverfolgung",
        sections: [
          {
            h: "Jedes Veedel, links und rechts vom Rhein",
            p: [
              "Linksrheinisch liefern wir in die Altstadt, ins Belgische Viertel, nach Ehrenfeld, Nippes, in die Südstadt, nach Sülz, Lindenthal, Braunsfeld und Rodenkirchen. Rechtsrheinisch nach Deutz, Kalk, Mülheim und Porz.",
              "Auch das Kölner Umland ist abgedeckt, etwa Leverkusen, Bergisch Gladbach, Hürth, Frechen, Pulheim oder Brühl.",
            ],
          },
          {
            h: "Nachbarn, Büdchen und die fünfte Jahreszeit",
            p: [
              "Im Veedel hilft man sich: Oft nimmt der Nachbar das Paket an, und das Büdchen an der Ecke ist häufig gleichzeitig Paketshop. Sonst landet eine verpasste Sendung in der Packstation, mit Benachrichtigung im Briefkasten. Rund um den Straßenkarneval, von Weiberfastnacht bis Rosenmontag, sind viele unterwegs und manche Geschäfte geschlossen – planen Sie die Lieferung lieber davor oder danach.",
              "Im Rheintal kann der Sommer schwülwarm werden. Verschlossene Vials lagern Sie kühl, rekonstituiertes Material lichtgeschützt im Kühlschrank bei 2–8 °C.",
            ],
          },
          {
            h: "Deutschlands Sportwissenschaftsstadt",
            p: [
              "In Köln sitzt die Deutsche Sporthochschule, die einzige reine Sportuniversität des Landes, und die Koelnmesse ist Gastgeber der FIBO, einer der größten Fitnessmessen der Welt. Dazu die Laufstrecken am Rheinufer und eine dichte Szene aus Kraftstudios und CrossFit-Boxen. Thematisch passen hier Regenerations- und Gewebeforschung (BPC-157, TB-500, KLOW, KPV) sowie GH-Sekretagoga-Forschung (CJC-1295 + Ipamorelin, Tesamorelin).",
              "Auch Stoffwechselforschung mit Retatrutide gehört zum Sortiment – als Vial oder als Pen.",
            ],
          },
        ],
        faq: [
          ["Wie lange dauert die Lieferung nach Köln?", "7 bis 10 Werktage als internationales Paket mit Sendungsverfolgung – links- und rechtsrheinisch und im Umland."],
          ["Was, wenn ich bei der Zustellung nicht da bin?", "Dann geht das Paket meist an einen Nachbarn, in einen Paketshop oder eine Packstation, und Sie erhalten eine Benachrichtigung, wo Sie es abholen können."],
          ["Kann ich per WhatsApp bestellen?", "Ja. Schicken Sie Produkt, Größe und Variante – wir bestätigen Verfügbarkeit und Lieferung, bevor Sie per Karte oder Krypto bezahlen."],
        ],
      },
    },
  },
];
