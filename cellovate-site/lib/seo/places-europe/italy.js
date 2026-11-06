// Italy: country hub + five city pages, served at /{lang}/peptides/{slug}.
// Same shape as lib/seo/places.js. Locales: English and Italian.

const IT_FEATURED = [
  "retatrutide-20mg",
  "tirzepatide",
  "bpc-157-tb-500-blend",
  "cjc-1295-without-dac-ipamorelin",
  "nad-1000mg",
  "ghk-cu-50mg",
];

const IT_LONGEVITY_FIRST = [
  "nad-1000mg",
  "mots-c-10mg",
  "ss-31",
  "semax-10mg",
  "retatrutide-20mg",
  "selank-10mg",
];

const IT_ROME = [
  "retatrutide-20mg",
  "bpc-157-tb-500-blend",
  "klow-80mg",
  "cjc-1295-without-dac-ipamorelin",
  "tirzepatide",
  "nad-1000mg",
];

const IT_RECOVERY_FIRST = [
  "bpc-157-tb-500-blend",
  "tb-500-10mg",
  "bpc-157-10mg",
  "klow-80mg",
  "tesamorelin-10mg",
  "mots-c-10mg",
];

const IT_NAPLES = [
  "retatrutide-20mg",
  "tirzepatide",
  "bpc-157-tb-500-blend",
  "kpv-alpha-10mg",
  "cjc-1295-without-dac-ipamorelin",
  "klow-80mg",
];

const IT_FLORENCE = [
  "ghk-cu-50mg",
  "glow-70mg-bpc157-tb500-ghk-cu",
  "nad-1000mg",
  "semax-10mg",
  "retatrutide-20mg",
  "ss-31",
];

export const ITALY_PLACES = [
  // ───────────────────────────── ITALY (country hub) ─────────────────────────────
  {
    slug: "italy",
    type: "country",
    country: "italy",
    locales: ["en", "it"],
    featured: IT_FEATURED,
    name: { en: "Italy", it: "Italia" },
    content: {
      en: {
        title: "Research Peptides in Italy | Tracked 7–10 Day Delivery",
        description:
          "Research peptides delivered across Italy in 7–10 business days, tracked and in plain packaging. Lyophilized vials or pre-filled pens, prices in euro.",
        h1: "Research peptides delivered across Italy",
        intro:
          "Cellovate delivers research peptides to every region of Italy, from Lombardy and Piedmont down to Campania, Sicily and Sardinia. Parcels travel by tracked international delivery and arrive in 7 to 10 business days, in plain packaging. Every compound comes as a lyophilized vial or a pre-filled multi-dose pen, with prices shown in euro.",
        delivery: "7–10 business days, tracked · Plain packaging",
        sections: [
          {
            h: "How delivery to Italy works",
            p: [
              "Each order is sent with a tracking number from the moment it is dispatched, so you can follow it all the way to your door. Delivery takes 7 to 10 business days to mainland Italy and the islands alike.",
              "Like any international import, a parcel may be inspected by customs on its way in. The 7 to 10 day window already allows for that, so a short pause at that stage is normal and shows up in the tracking. The box itself is plain, with nothing on the outside that names the contents.",
            ],
          },
          {
            h: "Vials or pre-filled pens",
            p: [
              "Every compound is offered in two formats. The vial is the standard lyophilized powder, which stays stable through ordinary transit. The pre-filled multi-dose pen skips the reconstitution step entirely, which many researchers prefer when the workspace is a city flat rather than a dedicated bench.",
              "Whichever you choose, keep sealed material somewhere cool and dark once it arrives, and store anything reconstituted at 2–8°C. In an Italian July or August that means the fridge, not a kitchen shelf.",
            ],
          },
          {
            h: "Research areas we cover",
            p: [
              "The catalogue spans the main areas of peptide research: metabolic research with Retatrutide and Tirzepatide, recovery and tissue research with BPC-157, TB-500, KPV and the KLOW and GLOW blends, and GH secretagogue research with CJC-1295 + Ipamorelin and Tesamorelin.",
              "Alongside these sit longevity and cellular-energy compounds (NAD+, MOTS-c, SS-31), cognitive research peptides (Semax, Selank) and the copper peptide GHK-Cu. All products are sold strictly for research use.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Italy take?", "7 to 10 business days by tracked international delivery, to every region including Sicily and Sardinia."],
          ["How do I pay?", "By card or crypto at checkout. Prices are shown in euro, and the shipping cost appears at checkout; above a certain basket value, shipping is free."],
          ["Can I order on WhatsApp?", "Yes. Send us the products and formats you want and we confirm stock and the delivery estimate before you pay."],
          ["Is there a shop or pick-up point in Italy?", "No. We work by delivery only, straight to the address you give at checkout."],
        ],
      },
      it: {
        title: "Peptidi per la ricerca in Italia | Consegna in 7–10 giorni",
        description:
          "Peptidi per la ricerca consegnati in tutta Italia in 7–10 giorni lavorativi, tracciati e in pacco anonimo. Flaconi o penne pre-riempite, prezzi in euro.",
        h1: "Peptidi per la ricerca con consegna in tutta Italia",
        intro:
          "Cellovate consegna peptidi per la ricerca in ogni regione d’Italia, dalla Lombardia al Piemonte fino a Campania, Sicilia e Sardegna. I pacchi viaggiano con spedizione internazionale tracciata e arrivano in 7–10 giorni lavorativi, in un imballo anonimo. Ogni composto è disponibile in flacone liofilizzato o in penna multidose pre-riempita, con prezzi in euro.",
        delivery: "7–10 giorni lavorativi, con tracciamento · Pacco anonimo",
        sections: [
          {
            h: "Come funziona la consegna in Italia",
            p: [
              "Ogni ordine parte con un codice di tracciamento, così puoi seguirne il percorso fino alla porta di casa. I tempi sono di 7–10 giorni lavorativi, sia sulla penisola sia nelle isole.",
              "Come qualsiasi spedizione internazionale, il pacco può essere ispezionato dalla dogana durante il tragitto. La finestra di 7–10 giorni tiene già conto di questo passaggio: una breve sosta a quel punto è normale e compare nel tracciamento. L’imballo è neutro, senza alcuna indicazione esterna sul contenuto.",
            ],
          },
          {
            h: "Flacone o penna pre-riempita",
            p: [
              "Ogni composto è proposto in due formati. Il flacone contiene la classica polvere liofilizzata, che resta stabile durante un normale trasporto. La penna multidose pre-riempita elimina del tutto la fase di ricostituzione: una comodità apprezzata da chi lavora in un appartamento in città e non su un banco attrezzato.",
              "In entrambi i casi, una volta ricevuto il materiale conservalo al fresco e al riparo dalla luce; tutto ciò che è stato ricostituito va tenuto a 2–8°C. Con il caldo di luglio e agosto significa frigorifero, non la mensola della cucina.",
            ],
          },
          {
            h: "Le aree di ricerca",
            p: [
              "Il catalogo copre i principali filoni della ricerca sui peptidi: ricerca metabolica con Retatrutide e Tirzepatide, ricerca su recupero e tessuti con BPC-157, TB-500, KPV e i blend KLOW e GLOW, ricerca sui secretagoghi del GH con CJC-1295 + Ipamorelin e Tesamorelin.",
              "Completano la gamma i composti per la ricerca su longevità ed energia cellulare (NAD+, MOTS-c, SS-31), i peptidi per la ricerca cognitiva (Semax, Selank) e il peptide di rame GHK-Cu. Tutti i prodotti sono destinati esclusivamente alla ricerca.",
            ],
          },
        ],
        faq: [
          ["Quanto tempo richiede la consegna in Italia?", "7–10 giorni lavorativi con spedizione internazionale tracciata, in tutte le regioni, Sicilia e Sardegna comprese."],
          ["Come si paga?", "Con carta o in crypto al checkout. I prezzi sono in euro e il costo di spedizione compare al checkout; oltre una certa soglia di carrello la spedizione è gratuita."],
          ["Posso ordinare su WhatsApp?", "Sì. Scrivici quali prodotti e formati ti servono: confermiamo disponibilità e tempi di consegna prima del pagamento."],
          ["C’è un negozio o un punto di ritiro in Italia?", "No. Lavoriamo solo con consegna, direttamente all’indirizzo indicato al checkout."],
        ],
      },
    },
  },

  // ───────────────────────────── MILAN ─────────────────────────────
  {
    slug: "milan",
    type: "city",
    country: "italy",
    locales: ["en", "it"],
    featured: IT_LONGEVITY_FIRST,
    name: { en: "Milan", it: "Milano" },
    content: {
      en: {
        title: "Research Peptides Milan | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Milan in 7–10 business days: Brera, Navigli, Isola, Porta Romana, CityLife, Città Studi, Monza and hinterland. Vials and pens.",
        h1: "Research peptides delivered to Milan",
        intro:
          "Milan orders arrive by tracked international delivery in 7 to 10 business days, in plain packaging, anywhere from the centre to the towns of the hinterland. There is no shop to visit: everything goes straight to your flat, your office or your building’s portineria.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Across the city and the hinterland",
            p: [
              "We deliver to every part of Milan: Brera and the Quadrilatero, Porta Nuova, Isola and Garibaldi, the Navigli and Porta Genova, Porta Romana, CityLife and De Angeli, Città Studi and Lambrate, NoLo and Bicocca. The metropolitan area is covered too, from Sesto San Giovanni, Cinisello Balsamo and Monza to Rho, Assago and San Donato Milanese.",
            ],
          },
          {
            h: "Portineria, offices and the August question",
            p: [
              "Many Milan condomini still have a portiere, which makes receiving a parcel easy: it waits at the portineria until you collect it. If your building has none, an office address with a staffed reception is often the safer option, especially for a tracked parcel that needs a signature.",
              "Keep the calendar in mind. In August a lot of Milan empties out and some portinerie close or run reduced hours, so check the tracking and plan around your holidays. Milan summers are hot and humid; once it arrives, store sealed vials somewhere cool and keep reconstituted material at 2–8°C.",
            ],
          },
          {
            h: "Milan’s longevity and performance crowd",
            p: [
              "Milan has a dense mix of boutique gyms, functional training studios and runners on the paths of Parco Sempione, Monte Stella and the Idroscalo. Alongside the classic recovery compounds, interest here often turns to longevity and cellular-energy research (NAD+, MOTS-c, SS-31) and to cognitive research peptides such as Semax and Selank.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Milan take?", "7 to 10 business days by tracked international delivery, including Monza and the towns of the metropolitan area."],
          ["Can I have the parcel left with my portiere?", "Yes. If your building has a portineria, the courier can leave it there and you collect it when it suits you."],
          ["Can I deliver to my office in Milan?", "Yes. Enter the office address at checkout; a staffed reception is often the most reliable option."],
          ["Is there a pick-up point in Milan?", "No. We work by delivery only, straight to the address you choose."],
        ],
      },
      it: {
        title: "Peptidi per la ricerca a Milano | Consegna tracciata",
        description:
          "Peptidi per la ricerca consegnati a Milano in 7–10 giorni lavorativi: Brera, Navigli, Isola, Porta Romana, CityLife, Città Studi, Monza e l’hinterland.",
        h1: "Peptidi per la ricerca con consegna a Milano",
        intro:
          "A Milano gli ordini arrivano con spedizione internazionale tracciata in 7–10 giorni lavorativi, in un pacco anonimo, dal centro fino ai comuni dell’hinterland. Non c’è un negozio dove passare: tutto viene consegnato a casa, in ufficio o in portineria.",
        delivery: "7–10 giorni lavorativi, con tracciamento",
        sections: [
          {
            h: "Tutta la città e l’hinterland",
            p: [
              "Consegniamo in ogni zona di Milano: Brera e il Quadrilatero, Porta Nuova, Isola e Garibaldi, i Navigli e Porta Genova, Porta Romana, CityLife e De Angeli, Città Studi e Lambrate, NoLo e Bicocca. Copriamo anche l’area metropolitana, da Sesto San Giovanni, Cinisello Balsamo e Monza fino a Rho, Assago e San Donato Milanese.",
            ],
          },
          {
            h: "Portineria, ufficio e il nodo di agosto",
            p: [
              "Molti condomini milanesi hanno ancora il portiere, e ricevere un pacco diventa semplice: resta in portineria finché non passi a ritirarlo. Se il tuo stabile non ce l’ha, un indirizzo d’ufficio con reception presidiata è spesso la scelta più sicura, soprattutto per una spedizione tracciata che richiede la firma.",
              "Occhio al calendario: ad agosto Milano si svuota e alcune portinerie chiudono o riducono l’orario, quindi controlla il tracciamento e organizzati in base alle ferie. L’estate milanese è calda e afosa: appena ricevuti, conserva i flaconi sigillati al fresco e il materiale ricostituito a 2–8°C.",
            ],
          },
          {
            h: "La Milano di longevità e performance",
            p: [
              "Milano conta una fitta rete di palestre boutique, studi di allenamento funzionale e runner che macinano chilometri tra Parco Sempione, Monte Stella e l’Idroscalo. Accanto ai classici composti per il recupero, qui l’interesse va spesso alla ricerca su longevità ed energia cellulare (NAD+, MOTS-c, SS-31) e ai peptidi per la ricerca cognitiva come Semax e Selank.",
            ],
          },
        ],
        faq: [
          ["Quanto ci vuole per la consegna a Milano?", "7–10 giorni lavorativi con spedizione internazionale tracciata, compresi Monza e i comuni dell’area metropolitana."],
          ["Il corriere può lasciare il pacco al portiere?", "Sì. Se il tuo palazzo ha la portineria, il pacco può essere lasciato lì e lo ritiri quando ti è comodo."],
          ["Posso farmi consegnare in ufficio a Milano?", "Certo. Inserisci l’indirizzo dell’ufficio al checkout: una reception presidiata è spesso la soluzione più affidabile."],
          ["C’è un punto di ritiro a Milano?", "No. Lavoriamo solo con consegna, direttamente all’indirizzo che scegli."],
        ],
      },
    },
  },

  // ───────────────────────────── ROME ─────────────────────────────
  {
    slug: "rome",
    type: "city",
    country: "italy",
    locales: ["en", "it"],
    featured: IT_ROME,
    name: { en: "Rome", it: "Roma" },
    content: {
      en: {
        title: "Research Peptides Rome | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Rome in 7–10 business days: Prati, Parioli, Trastevere, Monti, EUR, San Giovanni, Ostia and the Castelli Romani. Vials and pens.",
        h1: "Research peptides delivered to Rome",
        intro:
          "Rome orders travel by tracked international delivery and arrive in 7 to 10 business days, in plain packaging, whether you live inside the Aurelian Walls or out beyond the GRA. Delivery is the only way to order: there is no shop and no pick-up point.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Every quartiere, inside and outside the GRA",
            p: [
              "We deliver across Rome: Prati and Della Vittoria, Parioli and Flaminio, Trastevere and Monteverde, Monti and Esquilino, San Giovanni and Appio, Pigneto, Ostiense and Garbatella, EUR and Tuscolano. Ostia and the coast are covered, as are Fiumicino, Tivoli, Guidonia and the Castelli Romani towns such as Frascati.",
            ],
          },
          {
            h: "Portieri, the ZTL and Roman summers",
            p: [
              "Plenty of Roman palazzi have a portiere, and that is the easiest way to receive a parcel. In buildings without one, make sure your name is clearly on the citofono and the letterbox, because couriers working the centro storico and its ZTL have tight rounds and little time to search.",
              "Rome summers regularly pass 35°C, and a top-floor flat can be hotter still. Keep sealed vials somewhere cool and dark, store reconstituted material at 2–8°C, and do not leave the parcel in a car or on a scooter.",
            ],
          },
          {
            h: "A city that trains outdoors",
            p: [
              "Romans run along the Lungotevere, through Villa Borghese and Villa Pamphili and around the Circo Massimo, and the city has become one of Italy’s padel capitals alongside a growing number of CrossFit and functional boxes. Recovery research (BPC-157, TB-500, KLOW) and metabolic research with Retatrutide and Tirzepatide are the areas this crowd asks about most.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Rome take?", "7 to 10 business days by tracked international delivery, including Ostia, Fiumicino and the Castelli Romani."],
          ["I live in the centro storico, inside the ZTL. Can you deliver?", "Yes. Couriers deliver inside the ZTL; a clear name on the citofono or a portiere makes the handover quicker."],
          ["Can I order on WhatsApp?", "Yes. Tell us what you need and we confirm stock and the delivery estimate before you pay by card or crypto."],
        ],
      },
      it: {
        title: "Peptidi per la ricerca a Roma | Consegna in 7–10 giorni",
        description:
          "Peptidi per la ricerca consegnati a Roma in 7–10 giorni lavorativi: Prati, Parioli, Trastevere, Monti, EUR, San Giovanni, Ostia e Castelli Romani.",
        h1: "Peptidi per la ricerca con consegna a Roma",
        intro:
          "A Roma gli ordini viaggiano con spedizione internazionale tracciata e arrivano in 7–10 giorni lavorativi, in un pacco anonimo, che tu abiti dentro le Mura Aureliane o fuori dal GRA. Si ordina solo con consegna: niente negozio, niente punto di ritiro.",
        delivery: "7–10 giorni lavorativi, con tracciamento",
        sections: [
          {
            h: "Tutti i quartieri, dentro e fuori il GRA",
            p: [
              "Consegniamo in tutta Roma: Prati e Della Vittoria, Parioli e Flaminio, Trastevere e Monteverde, Monti ed Esquilino, San Giovanni e Appio, Pigneto, Ostiense e Garbatella, EUR e Tuscolano. Arriviamo anche a Ostia e sul litorale, a Fiumicino, Tivoli, Guidonia e nei Castelli Romani, Frascati compresa.",
            ],
          },
          {
            h: "Portieri, ZTL ed estati romane",
            p: [
              "Tanti palazzi romani hanno il portiere, ed è il modo più semplice per ricevere un pacco. Dove non c’è, assicurati che il tuo nome sia ben leggibile sul citofono e sulla cassetta delle lettere: i corrieri che girano nel centro storico e nella ZTL hanno giri serrati e poco tempo per cercare.",
              "D’estate a Roma si superano spesso i 35°C, e un attico può essere ancora più caldo. Conserva i flaconi sigillati in un posto fresco e buio, il materiale ricostituito a 2–8°C, e non lasciare mai il pacco in macchina o sotto la sella dello scooter.",
            ],
          },
          {
            h: "Una città che si allena all’aperto",
            p: [
              "I romani corrono sul Lungotevere, a Villa Borghese, a Villa Pamphili e intorno al Circo Massimo, e la città è diventata una delle capitali italiane del padel, con sempre più box di CrossFit e allenamento funzionale. Ricerca sul recupero (BPC-157, TB-500, KLOW) e ricerca metabolica con Retatrutide e Tirzepatide sono i temi che questo pubblico chiede di più.",
            ],
          },
        ],
        faq: [
          ["Quanto ci vuole per la consegna a Roma?", "7–10 giorni lavorativi con spedizione internazionale tracciata, compresi Ostia, Fiumicino e i Castelli Romani."],
          ["Abito in centro, dentro la ZTL. Consegnate lo stesso?", "Sì. I corrieri consegnano anche in ZTL; un nome chiaro sul citofono o la presenza del portiere rendono la consegna più rapida."],
          ["Posso ordinare su WhatsApp?", "Sì. Scrivici cosa ti serve: confermiamo disponibilità e tempi di consegna prima del pagamento con carta o crypto."],
        ],
      },
    },
  },

  // ───────────────────────────── TURIN ─────────────────────────────
  {
    slug: "turin",
    type: "city",
    country: "italy",
    locales: ["en", "it"],
    featured: IT_RECOVERY_FIRST,
    name: { en: "Turin", it: "Torino" },
    content: {
      en: {
        title: "Research Peptides Turin | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Turin in 7–10 business days: Crocetta, San Salvario, Vanchiglia, Cit Turin, Lingotto, Moncalieri, Rivoli and the valleys.",
        h1: "Research peptides delivered to Turin",
        intro:
          "Turin orders arrive by tracked international delivery in 7 to 10 business days, in plain packaging, across the city and the towns of the cintura. Everything is delivered to your door or your building’s portineria; there is no shop or pick-up point.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "City, cintura and the valleys",
            p: [
              "We deliver to the whole of Turin: the Centro and the Quadrilatero Romano, Crocetta, San Salvario, Vanchiglia and Borgo Po, Cit Turin and San Donato, Santa Rita, Lingotto and Mirafiori, Aurora and Barriera di Milano. The surrounding towns are covered too, including Moncalieri, Nichelino, Collegno, Grugliasco, Rivoli, Settimo Torinese and Chieri, along with addresses up the Val di Susa.",
            ],
          },
          {
            h: "Courtyards, portinerie and two kinds of weather",
            p: [
              "Turin’s classic palazzi are built around inner courtyards, often behind a heavy portone, and many still have a portineria where the courier can leave the parcel. Without one, check that your name is on the citofono, since a locked entrance is the most common reason a delivery gets rescheduled.",
              "The climate swings both ways: damp, foggy winters and hot, muggy summers in the Po valley. Sealed lyophilized vials handle ordinary transit well; once at home, keep them cool and dark and store reconstituted material at 2–8°C.",
            ],
          },
          {
            h: "Mountains on the doorstep",
            p: [
              "With the Alps less than an hour away, Turin trains for the slopes and the climbs: skiing at Sestriere and Bardonecchia, road cycling in the hills, trail running in the valleys, and rowing clubs on the Po along the Valentino. That makes recovery and tissue research the natural focus here, with BPC-157, TB-500 and the KLOW blend leading, followed by GH secretagogue research such as Tesamorelin.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Turin take?", "7 to 10 business days by tracked international delivery, including the cintura towns and the Val di Susa."],
          ["My building has a locked courtyard. What should I do?", "Make sure your name is on the citofono, or use an address with a portineria or a staffed reception."],
          ["Do you have a shop in Turin?", "No. We work by delivery only, straight to the address you enter at checkout."],
        ],
      },
      it: {
        title: "Peptidi per la ricerca a Torino | Consegna in 7–10 giorni",
        description:
          "Peptidi per la ricerca consegnati a Torino in 7–10 giorni lavorativi: Crocetta, San Salvario, Vanchiglia, Cit Turin, Lingotto, Moncalieri, Rivoli e valli.",
        h1: "Peptidi per la ricerca con consegna a Torino",
        intro:
          "A Torino gli ordini arrivano con spedizione internazionale tracciata in 7–10 giorni lavorativi, in un pacco anonimo, in città e nei comuni della cintura. Consegniamo a domicilio o in portineria: non c’è un negozio né un punto di ritiro.",
        delivery: "7–10 giorni lavorativi, con tracciamento",
        sections: [
          {
            h: "Città, cintura e valli",
            p: [
              "Consegniamo in tutta Torino: Centro e Quadrilatero Romano, Crocetta, San Salvario, Vanchiglia e Borgo Po, Cit Turin e San Donato, Santa Rita, Lingotto e Mirafiori, Aurora e Barriera di Milano. Copriamo anche la prima cintura, con Moncalieri, Nichelino, Collegno, Grugliasco, Rivoli, Settimo Torinese e Chieri, oltre agli indirizzi in Val di Susa.",
            ],
          },
          {
            h: "Cortili, portinerie e due climi",
            p: [
              "I palazzi storici torinesi si sviluppano attorno a cortili interni, spesso dietro un portone pesante, e molti hanno ancora la portineria dove il corriere può lasciare il pacco. Se non c’è, controlla che il tuo nome sia sul citofono: un portone chiuso è il motivo più frequente di una consegna rimandata.",
              "Il clima va da un estremo all’altro: inverni umidi e nebbiosi, estati calde e afose come in tutta la pianura padana. I flaconi liofilizzati sigillati reggono bene il trasporto ordinario; una volta a casa, tienili al fresco e al buio e conserva il materiale ricostituito a 2–8°C.",
            ],
          },
          {
            h: "Le montagne a due passi",
            p: [
              "Con le Alpi a meno di un’ora, Torino si allena per piste e salite: sci a Sestriere e Bardonecchia, bici da strada in collina, trail nelle valli e canottaggio sul Po all’altezza del Valentino. Per questo qui la ricerca su recupero e tessuti è al centro dell’attenzione, con BPC-157, TB-500 e il blend KLOW in prima fila, seguiti dalla ricerca sui secretagoghi del GH come la Tesamorelin.",
            ],
          },
        ],
        faq: [
          ["Quanto ci vuole per la consegna a Torino?", "7–10 giorni lavorativi con spedizione internazionale tracciata, compresi i comuni della cintura e la Val di Susa."],
          ["Il mio palazzo ha il cortile chiuso. Come faccio?", "Verifica che il tuo nome sia sul citofono, oppure indica un indirizzo con portineria o reception presidiata."],
          ["Avete un negozio a Torino?", "No. Lavoriamo solo con consegna, direttamente all’indirizzo inserito al checkout."],
        ],
      },
    },
  },

  // ───────────────────────────── NAPLES ─────────────────────────────
  {
    slug: "naples",
    type: "city",
    country: "italy",
    locales: ["en", "it"],
    featured: IT_NAPLES,
    name: { en: "Naples", it: "Napoli" },
    content: {
      en: {
        title: "Research Peptides Naples | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Naples in 7–10 business days: Chiaia, Vomero, Posillipo, Fuorigrotta, Centro Direzionale, Pozzuoli, Caserta and the coast.",
        h1: "Research peptides delivered to Naples",
        intro:
          "Naples orders arrive by tracked international delivery in 7 to 10 business days, in plain packaging, from the seafront of Chiaia to the towns around Vesuvius. We work by delivery only, so the parcel comes to your home, your office or your portiere.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "From the Vomero to the Vesuvian coast",
            p: [
              "We deliver across Naples: Chiaia and the Lungomare, Vomero and Arenella, Posillipo, Fuorigrotta and Bagnoli, the Centro Storico, the Centro Direzionale and Poggioreale. The wider area is covered too, from Pozzuoli and the Campi Flegrei to Casoria, Portici, Ercolano, Torre del Greco, Castellammare di Stabia and Caserta. For Ischia, Procida or Capri, message us on WhatsApp and we confirm the delivery estimate before you pay.",
            ],
          },
          {
            h: "Vicoli, palazzi and the southern heat",
            p: [
              "Many Neapolitan palazzi have a portiere, which is the simplest way to receive a parcel. In the narrow vicoli of the old centre or on the steep streets of the hills, a clear name on the citofono and a phone number at checkout help the courier find you first time.",
              "Naples summers are long and hot, and a parcel left on a balcony or in a car heats up fast. Keep sealed vials somewhere cool and dark and store reconstituted material at 2–8°C.",
            ],
          },
          {
            h: "A city of water and fight sports",
            p: [
              "Naples has deep roots in sport by the sea, with historic rowing, sailing and water polo clubs along the waterfront, and Campania has a long boxing tradition. Runners crowd Via Caracciolo at dawn, and gyms are full year-round. Metabolic research with Retatrutide and Tirzepatide and recovery research with BPC-157, TB-500 and KPV are the areas most asked about here.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Naples take?", "7 to 10 business days by tracked international delivery, including Pozzuoli, Caserta and the Vesuvian towns."],
          ["Do you deliver to Ischia, Capri and Procida?", "Message us on WhatsApp with your address and we confirm the delivery estimate before you pay."],
          ["How do I pay?", "By card or crypto at checkout, with prices shown in euro."],
          ["Can I collect the order in person?", "No. We work by delivery only, straight to your address."],
        ],
      },
      it: {
        title: "Peptidi per la ricerca a Napoli | Consegna in 7–10 giorni",
        description:
          "Peptidi per la ricerca consegnati a Napoli in 7–10 giorni lavorativi: Chiaia, Vomero, Posillipo, Fuorigrotta, Centro Direzionale, Pozzuoli, Caserta e la costa.",
        h1: "Peptidi per la ricerca con consegna a Napoli",
        intro:
          "A Napoli gli ordini arrivano con spedizione internazionale tracciata in 7–10 giorni lavorativi, in un pacco anonimo, dal lungomare di Chiaia ai comuni vesuviani. Lavoriamo solo con consegna: il pacco arriva a casa, in ufficio o dal portiere.",
        delivery: "7–10 giorni lavorativi, con tracciamento",
        sections: [
          {
            h: "Dal Vomero alla costa vesuviana",
            p: [
              "Consegniamo in tutta Napoli: Chiaia e il Lungomare, Vomero e Arenella, Posillipo, Fuorigrotta e Bagnoli, il Centro Storico, il Centro Direzionale e Poggioreale. Copriamo anche l’area metropolitana, da Pozzuoli e i Campi Flegrei a Casoria, Portici, Ercolano, Torre del Greco, Castellammare di Stabia e Caserta. Per Ischia, Procida o Capri scrivici su WhatsApp: confermiamo i tempi di consegna prima del pagamento.",
            ],
          },
          {
            h: "Vicoli, palazzi e caldo del Sud",
            p: [
              "Molti palazzi napoletani hanno il portiere, ed è il modo più semplice per ricevere un pacco. Nei vicoli del centro antico o sulle salite collinari, un nome ben leggibile sul citofono e un numero di telefono al checkout aiutano il corriere a trovarti al primo tentativo.",
              "L’estate napoletana è lunga e calda, e un pacco lasciato sul balcone o in macchina si scalda in fretta. Conserva i flaconi sigillati al fresco e al buio, e il materiale ricostituito a 2–8°C.",
            ],
          },
          {
            h: "Una città di mare e di sport da combattimento",
            p: [
              "Napoli ha radici profonde negli sport di mare, con storici circoli di canottaggio, vela e pallanuoto sul lungomare, e la Campania vanta una lunga tradizione nel pugilato. All’alba via Caracciolo si riempie di runner e le palestre lavorano tutto l’anno. Ricerca metabolica con Retatrutide e Tirzepatide e ricerca sul recupero con BPC-157, TB-500 e KPV sono i temi più richiesti.",
            ],
          },
        ],
        faq: [
          ["Quanto ci vuole per la consegna a Napoli?", "7–10 giorni lavorativi con spedizione internazionale tracciata, compresi Pozzuoli, Caserta e i comuni vesuviani."],
          ["Consegnate a Ischia, Capri e Procida?", "Scrivici su WhatsApp con il tuo indirizzo: confermiamo i tempi di consegna prima del pagamento."],
          ["Come si paga?", "Con carta o in crypto al checkout, con prezzi in euro."],
          ["Posso ritirare l’ordine di persona?", "No. Lavoriamo solo con consegna, direttamente al tuo indirizzo."],
        ],
      },
    },
  },

  // ───────────────────────────── FLORENCE ─────────────────────────────
  {
    slug: "florence",
    type: "city",
    country: "italy",
    locales: ["en", "it"],
    featured: IT_FLORENCE,
    name: { en: "Florence", it: "Firenze" },
    content: {
      en: {
        title: "Research Peptides Florence | Tracked Delivery 7–10 Days",
        description:
          "Research peptides delivered to Florence in 7–10 business days: Oltrarno, Santo Spirito, Campo di Marte, Le Cure, Novoli, Rifredi, Prato and Fiesole.",
        h1: "Research peptides delivered to Florence",
        intro:
          "Florence orders arrive by tracked international delivery in 7 to 10 business days, in plain packaging, from the historic centre to Prato and the hills around the city. There is no shop or pick-up point; everything comes straight to your door.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Centre, Oltrarno and the Piana",
            p: [
              "We deliver throughout Florence: the centro storico, Oltrarno with Santo Spirito and San Frediano, Campo di Marte, Le Cure and Coverciano, Gavinana, Novoli, Rifredi and Isolotto. Outside the city we cover Fiesole, Bagno a Ripoli, Scandicci, Sesto Fiorentino, Campi Bisenzio, Prato and Empoli.",
            ],
          },
          {
            h: "Old buildings and fierce summer heat",
            p: [
              "Much of central Florence lives in historic palazzi with no lift and no portiere, often inside the ZTL. A clear name on the citofono and a phone number at checkout make the courier’s job easier; if you are rarely home in the day, an office or a shop address where someone can sign is a sensible alternative.",
              "Sitting in the Arno basin, Florence has some of the most intense summer heat in the country, and top-floor flats under the roof tiles get hotter still. Keep sealed vials in a cool, dark place and store reconstituted material at 2–8°C.",
            ],
          },
          {
            h: "Students, cyclists and the Cascine",
            p: [
              "Florence mixes a large university and international student population with a strong outdoor culture: runners along the Arno and through the Parco delle Cascine, and cyclists heading out into the Chianti hills. Interest here leans towards copper peptide research with GHK-Cu and the GLOW blend, longevity research with NAD+ and SS-31, and cognitive research peptides such as Semax.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Florence take?", "7 to 10 business days by tracked international delivery, including Prato, Fiesole, Scandicci and Sesto Fiorentino."],
          ["My flat is in the ZTL. Is that a problem?", "No. Couriers deliver inside the ZTL; just make sure your name is clearly on the citofono."],
          ["Can I order on WhatsApp?", "Yes. Send us the products and formats you want and we confirm stock and the delivery estimate before you pay."],
        ],
      },
      it: {
        title: "Peptidi per la ricerca a Firenze | Consegna in 7–10 giorni",
        description:
          "Peptidi per la ricerca consegnati a Firenze in 7–10 giorni lavorativi: Oltrarno, Santo Spirito, Campo di Marte, Le Cure, Novoli, Rifredi, Prato e Fiesole.",
        h1: "Peptidi per la ricerca con consegna a Firenze",
        intro:
          "A Firenze gli ordini arrivano con spedizione internazionale tracciata in 7–10 giorni lavorativi, in un pacco anonimo, dal centro storico fino a Prato e alle colline intorno alla città. Niente negozio né punto di ritiro: consegniamo direttamente a casa tua.",
        delivery: "7–10 giorni lavorativi, con tracciamento",
        sections: [
          {
            h: "Centro, Oltrarno e Piana",
            p: [
              "Consegniamo in tutta Firenze: centro storico, Oltrarno con Santo Spirito e San Frediano, Campo di Marte, Le Cure e Coverciano, Gavinana, Novoli, Rifredi e Isolotto. Fuori città copriamo Fiesole, Bagno a Ripoli, Scandicci, Sesto Fiorentino, Campi Bisenzio, Prato ed Empoli.",
            ],
          },
          {
            h: "Palazzi storici e una delle estati più calde d’Italia",
            p: [
              "Nel centro di Firenze si vive spesso in palazzi storici senza ascensore e senza portiere, quasi sempre in ZTL. Un nome ben leggibile sul citofono e un numero di telefono al checkout semplificano il lavoro del corriere; se di giorno sei raramente a casa, un indirizzo d’ufficio o di negozio dove qualcuno possa firmare è un’alternativa sensata.",
              "Chiusa nella conca dell’Arno, Firenze ha alcune delle estati più calde del Paese, e le mansarde sotto i coppi lo sono ancora di più. Conserva i flaconi sigillati in un luogo fresco e buio, e il materiale ricostituito a 2–8°C.",
            ],
          },
          {
            h: "Studenti, ciclisti e le Cascine",
            p: [
              "Firenze unisce una grande popolazione universitaria e di studenti internazionali a una forte cultura dell’aria aperta: runner lungo l’Arno e nel Parco delle Cascine, ciclisti che partono verso le colline del Chianti. Qui l’interesse va soprattutto alla ricerca sui peptidi di rame con GHK-Cu e il blend GLOW, alla ricerca sulla longevità con NAD+ e SS-31 e ai peptidi per la ricerca cognitiva come Semax.",
            ],
          },
        ],
        faq: [
          ["Quanto ci vuole per la consegna a Firenze?", "7–10 giorni lavorativi con spedizione internazionale tracciata, compresi Prato, Fiesole, Scandicci e Sesto Fiorentino."],
          ["Abito in ZTL: è un problema?", "No. I corrieri consegnano anche in ZTL; basta che il tuo nome sia ben leggibile sul citofono."],
          ["Posso ordinare su WhatsApp?", "Sì. Scrivici quali prodotti e formati ti servono: confermiamo disponibilità e tempi di consegna prima del pagamento."],
        ],
      },
    },
  },
];
