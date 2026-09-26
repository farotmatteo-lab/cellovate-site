// Product catalog for Cellovate Advanced Peptides.
// Prices come from the 2026 vial/pen price lists. Each product carries one
// variant per dosage x format combination (e.g. "20mg-vial"), so a single
// product page covers every dosage instead of one page per milligram.
import { PRODUCT_IMAGES } from "./productImages";

// Full catalog, including out-of-stock items. Two switches control what the
// site shows, without deleting anything:
//   draft: true          -> the whole product is hidden
//   hiddenDoses: [...]   -> only those dosages are hidden (both formats)
// Remove the switch to put the item back on sale.
export const CATALOG = [
  {
    id: "tirz",
    hiddenDoses: ["10mg", "40mg"], // out of stock: hidden from the site, kept for later
    handle: "tirzepatide",
    name: "Tirzepatide",
    fullName: "TIRZEPATIDE",
    code: "TR-S",
    dose: "10mg / 20mg / 40mg",
    doses: ["10mg", "20mg", "40mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 51.14 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 71.59 },
      { key: "20mg-vial", dose: "20mg", format: "Vial", label: "20mg · Vial", price: 85.23 },
      { key: "20mg-pen", dose: "20mg", format: "Pen", label: "20mg · Pen", price: 105.68 },
      { key: "40mg-vial", dose: "40mg", format: "Vial", label: "40mg · Vial", price: 153.41 },
      { key: "40mg-pen", dose: "40mg", format: "Pen", label: "40mg · Pen", price: 173.86 },
    ],
    purity: null,
    desc: "Dual agonist (GLP-1 / GIP). Third-party tested.",
    images: [],
    bodyHtml: "<p><strong>TIRZEPATIDE — Advanced Metabolic Research Peptide</strong></p>\n<p>Tirzepatide is a dual receptor peptide studied in advanced metabolic research for its combined interaction with GLP-1 and GIP signalling pathways.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in glucose regulation and insulin signalling models</p>\n</li>\n<li>\n<p>Investigated in energy balance and substrate utilization research</p>\n</li>\n<li>\n<p>Explored in appetite regulation and feeding behaviour studies</p>\n</li>\n<li>\n<p>Analyzed in broader endocrine and metabolic pathway research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Tirzepatide is analyzed for its simultaneous activity across GLP-1-related pathways, involved in glucose regulation and satiety signalling, and GIP-related pathways, associated with nutrient metabolism. This dual profile lets researchers observe several metabolic responses within a single experimental framework.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg / 20mg / 40mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "tb500",
    handle: "tb-500-10mg",
    name: "TB-500",
    fullName: "TB-500 10MG",
    code: "TB10-S",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 143.18 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 163.64 },
    ],
    purity: null,
    desc: "Thymosin beta-4 fragment, tissue repair research.",
    images: [],
    bodyHtml: "<p><strong>TB-500 10MG — Advanced Tissue Repair Research Peptide</strong></p>\n<p>TB-500 is a synthetic fragment related to Thymosin Beta-4, studied in research environments focused on cellular migration, tissue organisation, and repair processes.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in cell migration and tissue remodelling models</p>\n</li>\n<li>\n<p>Investigated in recovery and repair research</p>\n</li>\n<li>\n<p>Explored in vascular formation and structural organisation studies</p>\n</li>\n<li>\n<p>Analyzed in flexibility and connective tissue research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>TB-500 is studied for its interaction with actin, a structural protein central to cell movement and tissue organisation. Research focuses on how this interaction influences cellular migration and structural repair processes in controlled models.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "bpc",
    handle: "bpc-157-10mg",
    name: "BPC-157",
    fullName: "BPC-157 10MG",
    code: "BC10-S",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 67.5 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 87.95 },
    ],
    purity: null,
    desc: "Pentadecapeptide, gut and tissue repair research.",
    images: [],
    bodyHtml: "<p><strong>BPC-157 10MG — Advanced Repair and Gut Research Peptide</strong></p>\n<p>BPC-157 is a synthetic pentadecapeptide derived from a protein sequence found in gastric juice, widely studied in research focused on tissue integrity and repair mechanisms.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in gastrointestinal integrity models</p>\n</li>\n<li>\n<p>Investigated in tendon, ligament and soft tissue repair research</p>\n</li>\n<li>\n<p>Explored in angiogenesis and vascular signalling studies</p>\n</li>\n<li>\n<p>Analyzed in inflammation-related research models</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>BPC-157 is analyzed for its interaction with growth factor signalling and vascular formation pathways, which researchers associate with structural repair and tissue protection in controlled environments.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "bpctb",
    hiddenDoses: ["10mg (5+5)"], // out of stock: hidden from the site, kept for later
    handle: "bpc-157-tb-500-blend",
    name: "BPC-157 + TB-500",
    fullName: "BPC-157 + TB-500 BLEND",
    code: "BC-BLEND",
    dose: "10mg (5+5) / 20mg (10+10)",
    doses: ["10mg (5+5)", "20mg (10+10)"],
    variants: [
      { key: "10mg-vial", dose: "10mg (5+5)", format: "Vial", label: "10mg (5+5) · Vial", price: 105.0 },
      { key: "10mg-pen", dose: "10mg (5+5)", format: "Pen", label: "10mg (5+5) · Pen", price: 125.46 },
      { key: "20mg-vial", dose: "20mg (10+10)", format: "Vial", label: "20mg (10+10) · Vial", price: 189.0 },
      { key: "20mg-pen", dose: "20mg (10+10)", format: "Pen", label: "20mg (10+10) · Pen", price: 209.45 },
    ],
    purity: null,
    desc: "BPC-157 / TB-500 combination for recovery research.",
    images: [],
    bodyHtml: "<p><strong>BPC-157 + TB-500 BLEND — Advanced Recovery Research Blend</strong></p>\n<p>This blend combines BPC-157 and TB-500 in a single preparation, studied for the complementary repair and remodelling pathways each peptide is associated with.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in combined tissue repair models</p>\n</li>\n<li>\n<p>Investigated in connective tissue and structural research</p>\n</li>\n<li>\n<p>Explored in vascular formation and cellular migration studies</p>\n</li>\n<li>\n<p>Analyzed in recovery and adaptation research environments</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>BPC-157 is studied for its interaction with growth factor and vascular signalling pathways, while TB-500 is analyzed for its interaction with actin and cellular migration. Combined, they let researchers explore both pathways within one experimental framework.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg (5+5) / 20mg (10+10)</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "ipa",
    draft: true, // out of stock: hidden from the site, kept for later
    handle: "ipamorelin-10mg",
    name: "Ipamorelin",
    fullName: "IPAMORELIN 10MG",
    code: "IP10",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 71.59 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 92.05 },
    ],
    purity: null,
    desc: "Selective GHRP, growth hormone signalling research.",
    images: [],
    bodyHtml: "<p><strong>IPAMORELIN 10MG — Advanced Growth Signal Research Peptide</strong></p>\n<p>Ipamorelin is a selective growth hormone secretagogue studied in endocrine research for its interaction with pulsatile signalling mechanisms.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in growth hormone signalling models</p>\n</li>\n<li>\n<p>Investigated in pulsatile release dynamics</p>\n</li>\n<li>\n<p>Explored in endocrine regulation research</p>\n</li>\n<li>\n<p>Analyzed in recovery and adaptation models</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Ipamorelin is analyzed for its selective interaction with ghrelin-receptor-related pathways, which researchers associate with growth hormone signalling without broad activity across other endocrine axes.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "semax",
    handle: "semax-10mg",
    name: "Semax",
    fullName: "SEMAX 10MG",
    code: "XA10",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 56.05 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 76.5 },
    ],
    purity: null,
    desc: "Nootropic peptide, cognitive and neuroprotection research.",
    images: [],
    bodyHtml: "<p><strong>SEMAX 10MG — Advanced Neuropeptide Research Compound</strong></p>\n<p>Semax is a short peptide derived from an ACTH fragment, studied in neurological research for its interaction with cognitive and neuroprotective signalling pathways.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in cognitive performance and memory models</p>\n</li>\n<li>\n<p>Investigated in neuroprotection research</p>\n</li>\n<li>\n<p>Explored in attention and focus-related studies</p>\n</li>\n<li>\n<p>Analyzed in stress adaptation research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Semax is analyzed for its influence on brain-derived neurotrophic factor signalling and monoamine systems, pathways researchers associate with neuronal plasticity and adaptation.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "selank",
    handle: "selank-10mg",
    name: "Selank",
    fullName: "SELANK 10MG",
    code: "SK10",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 66.27 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 86.73 },
    ],
    purity: null,
    desc: "Anxiolytic peptide, stress and mood research.",
    images: [],
    bodyHtml: "<p><strong>SELANK 10MG — Advanced Neuropeptide Research Compound</strong></p>\n<p>Selank is a synthetic analogue of the immunomodulatory peptide tuftsin, studied in research focused on stress response and emotional regulation pathways.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in stress and anxiety-related models</p>\n</li>\n<li>\n<p>Investigated in mood regulation research</p>\n</li>\n<li>\n<p>Explored in immune signalling studies</p>\n</li>\n<li>\n<p>Analyzed in cognitive and attention research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Selank is analyzed for its interaction with GABAergic and serotonergic signalling, alongside effects on brain-derived neurotrophic factor, pathways researchers associate with stress adaptation.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "ss31",
    hiddenDoses: ["50mg"], // out of stock: hidden from the site, kept for later
    handle: "ss-31",
    name: "SS-31",
    fullName: "SS-31 (ELAMIPRETIDE)",
    code: "2S",
    dose: "10mg / 50mg",
    doses: ["10mg", "50mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 92.05 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 112.5 },
      { key: "50mg-vial", dose: "50mg", format: "Vial", label: "50mg · Vial", price: 337.5 },
      { key: "50mg-pen", dose: "50mg", format: "Pen", label: "50mg · Pen", price: 357.95 },
    ],
    purity: null,
    desc: "Mitochondria-targeted peptide, cardiolipin research.",
    images: [],
    bodyHtml: "<p><strong>SS-31 (ELAMIPRETIDE) — Advanced Mitochondrial Research Peptide</strong></p>\n<p>SS-31, also referenced as Elamipretide, is a mitochondria-targeted peptide studied for its interaction with the inner mitochondrial membrane.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in mitochondrial function and efficiency models</p>\n</li>\n<li>\n<p>Investigated in oxidative stress research</p>\n</li>\n<li>\n<p>Explored in cellular energy production studies</p>\n</li>\n<li>\n<p>Analyzed in cellular ageing and longevity research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>SS-31 is analyzed for its affinity with cardiolipin, a phospholipid of the inner mitochondrial membrane. Researchers study how this interaction influences electron transport efficiency and mitochondrial stability.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg / 50mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "amino5",
    draft: true, // out of stock: hidden from the site, kept for later
    handle: "5-amino-1mq-50mg",
    name: "5-Amino-1MQ",
    fullName: "5-AMINO-1MQ 50MG",
    code: "5AM",
    dose: "50mg",
    doses: ["50mg"],
    variants: [
      { key: "50mg-vial", dose: "50mg", format: "Vial", label: "50mg · Vial", price: 51.14 },
      { key: "50mg-pen", dose: "50mg", format: "Pen", label: "50mg · Pen", price: 71.59 },
    ],
    purity: null,
    desc: "NNMT inhibitor, metabolic and adipose research.",
    images: [],
    bodyHtml: "<p><strong>5-AMINO-1MQ 50MG — Advanced Metabolic Research Compound</strong></p>\n<p>5-Amino-1MQ is a small molecule studied in metabolic research for its inhibition of nicotinamide N-methyltransferase (NNMT).</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in adipose tissue metabolism models</p>\n</li>\n<li>\n<p>Investigated in NAD+ pathway research</p>\n</li>\n<li>\n<p>Explored in energy expenditure studies</p>\n</li>\n<li>\n<p>Analyzed in cellular metabolic regulation research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>5-Amino-1MQ is analyzed for its inhibition of NNMT, an enzyme involved in nicotinamide processing. Researchers study how this inhibition influences cellular NAD+ availability and metabolic activity in adipocyte models.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 50mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "aod",
    draft: true, // out of stock: hidden from the site, kept for later
    handle: "aod9604",
    name: "AOD9604",
    fullName: "AOD9604",
    code: "AD",
    dose: "5mg / 10mg",
    doses: ["5mg", "10mg"],
    variants: [
      { key: "5mg-vial", dose: "5mg", format: "Vial", label: "5mg · Vial", price: 119.32 },
      { key: "5mg-pen", dose: "5mg", format: "Pen", label: "5mg · Pen", price: 139.77 },
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 214.77 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 235.23 },
    ],
    purity: null,
    desc: "hGH fragment 176-191, lipolysis research.",
    images: [],
    bodyHtml: "<p><strong>AOD9604 — Advanced Lipolytic Research Peptide</strong></p>\n<p>AOD9604 is a modified fragment of the human growth hormone sequence, studied for its interaction with fat metabolism pathways without the broader activity of the full hormone.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in lipolysis and fat metabolism models</p>\n</li>\n<li>\n<p>Investigated in energy substrate research</p>\n</li>\n<li>\n<p>Explored in metabolic regulation studies</p>\n</li>\n<li>\n<p>Analyzed in body composition research models</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>AOD9604 corresponds to the C-terminal fragment 176-191 of human growth hormone. Research focuses on how this fragment interacts with fat metabolism pathways while showing limited activity on glucose-related signalling.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 5mg / 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "kpv",
    handle: "kpv-alpha-10mg",
    name: "KPV Alpha",
    fullName: "KPV ALPHA 10MG",
    code: "KPV10",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 61.36 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 81.82 },
    ],
    purity: null,
    desc: "α-MSH tripeptide fragment, inflammation research.",
    images: [],
    bodyHtml: "<p><strong>KPV ALPHA 10MG — Advanced Inflammation Research Peptide</strong></p>\n<p>KPV is a tripeptide fragment of alpha-melanocyte-stimulating hormone, studied in research focused on inflammatory signalling and mucosal integrity.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in inflammatory signalling models</p>\n</li>\n<li>\n<p>Investigated in gut and mucosal integrity research</p>\n</li>\n<li>\n<p>Explored in skin and dermal research models</p>\n</li>\n<li>\n<p>Analyzed in immune regulation studies</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>KPV is analyzed for its interaction with inflammatory signalling pathways, including NF-κB-related mechanisms, which researchers associate with the regulation of inflammatory responses at cellular level.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "kiss",
    draft: true, // out of stock: hidden from the site, kept for later
    handle: "kisspeptin-10mg",
    name: "Kisspeptin",
    fullName: "KISSPEPTIN 10MG",
    code: "KS10",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 92.05 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 112.5 },
    ],
    purity: null,
    desc: "Neuropeptide, reproductive axis signalling research.",
    images: [],
    bodyHtml: "<p><strong>KISSPEPTIN 10MG — Advanced Endocrine Research Peptide</strong></p>\n<p>Kisspeptin is a neuropeptide studied for its role upstream of the hypothalamic-pituitary-gonadal axis and its influence on hormonal signalling cascades.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in reproductive axis signalling models</p>\n</li>\n<li>\n<p>Investigated in hormonal regulation research</p>\n</li>\n<li>\n<p>Explored in GnRH release dynamics</p>\n</li>\n<li>\n<p>Analyzed in endocrine feedback studies</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Kisspeptin is analyzed for its interaction with the KISS1R receptor in hypothalamic neurons, a step researchers associate with gonadotropin-releasing hormone signalling and downstream endocrine regulation.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "pinealon",
    draft: true, // out of stock: hidden from the site, kept for later
    handle: "pinealon",
    name: "Pinealon",
    fullName: "PINEALON",
    code: "PI",
    dose: "10mg / 20mg",
    doses: ["10mg", "20mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 65.45 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 85.91 },
      { key: "20mg-vial", dose: "20mg", format: "Vial", label: "20mg · Vial", price: 112.5 },
      { key: "20mg-pen", dose: "20mg", format: "Pen", label: "20mg · Pen", price: 132.95 },
    ],
    purity: null,
    desc: "Short peptide bioregulator, neuronal research.",
    images: [],
    bodyHtml: "<p><strong>PINEALON — Advanced Neuronal Research Peptide</strong></p>\n<p>Pinealon is a short peptide bioregulator studied in research focused on neuronal function, cellular protection, and gene expression regulation.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in neuronal protection models</p>\n</li>\n<li>\n<p>Investigated in cognitive function research</p>\n</li>\n<li>\n<p>Explored in oxidative stress studies</p>\n</li>\n<li>\n<p>Analyzed in cellular ageing research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Pinealon is studied as a peptide bioregulator able to interact with DNA and influence gene expression in neuronal models, a mechanism researchers associate with cellular protection and adaptation.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 10mg / 20mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "klow",
    handle: "klow-80mg",
    name: "KLOW Blend",
    fullName: "KLOW 80MG (KPV + GHK-CU + BPC-157 + TB-500)",
    code: "KLOW",
    dose: "80mg",
    doses: ["80mg"],
    variants: [
      { key: "80mg-vial", dose: "80mg", format: "Vial", label: "80mg · Vial", price: 235.23 },
      { key: "80mg-pen", dose: "80mg", format: "Pen", label: "80mg · Pen", price: 255.68 },
    ],
    purity: null,
    desc: "KPV / GHK-Cu / BPC-157 / TB-500 blend, repair research.",
    images: [],
    bodyHtml: "<p><strong>KLOW 80MG (KPV + GHK-CU + BPC-157 + TB-500) — Advanced Multi-Pathway Repair Blend</strong></p>\n<p>KLOW combines KPV, GHK-Cu, BPC-157 and TB-500 in a single preparation, studied for the complementary repair, remodelling and inflammatory pathways each component is associated with.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in combined tissue repair models</p>\n</li>\n<li>\n<p>Investigated in inflammatory signalling research</p>\n</li>\n<li>\n<p>Explored in dermal and connective tissue studies</p>\n</li>\n<li>\n<p>Analyzed in recovery and adaptation research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Each component targets a distinct pathway: KPV is analyzed in inflammatory signalling, GHK-Cu in dermal remodelling and copper transport, BPC-157 in growth factor and vascular signalling, and TB-500 in actin-related cellular migration.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Available dosages:</strong> 80mg</p>\n</li>\n<li>\n<p><strong>Formats:</strong> Vial or pre-filled pen</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2–8°C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards across every compound:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE builds high-precision peptide systems for demanding research environments, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "reta",
    handle: "retatrutide-20mg",
    name: "Retatrutide",
    fullName: "RETATRUTIDE",
    code: "RT-S",
    dose: "10mg / 20mg / 40mg",
    doses: ["10mg", "20mg", "40mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 82.27 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 102.72 },
      { key: "20mg-vial", dose: "20mg", format: "Vial", label: "20mg · Vial", price: 148.09 },
      { key: "20mg-pen", dose: "20mg", format: "Pen", label: "20mg · Pen", price: 168.55 },
      { key: "40mg-vial", dose: "40mg", format: "Vial", label: "40mg · Vial", price: 250.36 },
      { key: "40mg-pen", dose: "40mg", format: "Pen", label: "40mg · Pen", price: 270.82 },
    ],
    purity: "99.2%",
    desc: "Triple agonist (GLP-1 / GIP / Glucagon). Third-party tested.",
    images: [],
    bodyHtml: "<p><strong>Retatrutide 20MG \u2014 Advanced Metabolic Research Peptide</strong></p>\n<p>Retatrutide is a next-generation peptide currently explored in advanced research for its multi-pathway interaction with metabolic regulation systems.</p>\n<p>Unlike traditional compounds targeting one or two pathways, Retatrutide is studied for its <strong>triple receptor activity</strong>, involving GLP-1, GIP, and glucagon-related mechanisms. This broader interaction makes it a key subject in modern metabolic and energy regulation research.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Investigated for multi-pathway metabolic regulation</p>\n</li>\n<li>\n<p>Studied in energy balance and substrate utilization models</p>\n</li>\n<li>\n<p>Explored in glucose processing and insulin signaling research</p>\n</li>\n<li>\n<p>Analyzed in appetite regulation and feeding behavior studies</p>\n</li>\n<li>\n<p>Growing interest in advanced metabolic and endocrine research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>Retatrutide is studied for its interaction across three primary metabolic pathways:</p>\n<ul>\n<li>\n<p><strong>GLP-1-related pathways</strong> involved in glucose regulation and satiety signaling</p>\n</li>\n<li>\n<p><strong>GIP-related pathways</strong> associated with nutrient metabolism</p>\n</li>\n<li>\n<p><strong>Glucagon-related mechanisms</strong> linked to energy expenditure and metabolic activity</p>\n</li>\n</ul>\n<p>This combined activity allows researchers to explore multiple metabolic responses within a single experimental framework.</p>\n<hr>\n<p><strong>Research Applications</strong></p>\n<p>Due to its multi-pathway profile, Retatrutide is widely analyzed in:</p>\n<ul>\n<li>\n<p>Metabolic regulation models</p>\n</li>\n<li>\n<p>Energy expenditure and substrate utilization studies</p>\n</li>\n<li>\n<p>Glucose homeostasis research</p>\n</li>\n<li>\n<p>Appetite and feeding behavior analysis</p>\n</li>\n<li>\n<p>Broader endocrine and metabolic pathway investigations</p>\n</li>\n</ul>\n<p>Its versatility makes it a valuable compound in controlled research environments exploring complex metabolic systems.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Dosage:</strong> 20MG per vial</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2\u20138\u00b0C</p>\n</li>\n<li>\n<p><strong>Stability:</strong> Maintain under controlled conditions</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE applies strict internal standards to ensure consistency and reliability:</p>\n<ul>\n<li>\n<p>High-purity peptide structure</p>\n</li>\n<li>\n<p>Controlled sourcing and production</p>\n</li>\n<li>\n<p>Batch-to-batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n</ul>\n<p>Each batch is selected to ensure precision and reproducibility in research environments.</p>\n<hr>\n<p><strong>Packaging</strong></p>\n<ul>\n<li>\n<p>Box of <strong>10 vials</strong></p>\n</li>\n<li>\n<p>Each vial contains <strong>20MG Retatrutide (lyophilized peptide)</strong></p>\n</li>\n<li>\n<p>Secure and discreet packaging</p>\n</li>\n<li>\n<p>Optimized for repeated and controlled use</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE is built on precision, control, and consistency \u2014 delivering compounds designed for demanding research environments.</p>",
  },
  {
    id: "motsc",
    hiddenDoses: ["40mg"], // out of stock: hidden from the site, kept for later
    handle: "mots-c-10mg",
    name: "MOTS-c",
    fullName: "MOTS-C",
    code: "MS",
    dose: "10mg / 40mg",
    doses: ["10mg", "40mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 74.45 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 94.91 },
      { key: "40mg-vial", dose: "40mg", format: "Vial", label: "40mg · Vial", price: 245.45 },
      { key: "40mg-pen", dose: "40mg", format: "Pen", label: "40mg · Pen", price: 265.91 },
    ],
    purity: "99.4%",
    desc: "Mitochondrial-derived peptide, metabolic research.",
    images: [],
    bodyHtml: "<p><strong>MOTS-C \u2014 Advanced Mitochondrial Research Peptide</strong></p>\n<p>MOTS-C is a mitochondrial-derived peptide currently explored in scientific research for its role in cellular energy regulation, metabolic balance, and mitochondrial function.</p>\n<p>It has become a growing focus in laboratory environments studying energy pathways, metabolic processes, and cellular adaptation mechanisms.</p>\n<hr>\n<p><strong>Key Research Areas</strong></p>\n<ul>\n<li>\n<p>Investigated for its role in cellular energy regulation</p>\n</li>\n<li>\n<p>Studied in relation to metabolic balance and glucose processing</p>\n</li>\n<li>\n<p>Explored for its interaction with mitochondrial signaling pathways</p>\n</li>\n<li>\n<p>Analyzed in endurance and metabolic stress models</p>\n</li>\n<li>\n<p>Increasing interest in mitochondrial and longevity research</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>MOTS-C is a peptide encoded within mitochondrial DNA, interacting with key cellular pathways involved in energy homeostasis.</p>\n<p>Research highlights its interaction with the <strong>AMPK pathway</strong>, a central regulator of cellular energy balance. This pathway plays a key role in how cells respond to metabolic stress and energy demand.</p>\n<p>Due to this, MOTS-C is widely studied in controlled environments focused on metabolic regulation and mitochondrial function.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2\u20138\u00b0C</p>\n</li>\n<li>\n<p><strong>Stability:</strong> Up to 60 days under proper storage conditions</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE maintains strict internal standards across all compounds:</p>\n<ul>\n<li>\n<p>High-purity peptide structure</p>\n</li>\n<li>\n<p>Consistent batch quality</p>\n</li>\n<li>\n<p>Controlled sourcing</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n</ul>\n<p>Each batch is selected to ensure precision, stability, and reproducibility.</p>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>",
  },
  {
    id: "cjc",
    handle: "cjc-1295-without-dac-ipamorelin",
    name: "CJC-1295 + Ipamorelin",
    fullName: "CJC-1295 WITHOUT DAC 5MG + IPAMORELIN 5MG",
    code: "CP10-S",
    dose: "10mg (5+5)",
    doses: ["10mg (5+5)"],
    variants: [
      { key: "10mg-vial", dose: "10mg (5+5)", format: "Vial", label: "10mg (5+5) · Vial", price: 92.05 },
      { key: "10mg-pen", dose: "10mg (5+5)", format: "Pen", label: "10mg (5+5) · Pen", price: 112.5 },
    ],
    purity: "99.1%",
    desc: "GHRH / GHRP blend, growth hormone secretion research.",
    images: [],
    bodyHtml: "<p><strong>CJC-1295 (Without DAC) 5MG + Ipamorelin 5MG \u2014 Advanced Growth Signal Research Blend</strong></p>\n<p>This peptide combination is studied in advanced research environments for its role in growth-related signaling and regulatory pathways.</p>\n<p>By combining CJC-1295 (without DAC) and Ipamorelin, this blend is analyzed for its interaction with mechanisms involved in pulsatile signaling and endocrine regulation.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in growth hormone signaling models</p>\n</li>\n<li>\n<p>Investigated in endocrine system regulation</p>\n</li>\n<li>\n<p>Explored in pulsatile release and signaling dynamics</p>\n</li>\n<li>\n<p>Analyzed in metabolic and adaptive response studies</p>\n</li>\n<li>\n<p>Increasing interest in performance and recovery-related research models</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>This combination targets complementary signaling pathways:</p>\n<ul>\n<li>\n<p><strong>CJC-1295 (Without DAC)</strong></p>\n<p>Studied for its role in stimulating natural signaling patterns related to growth regulation</p>\n</li>\n<li>\n<p><strong>Ipamorelin (IPA)</strong></p>\n<p>Investigated for its selective interaction with growth-related signaling pathways</p>\n</li>\n</ul>\n<p>Together, they are used to explore pulsatile signaling behavior and regulatory mechanisms within controlled research environments.</p>\n<hr>\n<p><strong>Research Applications</strong></p>\n<p>This peptide blend is commonly analyzed in:</p>\n<ul>\n<li>\n<p>Endocrine system studies</p>\n</li>\n<li>\n<p>Growth signaling research</p>\n</li>\n<li>\n<p>Metabolic regulation models</p>\n</li>\n<li>\n<p>Recovery and adaptation research environments</p>\n</li>\n<li>\n<p>Hormonal signaling pathway analysis</p>\n</li>\n</ul>\n<p>Its synergistic profile makes it a valuable compound for studying complex biological signaling systems.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Dosage:</strong> 5MG CJC-1295 (Without DAC) + 5MG Ipamorelin per vial</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2\u20138\u00b0C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Strict laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE ensures high-level quality control:</p>\n<ul>\n<li>\n<p>High-purity peptide sourcing</p>\n</li>\n<li>\n<p>Consistent batch production</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled manufacturing standards</p>\n</li>\n</ul>\n<p>Each batch is selected for precision, stability, and reproducibility.</p>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE develops high-precision peptide systems designed for advanced research, where control, consistency, and reliability are critical.</p>",
  },
  {
    id: "glow",
    handle: "glow-70mg-bpc157-tb500-ghk-cu",
    name: "GLOW Blend",
    fullName: "GLOW 70MG (BPC-157 10MG + TB-500 10MG + GHK-CU 50MG)",
    code: "BBG70",
    dose: "70mg",
    doses: ["70mg"],
    variants: [
      { key: "70mg-vial", dose: "70mg", format: "Vial", label: "70mg · Vial", price: 214.77 },
      { key: "70mg-pen", dose: "70mg", format: "Pen", label: "70mg · Pen", price: 235.23 },
    ],
    purity: "99.0%",
    desc: "GHK-Cu / BPC-157 / TB-500 combination for tissue research.",
    images: [],
    bodyHtml: "<p><strong>GLOW 70mg \u2014 Advanced Regenerative Research Blend</strong></p>\n<p>This advanced peptide combination is designed for research environments exploring cellular signaling, structural integrity, and regeneration processes.</p>\n<p>By combining BP157, TB500, and GHK-CU, this blend is studied for its complementary interaction across multiple biological pathways involved in tissue response and cellular adaptation.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>Investigated in cellular signaling and structural response models</li>\n<li>Studied in tissue integrity and regeneration research</li>\n<li>Explored in protein synthesis and cellular communication pathways</li>\n<li>Analyzed in adaptive response and recovery-related models</li>\n<li>Growing interest in multi-pathway regenerative research</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>This blend combines three peptides with distinct but complementary roles:</p>\n<ul>\n<li>\n<strong>BP157-related pathways</strong><p>Associated with cellular signaling and structural response mechanisms</p>\n</li>\n<li>\n<strong>TB500-related pathways</strong><p>Studied for its role in cell migration and structural organization</p>\n</li>\n<li>\n<strong>GHK-CU-related pathways</strong><p>Linked to cellular communication and protein signaling processes</p>\n</li>\n</ul>\n<p>Together, these interactions allow researchers to explore complex biological systems involved in structural maintenance and adaptive cellular responses.</p>\n<hr>\n<p><strong>Research Applications</strong></p>\n<p>This peptide blend is commonly analyzed in:</p>\n<ul>\n<li>Tissue signaling and regeneration studies</li>\n<li>Cellular communication models</li>\n<li>Structural biology research</li>\n<li>Adaptive and recovery process models</li>\n<li>Multi-pathway biological interaction studies</li>\n</ul>\n<p>Its combined profile makes it a valuable compound for investigating complex cellular environments.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<strong>Form:</strong> Lyophilized powder</li>\n<li>\n<strong>Dosage:</strong> 70MG per vial (combined blend)</li>\n<li>\n<strong>Reconstitution:</strong> To be mixed with bacteriostatic water</li>\n<li>\n<strong>Storage (after reconstitution):</strong> 2\u20138\u00b0C</li>\n<li>\n<strong>Handling:</strong> Maintain under controlled laboratory conditions</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE ensures strict quality control across all compounds:</p>\n<ul>\n<li>High-purity peptide structures</li>\n<li>Controlled sourcing</li>\n<li>Batch-to-batch consistency</li>\n<li>Independent third-party lab testing on every batch</li>\n<li>Purity and identity verified by HPLC on every batch</li>\n</ul>\n<p>Each batch is selected to ensure precision, stability, and reproducibility.</p>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE delivers high-precision compounds designed for demanding research environments, where consistency and control are essential.</p>",
  },
  {
    id: "tesa",
    handle: "tesamorelin-10mg",
    name: "Tesamorelin",
    fullName: "TESAMORELIN 10MG",
    code: "TSM10",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 194.32 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 214.77 },
    ],
    purity: "99.3%",
    desc: "GHRH analog, visceral fat research.",
    images: [],
    bodyHtml: "<p><strong>TESAMORELIN 10MG</strong></p>\n<p><strong>Advanced Peptide Systems \u2013 CELLOVATE</strong></p>\n<hr>\n<p><strong>Product Overview</strong></p>\n<p>Tesamorelin is a synthetic peptide analog studied for its interaction with growth hormone\u2013related signaling pathways. It is designed to mimic naturally occurring regulatory peptides involved in endocrine communication.</p>\n<p>This compound has been widely explored in controlled research environments focusing on hormonal signaling dynamics and metabolic pathway interactions.</p>\n<p>Supplied in high-purity lyophilized form, Tesamorelin ensures stability, precision, and consistency for advanced laboratory applications.</p>\n<hr>\n<p><strong>Key Characteristics</strong></p>\n<ul>\n<li>Synthetic peptide analog</li>\n<li>High-purity lyophilized powder</li>\n<li>Designed for controlled research use</li>\n<li>Stable structure for precise reconstitution</li>\n<li>Manufactured under strict quality standards</li>\n</ul>\n<hr>\n<p><strong>Research Interest Areas</strong></p>\n<p>Tesamorelin has been studied in relation to:</p>\n<ul>\n<li>Growth hormone signaling pathways</li>\n<li>Endocrine system regulation mechanisms</li>\n<li>Metabolic pathway interactions</li>\n<li>Peptide-receptor binding dynamics</li>\n<li>Cellular signaling processes</li>\n</ul>\n<p><em>These areas reflect research focus only and do not constitute product claims.</em></p>\n<hr>\n<p><strong>Product Specifications</strong></p>\n<ul>\n<li>\n<strong>Compound:</strong> Tesamorelin</li>\n<li>\n<strong>Quantity:</strong> 10 MG</li>\n<li>\n<strong>Form:</strong> Lyophilized powder</li>\n<li>\n<strong>Appearance:</strong> White crystalline powder</li>\n<li>\n<strong>Purity:</strong> \u2265 98% (HPLC)</li>\n<li>\n<strong>Solubility:</strong> Water-soluble after reconstitution</li>\n<li>\n<strong>Storage:</strong> Store refrigerated (2\u20138\u00b0C)</li>\n</ul>\n<hr>\n<p><strong>Batch Information</strong></p>\n<p>Each vial is labeled with a unique batch number for full traceability and quality control.</p>\n<hr>\n<p><strong>Packaging</strong></p>\n<ul>\n<li>Sterile glass vial</li>\n<li>Aluminum seal cap</li>\n<li>Premium CELLOVATE label design</li>\n<li>Optional: Box of 10 vials available</li>\n</ul>\n<hr>\n<p><strong>Important Notice</strong></p>\n<p><strong>FOR RESEARCH USE ONLY</strong></p>\n<p>This product is not intended for human or veterinary use.<br>Not approved for therapeutic or diagnostic purposes.</p>\n<p>Use is strictly limited to qualified professionals in appropriate research environments.</p>\n<hr>\n<p><strong>Why CELLOVATE</strong></p>\n<ul>\n<li>Premium-grade peptide sourcing</li>\n<li>Consistent batch reliability</li>\n<li>Clean, professional lab presentation</li>\n<li>Designed for high-standard research use</li>\n</ul>",
  },
  {
    id: "ghk",
    handle: "ghk-cu-100mg",
    name: "GHK-Cu",
    fullName: "GHK-CU 100MG",
    code: "CU100",
    dose: "100mg",
    doses: ["100mg"],
    variants: [
      { key: "100mg-vial", dose: "100mg", format: "Vial", label: "100mg · Vial", price: 45.82 },
      { key: "100mg-pen", dose: "100mg", format: "Pen", label: "100mg · Pen", price: 66.27 },
    ],
    purity: "99.2%",
    desc: "Copper peptide, dermal and wound-healing research.",
    images: [],
    bodyHtml: "<p><strong>GHK-CU 100MG</strong></p>\n<p><strong>Advanced Peptide Systems \u2013 CELLOVATE</strong></p>\n<hr>\n<p><strong>Product Overview</strong></p>\n<p>GHK-CU is a copper-binding peptide widely studied for its role in biological signaling and cellular communication. Naturally present in the human body, it has been the subject of extensive research in areas related to tissue dynamics, structural proteins, and cellular renewal processes.</p>\n<p>This compound is offered in high-purity lyophilized form, designed for research applications requiring precision and consistency.</p>\n<hr>\n<p><strong>Key Characteristics</strong></p>\n<ul>\n<li>\n<p>High-purity lyophilized peptide</p>\n</li>\n<li>\n<p>Copper-binding tripeptide (GHK + Cu\u00b2\u207a)</p>\n</li>\n<li>\n<p>Stable powder format for controlled reconstitution</p>\n</li>\n<li>\n<p>Manufactured under strict quality standards</p>\n</li>\n<li>\n<p>Suitable for advanced research protocols</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Interest Areas</strong></p>\n<p>GHK-CU has been explored in scientific literature for its involvement in:</p>\n<ul>\n<li>\n<p>Cellular signaling pathways</p>\n</li>\n<li>\n<p>Protein expression dynamics</p>\n</li>\n<li>\n<p>Extracellular matrix interactions</p>\n</li>\n<li>\n<p>Tissue remodeling mechanisms</p>\n</li>\n<li>\n<p>Oxidative stress response pathways</p>\n</li>\n</ul>\n<p><em>Note: These areas reflect research interest only and do not constitute product claims.</em></p>\n<hr>\n<p><strong>Product Specifications</strong></p>\n<ul>\n<li>\n<p><strong>Compound:</strong> GHK-CU (Copper Peptide)</p>\n</li>\n<li>\n<p><strong>Quantity:</strong> 100 MG</p>\n</li>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Appearance:</strong> Blue crystalline powder</p>\n</li>\n<li>\n<p><strong>Purity:</strong> \u2265 98% (HPLC)</p>\n</li>\n<li>\n<p><strong>Solubility:</strong> Water-soluble after reconstitution</p>\n</li>\n<li>\n<p><strong>Storage:</strong> Store refrigerated (2\u20138\u00b0C)</p>\n</li>\n</ul>\n<hr>\n<p><strong>Batch Information</strong></p>\n<p>Each vial is individually labeled with a unique batch number to ensure full traceability and quality control.</p>\n<hr>\n<p><strong>Important Notice</strong></p>\n<p><strong>FOR RESEARCH USE ONLY</strong></p>\n<p>This product is not intended for human or veterinary use.<br>Not approved by regulatory authorities for therapeutic or diagnostic purposes.</p>\n<p>Use must be restricted to qualified professionals in appropriate research environments.</p>\n<hr>\n<p><strong>Why CELLOVATE</strong></p>\n<ul>\n<li>\n<p>Premium-grade peptide sourcing</p>\n</li>\n<li>\n<p>Consistent batch quality</p>\n</li>\n<li>\n<p>Clean, professional labeling system</p>\n</li>\n<li>\n<p>Designed for serious research environments</p>\n</li>\n</ul>",
  },
  {
    id: "nad",
    hiddenDoses: ["500mg"], // out of stock: hidden from the site, kept for later
    handle: "nad-1000mg",
    name: "NAD+",
    fullName: "NAD+",
    code: "NA",
    dose: "500mg / 1000mg",
    doses: ["500mg", "1000mg"],
    variants: [
      { key: "500mg-vial", dose: "500mg", format: "Vial", label: "500mg · Vial", price: 66.27 },
      { key: "500mg-pen", dose: "500mg", format: "Pen", label: "500mg · Pen", price: 86.73 },
      { key: "1000mg-vial", dose: "1000mg", format: "Vial", label: "1000mg · Vial", price: 102.27 },
      { key: "1000mg-pen", dose: "1000mg", format: "Pen", label: "1000mg · Pen", price: 122.73 },
    ],
    purity: "99.0%",
    desc: "Coenzyme research, cellular metabolism.",
    images: [],
    bodyHtml: "<p><strong>NAD+ 1000MG \u2014 Advanced Cellular Energy Research Compound</strong></p>\n<p>NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme studied extensively in advanced research for its role in cellular energy production and metabolic regulation.</p>\n<p>This compound is a central element in cellular processes related to energy transfer, mitochondrial function, and biological system efficiency.</p>\n<hr>\n<p><strong>Key Research Focus</strong></p>\n<ul>\n<li>\n<p>Studied in cellular energy metabolism models</p>\n</li>\n<li>\n<p>Investigated for mitochondrial function and efficiency</p>\n</li>\n<li>\n<p>Explored in cellular signaling and metabolic regulation</p>\n</li>\n<li>\n<p>Analyzed in research related to cellular maintenance and system balance</p>\n</li>\n<li>\n<p>Increasing interest in longevity and metabolic pathway studies</p>\n</li>\n</ul>\n<hr>\n<p><strong>Mechanism Overview</strong></p>\n<p>NAD+ plays a critical role in cellular energy systems by acting as a key cofactor in redox reactions.</p>\n<p>It is involved in:</p>\n<ul>\n<li>\n<p><strong>Energy transfer mechanisms</strong> within cells</p>\n</li>\n<li>\n<p><strong>Mitochondrial activity and efficiency</strong></p>\n</li>\n<li>\n<p><strong>Cellular signaling pathways</strong></p>\n</li>\n<li>\n<p><strong>Metabolic process regulation</strong></p>\n</li>\n</ul>\n<p>Researchers use NAD+ to better understand how cells produce and manage energy at a fundamental level.</p>\n<hr>\n<p><strong>Research Applications</strong></p>\n<p>NAD+ is commonly studied in:</p>\n<ul>\n<li>\n<p>Cellular energy research</p>\n</li>\n<li>\n<p>Mitochondrial biology studies</p>\n</li>\n<li>\n<p>Metabolic pathway analysis</p>\n</li>\n<li>\n<p>Longevity and aging-related research models</p>\n</li>\n<li>\n<p>Cellular efficiency and system balance studies</p>\n</li>\n</ul>\n<p>Its essential role in energy systems makes it a cornerstone compound in modern biological research.</p>\n<hr>\n<p><strong>Formulation &amp; Storage</strong></p>\n<ul>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Dosage:</strong> 1000MG per vial</p>\n</li>\n<li>\n<p><strong>Reconstitution:</strong> To be mixed with bacteriostatic water</p>\n</li>\n<li>\n<p><strong>Storage (after reconstitution):</strong> 2\u20138\u00b0C</p>\n</li>\n<li>\n<p><strong>Handling:</strong> Controlled laboratory conditions required</p>\n</li>\n</ul>\n<hr>\n<p><strong>Purity &amp; Quality Standards</strong></p>\n<p>CELLOVATE maintains strict quality control protocols:</p>\n<ul>\n<li>\n<p>High-purity compound sourcing</p>\n</li>\n<li>\n<p>Batch consistency</p>\n</li>\n<li>\n<p>Independent third-party lab testing on every batch</p>\n</li>\n<li>\n<p>Purity and identity verified by HPLC on every batch</p>\n</li>\n<li>\n<p>Controlled production standards</p>\n</li>\n</ul>\n<p>Each batch is selected to ensure precision, stability, and reliability.</p>\n<hr>\n<p><strong>Research Use Only</strong></p>\n<p>This product is intended exclusively for laboratory and analytical research purposes.</p>\n<hr>\n<p><strong>CELLOVATE Standard</strong></p>\n<p>CELLOVATE delivers high-precision compounds engineered for advanced research, where control, consistency, and reliability are essential.</p>",
  },
  {
    id: "epi",
    draft: true, // out of stock: hidden from the site, kept for later
    handle: "epithalon-10mg",
    name: "Epithalon",
    fullName: "EPITHALON 10MG",
    code: "EP-10MG",
    dose: "10mg",
    doses: ["10mg"],
    variants: [
      { key: "10mg-vial", dose: "10mg", format: "Vial", label: "10mg · Vial", price: 99.99 },
      { key: "10mg-pen", dose: "10mg", format: "Pen", label: "10mg · Pen", price: 109.99 },
    ],
    purity: "99.5%",
    desc: "Tetrapeptide, telomerase activity research.",
    images: [],
    bodyHtml: "<p><strong>EPITHALON 10MG</strong></p>\n<p><strong>Advanced Peptide Systems \u2013 CELLOVATE</strong></p>\n<hr>\n<p><strong>Product Overview</strong></p>\n<p>Epithalon (Epitalon) is a synthetic peptide analog studied for its interaction with regulatory biological processes related to cellular cycles and signaling pathways.</p>\n<p>Originally derived from naturally occurring peptide structures, it has been explored in research settings focusing on cellular longevity mechanisms and genetic expression modulation.</p>\n<p>This product is supplied in high-purity lyophilized form, ensuring stability and precision for laboratory use.</p>\n<hr>\n<p><strong>Key Characteristics</strong></p>\n<ul>\n<li>\n<p>Synthetic tetrapeptide</p>\n</li>\n<li>\n<p>High-purity lyophilized powder</p>\n</li>\n<li>\n<p>Stable for controlled research applications</p>\n</li>\n<li>\n<p>Designed for precise reconstitution</p>\n</li>\n<li>\n<p>Manufactured under strict quality standards</p>\n</li>\n</ul>\n<hr>\n<p><strong>Research Interest Areas</strong></p>\n<p>Epithalon has been investigated in scientific studies related to:</p>\n<ul>\n<li>\n<p>Cellular cycle regulation</p>\n</li>\n<li>\n<p>Gene expression pathways</p>\n</li>\n<li>\n<p>Telomerase activity mechanisms</p>\n</li>\n<li>\n<p>Biological rhythm signaling</p>\n</li>\n<li>\n<p>Aging-related cellular processes</p>\n</li>\n</ul>\n<p><em>These areas reflect ongoing research and do not represent product claims.</em></p>\n<hr>\n<p><strong>Product Specifications</strong></p>\n<ul>\n<li>\n<p><strong>Compound:</strong> Epithalon (Epitalon)</p>\n</li>\n<li>\n<p><strong>Quantity:</strong> 10 MG</p>\n</li>\n<li>\n<p><strong>Form:</strong> Lyophilized powder</p>\n</li>\n<li>\n<p><strong>Appearance:</strong> White crystalline powder</p>\n</li>\n<li>\n<p><strong>Purity:</strong> \u2265 98% (HPLC)</p>\n</li>\n<li>\n<p><strong>Solubility:</strong> Water-soluble after reconstitution</p>\n</li>\n<li>\n<p><strong>Storage:</strong> Store refrigerated (2\u20138\u00b0C)</p>\n</li>\n</ul>\n<hr>\n<p><strong>Batch Information</strong></p>\n<p>Each vial includes a unique batch number for full traceability and quality assurance.</p>\n<hr>\n<p><strong>Packaging</strong></p>\n<ul>\n<li>\n<p>Sterile glass vial</p>\n</li>\n<li>\n<p>Aluminum seal cap</p>\n</li>\n<li>\n<p>Premium CELLOVATE labeling</p>\n</li>\n<li>\n<p>Optional: Box of 10 vials available</p>\n</li>\n</ul>\n<hr>\n<p><strong>Important Notice</strong></p>\n<p><strong>FOR RESEARCH USE ONLY</strong></p>\n<p>This product is not intended for human or veterinary use.<br>Not approved for medical, therapeutic, or diagnostic applications.</p>\n<p>Use is restricted to qualified professionals in controlled research environments.</p>\n<hr>\n<p><strong>Why CELLOVATE</strong></p>\n<ul>\n<li>\n<p>High-grade peptide sourcing</p>\n</li>\n<li>\n<p>Consistent batch quality</p>\n</li>\n<li>\n<p>Professional laboratory presentation</p>\n</li>\n<li>\n<p>Built for advanced research protocols</p>\n</li>\n</ul>",
  },
];

// Photo for a variant. Falls back to the nearest photo we have when a
// dosage has none of its own: same format first, then the other format.
function resolveImage(product, variant) {
  const map = PRODUCT_IMAGES[product.id] || {};
  const doseOf = (v) => v.key.replace(/-(vial|pen)$/, "");
  const fmt = variant.format.toLowerCase();
  const other = fmt === "pen" ? "vial" : "pen";
  const doses = [doseOf(variant), ...product.variants.map(doseOf)];
  for (const f of [fmt, other]) {
    for (const d of doses) {
      if (map[`${d}-${f}`]) return map[`${d}-${f}`];
    }
  }
  return null;
}

// Catalog as the store sees it: hidden dosages removed everywhere (product
// pages, cart, checkout, feeds), with the dosage summary rebuilt to match.
export const PRODUCTS = CATALOG.map((p) => {
  if (!p.hiddenDoses?.length) return p;
  const variants = p.variants.filter((v) => !p.hiddenDoses.includes(v.dose));
  const doses = [...new Set(variants.map((v) => v.dose))];
  return {
    ...p,
    variants,
    doses,
    dose: doses.join(" / "),
    bodyHtml: String(p.bodyHtml || "").replace(
      /(Available dosages:<\/strong> )[^<]*/,
      `$1${doses.join(" / ")}`
    ),
  };
});

for (const product of PRODUCTS) {
  for (const variant of product.variants) {
    const img = resolveImage(product, variant);
    variant.image = img ? img.src : null;
    variant.imageAlt = img ? img.alt : `${product.name} ${variant.label}`;
  }
  // Gallery: every distinct photo, default variant first.
  product.images = [...new Set(product.variants.map((v) => v.image))].filter(
    Boolean
  );
}

// Products visible on the storefront (shop grid, product pages, related products).
// Draft products are excluded from browsing but keep their data for later reactivation.
export const VISIBLE_PRODUCTS = PRODUCTS.filter((p) => !p.draft);

export function getProductByHandle(handle) {
  return PRODUCTS.find((p) => p.handle === handle);
}

// Default variant shown before the shopper picks one: smallest dosage, vial format.
export function getDefaultVariant(product) {
  return product.variants[0];
}

export function getVariant(product, variantKey) {
  return (
    product.variants.find((v) => v.key === variantKey) ||
    getDefaultVariant(product)
  );
}

// Dosages offered by a product, in catalog order.
export function getDoses(product) {
  return product.doses || [...new Set(product.variants.map((v) => v.dose))];
}

// Formats (Vial / Pen) available for a given dosage.
export function getFormats(product, dose) {
  return product.variants.filter((v) => v.dose === dose);
}

// Cheapest variant price, used for "from $X" labels on the shop grid.
export function getLowestPrice(product) {
  return Math.min(...product.variants.map((v) => v.price));
}
