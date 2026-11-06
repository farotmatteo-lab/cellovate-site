// France: country hub + five city pages, served at /{lang}/peptides/{slug}.
// Same shape as lib/seo/places.js. Locales: English and French.

export const FRANCE_PLACES = [
  // ───────────────────────────── FRANCE (country hub) ─────────────────────────────
  {
    slug: "france",
    type: "country",
    country: "france",
    locales: ["en", "fr"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "cjc-1295-without-dac-ipamorelin",
      "nad-1000mg",
      "mots-c-10mg",
    ],
    name: { en: "France", fr: "France" },
    content: {
      en: {
        title: "Research Peptides in France | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered across France in 7–10 business days, tracked and in discreet packaging. Lyophilized vials or pre-filled pens. Research use only.",
        h1: "Research peptides delivered across France",
        intro:
          "Cellovate delivers research peptides to every region of mainland France, from Paris and Lille to Lyon, Marseille, Nice and Bordeaux. Each order travels as a tracked international parcel and arrives within 7 to 10 business days, in plain packaging with prices shown in euros.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "How delivery to France works",
            p: [
              "Every parcel is sent with tracking from dispatch to your door, so you can follow it through each stage and plan to be home, or have someone there, on the day it arrives. The packaging is plain, with nothing on the outside that names the contents.",
              "Like any international import, a parcel can be inspected by customs on its way in. The 7 to 10 business day window already allows for that, which is why we quote it rather than a shorter figure that would only hold on a good week.",
            ],
          },
          {
            h: "Vials or pre-filled pens",
            p: [
              "Every compound comes in two formats. The lyophilized vial is the standard powder, reconstituted with bacteriostatic water before use in the research setting. The pre-filled multi-dose pen skips that step entirely, which makes it the practical choice in a compact Paris kitchen or any workspace without a proper bench.",
              "Sealed vials cope with normal transit. Once material is reconstituted, keep it at 2–8°C and away from light, especially from June to September when much of France sees spells of real heat.",
            ],
          },
          {
            h: "Research areas we cover",
            p: [
              "The catalogue is organised by research area: metabolic research with Retatrutide and Tirzepatide; recovery and tissue research with BPC-157, TB-500, KPV and the KLOW and GLOW blends; GH secretagogue research with CJC-1295 + Ipamorelin and Tesamorelin; longevity and cellular-energy research with NAD+, MOTS-c and SS-31; cognitive research with Semax and Selank; and copper peptide research with GHK-Cu.",
              "You can order on the website, paying by card or crypto, or send your order on WhatsApp. On WhatsApp we confirm stock and the delivery window before you pay.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to France take?", "7 to 10 business days by tracked international delivery, to any address in mainland France."],
          ["Can a parcel be held at customs?", "Like any international parcel, it can be inspected by customs. The 7–10 business day window allows for this."],
          ["How do I pay, and in which currency?", "By card or crypto at checkout. Prices are shown in euros for visitors in France. Shipping is calculated at checkout and becomes free above a basket threshold."],
          ["Is there a shop or pick-up point?", "No. We work by delivery only, straight to your address."],
        ],
      },
      fr: {
        title: "Peptides de recherche en France | Livraison suivie 7–10 j",
        description:
          "Peptides de recherche livrés partout en France en 7 à 10 jours ouvrés, avec suivi et emballage discret. Flacons ou stylos pré-remplis. Usage recherche.",
        h1: "Peptides de recherche livrés partout en France",
        intro:
          "Cellovate livre ses peptides de recherche dans toute la France métropolitaine, de Paris à Lille, de Lyon à Marseille, Nice ou Bordeaux. Chaque commande voyage en colis international suivi et arrive sous 7 à 10 jours ouvrés, dans un emballage neutre, avec des prix affichés en euros.",
        delivery: "7 à 10 jours ouvrés, avec suivi",
        sections: [
          {
            h: "Comment se passe la livraison en France",
            p: [
              "Chaque colis part avec un numéro de suivi, de l’expédition jusqu’à votre porte. Vous voyez où il en est à chaque étape et pouvez vous organiser pour être là, ou faire en sorte que quelqu’un le réceptionne, le jour J. L’emballage est neutre : rien à l’extérieur n’indique ce qu’il contient.",
              "Comme toute importation, un colis international peut faire l’objet d’un contrôle douanier. Le délai de 7 à 10 jours ouvrés en tient déjà compte : nous préférons annoncer un délai réaliste plutôt qu’un chiffre qui ne vaudrait que les bonnes semaines.",
            ],
          },
          {
            h: "Flacon ou stylo pré-rempli",
            p: [
              "Chaque composé existe en deux formats. Le flacon lyophilisé, c’est la poudre classique, à reconstituer avec de l’eau bactériostatique. Le stylo pré-rempli multidose supprime cette étape : un vrai plus dans une cuisine parisienne de 4 m² ou tout espace de travail sans paillasse.",
              "Les flacons scellés supportent sans problème un transport normal. Une fois reconstitué, le produit se conserve entre 2 et 8 °C, à l’abri de la lumière, surtout de juin à septembre, quand les épisodes de chaleur touchent une bonne partie du pays.",
            ],
          },
          {
            h: "Les domaines de recherche couverts",
            p: [
              "Le catalogue est classé par domaine : recherche métabolique avec le Retatrutide et le Tirzepatide ; récupération et recherche tissulaire avec le BPC-157, le TB-500, le KPV et les blends KLOW et GLOW ; sécrétagogues de GH avec CJC-1295 + Ipamorelin et la Tesamorelin ; longévité et énergie cellulaire avec le NAD+, le MOTS-c et le SS-31 ; recherche cognitive avec le Semax et le Selank ; enfin, peptides de cuivre avec le GHK-Cu.",
              "Vous pouvez commander sur le site, en payant par carte ou en crypto, ou passer commande sur WhatsApp. Dans ce cas, nous confirmons la disponibilité et le délai de livraison avant tout paiement.",
            ],
          },
        ],
        faq: [
          ["Quel est le délai de livraison en France ?", "7 à 10 jours ouvrés, en livraison internationale suivie, partout en France métropolitaine."],
          ["Mon colis peut-il être contrôlé par la douane ?", "Comme tout colis international, il peut être contrôlé. Le délai de 7 à 10 jours ouvrés intègre cette éventualité."],
          ["Comment payer, et dans quelle devise ?", "Par carte ou en crypto au moment du paiement. Les prix s’affichent en euros pour les visiteurs en France. Les frais de port sont calculés au panier et deviennent offerts au-delà d’un certain montant."],
          ["Y a-t-il une boutique ou un point de retrait ?", "Non. Nous fonctionnons uniquement en livraison, directement à votre adresse."],
        ],
      },
    },
  },

  // ───────────────────────────── PARIS ─────────────────────────────
  {
    slug: "paris",
    type: "city",
    country: "france",
    locales: ["en", "fr"],
    featured: [
      "semax-10mg",
      "selank-10mg",
      "nad-1000mg",
      "ss-31",
      "retatrutide-20mg",
      "tirzepatide",
    ],
    name: { en: "Paris", fr: "Paris" },
    content: {
      en: {
        title: "Research Peptides Paris | Tracked Delivery, Discreet Parcels",
        description:
          "Research peptides delivered to Paris and the inner suburbs in 7–10 business days: all 20 arrondissements, Boulogne, Neuilly, Montreuil. Vials or pens.",
        h1: "Research peptides delivered to Paris",
        intro:
          "Whether you live in a Haussmann building in the 8th, a converted workshop in the 11th or a new block in Boulogne-Billancourt, Cellovate delivers research peptides to your door in Paris. Parcels are tracked, plainly packed and arrive within 7 to 10 business days.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "All twenty arrondissements and the petite couronne",
            p: [
              "We deliver to every arrondissement, from the Marais and Saint-Germain to Montmartre, Belleville, the 15th and the 16th, and across the inner suburbs: Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Saint-Denis, Montreuil, Vincennes and Ivry-sur-Seine. Addresses further out in Île-de-France, such as Versailles or Saint-Germain-en-Laye, are covered on the same terms.",
            ],
          },
          {
            h: "Digicodes, gardiens and missed deliveries",
            p: [
              "Paris parcels usually fail at the front door, not in transit. Put the building’s digicode, the floor and the name on the intercom in your address so the courier can actually get in. If your building still has a gardien or a loge, mention it: a parcel left with the concierge is far safer than one left at the foot of the stairs.",
              "With no one at home, the carrier may leave a notice and redirect the parcel, so watch your tracking around day seven. Many Parisians simply use their office address, where reception signs for deliveries during the week.",
            ],
          },
          {
            h: "Small kitchens and summer heatwaves",
            p: [
              "Space is tight in Paris, and a pre-filled pen avoids setting up a reconstitution corner on a narrow worktop. Top-floor flats under zinc roofs also get very warm during summer heatwaves, so keep reconstituted material in the fridge at 2–8°C rather than in a cupboard. The city’s biohacking and performance crowd, from start-up founders to marathon runners, tends to look first at cognitive research (Semax, Selank) and longevity research (NAD+, SS-31).",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Paris take?", "7 to 10 business days by tracked international delivery, to any arrondissement and the inner suburbs."],
          ["My building has a digicode. What should I do?", "Add the code, the floor and the intercom name to your delivery address at checkout, or mention your gardien if you have one."],
          ["Can I have it delivered to my office?", "Yes. An office with a staffed reception is often the easiest option in Paris."],
          ["Is there a shop in Paris where I can collect my order?", "No. We work by delivery only, straight to your address."],
        ],
      },
      fr: {
        title: "Peptides de recherche à Paris | Livraison suivie et discrète",
        description:
          "Peptides de recherche livrés à Paris et en petite couronne en 7 à 10 jours ouvrés : les 20 arrondissements, Boulogne, Neuilly, Montreuil. Flacons ou stylos.",
        h1: "Peptides de recherche livrés à Paris",
        intro:
          "Immeuble haussmannien dans le 8e, ancien atelier dans le 11e ou résidence neuve à Boulogne-Billancourt : Cellovate livre vos peptides de recherche directement chez vous, à Paris. Colis suivi, emballage neutre, réception sous 7 à 10 jours ouvrés.",
        delivery: "7 à 10 jours ouvrés, avec suivi",
        sections: [
          {
            h: "Les vingt arrondissements et la petite couronne",
            p: [
              "Nous livrons dans tous les arrondissements, du Marais à Saint-Germain-des-Prés, de Montmartre à Belleville, du 15e au 16e, ainsi qu’en proche banlieue : Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Levallois-Perret, Saint-Denis, Montreuil, Vincennes, Ivry-sur-Seine. Les adresses plus éloignées d’Île-de-France, comme Versailles ou Saint-Germain-en-Laye, sont desservies aux mêmes conditions.",
            ],
          },
          {
            h: "Digicode, gardien et avis de passage",
            p: [
              "À Paris, un colis se perd rarement en route : il bloque surtout devant la porte. Indiquez le digicode, l’étage et le nom inscrit à l’interphone dans votre adresse pour que le livreur puisse entrer. Si votre immeuble a encore un gardien ou une loge, précisez-le : un colis remis au gardien est bien plus en sécurité qu’un colis posé au pied de l’escalier.",
              "En votre absence, le transporteur peut laisser un avis de passage et rediriger le colis : gardez un œil sur le suivi à partir du septième jour. Beaucoup de Parisiens choisissent tout simplement l’adresse du bureau, où l’accueil réceptionne les livraisons en semaine.",
            ],
          },
          {
            h: "Petites cuisines et canicules",
            p: [
              "À Paris, chaque mètre carré compte, et le stylo pré-rempli évite d’installer un coin reconstitution sur un plan de travail de 60 cm. Les derniers étages sous les toits en zinc deviennent de vraies étuves pendant les canicules : gardez le produit reconstitué au réfrigérateur, entre 2 et 8 °C, jamais dans un placard. Côté profils, la scène biohacking et performance parisienne, des fondateurs de start-up aux marathoniens, s’intéresse d’abord à la recherche cognitive (Semax, Selank) et à la longévité (NAD+, SS-31).",
            ],
          },
        ],
        faq: [
          ["Quel est le délai de livraison à Paris ?", "7 à 10 jours ouvrés, en livraison internationale suivie, dans tous les arrondissements et en petite couronne."],
          ["Mon immeuble a un digicode, comment faire ?", "Ajoutez le code, l’étage et le nom de l’interphone à votre adresse de livraison, ou mentionnez votre gardien si vous en avez un."],
          ["Puis-je me faire livrer au bureau ?", "Oui. Un bureau avec un accueil est souvent la solution la plus simple à Paris."],
          ["Y a-t-il une boutique à Paris pour retirer ma commande ?", "Non. Nous fonctionnons uniquement en livraison, directement à votre adresse."],
        ],
      },
    },
  },

  // ───────────────────────────── LYON ─────────────────────────────
  {
    slug: "lyon",
    type: "city",
    country: "france",
    locales: ["en", "fr"],
    featured: [
      "bpc-157-tb-500-blend",
      "tb-500-10mg",
      "klow-80mg",
      "cjc-1295-without-dac-ipamorelin",
      "retatrutide-20mg",
      "mots-c-10mg",
    ],
    name: { en: "Lyon", fr: "Lyon" },
    content: {
      en: {
        title: "Research Peptides Lyon | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Lyon and Villeurbanne in 7–10 business days: Presqu’île, Croix-Rousse, Part-Dieu, Confluence and the suburbs. Vials and pens.",
        h1: "Research peptides delivered to Lyon",
        intro:
          "Cellovate delivers research peptides across Lyon and its metropolitan area, from the slopes of the Croix-Rousse to the towers of Part-Dieu. Every parcel is tracked, plainly packed and arrives within 7 to 10 business days.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "From the Presqu’île to the suburbs",
            p: [
              "All nine arrondissements are covered: the Presqu’île and Bellecour, Vieux-Lyon, the Croix-Rousse, Brotteaux and Part-Dieu, Guillotière, Gerland, Confluence and Monplaisir. Delivery runs on the same terms to Villeurbanne, Caluire-et-Cuire, Écully, Tassin-la-Demi-Lune, Oullins, Vénissieux, Bron and Vaulx-en-Velin.",
            ],
          },
          {
            h: "Canut buildings and courier access",
            p: [
              "Many older buildings on the Croix-Rousse and in Vieux-Lyon have narrow entrances, steep stairs and no lift, and some open onto traboules or inner courtyards. Add the door code and any courtyard or staircase detail to your address so the courier can find you. In newer residences around Confluence or Part-Dieu, the main risk is a parcel waiting in the entrance hall, so follow your tracking and collect it the day it lands.",
              "Lyon summers can be hot and heavy, with the city often among the warmer large French cities in July and August. Keep sealed vials somewhere cool and reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "A city that trains outdoors",
            p: [
              "Lyon has a strong running and cycling culture, with the Parc de la Tête d’Or, the Rhône and Saône riverbanks and the hills of the Monts d’Or all within reach, plus a growing scene of CrossFit and Hyrox boxes. That crowd tends to look first at recovery and tissue research (BPC-157, TB-500, the KLOW blend) and GH secretagogue research with CJC-1295 + Ipamorelin.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Lyon take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Villeurbanne and the suburbs?", "Yes: Villeurbanne, Caluire, Écully, Tassin, Oullins, Vénissieux, Bron, Vaulx-en-Velin and the rest of the metropolitan area."],
          ["Can I order by WhatsApp?", "Yes. Send the product and format on WhatsApp and we confirm stock and the delivery window before you pay."],
        ],
      },
      fr: {
        title: "Peptides de recherche à Lyon | Livraison suivie 7–10 j",
        description:
          "Peptides de recherche livrés à Lyon et Villeurbanne en 7 à 10 jours ouvrés : Presqu’île, Croix-Rousse, Part-Dieu, Confluence et la métropole. Flacons ou stylos.",
        h1: "Peptides de recherche livrés à Lyon",
        intro:
          "Cellovate livre ses peptides de recherche dans tout Lyon et sa métropole, des pentes de la Croix-Rousse aux tours de la Part-Dieu. Chaque colis est suivi, emballé sans aucune mention du contenu, et arrive sous 7 à 10 jours ouvrés.",
        delivery: "7 à 10 jours ouvrés, avec suivi",
        sections: [
          {
            h: "De la Presqu’île à la métropole",
            p: [
              "Les neuf arrondissements sont couverts : Presqu’île et Bellecour, Vieux-Lyon, Croix-Rousse, Brotteaux et Part-Dieu, Guillotière, Gerland, Confluence et Monplaisir. Même chose pour Villeurbanne, Caluire-et-Cuire, Écully, Tassin-la-Demi-Lune, Oullins, Vénissieux, Bron et Vaulx-en-Velin.",
            ],
          },
          {
            h: "Immeubles canuts et accès livreur",
            p: [
              "Sur les pentes de la Croix-Rousse et dans le Vieux-Lyon, beaucoup d’immeubles anciens ont des entrées étroites, des escaliers raides et pas d’ascenseur, parfois au fond d’une cour ou d’une traboule. Précisez le code, la cour et la montée dans votre adresse pour que le livreur vous trouve. Dans les résidences récentes de Confluence ou de la Part-Dieu, le risque, c’est plutôt le colis qui attend dans le hall : suivez la livraison et récupérez-le le jour même.",
              "L’été lyonnais peut être lourd et chaud, et la ville figure souvent parmi les grandes villes les plus chaudes de France en juillet-août. Rangez les flacons scellés au frais et le produit reconstitué au réfrigérateur, entre 2 et 8 °C.",
            ],
          },
          {
            h: "Une ville qui s’entraîne dehors",
            p: [
              "Lyon a une vraie culture du running et du vélo : le parc de la Tête d’Or, les berges du Rhône et de la Saône, les Monts d’Or à deux pas, sans oublier une scène CrossFit et Hyrox en plein essor. Ce public s’intéresse d’abord à la récupération et à la recherche tissulaire (BPC-157, TB-500, blend KLOW) et aux sécrétagogues de GH avec CJC-1295 + Ipamorelin.",
            ],
          },
        ],
        faq: [
          ["Quel est le délai de livraison à Lyon ?", "7 à 10 jours ouvrés, en livraison internationale suivie."],
          ["Livrez-vous Villeurbanne et la métropole ?", "Oui : Villeurbanne, Caluire, Écully, Tassin, Oullins, Vénissieux, Bron, Vaulx-en-Velin et le reste de la métropole."],
          ["Puis-je commander sur WhatsApp ?", "Oui. Envoyez le produit et le format souhaités sur WhatsApp : nous confirmons la disponibilité et le délai avant paiement."],
        ],
      },
    },
  },

  // ───────────────────────────── MARSEILLE ─────────────────────────────
  {
    slug: "marseille",
    type: "city",
    country: "france",
    locales: ["en", "fr"],
    featured: [
      "bpc-157-10mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "kpv-alpha-10mg",
      "retatrutide-20mg",
      "tirzepatide",
      "tesamorelin-10mg",
    ],
    name: { en: "Marseille", fr: "Marseille" },
    content: {
      en: {
        title: "Research Peptides Marseille | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Marseille and Aix in 7–10 business days: Vieux-Port, Prado, Castellane, La Joliette and the 16 arrondissements. Vials and pens.",
        h1: "Research peptides delivered to Marseille",
        intro:
          "Cellovate delivers research peptides across Marseille’s sixteen arrondissements and the surrounding towns, from the Vieux-Port to the edge of the Calanques. Parcels are tracked, packed in plain boxes and arrive within 7 to 10 business days.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Every arrondissement, and beyond",
            p: [
              "We cover the whole city: the Vieux-Port, Le Panier and La Joliette, Castellane, the Prado and Périer, Endoume and the Vallon des Auffes, La Plaine and Cours Julien, Saint-Barnabé, Bonneveine and the southern districts down to Les Goudes, as well as the northern arrondissements. Aix-en-Provence, Aubagne, Cassis, La Ciotat, Allauch and Plan-de-Cuques are served on the same terms.",
            ],
          },
          {
            h: "Heat is the real issue here",
            p: [
              "Marseille has long, hot and sunny summers, and a parcel left in a sunny entrance hall or a mailbox area can get very warm. Track your delivery and collect it promptly. Once at home, store sealed vials somewhere cool and keep reconstituted material in the fridge at 2–8°C, never in a car parked along the Corniche.",
              "In older Marseille buildings, often three or four floors with an intercom and no concierge, add the door code and the name on the buzzer to your address. In residences with a gardien, mention it: it makes all the difference.",
            ],
          },
          {
            h: "Combat sports and outdoor training",
            p: [
              "Marseille is a city of boxing clubs, MMA gyms and football, with runners and climbers heading for the Calanques and the Corniche Kennedy all year round. Recovery and tissue research leads the interest here (BPC-157, KPV, the GLOW blend), followed by metabolic research with Retatrutide and Tirzepatide.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Marseille take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Aix-en-Provence, Aubagne and Cassis?", "Yes, along with La Ciotat, Allauch, Plan-de-Cuques and the rest of the area around Marseille."],
          ["How should I store a parcel in summer?", "Collect it as soon as it is delivered, keep sealed vials somewhere cool and reconstituted material in the fridge at 2–8°C."],
          ["Can I pay by crypto?", "Yes. Card or crypto at checkout, with prices shown in euros."],
        ],
      },
      fr: {
        title: "Peptides de recherche à Marseille | Livraison 7–10 j",
        description:
          "Peptides de recherche livrés à Marseille et Aix en 7 à 10 jours ouvrés : Vieux-Port, Prado, Castellane, la Joliette et les 16 arrondissements. Flacons, stylos.",
        h1: "Peptides de recherche livrés à Marseille",
        intro:
          "Cellovate livre ses peptides de recherche dans les seize arrondissements de Marseille et les communes alentour, du Vieux-Port jusqu’aux portes des Calanques. Colis suivi, carton neutre, livraison sous 7 à 10 jours ouvrés.",
        delivery: "7 à 10 jours ouvrés, avec suivi",
        sections: [
          {
            h: "Tous les arrondissements, et au-delà",
            p: [
              "Toute la ville est couverte : Vieux-Port, Le Panier et la Joliette, Castellane, le Prado et Périer, Endoume et le Vallon des Auffes, la Plaine et le cours Julien, Saint-Barnabé, Bonneveine et les quartiers sud jusqu’aux Goudes, sans oublier les quartiers nord. Aix-en-Provence, Aubagne, Cassis, La Ciotat, Allauch et Plan-de-Cuques sont livrés aux mêmes conditions.",
            ],
          },
          {
            h: "Ici, l’ennemi, c’est la chaleur",
            p: [
              "Les étés marseillais sont longs, chauds et ensoleillés, et un colis oublié dans un hall en plein soleil ou près des boîtes aux lettres chauffe vite. Suivez la livraison et récupérez-le sans attendre. Chez vous, rangez les flacons scellés au frais et le produit reconstitué au réfrigérateur, entre 2 et 8 °C, jamais dans une voiture garée sur la Corniche.",
              "Dans les immeubles marseillais anciens, souvent trois ou quatre étages avec interphone et sans gardien, indiquez le code et le nom inscrit sur la sonnette. Si votre résidence a un gardien, précisez-le : ça change tout.",
            ],
          },
          {
            h: "Sports de combat et entraînement en plein air",
            p: [
              "Marseille, c’est la ville des clubs de boxe, des salles de MMA et du foot, avec des coureurs et des grimpeurs qui filent vers les Calanques ou la Corniche Kennedy toute l’année. Ici, la récupération et la recherche tissulaire arrivent en tête (BPC-157, KPV, blend GLOW), suivies de la recherche métabolique avec le Retatrutide et le Tirzepatide.",
            ],
          },
        ],
        faq: [
          ["Quel est le délai de livraison à Marseille ?", "7 à 10 jours ouvrés, en livraison internationale suivie."],
          ["Livrez-vous Aix-en-Provence, Aubagne et Cassis ?", "Oui, ainsi que La Ciotat, Allauch, Plan-de-Cuques et le reste des environs de Marseille."],
          ["Comment conserver mon colis en été ?", "Récupérez-le dès sa livraison, gardez les flacons scellés au frais et le produit reconstitué au réfrigérateur, entre 2 et 8 °C."],
          ["Peut-on payer en crypto ?", "Oui. Carte ou crypto au moment du paiement, avec des prix affichés en euros."],
        ],
      },
    },
  },

  // ───────────────────────────── NICE ─────────────────────────────
  {
    slug: "nice",
    type: "city",
    country: "france",
    locales: ["en", "fr"],
    featured: [
      "nad-1000mg",
      "ss-31",
      "mots-c-10mg",
      "ghk-cu-50mg",
      "glow-70mg-bpc157-tb500-ghk-cu",
      "retatrutide-20mg",
    ],
    name: { en: "Nice", fr: "Nice" },
    content: {
      en: {
        title: "Research Peptides Nice | Côte d’Azur Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Nice and the Côte d’Azur in 7–10 business days: Vieux-Nice, Carré d’Or, Cimiez, Antibes, Cannes. Vials or pre-filled pens.",
        h1: "Research peptides delivered to Nice and the Côte d’Azur",
        intro:
          "Cellovate delivers research peptides across Nice and along the Côte d’Azur, from the old town to the hills of Cimiez and out to Antibes and Cannes. Each parcel is tracked, plainly packed and arrives within 7 to 10 business days.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Nice and the coast",
            p: [
              "In Nice itself we cover Vieux-Nice, the Carré d’Or, Jean-Médecin and Libération, the Port and Riquier, Cimiez, Mont Boron, Fabron, Saint-Isidore and the Promenade des Anglais. Along the coast and inland, deliveries reach Villefranche-sur-Mer, Beaulieu, Èze, Menton, Saint-Laurent-du-Var, Cagnes-sur-Mer, Antibes, Juan-les-Pins, Cannes and Grasse.",
            ],
          },
          {
            h: "Gardiens, second homes and the summer",
            p: [
              "Many Nice residences, especially in the Carré d’Or and on Cimiez, have a gardien who takes parcels in, which is the safest option: mention it in your address. If you split your time between Nice and elsewhere, check you will be there in the delivery window, as a parcel sitting in the hall of a flat that stays closed for weeks is the classic Riviera mishap.",
              "Summers are hot and long on the coast. Keep sealed vials somewhere cool and reconstituted material in the fridge at 2–8°C, and never leave a parcel in a car in a sunny car park.",
            ],
          },
          {
            h: "Endurance, sea air and longevity",
            p: [
              "Nice hosts Ironman France, and the Promenade des Anglais, the cols of the hinterland and open-water swimming make it a natural base for endurance athletes. Add a well-off, health-conscious population and it follows that longevity and cellular-energy research (NAD+, MOTS-c, SS-31) and copper peptide research with GHK-Cu draw the most interest.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Nice take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Antibes, Cannes and Menton?", "Yes, and to the rest of the Côte d’Azur, including Villefranche, Cagnes-sur-Mer and Grasse."],
          ["Can my gardien receive the parcel?", "Yes. Mention the gardien in your delivery address: it is often the safest way to receive a parcel in Nice."],
        ],
      },
      fr: {
        title: "Peptides de recherche à Nice | Livraison Côte d’Azur",
        description:
          "Peptides de recherche livrés à Nice et sur la Côte d’Azur en 7 à 10 jours ouvrés : Vieux-Nice, Carré d’Or, Cimiez, Antibes, Cannes. Flacons ou stylos.",
        h1: "Peptides de recherche livrés à Nice et sur la Côte d’Azur",
        intro:
          "Cellovate livre ses peptides de recherche dans tout Nice et le long de la Côte d’Azur, du Vieux-Nice aux hauteurs de Cimiez, jusqu’à Antibes et Cannes. Chaque colis est suivi, emballé de façon neutre et arrive sous 7 à 10 jours ouvrés.",
        delivery: "7 à 10 jours ouvrés, avec suivi",
        sections: [
          {
            h: "Nice et la côte",
            p: [
              "À Nice, nous livrons le Vieux-Nice, le Carré d’Or, Jean-Médecin et Libération, le Port et Riquier, Cimiez, le Mont Boron, Fabron, Saint-Isidore et la Promenade des Anglais. Sur la côte et dans l’arrière-pays, nous desservons Villefranche-sur-Mer, Beaulieu, Èze, Menton, Saint-Laurent-du-Var, Cagnes-sur-Mer, Antibes, Juan-les-Pins, Cannes et Grasse.",
            ],
          },
          {
            h: "Gardiens, résidences secondaires et chaleur",
            p: [
              "Beaucoup de résidences niçoises, notamment dans le Carré d’Or et à Cimiez, ont un gardien qui réceptionne les colis : c’est la solution la plus sûre, pensez à l’indiquer dans votre adresse. Si vous partagez votre temps entre Nice et ailleurs, vérifiez que vous serez sur place pendant la fenêtre de livraison : le colis qui dort dans le hall d’un appartement fermé pendant des semaines, c’est le grand classique de la Riviera.",
              "Sur la côte, les étés sont chauds et longs. Gardez les flacons scellés au frais, le produit reconstitué au réfrigérateur entre 2 et 8 °C, et ne laissez jamais un colis dans une voiture garée en plein soleil.",
            ],
          },
          {
            h: "Endurance, air marin et longévité",
            p: [
              "Nice accueille l’Ironman France, et entre la Promenade des Anglais, les cols de l’arrière-pays et la nage en mer, la ville est un camp de base naturel pour les sportifs d’endurance. Ajoutez une population aisée et soucieuse de sa santé, et l’on comprend pourquoi la longévité et l’énergie cellulaire (NAD+, MOTS-c, SS-31) ainsi que les peptides de cuivre avec le GHK-Cu suscitent le plus d’intérêt.",
            ],
          },
        ],
        faq: [
          ["Quel est le délai de livraison à Nice ?", "7 à 10 jours ouvrés, en livraison internationale suivie."],
          ["Livrez-vous Antibes, Cannes et Menton ?", "Oui, ainsi que le reste de la Côte d’Azur, dont Villefranche, Cagnes-sur-Mer et Grasse."],
          ["Mon gardien peut-il réceptionner le colis ?", "Oui. Indiquez-le dans votre adresse de livraison : c’est souvent la façon la plus sûre de recevoir un colis à Nice."],
        ],
      },
    },
  },

  // ───────────────────────────── BORDEAUX ─────────────────────────────
  {
    slug: "bordeaux",
    type: "city",
    country: "france",
    locales: ["en", "fr"],
    featured: [
      "retatrutide-20mg",
      "tirzepatide",
      "bpc-157-tb-500-blend",
      "klow-80mg",
      "nad-1000mg",
      "semax-10mg",
    ],
    name: { en: "Bordeaux", fr: "Bordeaux" },
    content: {
      en: {
        title: "Research Peptides Bordeaux | Tracked Delivery in 7–10 Days",
        description:
          "Research peptides delivered to Bordeaux in 7–10 business days: Chartrons, Saint-Pierre, Bastide, Caudéran, Mérignac, Pessac and Talence. Vials or pens.",
        h1: "Research peptides delivered to Bordeaux",
        intro:
          "Cellovate delivers research peptides across Bordeaux and its metropolitan area, from the Chartrons to the right bank and out to Mérignac and Pessac. Parcels are tracked, packed with no mention of the contents and arrive within 7 to 10 business days.",
        delivery: "7–10 business days, tracked",
        sections: [
          {
            h: "Districts and nearby towns",
            p: [
              "In the city we cover the Chartrons, Saint-Pierre and Saint-Michel, the Triangle d’Or, Saint-Seurin, Caudéran, Bacalan and the Bassins à flot, Saint-Augustin, Nansouty and La Bastide on the right bank. Across the metropolitan area, deliveries reach Mérignac, Pessac, Talence, Bègles, Le Bouscat, Bruges, Lormont, Cenon and Floirac.",
            ],
          },
          {
            h: "Échoppes, letterboxes and neighbours",
            p: [
              "Much of Bordeaux lives in échoppes, the single-storey stone houses that line streets like those of Saint-Augustin or Caudéran, with a letterbox on the street and no gardien. A parcel too big for the box needs someone at home, so check your tracking and, if you will be out, give a trusted neighbour’s name or an office address. In the newer blocks around the Bassins à flot and Euratlantique, add your door code and flat number.",
              "Bordeaux summers can bring strong heat waves. Keep sealed vials somewhere cool and reconstituted material in the fridge at 2–8°C.",
            ],
          },
          {
            h: "Riverside running and the Atlantic coast",
            p: [
              "The quays along the Garonne are packed with runners and cyclists, and the Atlantic beaches of Lacanau and the Cap Ferret peninsula pull in surfers and outdoor athletes at weekends. Interest here is broad, with metabolic research (Retatrutide, Tirzepatide) and recovery research (the BPC-157 + TB-500 blend, KLOW) leading the way.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Bordeaux take?", "7 to 10 business days by tracked international delivery."],
          ["Do you deliver to Mérignac, Pessac and Talence?", "Yes, as well as Bègles, Le Bouscat, Bruges, Lormont, Cenon, Floirac and the rest of the metropolitan area."],
          ["I live in an échoppe with no gardien. Any tips?", "Follow your tracking so you are home on the day, or use a neighbour’s name or an office address if you will be out."],
          ["Can I order by WhatsApp?", "Yes. Send your order on WhatsApp and we confirm stock and the delivery window before you pay."],
        ],
      },
      fr: {
        title: "Peptides de recherche à Bordeaux | Livraison suivie 7–10 j",
        description:
          "Peptides de recherche livrés à Bordeaux en 7 à 10 jours ouvrés : Chartrons, Saint-Pierre, Bastide, Caudéran, Mérignac, Pessac et Talence. Flacons ou stylos.",
        h1: "Peptides de recherche livrés à Bordeaux",
        intro:
          "Cellovate livre ses peptides de recherche dans tout Bordeaux et sa métropole, des Chartrons à la rive droite, jusqu’à Mérignac et Pessac. Les colis sont suivis, sans aucune mention du contenu, et arrivent sous 7 à 10 jours ouvrés.",
        delivery: "7 à 10 jours ouvrés, avec suivi",
        sections: [
          {
            h: "Quartiers et communes voisines",
            p: [
              "En ville, nous livrons les Chartrons, Saint-Pierre et Saint-Michel, le Triangle d’Or, Saint-Seurin, Caudéran, Bacalan et les Bassins à flot, Saint-Augustin, Nansouty et La Bastide, sur la rive droite. Dans la métropole, nous desservons Mérignac, Pessac, Talence, Bègles, Le Bouscat, Bruges, Lormont, Cenon et Floirac.",
            ],
          },
          {
            h: "Échoppes, boîtes aux lettres et voisins",
            p: [
              "À Bordeaux, beaucoup de gens vivent en échoppe, ces maisons de pierre de plain-pied qui bordent les rues de Saint-Augustin ou de Caudéran, avec une boîte aux lettres sur rue et pas de gardien. Un colis trop gros pour la boîte demande quelqu’un sur place : suivez la livraison et, si vous êtes absent, indiquez le nom d’un voisin de confiance ou l’adresse de votre bureau. Dans les résidences récentes des Bassins à flot ou d’Euratlantique, ajoutez le code d’accès et le numéro d’appartement.",
              "Les étés bordelais peuvent connaître de fortes vagues de chaleur. Gardez les flacons scellés au frais et le produit reconstitué au réfrigérateur, entre 2 et 8 °C.",
            ],
          },
          {
            h: "Running sur les quais et côte atlantique",
            p: [
              "Les quais de la Garonne sont pris d’assaut par les coureurs et les cyclistes, et le week-end, les plages de Lacanau et la presqu’île du Cap-Ferret attirent surfeurs et sportifs du plein air. Les intérêts sont variés, avec en tête la recherche métabolique (Retatrutide, Tirzepatide) et la récupération (blend BPC-157 + TB-500, KLOW).",
            ],
          },
        ],
        faq: [
          ["Quel est le délai de livraison à Bordeaux ?", "7 à 10 jours ouvrés, en livraison internationale suivie."],
          ["Livrez-vous Mérignac, Pessac et Talence ?", "Oui, ainsi que Bègles, Le Bouscat, Bruges, Lormont, Cenon, Floirac et le reste de la métropole."],
          ["J’habite une échoppe sans gardien, un conseil ?", "Suivez la livraison pour être là le jour J, ou indiquez le nom d’un voisin ou l’adresse de votre bureau si vous êtes absent."],
          ["Puis-je commander sur WhatsApp ?", "Oui. Envoyez votre commande sur WhatsApp : nous confirmons la disponibilité et le délai avant paiement."],
        ],
      },
    },
  },
];
