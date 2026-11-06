// Spain: country hub + Madrid, Barcelona, Valencia, Málaga, Marbella.
// Served at /{lang}/peptides/{slug}. Same shape as lib/seo/places.js.

export const SPAIN_PLACES = [
  // ───────────────────────────── SPAIN (country hub) ─────────────────────────────
  {
    slug: "spain",
    type: "country",
    country: "spain",
    locales: ["en", "es"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "cjc-1295-without-dac-ipamorelin",
      "nad-1000mg",
      "mots-c-10mg",
    ],
    name: { en: "Spain", es: "España" },
    content: {
      en: {
        title: "Research Peptides in Spain | Tracked Delivery 7–10 Days",
        description:
          "Research peptides delivered across Spain in 7–10 business days, tracked and in plain packaging. Lyophilised vials or pre-filled pens, prices in euros.",
        h1: "Research peptides delivered across Spain",
        intro:
          "Cellovate delivers research peptides across Spain, from Madrid and Barcelona to Valencia and the Costa del Sol. Parcels travel by tracked international delivery and arrive in 7 to 10 business days, in plain packaging. Every compound comes as a lyophilised vial or a pre-filled multi-dose pen, with prices shown in euros.",
        delivery: "7–10 business days, tracked · discreet plain packaging",
        sections: [
          {
            h: "How delivery to Spain works",
            p: [
              "Each order is shipped with a tracking number, so you can follow the parcel from dispatch to your door. Like any international import, a parcel can be inspected by customs on its way in; the 7 to 10 business day window already allows for that, so a short pause in the tracking is normal.",
              "Shipping cost is shown at checkout before you pay, and shipping becomes free once your basket passes the threshold displayed there. We work by delivery only: there is no shop and no pick-up point.",
            ],
          },
          {
            h: "Vials or pre-filled pens",
            p: [
              "Every compound is offered in two formats. The vial is the standard lyophilised powder, reconstituted with bacteriostatic water. The pen is pre-filled and multi-dose, which removes the reconstitution step entirely.",
              "Spanish summers are long, and inland they are fierce. Sealed lyophilised vials cope with normal transit, but once a parcel arrives, store it somewhere cool and keep any reconstituted material in the fridge at 2–8°C, away from light.",
            ],
          },
          {
            h: "Research areas we cover",
            p: [
              "The catalogue is organised by research area: metabolic research (Retatrutide, Tirzepatide), recovery and tissue research (BPC-157, TB-500, the KLOW and GLOW blends, KPV), GH secretagogue research (CJC-1295 + Ipamorelin, Tesamorelin), longevity and cellular-energy research (NAD+, MOTS-c, SS-31), cognitive research (Semax, Selank) and copper peptide research (GHK-Cu).",
              "Spain has one of Europe’s most active fitness cultures, from the gym and CrossFit scene of the big cities to the runners, cyclists and padel players of the Mediterranean shore, and interest in these research areas follows that energy.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Spain take?", "7 to 10 business days by tracked international delivery, to any address in mainland Spain."],
          ["Can parcels be held by customs?", "Like any international import, a parcel can be inspected by customs. The 7 to 10 business day window allows for this, and tracking shows where your parcel is."],
          ["How do I pay, and in which currency?", "By card or crypto at checkout. Visitors in Spain see prices in euros, and the shipping cost appears at checkout before payment."],
          ["Can I order by WhatsApp?", "Yes. Send us the products and format you want on WhatsApp and we confirm stock and delivery timing before you pay."],
        ],
      },
      es: {
        title: "Péptidos de investigación en España | Envío en 7–10 días",
        description:
          "Péptidos de investigación con envío a toda España en 7–10 días hábiles, con seguimiento y embalaje neutro. Viales liofilizados o plumas precargadas, en euros.",
        h1: "Péptidos de investigación con envío a toda España",
        intro:
          "Cellovate envía péptidos de investigación a toda España, de Madrid y Barcelona a Valencia y la Costa del Sol. Los paquetes viajan con envío internacional con seguimiento y llegan en 7 a 10 días hábiles, en un embalaje totalmente neutro. Cada compuesto se presenta en vial liofilizado o en pluma multidosis precargada, con precios en euros.",
        delivery: "7–10 días hábiles, con seguimiento · embalaje neutro y discreto",
        sections: [
          {
            h: "Cómo funciona el envío a España",
            p: [
              "Cada pedido sale con número de seguimiento, así que puedes ver en todo momento dónde está tu paquete. Como cualquier importación, un envío internacional puede pasar una inspección de aduanas; el plazo de 7 a 10 días hábiles ya lo tiene en cuenta, de modo que una pausa breve en el seguimiento es normal.",
              "El coste de envío aparece en el checkout antes de pagar, y pasa a ser gratuito a partir del importe mínimo que se indica ahí. Trabajamos solo con entrega a domicilio: no hay tienda física ni punto de recogida.",
            ],
          },
          {
            h: "Vial o pluma precargada",
            p: [
              "Todos los compuestos se ofrecen en dos formatos. El vial contiene el polvo liofilizado de siempre, que se reconstituye con agua bacteriostática. La pluma viene precargada y es multidosis, así que te ahorras por completo el paso de la reconstitución.",
              "Los veranos en España son largos, y en el interior, durísimos. Los viales liofilizados cerrados aguantan bien un transporte normal, pero en cuanto llegue el paquete guárdalo en un sitio fresco y conserva el material reconstituido en la nevera, entre 2 y 8 °C y protegido de la luz.",
            ],
          },
          {
            h: "Áreas de investigación",
            p: [
              "El catálogo está ordenado por área: investigación metabólica (Retatrutide, Tirzepatide), recuperación y tejidos (BPC-157, TB-500, los blends KLOW y GLOW, KPV), secretagogos de GH (CJC-1295 + Ipamorelin, Tesamorelin), longevidad y energía celular (NAD+, MOTS-c, SS-31), investigación cognitiva (Semax, Selank) y péptidos de cobre (GHK-Cu).",
              "España tiene una de las culturas del fitness más vivas de Europa, desde los gimnasios y boxes de CrossFit de las grandes ciudades hasta los corredores, ciclistas y jugadores de pádel de la costa mediterránea, y el interés por estas líneas de investigación va de la mano.",
            ],
          },
        ],
        faq: [
          ["¿Cuánto tarda el envío a España?", "Entre 7 y 10 días hábiles, con envío internacional con seguimiento a cualquier dirección de la península."],
          ["¿Puede retenerse el paquete en aduanas?", "Como cualquier importación, un envío internacional puede ser inspeccionado por aduanas. El plazo de 7 a 10 días hábiles ya lo contempla y el seguimiento te indica dónde está el paquete."],
          ["¿Cómo se paga y en qué moneda?", "Con tarjeta o criptomonedas en el checkout. Si visitas la web desde España, verás los precios en euros, y el coste de envío aparece antes de pagar."],
          ["¿Puedo hacer el pedido por WhatsApp?", "Sí. Escríbenos por WhatsApp con los productos y el formato que quieres, y te confirmamos stock y plazo de entrega antes del pago."],
        ],
      },
    },
  },

  // ───────────────────────────── MADRID ─────────────────────────────
  {
    slug: "madrid",
    type: "city",
    country: "spain",
    locales: ["en", "es"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "cjc-1295-without-dac-ipamorelin",
      "bpc-157-tb-500-blend",
      "semax-10mg",
      "selank-10mg",
    ],
    name: { en: "Madrid", es: "Madrid" },
    content: {
      en: {
        title: "Research Peptides Madrid | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Madrid in 7–10 business days: Salamanca, Chamberí, Retiro, Chamartín, Malasaña and the wider region. Vials and pre-filled pens.",
        h1: "Research peptides delivered to Madrid",
        intro:
          "Madrid orders arrive by tracked international delivery in 7 to 10 business days, in plain packaging with nothing on the outside that names the contents. We deliver to the whole city and the surrounding Comunidad de Madrid, to your flat or your office.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Districts and towns we cover",
            p: [
              "Every district of the capital: Salamanca, Chamberí, Retiro, Chamartín, Centro with Malasaña, Chueca and Lavapiés, Arganzuela, Moncloa, Tetuán and beyond. We also deliver across the region, including Pozuelo de Alarcón, Las Rozas, Majadahonda, Alcobendas, San Sebastián de los Reyes, Getafe and Alcalá de Henares.",
            ],
          },
          {
            h: "Porteros, buzones and the August heat",
            p: [
              "Many older blocks in central Madrid still have a portero who takes in parcels during the day, which is the easiest way to receive a delivery. In buildings without one, a parcel cannot go in the letterbox, so use the tracking link to be at home on the day, or have it sent to an office with a staffed reception.",
              "Madrid summers regularly pass 35°C and can touch 40°C. Collect your parcel promptly, keep sealed vials somewhere cool and dark, and store reconstituted material in the fridge at 2–8°C, never in a car parked in the sun.",
            ],
          },
          {
            h: "A city that trains",
            p: [
              "Madrid has a dense network of gyms, CrossFit boxes and running clubs, with Retiro, Casa de Campo and Madrid Río full of runners every morning. Metabolic research (Retatrutide, Tirzepatide), GH secretagogue research such as CJC-1295 + Ipamorelin, and cognitive research compounds like Semax and Selank all have a place in the catalogue for this busy, work-hard crowd.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Madrid take?", "7 to 10 business days by tracked international delivery, anywhere in the city or the Comunidad de Madrid."],
          ["Can I have it delivered to my office?", "Yes. An office with a staffed reception is often the simplest option if your building has no portero."],
          ["Is there a shop in Madrid where I can collect?", "No. We work by delivery only, with no shop and no pick-up point."],
          ["Do you deliver outside the M-30?", "Yes, to every district and to towns across the region such as Pozuelo, Las Rozas, Alcobendas, Getafe and Alcalá de Henares."],
        ],
      },
      es: {
        title: "Péptidos de investigación en Madrid | Envío con seguimiento",
        description:
          "Péptidos de investigación con envío a Madrid en 7–10 días hábiles: Salamanca, Chamberí, Retiro, Chamartín, Malasaña y toda la Comunidad. Viales y plumas.",
        h1: "Péptidos de investigación con envío a Madrid",
        intro:
          "Los pedidos a Madrid llegan con envío internacional con seguimiento en 7 a 10 días hábiles, en un embalaje neutro que no dice nada de lo que lleva dentro. Entregamos en toda la ciudad y en el resto de la Comunidad de Madrid, en casa o en la oficina.",
        delivery: "7–10 días hábiles, con seguimiento",
        sections: [
          {
            h: "Barrios y municipios",
            p: [
              "Todos los distritos de la capital: Salamanca, Chamberí, Retiro, Chamartín, Centro con Malasaña, Chueca y Lavapiés, Arganzuela, Moncloa, Tetuán y el resto. También llegamos a toda la Comunidad, incluidos Pozuelo de Alarcón, Las Rozas, Majadahonda, Alcobendas, San Sebastián de los Reyes, Getafe y Alcalá de Henares.",
            ],
          },
          {
            h: "Porteros, buzones y el calor de agosto",
            p: [
              "En muchas fincas antiguas del centro todavía hay portero, que recoge los paquetes durante el día: es la forma más cómoda de recibir un envío. Si tu edificio no tiene, el paquete no cabe en el buzón, así que sigue el envío para estar en casa ese día o pide la entrega en una oficina con recepción.",
              "En verano Madrid supera a menudo los 35 °C y puede rozar los 40 °C. Recoge el paquete cuanto antes, guarda los viales cerrados en un lugar fresco y oscuro, y el material reconstituido en la nevera, entre 2 y 8 °C. Nunca en un coche aparcado al sol.",
            ],
          },
          {
            h: "Una ciudad que entrena",
            p: [
              "Madrid tiene una red enorme de gimnasios, boxes de CrossFit y clubes de running, y el Retiro, la Casa de Campo y Madrid Río se llenan de corredores cada mañana. La investigación metabólica (Retatrutide, Tirzepatide), los secretagogos de GH como CJC-1295 + Ipamorelin y compuestos de investigación cognitiva como Semax y Selank tienen su sitio en el catálogo para un público que va a mil.",
            ],
          },
        ],
        faq: [
          ["¿Cuánto tarda el envío a Madrid?", "Entre 7 y 10 días hábiles con envío internacional con seguimiento, en cualquier punto de la ciudad o de la Comunidad."],
          ["¿Me lo podéis enviar a la oficina?", "Sí. Si tu edificio no tiene portero, una oficina con recepción suele ser la opción más sencilla."],
          ["¿Hay tienda en Madrid para recogerlo?", "No. Trabajamos solo con entrega a domicilio, sin tienda física ni punto de recogida."],
          ["¿Enviáis fuera de la M-30?", "Sí, a todos los distritos y a municipios de la Comunidad como Pozuelo, Las Rozas, Alcobendas, Getafe o Alcalá de Henares."],
        ],
      },
    },
  },

  // ───────────────────────────── BARCELONA ─────────────────────────────
  {
    slug: "barcelona",
    type: "city",
    country: "spain",
    locales: ["en", "es"],
    featured: [
      "nad-1000mg",
      "mots-c-10mg",
      "ss-31",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "retatrutide-20mg",
      "ghk-cu-50mg",
    ],
    name: { en: "Barcelona", es: "Barcelona" },
    content: {
      en: {
        title: "Research Peptides Barcelona | Tracked Delivery 7–10 Days",
        description:
          "Research peptides delivered to Barcelona in 7–10 business days: Eixample, Gràcia, Poblenou, Sant Gervasi, Les Corts and the metro area. Vials and pens.",
        h1: "Research peptides delivered to Barcelona",
        intro:
          "Barcelona orders travel by tracked international delivery and reach the city in 7 to 10 business days, in discreet plain packaging. We cover every neighbourhood and the towns of the metropolitan area, from the seafront up to the Collserola hills.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Neighbourhoods and nearby towns",
            p: [
              "The Eixample (Dreta and Esquerra), Gràcia, Sant Gervasi and Sarrià, Les Corts, Sants, Poblenou and the 22@ district, Barceloneta, El Born and the Gothic Quarter, Horta and Sant Andreu. Around the city we also deliver to L’Hospitalet de Llobregat, Badalona, Sant Cugat del Vallès, Castelldefels and Sitges.",
            ],
          },
          {
            h: "Old fincas, no lift, no portería",
            p: [
              "A lot of Barcelona lives in classic fincas in the Eixample and Gràcia, some with a portería and many without, and often with a narrow stairwell and no lift. If no one takes in parcels in your building, follow the tracking and be at home on delivery day, or use a workplace address in Poblenou or the centre with someone at reception.",
              "Summer here is less about extreme heat than humidity, which makes flats warm and sticky from June to September. Keep sealed vials in a cool, dry cupboard and store reconstituted material in the fridge at 2–8°C, away from light.",
            ],
          },
          {
            h: "Longevity and outdoor training",
            p: [
              "Between the seafront promenade, Montjuïc and the Carretera de les Aigües, Barcelona is a city of runners, cyclists and open-water swimmers, and its tech and start-up community has brought a strong interest in longevity. NAD+, MOTS-c and SS-31 for cellular-energy research sit alongside the GLOW blend and GHK-Cu for copper peptide research, with Retatrutide for metabolic research.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Barcelona take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Sant Cugat, Badalona and Castelldefels?", "Yes, along with L’Hospitalet, Sitges and the rest of the metropolitan area."],
          ["My building has no portería. What should I do?", "Use the tracking link to be at home on the delivery day, or choose a workplace address where someone can sign for the parcel."],
        ],
      },
      es: {
        title: "Péptidos de investigación en Barcelona | Envío 7–10 días",
        description:
          "Péptidos de investigación con envío a Barcelona en 7–10 días hábiles: Eixample, Gràcia, Poblenou, Sant Gervasi, Les Corts y área metropolitana. Viales y plumas.",
        h1: "Péptidos de investigación con envío a Barcelona",
        intro:
          "Los pedidos a Barcelona viajan con envío internacional con seguimiento y llegan en 7 a 10 días hábiles, en un embalaje neutro y discreto. Cubrimos todos los barrios y los municipios del área metropolitana, del mar a Collserola.",
        delivery: "7–10 días hábiles, con seguimiento",
        sections: [
          {
            h: "Barrios y alrededores",
            p: [
              "La Dreta y l’Esquerra de l’Eixample, Gràcia, Sant Gervasi y Sarrià, Les Corts, Sants, Poblenou y el 22@, la Barceloneta, el Born y el Gòtic, Horta y Sant Andreu. Fuera de la ciudad también llegamos a L’Hospitalet de Llobregat, Badalona, Sant Cugat del Vallès, Castelldefels y Sitges.",
            ],
          },
          {
            h: "Fincas antiguas, sin ascensor y sin portería",
            p: [
              "Buena parte de Barcelona vive en fincas clásicas del Eixample y de Gràcia, algunas con portería y muchas sin ella, a menudo con escalera estrecha y sin ascensor. Si en tu edificio nadie recoge paquetes, sigue el envío para estar en casa el día de la entrega o usa la dirección del trabajo, en Poblenou o en el centro, donde haya alguien en recepción.",
              "Aquí el verano no se nota tanto por el calor extremo como por la humedad, que convierte los pisos en hornos pegajosos de junio a septiembre. Guarda los viales cerrados en un armario fresco y seco, y el material reconstituido en la nevera, entre 2 y 8 °C y lejos de la luz.",
            ],
          },
          {
            h: "Longevidad y deporte al aire libre",
            p: [
              "Entre el paseo marítimo, Montjuïc y la Carretera de les Aigües, Barcelona es ciudad de corredores, ciclistas y nadadores de aguas abiertas, y su comunidad tech y de startups ha disparado el interés por la longevidad. NAD+, MOTS-c y SS-31 para la investigación en energía celular conviven con el blend GLOW y el GHK-Cu en péptidos de cobre, y con Retatrutide en investigación metabólica.",
            ],
          },
        ],
        faq: [
          ["¿Cuánto tarda el envío a Barcelona?", "Entre 7 y 10 días hábiles, con envío internacional con seguimiento."],
          ["¿Enviáis a Sant Cugat, Badalona y Castelldefels?", "Sí, y también a L’Hospitalet, Sitges y el resto del área metropolitana."],
          ["Mi edificio no tiene portería, ¿qué hago?", "Sigue el envío para estar en casa el día de la entrega, o elige la dirección del trabajo, donde alguien pueda recoger el paquete."],
        ],
      },
    },
  },

  // ───────────────────────────── VALENCIA ─────────────────────────────
  {
    slug: "valencia",
    type: "city",
    country: "spain",
    locales: ["en", "es"],
    featured: [
      "bpc-157-tb-500-blend",
      "tb-500-10mg",
      "klow-80mg",
      "kpv-alpha-10mg",
      "mots-c-10mg",
      "retatrutide-20mg",
    ],
    name: { en: "Valencia", es: "Valencia" },
    content: {
      en: {
        title: "Research Peptides Valencia | Tracked Delivery 7–10 Days",
        description:
          "Research peptides delivered to Valencia in 7–10 business days: Ruzafa, El Carmen, Benimaclet, Campanar, El Cabanyal and l’Horta towns. Vials and pens.",
        h1: "Research peptides delivered to Valencia",
        intro:
          "Valencia orders arrive by tracked international delivery in 7 to 10 business days, in plain packaging. We deliver across the city and the surrounding towns of l’Horta, whether you live in a flat in Ruzafa or a house near the beach in El Cabanyal.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Where we deliver",
            p: [
              "Ciutat Vella and El Carmen, Ruzafa, the Eixample and Gran Vía, Benimaclet, Campanar, Patraix, the Ciudad de las Artes y las Ciencias area, El Cabanyal and the Malvarrosa seafront. Around the city we also cover Paterna, Burjassot, Mislata, Alboraya, Torrent and Manises.",
            ],
          },
          {
            h: "Fincas, porteros and humid summers",
            p: [
              "Most of Valencia lives in apartment blocks with a shared entrance; the larger ones have a conserje, while smaller fincas in Ruzafa or El Carmen usually do not. Without someone to take it in, a parcel will not fit the letterbox, so check the tracking and arrange to be at home, or use a work address.",
              "Valencia’s summers are hot and very humid, with warm nights that keep flats from cooling down. Store sealed vials in a cool, dry place and keep reconstituted material in the fridge at 2–8°C, out of the light.",
            ],
          },
          {
            h: "An endurance city",
            p: [
              "The Jardín del Turia gives Valencia a green running and cycling corridor right through the city, and its autumn marathon is famous for one of the quickest courses in the world. That endurance culture explains the focus on recovery research here: BPC-157 and TB-500, the KLOW blend and KPV, alongside MOTS-c and Retatrutide for metabolic and cellular-energy research.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Valencia take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Paterna, Alboraya and Torrent?", "Yes, along with Burjassot, Mislata, Manises and the rest of the metropolitan area."],
          ["Can I order by WhatsApp?", "Yes. Tell us what you need on WhatsApp and we confirm stock and delivery timing before you pay."],
          ["Is the packaging discreet?", "Yes. Parcels are plain, with nothing on the outside that names the contents."],
        ],
      },
      es: {
        title: "Péptidos de investigación en Valencia | Envío 7–10 días",
        description:
          "Péptidos de investigación con envío a Valencia en 7–10 días hábiles: Ruzafa, El Carmen, Benimaclet, Campanar, El Cabanyal y l’Horta. Viales y plumas.",
        h1: "Péptidos de investigación con envío a Valencia",
        intro:
          "Los pedidos a Valencia llegan con envío internacional con seguimiento en 7 a 10 días hábiles, en embalaje neutro. Entregamos en toda la ciudad y en los municipios de l’Horta, tanto si vives en un piso de Ruzafa como en una casa junto a la playa en El Cabanyal.",
        delivery: "7–10 días hábiles, con seguimiento",
        sections: [
          {
            h: "Zonas de entrega",
            p: [
              "Ciutat Vella y El Carmen, Ruzafa, el Ensanche y la Gran Vía, Benimaclet, Campanar, Patraix, la zona de la Ciudad de las Artes y las Ciencias, El Cabanyal y el paseo de la Malvarrosa. En los alrededores llegamos también a Paterna, Burjassot, Mislata, Alboraya, Torrent y Manises.",
            ],
          },
          {
            h: "Fincas, conserjes y veranos húmedos",
            p: [
              "En Valencia casi todo el mundo vive en bloques con portal compartido: los edificios grandes suelen tener conserje, pero las fincas pequeñas de Ruzafa o El Carmen no. Si nadie puede recogerlo, el paquete no cabe en el buzón, así que mira el seguimiento y organízate para estar en casa, o usa la dirección del trabajo.",
              "Los veranos valencianos son calurosos y muy húmedos, con noches templadas que no dejan que el piso se enfríe. Guarda los viales cerrados en un lugar fresco y seco, y el material reconstituido en la nevera, entre 2 y 8 °C y protegido de la luz.",
            ],
          },
          {
            h: "Ciudad de fondo",
            p: [
              "El Jardín del Turia regala a Valencia un pasillo verde para correr y pedalear que cruza toda la ciudad, y su maratón de otoño es famoso por tener uno de los recorridos más rápidos del mundo. Esa cultura de resistencia explica el peso de la investigación en recuperación: BPC-157 y TB-500, el blend KLOW y KPV, junto con MOTS-c y Retatrutide en investigación metabólica y de energía celular.",
            ],
          },
        ],
        faq: [
          ["¿Cuánto tarda el envío a Valencia?", "Entre 7 y 10 días hábiles, con envío internacional con seguimiento."],
          ["¿Enviáis a Paterna, Alboraya y Torrent?", "Sí, y también a Burjassot, Mislata, Manises y el resto del área metropolitana."],
          ["¿Puedo pedir por WhatsApp?", "Sí. Cuéntanos por WhatsApp qué necesitas y te confirmamos stock y plazo de entrega antes de pagar."],
          ["¿El embalaje es discreto?", "Sí. Los paquetes son neutros, sin nada en el exterior que indique el contenido."],
        ],
      },
    },
  },

  // ───────────────────────────── MÁLAGA ─────────────────────────────
  {
    slug: "malaga",
    type: "city",
    country: "spain",
    locales: ["en", "es"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-10mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "nad-1000mg",
      "semax-10mg",
    ],
    name: { en: "Málaga", es: "Málaga" },
    content: {
      en: {
        title: "Research Peptides Málaga | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Málaga in 7–10 business days: Centro, Soho, La Malagueta, Pedregalejo, Teatinos and the Costa del Sol towns. Vials and pens.",
        h1: "Research peptides delivered to Málaga",
        intro:
          "Málaga orders reach the city by tracked international delivery in 7 to 10 business days, in plain packaging. We deliver across the capital of the Costa del Sol and along the shoreline, to flats, houses and offices alike.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Málaga and the Costa del Sol",
            p: [
              "The Centro Histórico and Soho, La Malagueta, Pedregalejo and El Palo, Ciudad Jardín, Teatinos, Carretera de Cádiz and Huelin. Along the shoreline and inland we also cover Torremolinos, Benalmádena, Fuengirola, Rincón de la Victoria and Alhaurín de la Torre.",
            ],
          },
          {
            h: "Receiving a parcel in Málaga",
            p: [
              "Newer blocks in Teatinos and on the outskirts often have a conserje or a gated community entrance, while flats in the historic centre usually rely on a shared street door and a buzzer. If no one can take the parcel in, follow the tracking and be at home on delivery day, or use a work address.",
              "Málaga is mild most of the year, but summer is hot, and when the terral wind blows in from inland, temperatures jump fast. Keep sealed vials cool and dry, and reconstituted material in the fridge at 2–8°C, away from light.",
            ],
          },
          {
            h: "A growing, outdoor city",
            p: [
              "With its tech hub, a large international community and remote workers drawn by the climate, Málaga has an active outdoor scene: runners and cyclists on the Paseo Marítimo, beach training and hiking in the Montes de Málaga. The catalogue here leans towards metabolic research (Retatrutide, Tirzepatide), recovery research with BPC-157 and the GLOW blend, NAD+ for cellular-energy research and Semax for cognitive research.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Málaga take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Torremolinos, Benalmádena and Fuengirola?", "Yes, as well as Rincón de la Victoria, Alhaurín de la Torre and the rest of the area."],
          ["Can I pay in euros?", "Yes. Visitors in Spain see prices in euros and pay by card or crypto at checkout."],
        ],
      },
      es: {
        title: "Péptidos de investigación en Málaga | Envío con seguimiento",
        description:
          "Péptidos de investigación con envío a Málaga en 7–10 días hábiles: Centro, Soho, La Malagueta, Pedregalejo, Teatinos y la Costa del Sol. Viales y plumas.",
        h1: "Péptidos de investigación con envío a Málaga",
        intro:
          "Los pedidos a Málaga llegan con envío internacional con seguimiento en 7 a 10 días hábiles, en embalaje neutro. Entregamos en toda la capital de la Costa del Sol y a lo largo del litoral, en pisos, casas u oficinas.",
        delivery: "7–10 días hábiles, con seguimiento",
        sections: [
          {
            h: "Málaga y la costa",
            p: [
              "El Centro Histórico y el Soho, La Malagueta, Pedregalejo y El Palo, Ciudad Jardín, Teatinos, Carretera de Cádiz y Huelin. Por la costa y hacia el interior también llegamos a Torremolinos, Benalmádena, Fuengirola, Rincón de la Victoria y Alhaurín de la Torre.",
            ],
          },
          {
            h: "Recibir un paquete en Málaga",
            p: [
              "Los bloques nuevos de Teatinos y de las afueras suelen tener conserje o urbanización cerrada, mientras que en los pisos del centro histórico lo normal es un portal compartido con portero automático. Si nadie puede recoger el paquete, sigue el envío para estar en casa ese día o usa la dirección del trabajo.",
              "Málaga es suave casi todo el año, pero el verano aprieta, y cuando sopla el terral las temperaturas se disparan en pocas horas. Guarda los viales cerrados en un sitio fresco y seco, y el material reconstituido en la nevera, entre 2 y 8 °C y lejos de la luz.",
            ],
          },
          {
            h: "Una ciudad que crece al aire libre",
            p: [
              "Con su polo tecnológico, una gran comunidad internacional y teletrabajadores atraídos por el clima, Málaga vive mucho en la calle: corredores y ciclistas en el Paseo Marítimo, entrenamientos en la playa y rutas por los Montes de Málaga. Aquí el catálogo se inclina por la investigación metabólica (Retatrutide, Tirzepatide), la recuperación con BPC-157 y el blend GLOW, el NAD+ en energía celular y Semax en investigación cognitiva.",
            ],
          },
        ],
        faq: [
          ["¿Cuánto tarda el envío a Málaga?", "Entre 7 y 10 días hábiles, con envío internacional con seguimiento."],
          ["¿Enviáis a Torremolinos, Benalmádena y Fuengirola?", "Sí, y también a Rincón de la Victoria, Alhaurín de la Torre y el resto de la zona."],
          ["¿Puedo pagar en euros?", "Sí. Desde España verás los precios en euros y pagarás con tarjeta o criptomonedas en el checkout."],
        ],
      },
    },
  },

  // ───────────────────────────── MARBELLA ─────────────────────────────
  {
    slug: "marbella",
    type: "city",
    country: "spain",
    locales: ["en", "es"],
    featured: [
      "nad-1000mg",
      "ss-31",
      "tesamorelin-10mg",
      "ghk-cu-50mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "retatrutide-20mg",
    ],
    name: { en: "Marbella", es: "Marbella" },
    content: {
      en: {
        title: "Research Peptides Marbella | Tracked Delivery 7–10 Days",
        description:
          "Research peptides delivered to Marbella in 7–10 business days: Golden Mile, Puerto Banús, Nueva Andalucía, San Pedro, Elviria and Estepona. Vials and pens.",
        h1: "Research peptides delivered to Marbella",
        intro:
          "Marbella orders arrive by tracked international delivery in 7 to 10 business days, in discreet plain packaging. We deliver to villas, apartments and gated urbanisations right along this stretch of the Costa del Sol.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "From the Golden Mile to Estepona",
            p: [
              "The Golden Mile and Sierra Blanca, Puerto Banús and Nueva Andalucía, the Casco Antiguo, San Pedro de Alcántara, Elviria, Los Monteros and Cabopino. Nearby we also cover Estepona, Benahavís, Ojén, Mijas and Fuengirola.",
            ],
          },
          {
            h: "Urbanisations, gatehouses and second homes",
            p: [
              "Much of Marbella lives in gated urbanisations with a security gatehouse or a community conserje, which usually take in parcels. For a private villa, make sure someone is on site on delivery day: drivers cannot leave a parcel outside a gate. If you split the year between Marbella and elsewhere, order once you are back, not before.",
              "Summers on the Costa del Sol are hot and bright, and a parcel left in a sunny porch or a parked car warms up quickly. Keep sealed vials somewhere cool and dark, and reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "Wellness, padel and longevity",
            p: [
              "Marbella is known for its padel courts, golf courses, private gyms and a wellness culture with a strong international flavour, where longevity is a common conversation. That is reflected here: NAD+ and SS-31 for cellular-energy research, Tesamorelin for GH secretagogue research, GHK-Cu and the GLOW blend for copper peptide and tissue research, and Retatrutide for metabolic research.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Marbella take?", "7 to 10 business days by tracked international delivery."],
          ["Can you deliver to a gated urbanisation?", "Yes. The gatehouse or the community conserje usually takes in parcels; for a private villa, make sure someone is on site."],
          ["Do you deliver to Estepona and Benahavís?", "Yes, along with Puerto Banús, Nueva Andalucía, San Pedro, Ojén and Mijas."],
          ["Can I order by WhatsApp?", "Yes. Message us the products and format you want and we confirm stock and delivery timing before you pay."],
        ],
      },
      es: {
        title: "Péptidos de investigación en Marbella | Envío 7–10 días",
        description:
          "Péptidos de investigación con envío a Marbella en 7–10 días hábiles: Milla de Oro, Puerto Banús, Nueva Andalucía, San Pedro, Elviria y Estepona. Viales.",
        h1: "Péptidos de investigación con envío a Marbella",
        intro:
          "Los pedidos a Marbella llegan con envío internacional con seguimiento en 7 a 10 días hábiles, en un embalaje neutro y discreto. Entregamos en villas, apartamentos y urbanizaciones cerradas a lo largo de todo este tramo de la Costa del Sol.",
        delivery: "7–10 días hábiles, con seguimiento",
        sections: [
          {
            h: "De la Milla de Oro a Estepona",
            p: [
              "La Milla de Oro y Sierra Blanca, Puerto Banús y Nueva Andalucía, el Casco Antiguo, San Pedro de Alcántara, Elviria, Los Monteros y Cabopino. En los alrededores llegamos también a Estepona, Benahavís, Ojén, Mijas y Fuengirola.",
            ],
          },
          {
            h: "Urbanizaciones, garitas y segundas residencias",
            p: [
              "Buena parte de Marbella vive en urbanizaciones cerradas con garita de seguridad o conserje, que suelen recoger los paquetes. Si vives en una villa particular, asegúrate de que haya alguien el día de la entrega: el repartidor no puede dejar el paquete fuera de la verja. Y si pasas solo una parte del año en Marbella, haz el pedido cuando ya estés aquí, no antes.",
              "Los veranos en la costa son calurosos y muy soleados, y un paquete olvidado en un porche al sol o en el coche se calienta enseguida. Guarda los viales cerrados en un lugar fresco y oscuro, y el material reconstituido en la nevera, entre 2 y 8 °C.",
            ],
          },
          {
            h: "Bienestar, pádel y longevidad",
            p: [
              "Marbella es conocida por sus pistas de pádel, sus campos de golf, sus gimnasios privados y una cultura del bienestar muy internacional, donde la longevidad está en todas las conversaciones. El catálogo lo refleja: NAD+ y SS-31 en investigación de energía celular, Tesamorelin en secretagogos de GH, GHK-Cu y el blend GLOW en péptidos de cobre y tejidos, y Retatrutide en investigación metabólica.",
            ],
          },
        ],
        faq: [
          ["¿Cuánto tarda el envío a Marbella?", "Entre 7 y 10 días hábiles, con envío internacional con seguimiento."],
          ["¿Entregáis en urbanizaciones cerradas?", "Sí. La garita o el conserje de la urbanización suele recoger los paquetes; si es una villa particular, asegúrate de que haya alguien."],
          ["¿Enviáis a Estepona y Benahavís?", "Sí, y también a Puerto Banús, Nueva Andalucía, San Pedro, Ojén y Mijas."],
          ["¿Puedo pedir por WhatsApp?", "Sí. Escríbenos con los productos y el formato que quieres y te confirmamos stock y plazo de entrega antes de pagar."],
        ],
      },
    },
  },
];
