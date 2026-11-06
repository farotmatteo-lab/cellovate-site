// United States: country hub and five city pages, served at /{lang}/peptides/{slug}.
// US English only. Same shape as lib/seo/places.js.

const US_DELIVERY_EN = "7–10 business days, tracked · discreet plain packaging";

export const US_PLACES = [
  // ───────────────────────────── UNITED STATES (country hub) ─────────────────────────────
  {
    slug: "united-states",
    type: "country",
    country: "united-states",
    locales: ["en"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "cjc-1295-without-dac-ipamorelin",
      "nad-1000mg",
      "klow-80mg",
    ],
    name: { en: "United States" },
    content: {
      en: {
        title: "Research Peptides USA | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered across the US, coast to coast. Tracked shipping in 7–10 business days, discreet plain packaging, card or crypto in US dollars.",
        h1: "Research peptides delivered across the United States",
        intro:
          "Cellovate delivers research peptides across the United States, from a Manhattan high-rise to a ranch house outside Austin. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days. Each compound comes as a lyophilized vial or a pre-filled multi-dose pen, with prices shown in US dollars.",
        delivery: US_DELIVERY_EN,
        sections: [
          {
            h: "How delivery to the US works",
            p: [
              "Orders travel by tracked international shipping, and you can follow the package from dispatch to your door. The 7 to 10 business day window allows for the fact that international parcels can be inspected by customs like any other import.",
              "Shipping is calculated at checkout and becomes free once your cart passes the threshold shown there. There is no storefront and no pick-up point: everything is delivered, whether that is a walk-up in Philadelphia, a condo in Seattle or a house in the Phoenix suburbs.",
            ],
          },
          {
            h: "Vials or pre-filled pens, and the American climate",
            p: [
              "Every compound is offered in two formats. The vial is the standard lyophilized powder, to be reconstituted with bacteriostatic water. The pen is pre-filled and multi-dose, which removes the reconstitution step entirely.",
              "The US covers every climate there is, from Arizona summers above 110°F to Minnesota winters well below zero. Heat is the real concern: bring packages in off the porch or out of the mailroom promptly, store sealed vials somewhere cool and dark, and keep anything reconstituted in the refrigerator at 36–46°F (2–8°C).",
            ],
          },
          {
            h: "Research areas we cover",
            p: [
              "The catalog spans metabolic research (Retatrutide, Tirzepatide), recovery and tissue research (BPC-157, TB-500, KPV and the KLOW and GLOW blends), GH secretagogue research (CJC-1295 + Ipamorelin, Tesamorelin), longevity and cellular-energy research (NAD+, MOTS-c, SS-31), cognitive research (Semax, Selank) and copper peptide research (GHK-Cu).",
              "All products are sold strictly for research use and are not intended for human consumption.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to the US take?", "Typically 7 to 10 business days with full tracking. That window allows for international parcels being inspected by customs like any import."],
          ["Do you ship outside the big cities?", "Yes. We deliver to residential addresses across the country. For Alaska, Hawaii or a remote address, message us on WhatsApp and we confirm the delivery time before you pay."],
          ["How do I pay, and in which currency?", "By card or crypto at checkout. Visitors in the US see prices in US dollars, and the shipping cost is shown before you pay."],
          ["Can I order on WhatsApp?", "Yes. Message us the product and format you want, and we confirm stock and delivery before you pay."],
        ],
      },
    },
  },

  // ───────────────────────────── NEW YORK ─────────────────────────────
  {
    slug: "new-york",
    type: "city",
    country: "united-states",
    locales: ["en"],
    featured: [
      "nad-1000mg",
      "retatrutide-20mg",
      "mots-c-10mg",
      "semax-10mg",
      "ss-31",
      "bpc-157-tb-500-blend",
    ],
    name: { en: "New York" },
    content: {
      en: {
        title: "Research Peptides New York | Tracked NYC Delivery",
        description:
          "Research peptides delivered across all five boroughs, from the Upper West Side to Bushwick, plus Jersey City and Westchester. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across New York City",
        intro:
          "Cellovate delivers research peptides to every borough of New York, from a doorman building on the Upper East Side to a brownstone in Park Slope. Parcels are tracked from dispatch, arrive in plain packaging and typically reach you within 7 to 10 business days.",
        delivery: US_DELIVERY_EN,
        sections: [
          {
            h: "All five boroughs and beyond",
            p: [
              "We deliver throughout Manhattan, from the Financial District and Tribeca through Chelsea, Midtown and the Upper West Side up to Harlem and Washington Heights. Brooklyn is covered from Williamsburg, Greenpoint and DUMBO to Park Slope, Bushwick and Bay Ridge, along with Astoria, Long Island City and Flushing in Queens, the Bronx and Staten Island.",
              "The wider metro area gets the same service: Jersey City and Hoboken across the Hudson, Yonkers and White Plains in Westchester, and Nassau County on Long Island.",
            ],
          },
          {
            h: "Doormen, walk-ups and package rooms",
            p: [
              "In a doorman building your parcel is held at the front desk or in the package room, which is the easiest setup in the city. In a walk-up, packages often end up in a shared vestibule or at the foot of the stairs, so it is worth tracking the delivery and picking it up the same day. Many newer rentals also have smart package lockers that send you a code on arrival.",
              "New York summers are hot and humid, and winter radiators can make a small apartment surprisingly warm. Keep sealed vials somewhere cool and dark, away from the radiator, and store reconstituted material in the fridge at 36–46°F (2–8°C).",
            ],
          },
          {
            h: "A city that trains hard and reads the research",
            p: [
              "New York has one of the densest fitness scenes in the country: boutique studios on every other block, serious strength gyms, a huge running community built around Central Park and Prospect Park, and the marathon every November. For a city that runs on long hours and little sleep, this page leads with longevity and cellular-energy research (NAD+, MOTS-c and SS-31), alongside Semax for cognitive research and Retatrutide for metabolic research.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Brooklyn, Queens, the Bronx and Staten Island?", "Yes, all five boroughs, plus Jersey City, Hoboken, Westchester and Nassau County."],
          ["What if my building has no doorman?", "Track the parcel and collect it promptly from the vestibule or mailroom. If your building has package lockers, the carrier can leave it there."],
          ["How long does delivery to New York take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I pick up in Manhattan?", "No. We work by delivery only, with no storefront or pick-up point."],
        ],
      },
    },
  },

  // ───────────────────────────── LOS ANGELES ─────────────────────────────
  {
    slug: "los-angeles",
    type: "city",
    country: "united-states",
    locales: ["en"],
    featured: [
      "glow-70mg-bpc157-tb500-ghk-cu",
      "ghk-cu-50mg",
      "retatrutide-20mg",
      "nad-1000mg",
      "bpc-157-tb-500-blend",
      "cjc-1295-without-dac-ipamorelin",
    ],
    name: { en: "Los Angeles" },
    content: {
      en: {
        title: "Research Peptides Los Angeles | Tracked LA Delivery",
        description:
          "Research peptides delivered across LA: Santa Monica, Venice, West Hollywood, Silver Lake, the Valley, Pasadena and Long Beach. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Los Angeles",
        intro:
          "Cellovate delivers research peptides throughout Los Angeles County, from a Venice bungalow to a high-rise in Downtown LA. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: US_DELIVERY_EN,
        sections: [
          {
            h: "From the Westside to the Valley",
            p: [
              "We deliver to the Westside (Santa Monica, Venice, Culver City, Brentwood and Beverly Hills), to Hollywood, West Hollywood, Silver Lake, Echo Park and Koreatown, and to Downtown LA and the Arts District. The San Fernando Valley is covered too, including Studio City, Sherman Oaks, Burbank and Encino, along with Glendale and Pasadena.",
              "Further out, parcels reach Long Beach, the South Bay beach cities, Malibu and Orange County, from Irvine to Newport Beach.",
            ],
          },
          {
            h: "Porch deliveries and Valley heat",
            p: [
              "Much of LA lives in single-family homes or small complexes, where carriers leave packages on the porch or by the front gate. Larger apartment buildings usually have a leasing office or a package locker. Either way, track the delivery and bring it inside quickly.",
              "That matters most in summer. The Valley and inland neighborhoods regularly pass 100°F, and a parcel sitting on a sunny porch or in a parked car heats up fast. Keep sealed vials somewhere cool and dark, never in the garage, and store reconstituted material in the fridge at 36–46°F (2–8°C).",
            ],
          },
          {
            h: "The home of the modern gym culture",
            p: [
              "Venice Beach is home to the outdoor Muscle Beach gym and the original Gold's Gym, and LA has never lost that focus on training and appearance. Today the scene runs from bodybuilding gyms and Pilates studios to trail running in Griffith Park and a large wellness and longevity community. Copper peptide research (GHK-Cu) and the GLOW blend lead this page, followed by NAD+, recovery research with BPC-157 and TB-500, and metabolic research with Retatrutide.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to the Valley, Pasadena and Orange County?", "Yes. We cover all of LA County, including the San Fernando Valley and Pasadena, as well as Orange County."],
          ["Will my package be left on the porch?", "Often, yes, for houses. Track it and bring it inside quickly, especially in summer heat."],
          ["How long does delivery to Los Angeles take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["How do I pay?", "By card or crypto at checkout, with prices in US dollars. You can also order on WhatsApp and we confirm stock and delivery before you pay."],
        ],
      },
    },
  },

  // ───────────────────────────── MIAMI ─────────────────────────────
  {
    slug: "miami",
    type: "city",
    country: "united-states",
    locales: ["en"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "tesamorelin-10mg",
      "nad-1000mg",
    ],
    name: { en: "Miami" },
    content: {
      en: {
        title: "Research Peptides Miami | Tracked Delivery, South Florida",
        description:
          "Research peptides delivered to Brickell, Miami Beach, Wynwood, Coral Gables and Doral, plus Fort Lauderdale and Boca Raton. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Miami",
        intro:
          "Cellovate delivers research peptides throughout Miami-Dade and South Florida, from a Brickell condo tower to a house in Coral Gables. Parcels are tracked from dispatch, arrive in plain packaging and typically reach you within 7 to 10 business days.",
        delivery: US_DELIVERY_EN,
        sections: [
          {
            h: "Miami-Dade and up the coast",
            p: [
              "We deliver to Brickell and Downtown, Edgewater, Midtown and Wynwood, Little Havana, Coconut Grove and Coral Gables, and across the causeways to South Beach, Mid-Beach, North Beach and Key Biscayne. Doral, Kendall and Aventura are covered too.",
              "Up the coast, parcels reach Hollywood, Fort Lauderdale and Boca Raton in the same 7 to 10 business days.",
            ],
          },
          {
            h: "Front desks, valets and year-round heat",
            p: [
              "Most of central Miami lives in high-rise condos with a 24-hour front desk or concierge, where parcels are logged and held for residents. That is the ideal setup: the package stays in an air-conditioned lobby rather than on a doorstep. In houses, track the delivery and bring the box inside as soon as it lands.",
              "Miami is hot and humid all year, and summer afternoons bring heavy storms. Keep sealed vials somewhere cool, dry and dark, never in a parked car, and store reconstituted material in the fridge at 36–46°F (2–8°C). During hurricane season, from June to November, it is worth keeping an eye on tracking around any storm warning.",
            ],
          },
          {
            h: "Beach bodies and a busy training scene",
            p: [
              "Miami's fitness culture is as visible as anywhere in the country: outdoor workouts along the beach, boxing and MMA gyms, bodybuilding gyms and a large community focused on physique and appearance. Metabolic research with Retatrutide and Tirzepatide leads this page, followed by recovery research with BPC-157, TB-500 and the GLOW blend, GH secretagogue research with Tesamorelin, and NAD+.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Miami Beach and Key Biscayne?", "Yes, along with Brickell, Wynwood, Coral Gables, Doral, Aventura, Fort Lauderdale and Boca Raton."],
          ["Can the concierge accept my parcel?", "Yes. In most condo buildings the front desk logs and holds packages for residents."],
          ["Is the Miami heat a problem for delivery?", "Sealed lyophilized vials handle normal transit well. Just collect the parcel promptly and keep reconstituted material refrigerated at 36–46°F (2–8°C)."],
          ["How long does delivery to Miami take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
        ],
      },
    },
  },

  // ───────────────────────────── CHICAGO ─────────────────────────────
  {
    slug: "chicago",
    type: "city",
    country: "united-states",
    locales: ["en"],
    featured: [
      "bpc-157-tb-500-blend",
      "tb-500-10mg",
      "klow-80mg",
      "retatrutide-20mg",
      "mots-c-10mg",
      "selank-10mg",
    ],
    name: { en: "Chicago" },
    content: {
      en: {
        title: "Research Peptides Chicago | Tracked Delivery, Chicagoland",
        description:
          "Research peptides delivered to the Loop, River North, Lincoln Park, Wicker Park and Logan Square, plus Evanston, Oak Park and Naperville. Tracked, 7–10 days.",
        h1: "Research peptides delivered across Chicago",
        intro:
          "Cellovate delivers research peptides across Chicago and the suburbs, from a River North high-rise to a two-flat in Logan Square. Every parcel is tracked, arrives in plain packaging and typically reaches you within 7 to 10 business days.",
        delivery: US_DELIVERY_EN,
        sections: [
          {
            h: "Every neighborhood, and the suburbs",
            p: [
              "We deliver to the Loop, River North, the Gold Coast, Streeterville and the West Loop, to the North Side neighborhoods of Lincoln Park, Lakeview, Andersonville and Rogers Park, and west to Wicker Park, Bucktown and Logan Square. On the South Side, Pilsen, Bridgeport and Hyde Park are covered too.",
              "Parcels also reach the suburbs: Evanston and Skokie to the north, Oak Park to the west, and Naperville and Schaumburg further out.",
            ],
          },
          {
            h: "Two-flats, high-rises and two kinds of weather",
            p: [
              "Chicago housing ranges from lakefront towers with a doorman and package room to classic two-flats and courtyard buildings, where packages are left in the entry vestibule by the mailboxes. In a shared entry, track the delivery and collect it the same day.",
              "Chicago gets both extremes. Lyophilized material copes with a cold vestibule in January far better than with a sunny porch in a July heat wave, but either way, bring the parcel inside promptly. Keep sealed vials somewhere cool and dark and store reconstituted material in the fridge at 36–46°F (2–8°C).",
            ],
          },
          {
            h: "A lakefront city that trains year-round",
            p: [
              "Chicago runs on the Lakefront Trail, a long ribbon of path used by runners and cyclists from spring to fall, and the city hosts one of the world's major marathons every October. When winter closes in, training moves indoors to a deep network of strength gyms, CrossFit boxes and boxing clubs. Recovery research leads this page, with BPC-157, TB-500 and the KLOW blend, followed by Retatrutide, MOTS-c and Selank.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to the Chicago suburbs?", "Yes, including Evanston, Skokie, Oak Park, Naperville and Schaumburg."],
          ["My building has a shared vestibule. Is that a problem?", "No, but track the parcel and pick it up the same day it arrives."],
          ["How long does delivery to Chicago take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I order on WhatsApp?", "Yes. Send us the product and format, and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
    },
  },

  // ───────────────────────────── HOUSTON ─────────────────────────────
  {
    slug: "houston",
    type: "city",
    country: "united-states",
    locales: ["en"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "cjc-1295-without-dac-ipamorelin",
      "tesamorelin-10mg",
      "bpc-157-10mg",
      "kpv-alpha-10mg",
    ],
    name: { en: "Houston" },
    content: {
      en: {
        title: "Research Peptides Houston | Tracked Delivery, Metro Area",
        description:
          "Research peptides delivered to Montrose, the Heights, Midtown and the Galleria, plus Katy, Sugar Land, The Woodlands and Pearland. Tracked, 7–10 business days.",
        h1: "Research peptides delivered across Houston",
        intro:
          "Cellovate delivers research peptides across Greater Houston, from a Midtown apartment to a family home in Katy. Parcels are tracked from dispatch, arrive in plain packaging and typically reach you within 7 to 10 business days.",
        delivery: US_DELIVERY_EN,
        sections: [
          {
            h: "Inside the Loop and out to the suburbs",
            p: [
              "Inside the 610 Loop, we deliver to Downtown, Midtown, Montrose, the Heights, River Oaks, Rice Village, EaDo and the Museum District. Beyond it, parcels reach the Galleria and Uptown, Memorial, Bellaire and the Energy Corridor.",
              "The suburbs are covered too: Katy and Cypress to the west, Sugar Land and Pearland to the south, The Woodlands and Spring to the north, and Clear Lake toward the bay.",
            ],
          },
          {
            h: "Apartment complexes, porches and Gulf heat",
            p: [
              "Houston is a city of large apartment complexes and single-family homes. Complexes usually route packages to the leasing office or a bank of parcel lockers, while houses get porch delivery. Either way, track the parcel and bring it in quickly.",
              "From May to September, Houston is hot and very humid, and a box on a sunny porch or in a parked truck heats up fast. Keep sealed vials somewhere cool and dark, and store reconstituted material in the fridge at 36–46°F (2–8°C). Hurricane season runs from June to November, so watch tracking around any Gulf storm.",
            ],
          },
          {
            h: "Medical city, strength city",
            p: [
              "Houston is home to the Texas Medical Center, the largest medical complex in the world, and the city has a deep culture of research to match. It also has a big strength and conditioning scene, from powerlifting gyms to the runners who circle the Memorial Park loop at dawn before the heat sets in. Metabolic research with Retatrutide and Tirzepatide leads this page, followed by GH secretagogue research with CJC-1295 + Ipamorelin and Tesamorelin, and tissue research with BPC-157 and KPV.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Katy, Sugar Land and The Woodlands?", "Yes, along with Cypress, Pearland, Spring, Bellaire and Clear Lake."],
          ["My complex uses parcel lockers. Will that work?", "Yes. The carrier can leave the parcel in the locker or at the leasing office, depending on your building."],
          ["How long does delivery to Houston take?", "Typically 7 to 10 business days with tracking, allowing for customs inspection of international parcels like any import."],
          ["Can I pick up in person?", "No. We work by delivery only, with no storefront or pick-up point."],
        ],
      },
    },
  },
];
