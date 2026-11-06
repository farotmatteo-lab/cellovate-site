// Canada: country hub and five city pages, served at /{lang}/peptides/{slug}.
// Canadian English and Québec French. Same shape as lib/seo/places.js.

const CA_DELIVERY_EN = "7–10 business days, tracked · discreet plain packaging";
const CA_DELIVERY_FR = "7 à 10 jours ouvrables, avec suivi · emballage neutre et discret";

export const CANADA_PLACES = [
  // ───────────────────────────── CANADA (country hub) ─────────────────────────────
  {
    slug: "canada",
    type: "country",
    country: "canada",
    locales: ["en", "fr"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "cjc-1295-without-dac-ipamorelin",
      "nad-1000mg",
      "klow-80mg",
    ],
    name: { en: "Canada", fr: "Canada" },
    content: {
      en: {
        title: "Research Peptides Canada | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered across Canada, from Victoria to St. John's. Tracked shipping in 7–10 business days, discreet packaging, card or crypto in CAD.",
        h1: "Research peptides delivered across Canada",
        intro:
          "Cellovate delivers research peptides across Canada, from a Toronto condo to a house on the Prairies. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days. Each compound comes as a lyophilized vial or a pre-filled multi-dose pen, with prices shown in Canadian dollars.",
        delivery: CA_DELIVERY_EN,
        sections: [
          {
            h: "How delivery to Canada works",
            p: [
              "Orders travel by tracked international shipping, and you can follow the parcel from dispatch to your door. The 7 to 10 business day window allows for the fact that international parcels can be inspected by customs like any other import.",
              "Shipping is calculated at checkout and becomes free once your cart passes the threshold shown there. There is no storefront and no pick-up point: everything is delivered, whether that is a condo in Halifax, a townhouse in Winnipeg or a detached home in Edmonton.",
            ],
          },
          {
            h: "Vials or pre-filled pens, and Canadian winters",
            p: [
              "Every compound is offered in two formats. The vial is the standard lyophilized powder, to be reconstituted with bacteriostatic water. The pen is pre-filled and multi-dose, which removes the reconstitution step entirely.",
              "A parcel left in the cold for a few hours is less of a concern for sealed lyophilized vials than summer heat, but bring it inside promptly all the same. Store sealed material somewhere cool and dark, and keep anything reconstituted in the fridge at 2–8°C, never in the freezer or on a cold balcony.",
            ],
          },
          {
            h: "Research areas we cover",
            p: [
              "The catalogue spans metabolic research (Retatrutide, Tirzepatide), recovery and tissue research (BPC-157, TB-500, KPV and the KLOW and GLOW blends), GH secretagogue research (CJC-1295 + Ipamorelin, Tesamorelin), longevity and cellular-energy research (NAD+, MOTS-c, SS-31), cognitive research (Semax, Selank) and copper peptide research (GHK-Cu).",
              "All products are sold strictly for research use and are not intended for human consumption.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Canada take?", "Typically 7 to 10 business days with full tracking. That window allows for international parcels being inspected by customs like any import."],
          ["Do you deliver outside the big cities?", "Yes. We deliver to residential addresses across Canada. For the territories or a remote address, message us on WhatsApp and we confirm the delivery time before you pay."],
          ["How do I pay, and in which currency?", "By card or crypto at checkout. Visitors in Canada see prices in Canadian dollars, and the shipping cost is shown before you pay."],
          ["Can I order on WhatsApp?", "Yes. Message us the product and format you want, and we confirm stock and delivery before you pay."],
        ],
      },
      fr: {
        title: "Peptides de recherche au Canada | Livraison suivie",
        description:
          "Peptides de recherche livrés partout au Canada, de Victoria à St. John’s. Livraison suivie en 7 à 10 jours ouvrables, emballage discret, carte ou crypto.",
        h1: "Des peptides de recherche livrés partout au Canada",
        intro:
          "Cellovate livre des peptides de recherche partout au Canada, d’un condo à Toronto à une maison en pleine campagne. Chaque colis est suivi, arrive dans un emballage neutre et vous parvient généralement en 7 à 10 jours ouvrables. Chaque composé est offert en fiole lyophilisée ou en stylo multidose prérempli, avec les prix affichés en dollars canadiens.",
        delivery: CA_DELIVERY_FR,
        sections: [
          {
            h: "Comment fonctionne la livraison au Canada",
            p: [
              "Les commandes voyagent par envoi international suivi : vous pouvez suivre votre colis de l’expédition jusqu’à votre porte. Le délai de 7 à 10 jours ouvrables tient compte du fait que les colis internationaux peuvent être inspectés par la douane, comme n’importe quelle importation.",
              "Les frais de livraison sont calculés au moment de payer et deviennent gratuits une fois le seuil indiqué atteint. Pas de boutique ni de point de cueillette : tout est livré, que ce soit dans un condo à Halifax, une maison de ville à Winnipeg ou un unifamilial à Sherbrooke.",
            ],
          },
          {
            h: "Fioles ou stylos préremplis, et l’hiver canadien",
            p: [
              "Chaque composé existe en deux formats. La fiole contient la poudre lyophilisée standard, à reconstituer avec de l’eau bactériostatique. Le stylo est prérempli et multidose, ce qui élimine complètement l’étape de reconstitution.",
              "Un colis laissé quelques heures au froid inquiète beaucoup moins qu’une canicule pour des fioles lyophilisées scellées, mais rentrez-le quand même sans tarder. Rangez le matériel scellé dans un endroit frais et à l’abri de la lumière, et gardez tout produit reconstitué au frigo, entre 2 et 8 °C, jamais au congélateur ni sur le balcon.",
            ],
          },
          {
            h: "Nos domaines de recherche",
            p: [
              "Le catalogue couvre la recherche métabolique (Retatrutide, Tirzepatide), la récupération et la recherche tissulaire (BPC-157, TB-500, KPV et les mélanges KLOW et GLOW), les sécrétagogues de GH (CJC-1295 + Ipamorelin, Tesamorelin), la longévité et l’énergie cellulaire (NAD+, MOTS-c, SS-31), la recherche cognitive (Semax, Selank) et les peptides de cuivre (GHK-Cu).",
              "Tous les produits sont vendus exclusivement à des fins de recherche et ne sont pas destinés à la consommation humaine.",
            ],
          },
        ],
        faq: [
          ["Combien de temps prend la livraison au Canada?", "Généralement 7 à 10 jours ouvrables, avec suivi complet. Ce délai tient compte des inspections douanières possibles, comme pour toute importation."],
          ["Livrez-vous en dehors des grandes villes?", "Oui. Nous livrons aux adresses résidentielles partout au Canada. Pour les territoires ou une adresse éloignée, écrivez-nous sur WhatsApp et nous confirmons le délai avant le paiement."],
          ["Comment payer, et dans quelle devise?", "Par carte ou en crypto au moment de payer. Les prix sont affichés en dollars canadiens, et les frais de livraison apparaissent avant le paiement."],
          ["Puis-je commander par WhatsApp?", "Oui. Écrivez-nous le produit et le format voulus : nous confirmons le stock et la livraison avant que vous payiez."],
        ],
      },
    },
  },

  // ───────────────────────────── TORONTO ─────────────────────────────
  {
    slug: "toronto",
    type: "city",
    country: "canada",
    locales: ["en", "fr"],
    featured: [
      "retatrutide-20mg",
      "nad-1000mg",
      "bpc-157-tb-500-blend",
      "mots-c-10mg",
      "cjc-1295-without-dac-ipamorelin",
      "semax-10mg",
    ],
    name: { en: "Toronto", fr: "Toronto" },
    content: {
      en: {
        title: "Research Peptides Toronto | Tracked Delivery Across the GTA",
        description:
          "Research peptides delivered to downtown Toronto, King West, Leslieville and North York, plus Mississauga, Vaughan and Markham. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Toronto and the GTA",
        intro:
          "Cellovate delivers research peptides across Toronto and the Greater Toronto Area, from a CityPlace condo to a semi in Leslieville. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: CA_DELIVERY_EN,
        sections: [
          {
            h: "Downtown, the inner suburbs and the 905",
            p: [
              "We deliver throughout downtown Toronto, including the Financial District, King West, Liberty Village, CityPlace, Yorkville and the Annex, and east to Leslieville, Riverdale and the Beaches. Midtown around Yonge and Eglinton is covered, as are North York, Scarborough and Etobicoke.",
              "The 905 gets the same service: Mississauga, Brampton and Oakville to the west, and Vaughan, Richmond Hill and Markham to the north.",
            ],
          },
          {
            h: "Condo concierges, parcel rooms and front porches",
            p: [
              "Toronto has one of the largest condo markets in North America, and most towers have a concierge desk or a parcel room where deliveries are logged for residents. That is the easiest setup. In a house or semi, parcels are usually left on the porch or between the doors, so track the delivery and bring it inside.",
              "Winters are cold and summers can be hot and humid. Sealed lyophilized vials cope with a cold porch better than with July heat, but either way, collect the parcel promptly. Keep sealed vials somewhere cool and dark, and store reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "Canada's biggest training scene",
            p: [
              "As the country's largest city, Toronto has a dense fitness scene: boutique studios downtown, serious strength gyms and CrossFit boxes across the city, running groups along the waterfront and a waterfront marathon every fall. This page leads with metabolic and longevity research (Retatrutide, NAD+ and MOTS-c), alongside recovery research with BPC-157 and TB-500, CJC-1295 + Ipamorelin and Semax.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Mississauga, Vaughan and Markham?", "Yes, along with Brampton, Oakville, Richmond Hill, North York, Scarborough and Etobicoke."],
          ["Can my condo concierge accept the parcel?", "Yes. In most Toronto towers the concierge or parcel room logs and holds deliveries for residents."],
          ["How long does delivery to Toronto take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I pick up in person?", "No. We work by delivery only, with no storefront or pick-up point."],
        ],
      },
      fr: {
        title: "Peptides de recherche Toronto | Livraison suivie dans la RGT",
        description:
          "Peptides de recherche livrés au centre-ville de Toronto, à King West, Leslieville et North York, ainsi qu’à Mississauga et Markham. Suivi, 7 à 10 jours.",
        h1: "Des peptides de recherche livrés à Toronto et dans la RGT",
        intro:
          "Cellovate livre des peptides de recherche partout à Toronto et dans la région du Grand Toronto, d’un condo de CityPlace à une maison jumelée de Leslieville. Chaque colis est suivi, arrive dans un emballage neutre et vous parvient généralement en 7 à 10 jours ouvrables.",
        delivery: CA_DELIVERY_FR,
        sections: [
          {
            h: "Centre-ville, banlieues proches et le 905",
            p: [
              "Nous livrons dans tout le centre-ville, du quartier financier à King West, Liberty Village, CityPlace, Yorkville et l’Annex, et vers l’est jusqu’à Leslieville, Riverdale et les Beaches. Midtown, autour de Yonge et Eglinton, est desservi, tout comme North York, Scarborough et Etobicoke.",
              "Le 905 profite du même service : Mississauga, Brampton et Oakville à l’ouest, Vaughan, Richmond Hill et Markham au nord.",
            ],
          },
          {
            h: "Concierges de condo, salles à colis et perrons",
            p: [
              "Toronto compte l’un des plus gros marchés de condos en Amérique du Nord, et la plupart des tours ont un concierge ou une salle à colis où les livraisons sont enregistrées pour les résidents. C’est la formule la plus simple. Dans une maison, le colis est souvent laissé sur le perron ou entre les deux portes : suivez la livraison et rentrez-le rapidement.",
              "L’hiver est froid et l’été peut être chaud et humide. Les fioles lyophilisées scellées supportent mieux un perron glacé qu’une chaleur de juillet, mais dans tous les cas, récupérez le colis sans tarder. Gardez les fioles dans un endroit frais et sombre, et le produit reconstitué au frigo, entre 2 et 8 °C.",
            ],
          },
          {
            h: "La plus grosse scène sportive au pays",
            p: [
              "Plus grande ville du Canada, Toronto regorge de studios-boutiques au centre-ville, de gyms de force et de box de CrossFit, sans oublier les clubs de course le long du lac et un marathon chaque automne. Cette page met de l’avant la recherche métabolique et la longévité (Retatrutide, NAD+ et MOTS-c), avec la récupération (BPC-157 et TB-500), le CJC-1295 + Ipamorelin et le Semax.",
            ],
          },
        ],
        faq: [
          ["Livrez-vous à Mississauga, Vaughan et Markham?", "Oui, ainsi qu’à Brampton, Oakville, Richmond Hill, North York, Scarborough et Etobicoke."],
          ["Le concierge de mon condo peut-il recevoir le colis?", "Oui. Dans la plupart des tours de Toronto, le concierge ou la salle à colis enregistre et conserve les livraisons des résidents."],
          ["Combien de temps prend la livraison à Toronto?", "Généralement 7 à 10 jours ouvrables avec suivi, ce qui tient compte des inspections douanières possibles, comme pour toute importation."],
          ["Puis-je passer chercher ma commande?", "Non. Nous fonctionnons uniquement par livraison, sans boutique ni point de cueillette."],
        ],
      },
    },
  },

  // ───────────────────────────── VANCOUVER ─────────────────────────────
  {
    slug: "vancouver",
    type: "city",
    country: "canada",
    locales: ["en", "fr"],
    featured: [
      "bpc-157-tb-500-blend",
      "tb-500-10mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "nad-1000mg",
      "ss-31",
      "retatrutide-20mg",
    ],
    name: { en: "Vancouver", fr: "Vancouver" },
    content: {
      en: {
        title: "Research Peptides Vancouver | Tracked Delivery, Metro Area",
        description:
          "Research peptides delivered to Yaletown, the West End, Kitsilano and Mount Pleasant, plus Burnaby, Richmond and North Vancouver. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Vancouver",
        intro:
          "Cellovate delivers research peptides across Metro Vancouver, from a Coal Harbour tower to a basement suite in Kitsilano. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: CA_DELIVERY_EN,
        sections: [
          {
            h: "From downtown to the North Shore",
            p: [
              "We deliver to downtown Vancouver, Yaletown, Coal Harbour and the West End, to Kitsilano, Point Grey and Kerrisdale on the West Side, and to Mount Pleasant, Main Street and Commercial Drive on the East Side.",
              "The rest of Metro Vancouver is covered too: Burnaby, New Westminster, Richmond, Surrey and Coquitlam, and across the water to North and West Vancouver.",
            ],
          },
          {
            h: "Concierge towers, basement suites and the rain",
            p: [
              "Downtown, most residents live in glass towers with a concierge or parcel room. Across the rest of the city, many people rent a basement or laneway suite, where parcels are often left at a shared front door. In that case, track the delivery and collect it the same day.",
              "Vancouver's climate is mild, with damp winters and warm, dry summers. Keep the parcel out of the rain, store sealed vials somewhere cool, dry and dark, and keep reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "An outdoor city with a recovery focus",
            p: [
              "Vancouver lives outdoors: the Seawall for running and cycling, the Grouse Grind, North Shore mountain biking and ski days on the local mountains. A city this active asks a lot of tendons and joints, so recovery and tissue research leads this page, with BPC-157, TB-500 and the GLOW blend, followed by NAD+, SS-31 and Retatrutide.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Burnaby, Richmond and North Vancouver?", "Yes, along with Surrey, Coquitlam, New Westminster and West Vancouver."],
          ["I live in a basement suite. Will the parcel be safe?", "It will usually be left at the main entrance, so track it and collect it promptly."],
          ["How long does delivery to Vancouver take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I order on WhatsApp?", "Yes. Send us the product and format, and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
      fr: {
        title: "Peptides de recherche Vancouver | Livraison suivie",
        description:
          "Peptides de recherche livrés à Yaletown, au West End, à Kitsilano et Mount Pleasant, ainsi qu’à Burnaby, Richmond et North Vancouver. Suivi, 7 à 10 jours.",
        h1: "Des peptides de recherche livrés partout à Vancouver",
        intro:
          "Cellovate livre des peptides de recherche dans tout le Grand Vancouver, d’une tour de Coal Harbour à un sous-sol loué à Kitsilano. Chaque colis est suivi, arrive dans un emballage neutre et vous parvient généralement en 7 à 10 jours ouvrables.",
        delivery: CA_DELIVERY_FR,
        sections: [
          {
            h: "Du centre-ville jusqu’à la Rive-Nord",
            p: [
              "Nous livrons au centre-ville, à Yaletown, Coal Harbour et dans le West End, à Kitsilano, Point Grey et Kerrisdale du côté ouest, ainsi qu’à Mount Pleasant, sur Main Street et sur Commercial Drive du côté est.",
              "Le reste du Grand Vancouver est aussi desservi : Burnaby, New Westminster, Richmond, Surrey et Coquitlam, et de l’autre côté de l’eau, North Vancouver et West Vancouver.",
            ],
          },
          {
            h: "Tours avec concierge, sous-sols loués et pluie",
            p: [
              "Au centre-ville, la plupart des gens habitent des tours vitrées avec concierge ou salle à colis. Ailleurs, beaucoup louent un sous-sol ou une petite maison de ruelle, et le colis est souvent laissé à la porte principale commune : suivez la livraison et récupérez-le le jour même.",
              "Le climat est doux, avec des hivers humides et des étés chauds et secs. Protégez le colis de la pluie, rangez les fioles scellées dans un endroit frais, sec et sombre, et gardez le produit reconstitué au frigo, entre 2 et 8 °C.",
            ],
          },
          {
            h: "Une ville de plein air, axée sur la récupération",
            p: [
              "Vancouver vit dehors : course et vélo sur le Seawall, montée du Grouse Grind, vélo de montagne sur la Rive-Nord et journées de ski à deux pas de la ville. Un tel rythme sollicite beaucoup les tendons et les articulations, d’où la place de choix accordée ici à la recherche sur la récupération tissulaire, avec le BPC-157, le TB-500 et le mélange GLOW, suivis du NAD+, du SS-31 et du Retatrutide.",
            ],
          },
        ],
        faq: [
          ["Livrez-vous à Burnaby, Richmond et North Vancouver?", "Oui, ainsi qu’à Surrey, Coquitlam, New Westminster et West Vancouver."],
          ["J’habite un sous-sol loué. Mon colis sera-t-il en sécurité?", "Il sera généralement laissé à l’entrée principale : suivez-le et récupérez-le rapidement."],
          ["Combien de temps prend la livraison à Vancouver?", "Généralement 7 à 10 jours ouvrables avec suivi, ce qui tient compte des inspections douanières possibles, comme pour toute importation."],
          ["Puis-je commander par WhatsApp?", "Oui. Envoyez-nous le produit et le format : nous confirmons le stock et la livraison avant que vous payiez par carte ou en crypto."],
        ],
      },
    },
  },

  // ───────────────────────────── MONTREAL ─────────────────────────────
  {
    slug: "montreal",
    type: "city",
    country: "canada",
    locales: ["en", "fr"],
    featured: [
      "retatrutide-20mg",
      "bpc-157-tb-500-blend",
      "klow-80mg",
      "cjc-1295-without-dac-ipamorelin",
      "selank-10mg",
      "ghk-cu-50mg",
    ],
    name: { en: "Montreal", fr: "Montréal" },
    content: {
      en: {
        title: "Research Peptides Montreal | Tracked Delivery, Metro Area",
        description:
          "Research peptides delivered to the Plateau, Mile End, Griffintown, Rosemont and NDG, plus Laval, Longueuil and the West Island. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Montreal",
        intro:
          "Cellovate delivers research peptides across the island of Montreal and the surrounding region, from a Griffintown condo to a triplex on the Plateau. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: CA_DELIVERY_EN,
        sections: [
          {
            h: "Every borough, on and off the island",
            p: [
              "We deliver to downtown, Old Montreal and Griffintown, to the Plateau-Mont-Royal, Mile End and Outremont, and to Rosemont, Villeray, Hochelaga, Verdun and Saint-Henri. Notre-Dame-de-Grâce, Westmount and Côte-des-Neiges are covered, as is the West Island.",
              "Off the island, parcels reach Laval to the north and the South Shore, including Longueuil and Brossard.",
            ],
          },
          {
            h: "Plexes, outdoor staircases and July 1",
            p: [
              "Much of Montreal lives in duplexes and triplexes, with a mailbox by each front door at the top of an outdoor staircase. Parcels are often left right there, so track the delivery and bring it in the same day. Newer condo buildings in Griffintown and downtown usually have a concierge or parcel lockers.",
              "Many Montreal leases end on July 1, so if you are moving around that date, order to the address where you will actually be. Winters are long and cold: sealed lyophilized vials handle a chilly doorstep far better than summer heat, but store them somewhere cool and dark inside, and keep reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "Cycling, Mount Royal and combat sports",
            p: [
              "Montreal is one of North America's great cycling cities, Mount Royal is packed with runners in every season, and the city has a strong combat-sports tradition, from boxing clubs to MMA gyms. Metabolic research with Retatrutide leads this page, followed by recovery research with BPC-157, TB-500 and the KLOW blend, CJC-1295 + Ipamorelin, Selank and GHK-Cu.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Laval, Longueuil and the West Island?", "Yes, along with Brossard and the rest of the South Shore."],
          ["Can my building's concierge accept the parcel?", "Yes. In Griffintown and downtown condos, the concierge or parcel lockers usually take deliveries for residents."],
          ["How long does delivery to Montreal take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I pick up in person?", "No. We work by delivery only, with no storefront or pick-up point."],
        ],
      },
      fr: {
        title: "Peptides de recherche Montréal | Livraison suivie",
        description:
          "Peptides de recherche livrés sur le Plateau, dans le Mile End, Griffintown, Rosemont et NDG, à Laval, Longueuil et dans l’Ouest-de-l’Île. Suivi, 7 à 10 jours.",
        h1: "Des peptides de recherche livrés partout à Montréal",
        intro:
          "Cellovate livre des peptides de recherche partout sur l’île de Montréal et dans les environs, d’un condo de Griffintown à un triplex du Plateau. Chaque colis est suivi, arrive dans un emballage neutre et vous parvient généralement en 7 à 10 jours ouvrables.",
        delivery: CA_DELIVERY_FR,
        sections: [
          {
            h: "Tous les arrondissements, sur l’île et autour",
            p: [
              "Nous livrons au centre-ville, dans le Vieux-Montréal et à Griffintown, sur le Plateau-Mont-Royal, dans le Mile End et à Outremont, ainsi qu’à Rosemont, Villeray, Hochelaga, Verdun et Saint-Henri. NDG, Westmount et Côte-des-Neiges sont desservis, tout comme l’Ouest-de-l’Île.",
              "Hors de l’île, les colis se rendent à Laval au nord et sur la Rive-Sud, notamment à Longueuil et Brossard.",
            ],
          },
          {
            h: "Plex, escaliers extérieurs et 1er juillet",
            p: [
              "Une bonne partie des Montréalais habitent un duplex ou un triplex, avec la boîte aux lettres en haut de l’escalier extérieur. C’est souvent là que le livreur laisse le colis : suivez la livraison et rentrez-le le jour même. Les condos récents de Griffintown et du centre-ville ont généralement un concierge ou des casiers à colis.",
              "Bien des baux se terminent le 1er juillet : si vous déménagez autour de cette date, commandez à l’adresse où vous serez vraiment. L’hiver est long et froid, et les fioles lyophilisées scellées tolèrent bien mieux un perron glacial que la chaleur de l’été. Rangez-les quand même dans un endroit frais et sombre, à l’intérieur, et gardez le produit reconstitué au frigo, entre 2 et 8 °C.",
            ],
          },
          {
            h: "Vélo, mont Royal et sports de combat",
            p: [
              "Montréal est l’une des grandes villes de vélo en Amérique du Nord, le mont Royal attire les coureurs en toute saison, et la ville a une solide tradition de sports de combat, des clubs de boxe aux gyms de MMA. La recherche métabolique avec le Retatrutide ouvre cette page, suivie de la récupération avec le BPC-157, le TB-500 et le mélange KLOW, puis du CJC-1295 + Ipamorelin, du Selank et du GHK-Cu.",
            ],
          },
        ],
        faq: [
          ["Livrez-vous à Laval, Longueuil et dans l’Ouest-de-l’Île?", "Oui, ainsi qu’à Brossard et dans le reste de la Rive-Sud."],
          ["Le concierge de mon condo peut-il recevoir le colis?", "Oui. Dans les condos de Griffintown et du centre-ville, le concierge ou les casiers à colis prennent généralement les livraisons des résidents."],
          ["Combien de temps prend la livraison à Montréal?", "Généralement 7 à 10 jours ouvrables avec suivi, ce qui tient compte des inspections douanières possibles, comme pour toute importation."],
          ["Puis-je passer chercher ma commande?", "Non. Nous fonctionnons uniquement par livraison, sans boutique ni point de cueillette."],
        ],
      },
    },
  },

  // ───────────────────────────── CALGARY ─────────────────────────────
  {
    slug: "calgary",
    type: "city",
    country: "canada",
    locales: ["en", "fr"],
    featured: [
      "bpc-157-tb-500-blend",
      "klow-80mg",
      "retatrutide-20mg",
      "tirzepatide",
      "tesamorelin-10mg",
      "mots-c-10mg",
    ],
    name: { en: "Calgary", fr: "Calgary" },
    content: {
      en: {
        title: "Research Peptides Calgary | Tracked Delivery, Calgary Region",
        description:
          "Research peptides delivered to the Beltline, Kensington, Inglewood and Marda Loop, plus Airdrie, Cochrane, Okotoks and Canmore. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Calgary",
        intro:
          "Cellovate delivers research peptides across Calgary and the surrounding area, from a Beltline condo to a family home in the suburbs. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: CA_DELIVERY_EN,
        sections: [
          {
            h: "Inner city, suburbs and the foothills",
            p: [
              "We deliver to downtown and the Beltline, Mission, Kensington, Hillhurst, Bridgeland, Inglewood and Marda Loop, and out to the newer communities across the northwest, northeast and the deep south of the city.",
              "Nearby towns are covered too: Airdrie, Cochrane, Chestermere and Okotoks, and west toward the mountains in Canmore.",
            ],
          },
          {
            h: "Front-door delivery and chinook swings",
            p: [
              "Most Calgarians live in detached homes or townhouses, where parcels are left at the front door or in a community mailbox area. Inner-city condos usually have a concierge or a parcel room. Track the delivery and bring it in promptly.",
              "Calgary winters are cold and dry, and chinook winds can swing the temperature sharply within a day. Sealed lyophilized vials handle a cold doorstep better than summer heat, but store them somewhere cool and dark indoors, and keep reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "A mountain city that trains hard",
            p: [
              "With the Rockies an hour away, Calgary trains for the outdoors: skiing and ski touring, trail running, mountain biking and hockey at every level, plus a solid base of strength gyms and CrossFit boxes. Recovery research leads this page, with BPC-157, TB-500 and the KLOW blend, followed by metabolic research with Retatrutide and Tirzepatide, Tesamorelin and MOTS-c.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Airdrie, Cochrane and Okotoks?", "Yes, along with Chestermere and Canmore."],
          ["Is a cold doorstep a problem for my parcel?", "Much less than heat for sealed lyophilized vials. Bring it in promptly and keep reconstituted material in the fridge at 2–8°C."],
          ["How long does delivery to Calgary take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I order on WhatsApp?", "Yes. Send us the product and format, and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
      fr: {
        title: "Peptides de recherche Calgary | Livraison suivie",
        description:
          "Peptides de recherche livrés dans le Beltline, à Kensington, Inglewood et Marda Loop, ainsi qu’à Airdrie, Cochrane, Okotoks et Canmore. Suivi, 7 à 10 jours.",
        h1: "Des peptides de recherche livrés partout à Calgary",
        intro:
          "Cellovate livre des peptides de recherche à Calgary et dans les environs, d’un condo du Beltline à une maison familiale en banlieue. Chaque colis est suivi, arrive dans un emballage neutre et vous parvient généralement en 7 à 10 jours ouvrables.",
        delivery: CA_DELIVERY_FR,
        sections: [
          {
            h: "Quartiers centraux, banlieues et contreforts",
            p: [
              "Nous livrons au centre-ville et dans le Beltline, à Mission, Kensington, Hillhurst, Bridgeland, Inglewood et Marda Loop, ainsi que dans les quartiers plus récents du nord-ouest, du nord-est et de l’extrême sud de la ville.",
              "Les villes voisines sont aussi desservies : Airdrie, Cochrane, Chestermere et Okotoks, et Canmore, en direction des montagnes.",
            ],
          },
          {
            h: "Livraison à la porte et effet chinook",
            p: [
              "La plupart des Calgariens vivent en maison unifamiliale ou en maison de ville, où le colis est laissé à la porte ou à la boîte postale communautaire. Les condos du centre ont généralement un concierge ou une salle à colis. Suivez la livraison et rentrez le colis sans tarder.",
              "L’hiver est froid et sec, et le chinook peut faire varier brusquement la température en une journée. Les fioles lyophilisées scellées supportent mieux le froid que la chaleur estivale, mais rangez-les dans un endroit frais et sombre, à l’intérieur, et gardez le produit reconstitué au frigo, entre 2 et 8 °C.",
            ],
          },
          {
            h: "Une ville de montagne qui s’entraîne fort",
            p: [
              "Avec les Rocheuses à une heure de route, Calgary s’entraîne pour le plein air : ski alpin et ski de randonnée, course en sentier, vélo de montagne et hockey à tous les niveaux, sans compter une bonne base de gyms de force et de box de CrossFit. La récupération ouvre cette page avec le BPC-157, le TB-500 et le mélange KLOW, suivie de la recherche métabolique avec le Retatrutide et le Tirzepatide, puis du Tesamorelin et du MOTS-c.",
            ],
          },
        ],
        faq: [
          ["Livrez-vous à Airdrie, Cochrane et Okotoks?", "Oui, ainsi qu’à Chestermere et Canmore."],
          ["Le froid sur le perron pose-t-il problème?", "Beaucoup moins que la chaleur pour des fioles lyophilisées scellées. Rentrez le colis rapidement et gardez le produit reconstitué au frigo, entre 2 et 8 °C."],
          ["Combien de temps prend la livraison à Calgary?", "Généralement 7 à 10 jours ouvrables avec suivi, ce qui tient compte des inspections douanières possibles, comme pour toute importation."],
          ["Puis-je commander par WhatsApp?", "Oui. Envoyez-nous le produit et le format : nous confirmons le stock et la livraison avant que vous payiez par carte ou en crypto."],
        ],
      },
    },
  },

  // ───────────────────────────── OTTAWA ─────────────────────────────
  {
    slug: "ottawa",
    type: "city",
    country: "canada",
    locales: ["en", "fr"],
    featured: [
      "nad-1000mg",
      "semax-10mg",
      "selank-10mg",
      "retatrutide-20mg",
      "bpc-157-tb-500-blend",
      "ss-31",
    ],
    name: { en: "Ottawa", fr: "Ottawa" },
    content: {
      en: {
        title: "Research Peptides Ottawa | Tracked Delivery, Ottawa–Gatineau",
        description:
          "Research peptides delivered to Centretown, the Glebe, Westboro and the ByWard Market, plus Kanata, Orléans, Barrhaven and Gatineau. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Ottawa",
        intro:
          "Cellovate delivers research peptides across Ottawa and Gatineau, from a Centretown apartment to a townhouse in Barrhaven. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: CA_DELIVERY_EN,
        sections: [
          {
            h: "Both sides of the river",
            p: [
              "We deliver to Centretown, the Glebe, the ByWard Market, Sandy Hill, Lowertown, Hintonburg, Westboro, Old Ottawa South and New Edinburgh, and out to the suburbs of Kanata, Nepean, Barrhaven and Orléans.",
              "Across the Ottawa River, Gatineau, Hull and Aylmer are covered in the same 7 to 10 business days.",
            ],
          },
          {
            h: "Townhouses, apartment mailrooms and deep winter",
            p: [
              "Ottawa's suburbs are full of townhouses and detached homes, where parcels are left at the door or held at a community mailbox. Downtown apartment and condo buildings usually have a mailroom, parcel lockers or a front desk. Track the delivery and collect it promptly.",
              "Ottawa winters are among the coldest of any capital city. Sealed lyophilized vials handle a cold doorstep far better than summer heat, but bring the parcel inside, store vials somewhere cool and dark, and keep reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "A bilingual capital that stays active",
            p: [
              "Ottawa skates on the Rideau Canal in winter, cross-country skis in Gatineau Park, and runs every May during Race Weekend. For a city of public servants, engineers and long desk days, this page leads with cognitive and longevity research (NAD+, Semax and Selank), followed by Retatrutide, BPC-157 with TB-500 and SS-31.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Gatineau?", "Yes, including Hull and Aylmer, as well as Kanata, Nepean, Barrhaven and Orléans on the Ontario side."],
          ["Do you deliver to condos with a mailroom?", "Yes. The carrier leaves the parcel in the mailroom, a parcel locker or with the front desk, depending on your building."],
          ["How long does delivery to Ottawa take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I pick up in person?", "No. We work by delivery only, with no storefront or pick-up point."],
        ],
      },
      fr: {
        title: "Peptides de recherche Ottawa | Livraison suivie",
        description:
          "Peptides de recherche livrés au centre-ville d’Ottawa, dans le Glebe, à Westboro et au marché By, ainsi qu’à Kanata, Orléans et Gatineau. Suivi, 7 à 10 jours.",
        h1: "Des peptides de recherche livrés à Ottawa et Gatineau",
        intro:
          "Cellovate livre des peptides de recherche partout à Ottawa et à Gatineau, d’un appartement du centre-ville à une maison de ville de Barrhaven. Chaque colis est suivi, arrive dans un emballage neutre et vous parvient généralement en 7 à 10 jours ouvrables.",
        delivery: CA_DELIVERY_FR,
        sections: [
          {
            h: "Des deux côtés de la rivière",
            p: [
              "Nous livrons au centre-ville, dans le Glebe, au marché By, à la Côte-de-Sable, dans la Basse-Ville, à Hintonburg, Westboro, dans le Vieil Ottawa-Sud et à New Edinburgh, ainsi qu’en banlieue, à Kanata, Nepean, Barrhaven et Orléans.",
              "De l’autre côté de la rivière des Outaouais, Gatineau, Hull et Aylmer sont desservis dans le même délai de 7 à 10 jours ouvrables.",
            ],
          },
          {
            h: "Maisons de ville, salles de courrier et grand froid",
            p: [
              "Les banlieues d’Ottawa sont pleines de maisons de ville et d’unifamiliales, où le colis est laissé à la porte ou à la boîte postale communautaire. Au centre-ville, les immeubles ont généralement une salle de courrier, des casiers à colis ou un concierge. Suivez la livraison et récupérez le colis sans tarder.",
              "L’hiver à Ottawa est parmi les plus froids de toutes les capitales. Les fioles lyophilisées scellées tolèrent bien mieux un perron glacé que la chaleur de l’été, mais rentrez le colis, rangez les fioles dans un endroit frais et sombre, et gardez le produit reconstitué au frigo, entre 2 et 8 °C.",
            ],
          },
          {
            h: "Une capitale bilingue et active",
            p: [
              "Ottawa patine sur le canal Rideau l’hiver, fait du ski de fond dans le parc de la Gatineau et court en mai lors de la Fin de semaine des courses. Dans une ville de fonctionnaires, d’ingénieurs et de longues journées au bureau, cette page s’ouvre sur la recherche cognitive et la longévité (NAD+, Semax et Selank), suivis du Retatrutide, du BPC-157 avec le TB-500 et du SS-31.",
            ],
          },
        ],
        faq: [
          ["Livrez-vous à Gatineau?", "Oui, y compris à Hull et Aylmer, ainsi qu’à Kanata, Nepean, Barrhaven et Orléans du côté ontarien."],
          ["Livrez-vous dans les immeubles avec salle de courrier?", "Oui. Le livreur dépose le colis dans la salle de courrier, un casier à colis ou auprès du concierge, selon votre immeuble."],
          ["Combien de temps prend la livraison à Ottawa?", "Généralement 7 à 10 jours ouvrables avec suivi, ce qui tient compte des inspections douanières possibles, comme pour toute importation."],
          ["Puis-je passer chercher ma commande?", "Non. Nous fonctionnons uniquement par livraison, sans boutique ni point de cueillette."],
        ],
      },
    },
  },
];
