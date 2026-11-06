// United Kingdom: country hub and five city pages, served at /{lang}/peptides/{slug}.
// British English only. Same shape as lib/seo/places.js.

const UK_DELIVERY_EN = "7–10 working days, tracked · discreet plain packaging";

export const UK_PLACES = [
  // ───────────────────────────── UNITED KINGDOM (country hub) ─────────────────────────────
  {
    slug: "united-kingdom",
    type: "country",
    country: "united-kingdom",
    locales: ["en"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "cjc-1295-without-dac-ipamorelin",
      "nad-1000mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
    ],
    name: { en: "United Kingdom" },
    content: {
      en: {
        title: "Research Peptides UK | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered across the UK: England, Scotland, Wales and Northern Ireland. Tracked in 7–10 working days, discreet packaging, card or crypto.",
        h1: "Research peptides delivered across the United Kingdom",
        intro:
          "Cellovate delivers research peptides to addresses throughout the United Kingdom, from central London to the Highlands. Every parcel is tracked, arrives in plain packaging and typically lands within 7 to 10 working days. Each compound comes as a lyophilised vial or a pre-filled multi-dose pen, with prices shown in pounds sterling.",
        delivery: UK_DELIVERY_EN,
        sections: [
          {
            h: "How UK delivery works",
            p: [
              "Orders travel by tracked international delivery and you can follow the parcel from dispatch to your door. The 7 to 10 working day window allows for the fact that international parcels can be inspected by customs like any other import.",
              "Shipping is calculated at checkout and becomes free once your basket passes the threshold shown there. There is no shop and no collection point: everything is delivered, whether that is a terraced house in Cardiff, a tenement flat in Edinburgh or a new-build in Belfast.",
            ],
          },
          {
            h: "Vials or pre-filled pens",
            p: [
              "Every compound is offered in two formats. The vial is the standard lyophilised powder, to be reconstituted with bacteriostatic water. The pen is pre-filled and multi-dose, which removes the reconstitution step entirely.",
              "The British climate is kind to sealed vials for most of the year, but central heating and the occasional summer heatwave are worth keeping in mind. Store sealed material somewhere cool and dark, and keep anything reconstituted in the fridge at 2–8°C.",
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
          ["How long does delivery to the UK take?", "Typically 7 to 10 working days with full tracking. That window allows for international parcels being inspected by customs like any import."],
          ["Do you deliver to Scotland, Wales and Northern Ireland?", "Yes. We deliver to addresses across the whole of the United Kingdom, including the Highlands and islands."],
          ["How do I pay, and in which currency?", "By card or crypto at checkout. Visitors in the UK see prices in pounds sterling, and shipping is shown before you pay."],
          ["Can I order on WhatsApp?", "Yes. Message us the product and format you want, and we confirm stock and delivery before you pay."],
        ],
      },
    },
  },

  // ───────────────────────────── LONDON ─────────────────────────────
  {
    slug: "london",
    type: "city",
    country: "united-kingdom",
    locales: ["en"],
    featured: [
      "nad-1000mg",
      "mots-c-10mg",
      "retatrutide-20mg",
      "ss-31",
      "semax-10mg",
      "ghk-cu-50mg",
    ],
    name: { en: "London" },
    content: {
      en: {
        title: "Research Peptides London | Tracked Delivery, All Boroughs",
        description:
          "Research peptides delivered to all 32 London boroughs and the City, from Hackney to Wimbledon. Tracked, 7–10 working days, plain packaging, card or crypto.",
        h1: "Research peptides delivered across London",
        intro:
          "Cellovate delivers research peptides to every corner of London, from a Shoreditch warehouse conversion to a semi in Bromley. Parcels are tracked from dispatch, arrive in plain packaging and typically reach you within 7 to 10 working days.",
        delivery: UK_DELIVERY_EN,
        sections: [
          {
            h: "Every borough, inside and outside the North Circular",
            p: [
              "We deliver to central and inner London (Westminster, the City, Islington, Camden, Southwark, Lambeth, Kensington and Chelsea) and right out to the outer boroughs: Hackney and Walthamstow, Stratford and Canary Wharf, Clapham, Brixton and Wimbledon, Ealing, Richmond, Croydon and Bromley.",
              "The commuter belt is covered too, so Watford, St Albans, Kingston upon Thames and towns along the M25 receive parcels the same way as a Zone 1 address.",
            ],
          },
          {
            h: "Flats, porters and parcel lockers",
            p: [
              "Most Londoners live in flats, and that shapes delivery more than anything. In a mansion block or a new-build development with a concierge, the parcel is usually signed for at the front desk; in a converted Victorian house with a shared front door, it often ends up on the hallway floor or with a neighbour.",
              "If nobody is reliably in during the day, a workplace address with someone at reception saves a trip to the depot. Collect promptly either way: a radiator-warmed communal hallway is not where research material should sit, and reconstituted vials belong in the fridge at 2–8°C.",
            ],
          },
          {
            h: "A city that takes longevity seriously",
            p: [
              "London has one of Europe’s busiest wellness scenes, from boutique strength studios and run clubs to cold-plunge and sauna spaces that have opened across the city in recent years. Unsurprisingly, longevity and cellular-energy research draws the most interest here: NAD+, MOTS-c and SS-31, alongside cognitive research compounds such as Semax and Selank and metabolic research on Retatrutide.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to outer London and the commuter towns?", "Yes. All 32 boroughs and the City of London are covered, as are towns around the M25 such as Watford, St Albans and Kingston."],
          ["What if I live in a flat with a shared front door?", "Use a workplace address if you are out during the day, or add delivery notes for the driver at checkout."],
          ["Can I collect my order somewhere in London?", "No. We have no shop or collection point; every order is delivered to the address you give at checkout."],
          ["Is the parcel discreet?", "Yes. Packaging is plain, with nothing on the outside that describes the contents."],
        ],
      },
    },
  },

  // ───────────────────────────── MANCHESTER ─────────────────────────────
  {
    slug: "manchester",
    type: "city",
    country: "united-kingdom",
    locales: ["en"],
    featured: [
      "bpc-157-tb-500-blend",
      "tb-500-10mg",
      "klow-80mg",
      "cjc-1295-without-dac-ipamorelin",
      "retatrutide-20mg",
      "kpv-alpha-10mg",
    ],
    name: { en: "Manchester" },
    content: {
      en: {
        title: "Research Peptides Manchester | Tracked UK Delivery",
        description:
          "Research peptides delivered across Greater Manchester: city centre, Salford Quays, Didsbury, Chorlton, Stockport and Altrincham. Tracked, 7–10 working days.",
        h1: "Research peptides delivered in Manchester",
        intro:
          "Cellovate delivers research peptides throughout Manchester and the wider city region, from Ancoats apartments to family homes in Sale. Every parcel is tracked, plainly packaged and typically arrives within 7 to 10 working days.",
        delivery: UK_DELIVERY_EN,
        sections: [
          {
            h: "City centre to the ten boroughs",
            p: [
              "We deliver to the city centre (Northern Quarter, Ancoats, Spinningfields, Deansgate and Castlefield), to Salford Quays and MediaCityUK, and to the south Manchester suburbs of Didsbury, Chorlton, Withington and Fallowfield. Further out, Stockport, Altrincham, Sale, Bury, Bolton, Oldham and Rochdale are all covered.",
              "City-centre apartment blocks usually have a concierge or a parcel room, while the red-brick terraces of the suburbs rely on a neighbour or a safe place. If nobody is in during the day, a work address keeps the parcel off a wet doorstep.",
            ],
          },
          {
            h: "A training city through and through",
            p: [
              "Manchester is home to two Premier League clubs, the National Cycling Centre and a long-standing boxing and combat sports culture, with gyms tucked into railway arches and old mills across the city. Add one of the largest student populations in the country and recovery research is the natural focus: BPC-157 and TB-500, the KLOW blend and KPV, along with the GH secretagogue pairing CJC-1295 + Ipamorelin.",
              "The climate is mild and famously damp rather than hot, so sealed vials are easy to store. Keep them away from radiators and keep any reconstituted material in the fridge at 2–8°C.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Salford, Stockport and Trafford?", "Yes. All of Greater Manchester is covered, including Salford, Stockport, Trafford, Bury, Bolton, Oldham, Rochdale, Tameside, Wigan and the city itself."],
          ["How long will my parcel take to reach Manchester?", "Typically 7 to 10 working days, tracked throughout. International parcels can be inspected by customs like any import, and the window allows for that."],
          ["Can I order by WhatsApp?", "Yes. Send us the product and format, and we confirm stock and delivery before you pay by card or crypto."],
        ],
      },
    },
  },

  // ───────────────────────────── BIRMINGHAM ─────────────────────────────
  {
    slug: "birmingham",
    type: "city",
    country: "united-kingdom",
    locales: ["en"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-10mg",
      "tesamorelin-10mg",
      "mots-c-10mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
    ],
    name: { en: "Birmingham" },
    content: {
      en: {
        title: "Research Peptides Birmingham | Tracked UK Delivery",
        description:
          "Research peptides delivered across Birmingham and the West Midlands: Edgbaston, Moseley, Harborne, Solihull, Sutton Coldfield and the Black Country. Tracked.",
        h1: "Research peptides delivered in Birmingham",
        intro:
          "Cellovate delivers research peptides across Birmingham and the West Midlands, from Jewellery Quarter flats to semis in Solihull. Parcels are tracked from dispatch, arrive in plain packaging and typically land within 7 to 10 working days.",
        delivery: UK_DELIVERY_EN,
        sections: [
          {
            h: "Where we deliver",
            p: [
              "The city centre and its neighbouring quarters (Jewellery Quarter, Digbeth, Brindleyplace and the Mailbox area), the inner suburbs of Edgbaston, Moseley, Kings Heath, Harborne and Selly Oak, and north to Erdington and Sutton Coldfield. Beyond the city boundary we cover Solihull, Wolverhampton, Walsall, Dudley, West Bromwich and the rest of the Black Country.",
            ],
          },
          {
            h: "Receiving parcels in a Birmingham home",
            p: [
              "Much of Birmingham lives in Victorian and interwar terraces and semis, where a parcel goes to the front door, a porch or a neighbour. The newer canal-side apartment buildings around the centre tend to have a concierge or secure parcel lockers instead.",
              "If you are out during the day, a work address is often the safer choice. Once the parcel is in, move sealed vials somewhere cool and dark and put reconstituted material in the fridge at 2–8°C, particularly in a warm spell.",
            ],
          },
          {
            h: "Birmingham’s research interests",
            p: [
              "Since hosting the 2022 Commonwealth Games, Birmingham has kept a busy sporting calendar, and the region has a large, diverse population with a strong gym and martial arts culture. Metabolic research on Retatrutide and Tirzepatide sits alongside recovery work on BPC-157 and the GLOW blend, and GH secretagogue research on Tesamorelin.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Solihull and the Black Country?", "Yes. Solihull, Sutton Coldfield, Wolverhampton, Walsall, Dudley, West Bromwich and the rest of the West Midlands are all covered."],
          ["Is there anywhere in Birmingham I can collect from?", "No. We work by delivery only, straight to the address you give at checkout."],
          ["Will anyone know what is inside the parcel?", "No. Packaging is plain, with nothing on the outside that names the contents."],
          ["How is shipping charged?", "The shipping cost is shown at checkout, and it becomes free once your basket passes the threshold displayed there."],
        ],
      },
    },
  },

  // ───────────────────────────── LEEDS ─────────────────────────────
  {
    slug: "leeds",
    type: "city",
    country: "united-kingdom",
    locales: ["en"],
    featured: [
      "bpc-157-tb-500-blend",
      "klow-80mg",
      "cjc-1295-without-dac-ipamorelin",
      "nad-1000mg",
      "selank-10mg",
      "tirzepatide",
    ],
    name: { en: "Leeds" },
    content: {
      en: {
        title: "Research Peptides Leeds | Tracked Yorkshire Delivery",
        description:
          "Research peptides delivered across Leeds and West Yorkshire: Headingley, Chapel Allerton, Roundhay, Horsforth, Bradford, Wakefield and Harrogate. Tracked.",
        h1: "Research peptides delivered in Leeds",
        intro:
          "Cellovate delivers research peptides throughout Leeds and West Yorkshire, from waterside flats at Leeds Dock to stone terraces in Kirkstall. Every parcel is tracked, plainly packaged and typically arrives within 7 to 10 working days.",
        delivery: UK_DELIVERY_EN,
        sections: [
          {
            h: "Leeds and the surrounding towns",
            p: [
              "We deliver to the city centre, Leeds Dock and Holbeck, the student areas of Headingley, Hyde Park and Burley, and the northern suburbs of Chapel Allerton, Roundhay, Meanwood, Horsforth and Adel. Beyond Leeds, Bradford, Wakefield, Huddersfield, Harrogate and Wetherby are all covered.",
              "In a shared student house or a back-to-back terrace, parcels have a habit of going missing in the hallway or sitting with a housemate. Sending it to a work address is often easier, and the tracking lets you collect it the day it arrives.",
            ],
          },
          {
            h: "Yorkshire’s endurance and rugby culture",
            p: [
              "Leeds sits at the heart of a county that loves endurance sport: the Yorkshire Dales draw cyclists and fell runners every weekend, triathlon has a strong following here, and Headingley is home to both cricket and rugby league. Two large universities add a young, training-focused population. Recovery research on BPC-157, TB-500 and the KLOW blend leads the way, followed by GH secretagogue research on CJC-1295 + Ipamorelin, longevity research on NAD+ and cognitive research on Selank.",
              "Yorkshire is cool for most of the year, so sealed vials store easily. Keep them away from radiators and keep reconstituted material in the fridge at 2–8°C.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Bradford, Wakefield and Harrogate?", "Yes. All of West Yorkshire is covered, along with Harrogate, Wetherby and the rest of the county."],
          ["How long does delivery to Leeds take?", "Typically 7 to 10 working days with full tracking. Like any import, international parcels can be inspected by customs, and the window allows for that."],
          ["How do I pay?", "By card or crypto at checkout, with prices shown in pounds sterling. You can also order on WhatsApp and we confirm stock and delivery before you pay."],
        ],
      },
    },
  },

  // ───────────────────────────── GLASGOW ─────────────────────────────
  {
    slug: "glasgow",
    type: "city",
    country: "united-kingdom",
    locales: ["en"],
    featured: [
      "bpc-157-tb-500-blend",
      "retatrutide-20mg",
      "tb-500-10mg",
      "mots-c-10mg",
      "semax-10mg",
      "ghk-cu-50mg",
    ],
    name: { en: "Glasgow" },
    content: {
      en: {
        title: "Research Peptides Glasgow | Tracked Delivery in Scotland",
        description:
          "Research peptides delivered across Glasgow: West End, Southside, Merchant City and Dennistoun, plus Paisley, Bearsden and East Kilbride. Tracked, 7–10 days.",
        h1: "Research peptides delivered in Glasgow",
        intro:
          "Cellovate delivers research peptides across Glasgow and the surrounding towns, from West End tenements to new flats on the Clyde. Parcels are tracked from dispatch, arrive in plain packaging and typically reach you within 7 to 10 working days.",
        delivery: UK_DELIVERY_EN,
        sections: [
          {
            h: "Across the city and beyond",
            p: [
              "We deliver to the West End (Hyndland, Partick, Finnieston and around Byres Road), the Southside (Shawlands, Strathbungo and Pollokshields), the Merchant City and city centre, and the East End and Dennistoun. Outside the city we cover Paisley, Clydebank, Bearsden, Milngavie, East Kilbride and Hamilton.",
            ],
          },
          {
            h: "Tenements, closes and entry systems",
            p: [
              "A large share of Glaswegians live in sandstone tenements, where the close is behind a controlled entry door and a driver may not get past the buzzer. If you are out during the day, add access notes for the driver at checkout, or use a work address.",
              "Glasgow’s cool, wet climate is easy on sealed vials, but tenement flats can run warm once the heating is on. Store sealed material somewhere cool and dark, and keep reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "Glasgow’s training scene",
            p: [
              "The 2014 Commonwealth Games left Glasgow with venues such as the Emirates Arena and the Sir Chris Hoy Velodrome, and the city has deep roots in football and boxing. That makes recovery research on BPC-157 and TB-500 the most natural fit here, alongside metabolic research on Retatrutide, longevity research on MOTS-c, cognitive research on Semax and copper peptide research on GHK-Cu.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Paisley, East Kilbride and the rest of Scotland?", "Yes. We cover Glasgow and its surrounding towns, and deliver to addresses across the whole of Scotland."],
          ["What if the driver cannot get into my close?", "Add access notes for the driver at checkout, or have the parcel sent to a work address where someone can sign for it."],
          ["Can I order by WhatsApp?", "Yes. Message us the product and format, and we confirm stock and delivery before you pay by card or crypto."],
          ["Is there a shop in Glasgow?", "No. We work by delivery only, with no shop or collection point."],
        ],
      },
    },
  },
];
