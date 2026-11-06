// SEO guide articles: single-compound metabolic deep dives (tirzepatide, retatrutide) and NAD+ precursors.
export const METABOLIC_2_ARTICLES = [
  {
    slug: "tirzepatide-research-guide",
    locales: ["en", "th", "fr", "de", "es", "it"],
    products: ["tirzepatide", "retatrutide-20mg"],
    content: {
      en: {
        title: "Tirzepatide Research Guide: Structure and Mechanism",
        description: "Tirzepatide explained for researchers: its GIP-based peptide structure, dual GIP/GLP-1 receptor agonism, main research areas and lab storage tips.",
        h1: "Tirzepatide Research Guide: Structure, Dual Agonism and Research Areas",
        intro: "Tirzepatide is a synthetic peptide that activates two incretin receptors, GIP and GLP-1, from a single molecule. It is built on a GIP-derived backbone and carries a fatty acid side chain that gives it a long half-life. This guide looks at how the molecule is put together, how it engages each receptor, where it is studied and how it is handled in the lab.",
        sections: [
          {
            h: "Why a GIP-based molecule was a bold idea",
            p: [
              "For years GIP was the overlooked incretin. Early work showed that its insulin-releasing effect is blunted in type 2 diabetes, so most drug-discovery attention went to GLP-1 instead. Tirzepatide reversed that thinking by starting from the GIP sequence and teaching it to activate the GLP-1 receptor as well.",
              "The result is often nicknamed a twincretin: one peptide chain carrying two hormone signals. Because both receptors are triggered by the same molecule at the same time, researchers can study combined incretin signalling without having to balance two separate compounds against each other."
            ]
          },
          {
            h: "Inside the molecule",
            p: [
              "Tirzepatide is a linear peptide of 39 amino acids. Its sequence is largely derived from native GIP, with substitutions that add GLP-1 receptor activity and protect it from rapid breakdown. Several of its building blocks are non-standard amino acids that do not occur in natural proteins.",
              "The key design features are well described in the published pharmacology:"
            ],
            list: [
              "Aminoisobutyric acid (Aib) residues that shield the peptide from the enzyme DPP-4",
              "A C20 fatty diacid attached through a linker to a lysine side chain",
              "Strong binding to serum albumin, which slows clearance and extends half-life to several days",
              "An amidated C-terminus, a common feature of stabilised peptide hormones"
            ]
          },
          {
            h: "How it engages the two receptors",
            p: [
              "The GIP and GLP-1 receptors are both class B G protein-coupled receptors, so they share a broadly similar architecture. Tirzepatide does not activate them equally. It is described as an imbalanced agonist, with activity that leans towards the GIP receptor and comes closer to native GIP there than to native GLP-1 at the GLP-1 receptor.",
              "At the GLP-1 receptor it also shows biased signalling: it favours the cAMP pathway over the recruitment of beta-arrestin. Lower beta-arrestin recruitment is associated with less receptor internalisation, and researchers are still working out how much this bias contributes to the overall profile of the molecule."
            ]
          },
          {
            h: "Where tirzepatide is studied",
            p: [
              "Tirzepatide has become one of the most widely investigated metabolic peptides. Its research footprint now extends well beyond glucose control into several organ systems.",
              "It has also revived a scientific puzzle sometimes called the GIP paradox: in preclinical models, both activating and blocking the GIP receptor have been linked to changes in body weight regulation. Tirzepatide is one of the main tools used to explore what GIP signalling really does in adipose tissue, the brain and the pancreas."
            ],
            list: [
              "Type 2 diabetes and insulin secretion",
              "Obesity, appetite signalling and energy intake",
              "Fat accumulation in the liver",
              "Heart failure, sleep apnoea and kidney research",
              "Adipose tissue and lipid handling"
            ]
          },
          {
            h: "Laboratory handling and storage",
            p: [
              "Tirzepatide is usually supplied as a white lyophilized powder. For long-term storage keep the sealed vial frozen at around -20 °C, or refrigerated at 2–8 °C for shorter periods, always away from light and moisture. Let a cold vial come to room temperature before opening it so condensation does not form on the powder.",
              "Reconstitute with a sterile diluent under clean conditions and dissolve by gentle swirling rather than shaking, because lipidated peptides can aggregate when agitated. Keep the solution refrigerated, divide it into aliquots if it will be used over time, and avoid repeated freeze-thaw cycles. Pre-filled pens should also be kept in the refrigerator and protected from light."
            ]
          }
        ],
        faq: [
          ["Is tirzepatide a GLP-1 agonist?", "Yes, but not only. Tirzepatide activates both the GLP-1 and GIP receptors, which is why it is classed as a dual agonist rather than a pure GLP-1 receptor agonist."],
          ["What does imbalanced agonist mean for tirzepatide?", "It means the molecule does not activate its two targets with equal strength. Tirzepatide shows relatively stronger activity at the GIP receptor than at the GLP-1 receptor."],
          ["How is tirzepatide different from semaglutide?", "Semaglutide acts on the GLP-1 receptor alone, while tirzepatide adds GIP receptor activity. That makes the pair useful in studies that aim to separate the contribution of each incretin pathway."],
          ["How should tirzepatide be stored for research?", "Keep the lyophilized powder sealed, frozen or refrigerated and away from light, and store any reconstituted solution cold without refreezing it. Tirzepatide is available as a lyophilized vial or a pre-filled pen for research."]
        ]
      },
      th: {
        title: "Tirzepatide คืออะไร: คู่มืองานวิจัยฉบับเข้าใจง่าย",
        description: "Tirzepatide สำหรับงานวิจัย: โครงสร้างเปปไทด์ที่พัฒนาจาก GIP กลไกการกระตุ้นตัวรับคู่ GIP/GLP-1 หัวข้อวิจัยหลัก และการเก็บรักษาในห้องแล็บอย่างถูกวิธี",
        h1: "คู่มือวิจัย Tirzepatide: โครงสร้าง กลไกตัวรับคู่ และหัวข้อที่นักวิจัยสนใจ",
        intro: "Tirzepatide เป็นเปปไทด์สังเคราะห์ที่กระตุ้นตัวรับ incretin ได้สองชนิด คือ GIP และ GLP-1 ภายในโมเลกุลเดียว โครงสร้างหลักพัฒนามาจากลำดับกรดอะมิโนของ GIP และมีสายกรดไขมันที่ช่วยให้ออกฤทธิ์ได้นาน บทความนี้อธิบายว่าโมเลกุลประกอบขึ้นอย่างไร จับกับตัวรับแต่ละชนิดแบบไหน ถูกศึกษาในด้านใด และควรจัดการในห้องปฏิบัติการอย่างไร",
        sections: [
          {
            h: "ทำไมการเริ่มจาก GIP จึงเป็นแนวคิดที่กล้าหาญ",
            p: [
              "ในอดีต GIP เป็น incretin ที่ถูกมองข้าม งานวิจัยยุคแรกพบว่าฤทธิ์กระตุ้นการหลั่งอินซูลินของ GIP ลดลงในภาวะเบาหวานชนิดที่ 2 ความสนใจส่วนใหญ่จึงไปอยู่ที่ GLP-1 แทน Tirzepatide พลิกแนวคิดนี้ด้วยการเริ่มจากลำดับของ GIP แล้วดัดแปลงให้กระตุ้นตัวรับ GLP-1 ได้ด้วย",
              "ผลลัพธ์คือสารที่มักถูกเรียกเล่น ๆ ว่า twincretin หรือเปปไทด์สายเดียวที่ส่งสัญญาณฮอร์โมนได้สองแบบ เมื่อตัวรับทั้งสองถูกกระตุ้นจากโมเลกุลเดียวกันในเวลาเดียวกัน นักวิจัยจึงศึกษาสัญญาณ incretin แบบผสมได้โดยไม่ต้องคอยปรับสมดุลระหว่างสารสองตัว"
            ]
          },
          {
            h: "เจาะลึกโครงสร้างโมเลกุล",
            p: [
              "Tirzepatide เป็นเปปไทด์สายตรงที่มีกรดอะมิโน 39 ตัว ลำดับส่วนใหญ่มาจาก GIP ตามธรรมชาติ แต่มีการเปลี่ยนบางตำแหน่งเพื่อเพิ่มฤทธิ์ต่อตัวรับ GLP-1 และป้องกันการถูกย่อยสลายอย่างรวดเร็ว นอกจากนี้ยังมีกรดอะมิโนที่ไม่พบในโปรตีนตามธรรมชาติอยู่หลายตำแหน่ง",
              "จุดเด่นของการออกแบบที่มีการอธิบายไว้ในเอกสารทางเภสัชวิทยา ได้แก่"
            ],
            list: [
              "กรดอะมิโน Aib (aminoisobutyric acid) ที่ช่วยกันไม่ให้เอนไซม์ DPP-4 ตัดโมเลกุล",
              "กรดไขมัน C20 ที่ต่อผ่านตัวเชื่อมเข้ากับสายข้างของ lysine",
              "การจับกับ albumin ในเลือดได้ดี ทำให้ถูกกำจัดช้าลงและมีครึ่งชีวิตยาวหลายวัน",
              "ปลาย C-terminus แบบ amide ซึ่งพบบ่อยในฮอร์โมนเปปไทด์ที่ถูกทำให้เสถียร"
            ]
          },
          {
            h: "Tirzepatide จับกับตัวรับทั้งสองอย่างไร",
            p: [
              "ตัวรับ GIP และ GLP-1 เป็นตัวรับแบบ G protein-coupled receptor กลุ่ม class B จึงมีโครงสร้างคล้ายกัน แต่ Tirzepatide ไม่ได้กระตุ้นทั้งสองเท่ากัน สารนี้ถูกอธิบายว่าเป็น imbalanced agonist คือมีฤทธิ์เอนไปทางตัวรับ GIP มากกว่า และที่ตัวรับ GIP นั้นมีฤทธิ์ใกล้เคียงกับ GIP ธรรมชาติมากกว่าที่ตัวรับ GLP-1 เทียบกับ GLP-1 ธรรมชาติ",
              "ที่ตัวรับ GLP-1 ยังพบลักษณะที่เรียกว่า biased signalling คือเลือกกระตุ้นเส้นทาง cAMP มากกว่าการดึง beta-arrestin เข้ามา การดึง beta-arrestin น้อยลงสัมพันธ์กับการที่ตัวรับถูกดึงเข้าเซลล์น้อยลง และนักวิจัยยังคงศึกษาอยู่ว่าคุณสมบัตินี้มีส่วนต่อภาพรวมของโมเลกุลมากเพียงใด"
            ]
          },
          {
            h: "Tirzepatide ถูกศึกษาในด้านใดบ้าง",
            p: [
              "ปัจจุบัน Tirzepatide เป็นหนึ่งในเปปไทด์ด้านเมแทบอลิซึมที่ถูกศึกษากว้างขวางที่สุด ขอบเขตงานวิจัยขยายไปไกลกว่าการควบคุมระดับน้ำตาล และครอบคลุมหลายระบบอวัยวะ",
              "สารนี้ยังจุดประเด็นที่เรียกว่า GIP paradox ขึ้นมาอีกครั้ง เพราะในงานวิจัยพรีคลินิก ทั้งการกระตุ้นและการยับยั้งตัวรับ GIP ต่างก็สัมพันธ์กับการเปลี่ยนแปลงของการควบคุมน้ำหนักตัว Tirzepatide จึงเป็นเครื่องมือหลักในการศึกษาว่าสัญญาณ GIP ทำหน้าที่อะไรจริง ๆ ในเนื้อเยื่อไขมัน สมอง และตับอ่อน"
            ],
            list: [
              "เบาหวานชนิดที่ 2 และการหลั่งอินซูลิน",
              "โรคอ้วน สัญญาณความอยากอาหาร และการรับพลังงาน",
              "การสะสมไขมันในตับ",
              "งานวิจัยด้านหัวใจล้มเหลว ภาวะหยุดหายใจขณะหลับ และไต",
              "ชีววิทยาของเนื้อเยื่อไขมันและการจัดการไขมัน"
            ]
          },
          {
            h: "การจัดเก็บและการจัดการในห้องปฏิบัติการ",
            p: [
              "Tirzepatide มักมาในรูปผงแห้งสีขาวแบบ lyophilized หากเก็บระยะยาวควรแช่แข็งขวดที่ปิดสนิทไว้ที่ประมาณ -20 °C หรือเก็บในตู้เย็น 2–8 °C สำหรับระยะสั้น โดยต้องห่างจากแสงและความชื้นเสมอ ก่อนเปิดขวดที่เย็นอยู่ ควรรอให้ขวดมีอุณหภูมิเท่าห้องก่อน เพื่อไม่ให้เกิดหยดน้ำเกาะบนผง",
              "การละลายผงควรใช้สารละลายปลอดเชื้อในสภาพแวดล้อมที่สะอาด และหมุนขวดเบา ๆ แทนการเขย่า เพราะเปปไทด์ที่มีสายกรดไขมันอาจจับตัวเป็นก้อนเมื่อถูกเขย่าแรง เก็บสารละลายไว้ในตู้เย็น แบ่งเป็นส่วนย่อยหากจะใช้หลายครั้ง และหลีกเลี่ยงการแช่แข็งสลับละลายซ้ำ ๆ ส่วนแบบปากกาบรรจุพร้อมใช้ก็ควรเก็บในตู้เย็นและป้องกันแสงเช่นกัน"
            ]
          }
        ],
        faq: [
          ["Tirzepatide เป็น GLP-1 agonist หรือไม่?", "ใช่ แต่ไม่ใช่แค่นั้น Tirzepatide กระตุ้นทั้งตัวรับ GLP-1 และ GIP จึงถูกจัดเป็นตัวกระตุ้นคู่ ไม่ใช่ตัวกระตุ้นตัวรับ GLP-1 เพียงอย่างเดียว"],
          ["คำว่า imbalanced agonist หมายถึงอะไร?", "หมายความว่าโมเลกุลไม่ได้กระตุ้นเป้าหมายทั้งสองด้วยความแรงเท่ากัน Tirzepatide มีฤทธิ์ต่อตัวรับ GIP ค่อนข้างแรงกว่าต่อตัวรับ GLP-1"],
          ["Tirzepatide ต่างจาก Semaglutide อย่างไร?", "Semaglutide ออกฤทธิ์ที่ตัวรับ GLP-1 เพียงชนิดเดียว ส่วน Tirzepatide เพิ่มฤทธิ์ต่อตัวรับ GIP เข้ามา ทั้งคู่จึงมีประโยชน์ในงานวิจัยที่ต้องการแยกบทบาทของเส้นทาง incretin แต่ละเส้นทาง"],
          ["ควรเก็บ Tirzepatide สำหรับงานวิจัยอย่างไร?", "เก็บผงแห้งในขวดปิดสนิท แช่แข็งหรือแช่เย็น และห่างจากแสง ส่วนสารละลายที่เตรียมแล้วให้เก็บในที่เย็นโดยไม่นำไปแช่แข็งซ้ำ Tirzepatide มีให้เลือกทั้งแบบขวดผงแห้งและแบบปากกาบรรจุพร้อมใช้ (pre-filled pen) สำหรับงานวิจัย"]
        ]
      },
      fr: {
        title: "Tirzépatide : guide de recherche, structure et mécanisme",
        description: "Le tirzépatide expliqué aux chercheurs : structure dérivée du GIP, double agonisme GIP/GLP-1, principaux axes de recherche et conservation en laboratoire.",
        h1: "Guide de recherche sur le tirzépatide : structure, double agonisme et axes d’étude",
        intro: "Le tirzépatide est un peptide de synthèse qui active deux récepteurs des incrétines, GIP et GLP-1, à partir d’une seule molécule. Il repose sur une séquence dérivée du GIP et porte une chaîne d’acide gras qui lui confère une demi-vie prolongée. Ce guide détaille sa construction, sa façon d’agir sur chaque récepteur, les domaines où il est étudié et sa manipulation au laboratoire.",
        sections: [
          {
            h: "Partir du GIP : un pari audacieux",
            p: [
              "Pendant longtemps, le GIP a été l’incrétine délaissée. Les premiers travaux ont montré que son effet insulinosécréteur s’atténue dans le diabète de type 2, si bien que la recherche s’est surtout tournée vers le GLP-1. Le tirzépatide a pris le contre-pied de cette logique : partir de la séquence du GIP et lui apprendre à activer aussi le récepteur du GLP-1.",
              "On le surnomme parfois « twincretin » : une seule chaîne peptidique porteuse de deux signaux hormonaux. Comme les deux récepteurs sont sollicités par la même molécule au même moment, les chercheurs peuvent étudier une signalisation incrétine combinée sans avoir à équilibrer deux composés distincts."
            ]
          },
          {
            h: "Anatomie de la molécule",
            p: [
              "Le tirzépatide est un peptide linéaire de 39 acides aminés. Sa séquence reprend en grande partie celle du GIP natif, avec des substitutions qui ajoutent l’activité sur le récepteur du GLP-1 et le protègent d’une dégradation rapide. Plusieurs de ses maillons sont des acides aminés non naturels, absents des protéines du vivant.",
              "La littérature pharmacologique décrit clairement ses principaux atouts de conception :"
            ],
            list: [
              "Des résidus d’acide aminoisobutyrique (Aib) qui le mettent à l’abri de l’enzyme DPP-4",
              "Un diacide gras en C20 relié par un bras espaceur à la chaîne latérale d’une lysine",
              "Une forte liaison à l’albumine sérique, qui ralentit l’élimination et porte la demi-vie à plusieurs jours",
              "Une extrémité C-terminale amidée, fréquente chez les hormones peptidiques stabilisées"
            ]
          },
          {
            h: "Comment il sollicite les deux récepteurs",
            p: [
              "Les récepteurs du GIP et du GLP-1 appartiennent tous deux à la classe B des récepteurs couplés aux protéines G et partagent donc une architecture proche. Le tirzépatide ne les active pas de manière égale : on le qualifie d’agoniste déséquilibré, son activité penchant vers le récepteur du GIP, où il se rapproche davantage du GIP natif que du GLP-1 natif sur le récepteur du GLP-1.",
              "Sur le récepteur du GLP-1, il présente en outre une signalisation biaisée : il privilégie la voie de l’AMPc au détriment du recrutement de la bêta-arrestine. Un moindre recrutement de bêta-arrestine s’accompagne d’une internalisation réduite du récepteur, et la part exacte de ce biais dans le profil global de la molécule reste un sujet d’étude."
            ]
          },
          {
            h: "Dans quels domaines il est étudié",
            p: [
              "Le tirzépatide compte aujourd’hui parmi les peptides métaboliques les plus étudiés. Son champ de recherche dépasse largement la régulation glycémique et touche plusieurs systèmes d’organes.",
              "Il a aussi relancé une énigme scientifique surnommée le « paradoxe du GIP » : dans des modèles précliniques, activer comme bloquer le récepteur du GIP ont tous deux été associés à des modifications de la régulation du poids corporel. Le tirzépatide sert ainsi d’outil central pour comprendre le rôle réel du GIP dans le tissu adipeux, le cerveau et le pancréas."
            ],
            list: [
              "Diabète de type 2 et sécrétion d’insuline",
              "Obésité, signaux de l’appétit et apport énergétique",
              "Accumulation de graisse dans le foie",
              "Insuffisance cardiaque, apnée du sommeil et fonction rénale",
              "Biologie du tissu adipeux et gestion des lipides"
            ]
          },
          {
            h: "Manipulation et conservation au laboratoire",
            p: [
              "Le tirzépatide se présente généralement sous forme de poudre blanche lyophilisée. Pour une conservation longue, gardez le flacon scellé congelé vers -20 °C, ou au réfrigérateur entre 2 et 8 °C sur de plus courtes périodes, toujours à l’abri de la lumière et de l’humidité. Laissez un flacon froid revenir à température ambiante avant de l’ouvrir afin d’éviter la condensation sur la poudre.",
              "La reconstitution se fait avec un diluant stérile, dans des conditions propres, en faisant tourner doucement le flacon plutôt qu’en l’agitant : les peptides lipidés ont tendance à s’agréger sous l’effet de secousses. Conservez la solution au réfrigérateur, répartissez-la en aliquotes si elle doit servir dans la durée et évitez les cycles répétés de congélation et décongélation. Les stylos préremplis se gardent eux aussi au réfrigérateur, à l’abri de la lumière."
            ]
          }
        ],
        faq: [
          ["Le tirzépatide est-il un agoniste du GLP-1 ?", "Oui, mais pas seulement. Il active à la fois les récepteurs du GLP-1 et du GIP, d’où son classement parmi les doubles agonistes et non parmi les agonistes purs du récepteur du GLP-1."],
          ["Que signifie « agoniste déséquilibré » ?", "Cela signifie que la molécule n’active pas ses deux cibles avec la même intensité. Le tirzépatide montre une activité relativement plus forte sur le récepteur du GIP que sur celui du GLP-1."],
          ["Quelle différence entre tirzépatide et sémaglutide ?", "Le sémaglutide agit uniquement sur le récepteur du GLP-1, tandis que le tirzépatide y ajoute une activité sur le récepteur du GIP. Les deux sont donc utiles pour distinguer, dans une étude, la contribution de chaque voie incrétine."],
          ["Comment conserver le tirzépatide pour la recherche ?", "Gardez la poudre lyophilisée bien fermée, congelée ou réfrigérée, à l’abri de la lumière, et la solution reconstituée au froid sans la recongeler. Le tirzépatide est disponible en flacon lyophilisé ou en stylo prérempli pour la recherche."]
        ]
      },
      de: {
        title: "Tirzepatid: Forschungsleitfaden zu Struktur und Wirkung",
        description: "Tirzepatid für die Forschung erklärt: GIP-basierte Peptidstruktur, dualer GIP/GLP-1-Rezeptoragonismus, zentrale Forschungsfelder und Lagerung im Labor.",
        h1: "Tirzepatid-Forschungsleitfaden: Struktur, dualer Agonismus und Forschungsfelder",
        intro: "Tirzepatid ist ein synthetisches Peptid, das mit einem einzigen Molekül zwei Inkretinrezeptoren aktiviert: GIP und GLP-1. Es basiert auf einem vom GIP abgeleiteten Grundgerüst und trägt eine Fettsäureseitenkette, die ihm eine lange Halbwertszeit verleiht. Dieser Leitfaden zeigt, wie das Molekül aufgebaut ist, wie es die beiden Rezeptoren anspricht, wo es untersucht wird und wie Sie es im Labor handhaben.",
        sections: [
          {
            h: "Warum ein GIP-basiertes Molekül ein mutiger Ansatz war",
            p: [
              "Lange galt GIP als das vernachlässigte Inkretin. Frühe Arbeiten zeigten, dass seine insulinfreisetzende Wirkung bei Typ-2-Diabetes abgeschwächt ist, weshalb sich die Forschung vor allem auf GLP-1 konzentrierte. Tirzepatid kehrte diese Logik um: Man nahm die GIP-Sequenz als Ausgangspunkt und brachte ihr bei, zusätzlich den GLP-1-Rezeptor zu aktivieren.",
              "Daher wird Tirzepatid gelegentlich als Twincretin bezeichnet, also eine einzige Peptidkette mit zwei hormonellen Signalen. Da beide Rezeptoren gleichzeitig von demselben Molekül angesprochen werden, lässt sich kombinierte Inkretinsignalisierung untersuchen, ohne zwei getrennte Substanzen gegeneinander austarieren zu müssen."
            ]
          },
          {
            h: "Der Aufbau des Moleküls",
            p: [
              "Tirzepatid ist ein lineares Peptid aus 39 Aminosäuren. Die Sequenz stammt größtenteils vom nativen GIP, enthält aber Austausche, die GLP-1-Rezeptoraktivität hinzufügen und vor schnellem Abbau schützen. Mehrere Bausteine sind nicht proteinogene Aminosäuren, die in natürlichen Proteinen nicht vorkommen.",
              "Die wichtigsten Konstruktionsmerkmale sind in der pharmakologischen Literatur gut beschrieben:"
            ],
            list: [
              "Aminoisobuttersäure-Reste (Aib), die das Peptid vor dem Enzym DPP-4 schützen",
              "Eine C20-Fettdisäure, die über einen Linker an eine Lysin-Seitenkette gebunden ist",
              "Starke Bindung an Serumalbumin, die die Elimination verlangsamt und die Halbwertszeit auf mehrere Tage verlängert",
              "Ein amidierter C-Terminus, typisch für stabilisierte Peptidhormone"
            ]
          },
          {
            h: "Wie Tirzepatid die beiden Rezeptoren anspricht",
            p: [
              "GIP- und GLP-1-Rezeptor gehören beide zu den G-Protein-gekoppelten Rezeptoren der Klasse B und sind ähnlich aufgebaut. Tirzepatid aktiviert sie dennoch nicht gleich stark. Es wird als unausgewogener Agonist beschrieben: Seine Aktivität ist zum GIP-Rezeptor hin verschoben und liegt dort näher am nativen GIP als am GLP-1-Rezeptor im Vergleich zum nativen GLP-1.",
              "Am GLP-1-Rezeptor zeigt es zudem eine verzerrte Signalübertragung, auch Biased Agonism genannt: Der cAMP-Weg wird gegenüber der Rekrutierung von Beta-Arrestin bevorzugt. Weniger Beta-Arrestin geht mit geringerer Internalisierung des Rezeptors einher. Wie stark dieser Effekt zum Gesamtprofil des Moleküls beiträgt, ist noch Gegenstand der Forschung."
            ]
          },
          {
            h: "In welchen Bereichen Tirzepatid erforscht wird",
            p: [
              "Tirzepatid zählt heute zu den am intensivsten untersuchten metabolischen Peptiden. Sein Forschungsspektrum reicht inzwischen weit über die Glukoseregulation hinaus und umfasst mehrere Organsysteme.",
              "Zugleich hat es ein wissenschaftliches Rätsel neu belebt, das als GIP-Paradoxon bekannt ist: In präklinischen Modellen wurden sowohl die Aktivierung als auch die Blockade des GIP-Rezeptors mit Veränderungen der Körpergewichtsregulation in Verbindung gebracht. Tirzepatid ist eines der wichtigsten Werkzeuge, um die tatsächliche Rolle von GIP im Fettgewebe, im Gehirn und in der Bauchspeicheldrüse zu klären."
            ],
            list: [
              "Typ-2-Diabetes und Insulinsekretion",
              "Adipositas, Appetitsignale und Energieaufnahme",
              "Fetteinlagerung in der Leber",
              "Herzinsuffizienz, Schlafapnoe und Nierenforschung",
              "Biologie des Fettgewebes und Lipidstoffwechsel"
            ]
          },
          {
            h: "Handhabung und Lagerung im Labor",
            p: [
              "Tirzepatid wird meist als weißes lyophilisiertes Pulver geliefert. Für die Langzeitlagerung bewahren Sie das verschlossene Fläschchen bei etwa -20 °C auf, für kürzere Zeiträume im Kühlschrank bei 2–8 °C, stets vor Licht und Feuchtigkeit geschützt. Lassen Sie ein kaltes Fläschchen vor dem Öffnen auf Raumtemperatur kommen, damit sich kein Kondenswasser auf dem Pulver bildet.",
              "Rekonstituieren Sie mit einem sterilen Lösungsmittel unter sauberen Bedingungen und lösen Sie das Pulver durch sanftes Schwenken statt durch Schütteln, da lipidierte Peptide bei starker Bewegung aggregieren können. Bewahren Sie die Lösung gekühlt auf, teilen Sie sie bei längerer Verwendung in Aliquots und vermeiden Sie wiederholtes Einfrieren und Auftauen. Auch vorgefüllte Pens gehören in den Kühlschrank und sollten lichtgeschützt gelagert werden."
            ]
          }
        ],
        faq: [
          ["Ist Tirzepatid ein GLP-1-Agonist?", "Ja, aber nicht ausschließlich. Tirzepatid aktiviert sowohl den GLP-1- als auch den GIP-Rezeptor und wird deshalb als dualer Agonist eingestuft, nicht als reiner GLP-1-Rezeptoragonist."],
          ["Was bedeutet unausgewogener Agonist bei Tirzepatid?", "Das Molekül aktiviert seine beiden Zielrezeptoren nicht gleich stark. Tirzepatid zeigt eine vergleichsweise stärkere Aktivität am GIP-Rezeptor als am GLP-1-Rezeptor."],
          ["Worin unterscheidet sich Tirzepatid von Semaglutid?", "Semaglutid wirkt nur am GLP-1-Rezeptor, während Tirzepatid zusätzlich den GIP-Rezeptor aktiviert. Damit eignen sich beide für Studien, die den Beitrag der einzelnen Inkretinwege voneinander trennen wollen."],
          ["Wie sollte Tirzepatid für die Forschung gelagert werden?", "Bewahren Sie das lyophilisierte Pulver verschlossen, gefroren oder gekühlt und lichtgeschützt auf, rekonstituierte Lösungen kühl und ohne erneutes Einfrieren. Tirzepatid ist als lyophilisiertes Fläschchen oder als vorgefüllter Pen für die Forschung erhältlich."]
        ]
      },
      es: {
        title: "Tirzepatida: guía de investigación, estructura y mecanismo",
        description: "La tirzepatida explicada para investigadores: estructura basada en el GIP, doble agonismo GIP/GLP-1, líneas de estudio y conservación en el laboratorio.",
        h1: "Guía de investigación sobre la tirzepatida: estructura, doble agonismo y líneas de estudio",
        intro: "La tirzepatida es un péptido sintético que activa dos receptores de incretinas, GIP y GLP-1, desde una sola molécula. Se construye sobre una secuencia derivada del GIP y lleva una cadena de ácido graso que le da una vida media prolongada. En esta guía verás cómo está hecha la molécula, cómo actúa sobre cada receptor, en qué áreas se investiga y cómo se manipula en el laboratorio.",
        sections: [
          {
            h: "Por qué partir del GIP fue una apuesta atrevida",
            p: [
              "Durante años, el GIP fue la incretina olvidada. Los primeros trabajos mostraron que su efecto sobre la secreción de insulina se atenúa en la diabetes tipo 2, así que casi toda la atención se dirigió al GLP-1. La tirzepatida dio la vuelta a ese razonamiento: tomó la secuencia del GIP como punto de partida y la modificó para que activara también el receptor del GLP-1.",
              "Por eso a veces se la llama twincretina: una sola cadena peptídica que transporta dos señales hormonales. Al estimular ambos receptores con la misma molécula y al mismo tiempo, los investigadores pueden estudiar la señalización incretínica combinada sin tener que equilibrar dos compuestos por separado."
            ]
          },
          {
            h: "Cómo está construida la molécula",
            p: [
              "La tirzepatida es un péptido lineal de 39 aminoácidos. Su secuencia procede en gran parte del GIP nativo, con sustituciones que añaden actividad sobre el receptor del GLP-1 y la protegen de una degradación rápida. Varias de sus piezas son aminoácidos no naturales que no aparecen en las proteínas de los seres vivos.",
              "La literatura farmacológica describe con claridad sus principales rasgos de diseño:"
            ],
            list: [
              "Residuos de ácido aminoisobutírico (Aib) que la protegen de la enzima DPP-4",
              "Un diácido graso C20 unido mediante un espaciador a la cadena lateral de una lisina",
              "Fuerte unión a la albúmina sérica, que frena su eliminación y alarga la vida media a varios días",
              "Un extremo C-terminal amidado, habitual en las hormonas peptídicas estabilizadas"
            ]
          },
          {
            h: "Cómo actúa sobre los dos receptores",
            p: [
              "Los receptores del GIP y del GLP-1 pertenecen a la clase B de receptores acoplados a proteínas G, así que comparten una arquitectura parecida. Aun así, la tirzepatida no los activa por igual. Se la describe como un agonista desequilibrado: su actividad se inclina hacia el receptor del GIP, donde se acerca más al GIP nativo de lo que se acerca al GLP-1 nativo en el receptor del GLP-1.",
              "En el receptor del GLP-1 muestra además una señalización sesgada: favorece la vía del AMPc frente al reclutamiento de beta-arrestina. Un menor reclutamiento de beta-arrestina se asocia a una menor internalización del receptor, y todavía se investiga cuánto aporta este sesgo al perfil global de la molécula."
            ]
          },
          {
            h: "En qué áreas se investiga",
            p: [
              "Hoy la tirzepatida es uno de los péptidos metabólicos más estudiados. Su campo de investigación va mucho más allá del control de la glucosa y abarca varios sistemas del organismo.",
              "También ha reavivado un enigma científico conocido como la paradoja del GIP: en modelos preclínicos, tanto activar como bloquear el receptor del GIP se han relacionado con cambios en la regulación del peso corporal. La tirzepatida se ha convertido en una herramienta clave para entender qué hace realmente la señal del GIP en el tejido adiposo, el cerebro y el páncreas."
            ],
            list: [
              "Diabetes tipo 2 y secreción de insulina",
              "Obesidad, señales del apetito e ingesta energética",
              "Acumulación de grasa en el hígado",
              "Insuficiencia cardiaca, apnea del sueño e investigación renal",
              "Biología del tejido adiposo y manejo de los lípidos"
            ]
          },
          {
            h: "Manipulación y conservación en el laboratorio",
            p: [
              "La tirzepatida suele presentarse como polvo blanco liofilizado. Para guardarla a largo plazo, mantén el vial cerrado congelado a unos -20 °C, o en la nevera a 2–8 °C durante periodos más cortos, siempre protegido de la luz y la humedad. Deja que el vial frío alcance la temperatura ambiente antes de abrirlo para que no se forme condensación sobre el polvo.",
              "Reconstituye con un diluyente estéril en condiciones limpias y disuelve girando el vial con suavidad, sin agitarlo, porque los péptidos lipidados pueden agregarse con el movimiento brusco. Guarda la solución en la nevera, divídela en alícuotas si se va a usar durante un tiempo y evita los ciclos repetidos de congelación y descongelación. Las plumas precargadas también se conservan en la nevera y protegidas de la luz."
            ]
          }
        ],
        faq: [
          ["¿La tirzepatida es un agonista del GLP-1?", "Sí, pero no solo eso. Activa tanto el receptor del GLP-1 como el del GIP, por lo que se clasifica como doble agonista y no como agonista puro del receptor del GLP-1."],
          ["¿Qué significa que sea un agonista desequilibrado?", "Significa que la molécula no activa sus dos dianas con la misma intensidad. La tirzepatida muestra una actividad relativamente mayor sobre el receptor del GIP que sobre el del GLP-1."],
          ["¿En qué se diferencia la tirzepatida de la semaglutida?", "La semaglutida actúa solo sobre el receptor del GLP-1, mientras que la tirzepatida añade actividad sobre el receptor del GIP. Por eso ambas resultan útiles en estudios que buscan separar la contribución de cada vía incretínica."],
          ["¿Cómo se conserva la tirzepatida para investigación?", "Guarda el polvo liofilizado bien cerrado, congelado o refrigerado y lejos de la luz, y la solución reconstituida en frío sin volver a congelarla. La tirzepatida está disponible en vial liofilizado o en pluma precargada para investigación."]
        ]
      },
      it: {
        title: "Tirzepatide: guida alla ricerca, struttura e meccanismo",
        description: "La tirzepatide spiegata ai ricercatori: struttura derivata dal GIP, duplice agonismo GIP/GLP-1, principali ambiti di ricerca e conservazione in laboratorio.",
        h1: "Guida alla ricerca sulla tirzepatide: struttura, duplice agonismo e ambiti di studio",
        intro: "La tirzepatide è un peptide di sintesi che attiva due recettori delle incretine, GIP e GLP-1, con un’unica molecola. È costruita su una sequenza derivata dal GIP e porta una catena di acido grasso che le conferisce un’emivita prolungata. Questa guida spiega com’è fatta la molecola, come agisce su ciascun recettore, in quali ambiti viene studiata e come si gestisce in laboratorio.",
        sections: [
          {
            h: "Perché partire dal GIP è stata una scelta coraggiosa",
            p: [
              "Per anni il GIP è stato l’incretina trascurata. I primi studi avevano mostrato che il suo effetto sulla secrezione di insulina si attenua nel diabete di tipo 2, così l’attenzione si era spostata quasi del tutto sul GLP-1. La tirzepatide ha ribaltato questa logica: è partita dalla sequenza del GIP e l’ha modificata perché attivasse anche il recettore del GLP-1.",
              "Per questo viene talvolta chiamata twincretina: una sola catena peptidica che porta due segnali ormonali. Poiché entrambi i recettori vengono stimolati dalla stessa molecola nello stesso momento, i ricercatori possono studiare la segnalazione incretinica combinata senza dover bilanciare due composti separati."
            ]
          },
          {
            h: "Com’è fatta la molecola",
            p: [
              "La tirzepatide è un peptide lineare di 39 amminoacidi. La sua sequenza deriva in gran parte dal GIP nativo, con sostituzioni che aggiungono l’attività sul recettore del GLP-1 e la proteggono da una degradazione rapida. Diversi suoi elementi sono amminoacidi non naturali, assenti nelle proteine degli organismi viventi.",
              "La letteratura farmacologica ne descrive chiaramente le principali caratteristiche di progettazione:"
            ],
            list: [
              "Residui di acido amminoisobutirrico (Aib) che la proteggono dall’enzima DPP-4",
              "Un diacido grasso C20 legato tramite un linker alla catena laterale di una lisina",
              "Un forte legame con l’albumina sierica, che rallenta l’eliminazione e porta l’emivita a diversi giorni",
              "Un’estremità C-terminale amidata, tipica degli ormoni peptidici stabilizzati"
            ]
          },
          {
            h: "Come agisce sui due recettori",
            p: [
              "I recettori del GIP e del GLP-1 appartengono entrambi alla classe B dei recettori accoppiati a proteine G e hanno quindi un’architettura simile. La tirzepatide però non li attiva allo stesso modo. Viene descritta come agonista sbilanciato: la sua attività pende verso il recettore del GIP, dove si avvicina al GIP nativo più di quanto si avvicini al GLP-1 nativo sul recettore del GLP-1.",
              "Sul recettore del GLP-1 mostra inoltre una segnalazione distorta, detta biased agonism: privilegia la via del cAMP rispetto al reclutamento della beta-arrestina. Un minore reclutamento di beta-arrestina si associa a una minore internalizzazione del recettore, e quanto questo contribuisca al profilo complessivo della molecola è ancora oggetto di studio."
            ]
          },
          {
            h: "In quali ambiti viene studiata",
            p: [
              "Oggi la tirzepatide è tra i peptidi metabolici più studiati. Il suo campo di ricerca va ben oltre il controllo della glicemia e coinvolge diversi sistemi d’organo.",
              "Ha anche riacceso un enigma scientifico noto come paradosso del GIP: nei modelli preclinici sia l’attivazione sia il blocco del recettore del GIP sono stati associati a cambiamenti nella regolazione del peso corporeo. La tirzepatide è diventata uno strumento centrale per capire che cosa faccia davvero il segnale del GIP nel tessuto adiposo, nel cervello e nel pancreas."
            ],
            list: [
              "Diabete di tipo 2 e secrezione di insulina",
              "Obesità, segnali dell’appetito e apporto energetico",
              "Accumulo di grasso nel fegato",
              "Scompenso cardiaco, apnea notturna e ricerca renale",
              "Biologia del tessuto adiposo e gestione dei lipidi"
            ]
          },
          {
            h: "Gestione e conservazione in laboratorio",
            p: [
              "La tirzepatide si presenta di solito come polvere bianca liofilizzata. Per la conservazione a lungo termine tieni il flaconcino sigillato congelato a circa -20 °C, oppure in frigorifero a 2–8 °C per periodi più brevi, sempre al riparo da luce e umidità. Lascia che un flaconcino freddo raggiunga la temperatura ambiente prima di aprirlo, così da evitare condensa sulla polvere.",
              "Ricostituisci con un diluente sterile in condizioni pulite e sciogli la polvere ruotando delicatamente il flaconcino invece di agitarlo, perché i peptidi lipidati possono aggregarsi con movimenti bruschi. Conserva la soluzione in frigorifero, suddividila in aliquote se verrà usata nel tempo ed evita cicli ripetuti di congelamento e scongelamento. Anche le penne preriempite vanno tenute in frigorifero e al riparo dalla luce."
            ]
          }
        ],
        faq: [
          ["La tirzepatide è un agonista del GLP-1?", "Sì, ma non soltanto. Attiva sia il recettore del GLP-1 sia quello del GIP, per questo è classificata come duplice agonista e non come agonista puro del recettore del GLP-1."],
          ["Che cosa significa agonista sbilanciato?", "Significa che la molecola non attiva i suoi due bersagli con la stessa intensità. La tirzepatide mostra un’attività relativamente più forte sul recettore del GIP che su quello del GLP-1."],
          ["Che differenza c’è tra tirzepatide e semaglutide?", "La semaglutide agisce solo sul recettore del GLP-1, mentre la tirzepatide aggiunge l’attività sul recettore del GIP. Entrambe sono quindi utili negli studi che vogliono separare il contributo di ciascuna via incretinica."],
          ["Come si conserva la tirzepatide per la ricerca?", "Tieni la polvere liofilizzata ben chiusa, congelata o refrigerata e al riparo dalla luce, e la soluzione ricostituita al freddo senza ricongelarla. La tirzepatide è disponibile in flaconcino liofilizzato o in penna preriempita per la ricerca."]
        ]
      }
    }
  },
  {
    slug: "retatrutide-research-guide",
    locales: ["en", "th", "fr", "de", "es", "it"],
    products: ["retatrutide-20mg", "tirzepatide"],
    content: {
      en: {
        title: "Retatrutide Research Guide: The Triple Agonist Explained",
        description: "What is retatrutide? A research guide to its structure, triple GLP-1/GIP/glucagon receptor agonism, the role of glucagon and how to handle it in the lab.",
        h1: "Retatrutide Research Guide: Structure, Triple Agonism and the Glucagon Question",
        intro: "Retatrutide is a synthetic peptide studied as a triple agonist of the GIP, GLP-1 and glucagon receptors, all activated by one molecule. Its glucagon component is what sets it apart and why it attracts so much attention in metabolic research. This guide explains how retatrutide is built, why glucagon signalling matters, which research areas it is investigated in and how to handle it in the lab.",
        sections: [
          {
            h: "What retatrutide is",
            p: [
              "Retatrutide, known in the literature by its development code LY3437943, is a single peptide chain designed to engage three receptors from the same hormone superfamily. Like other modern incretin-based compounds, its sequence is derived from a GIP-based backbone and includes non-standard amino acids that protect it from rapid enzymatic breakdown.",
              "A fatty diacid side chain lets the molecule bind to albumin in the blood, which slows clearance and gives it a long half-life. The result is one stable molecule that can activate three distinct signalling pathways, which makes it a powerful tool for studying how those pathways work together."
            ]
          },
          {
            h: "The road to a triple agonist",
            p: [
              "The idea of mixing glucagon activity into an incretin molecule did not come from nowhere. The gut naturally produces oxyntomodulin, a peptide that activates both the GLP-1 and glucagon receptors. Research on oxyntomodulin suggested that combining these two signals could act on energy balance in ways that neither does alone.",
              "That insight led first to GLP-1/glucagon co-agonists and GLP-1/GIP co-agonists, and then to molecules that bring all three receptors together. Retatrutide is one of the most advanced compounds in this triple agonist class and is now one of the most closely followed peptides in metabolic research."
            ]
          },
          {
            h: "Why the glucagon receptor interests researchers",
            p: [
              "Glucagon is best known for raising blood glucose, but that is only part of its biology. Its receptor is highly expressed in the liver, where it also controls how fat and amino acids are processed. These wider effects are what make the glucagon arm so interesting in a metabolic peptide.",
              "Researchers focus on several glucagon-driven processes that a dual GIP/GLP-1 agonist does not target directly:"
            ],
            list: [
              "Energy expenditure, studied as a complement to the intake-side effects of GLP-1",
              "Fatty acid oxidation in the liver and reduced fat build-up in liver cells",
              "Amino acid uptake and breakdown in the liver, part of the liver and alpha-cell feedback loop",
              "Release of FGF21, a liver-derived hormone involved in metabolic signalling",
              "Ketone body production during fasting states"
            ]
          },
          {
            h: "Balancing three signals in one molecule",
            p: [
              "Activating the glucagon receptor on its own would push blood glucose upwards. The working hypothesis behind retatrutide is that its GLP-1 and GIP activity balance that effect, while the glucagon component adds its liver and energy-expenditure biology on top.",
              "The published pharmacology describes a deliberately tuned profile rather than equal activity at all three receptors, with relatively strong activity at the GIP receptor. Studying how this balance shapes the overall response is one of the main scientific questions surrounding the molecule, and it explains why retatrutide is so often studied alongside dual and single agonists."
            ]
          },
          {
            h: "Research areas",
            p: [
              "Because it touches three pathways, retatrutide is investigated across a broad range of metabolic topics. The liver features prominently, since that is where glucagon receptor signalling is concentrated."
            ],
            list: [
              "Obesity and energy balance",
              "Type 2 diabetes and glycaemic regulation",
              "Liver fat and metabolic dysfunction-associated liver disease",
              "Kidney function and cardiometabolic research",
              "Hepatic lipid and amino acid metabolism"
            ]
          },
          {
            h: "Handling retatrutide in the lab",
            p: [
              "Retatrutide is supplied as a lyophilized powder that is best stored sealed, frozen at around -20 °C for the long term or refrigerated at 2–8 °C for shorter periods. Protect it from light and moisture, and let the vial reach room temperature before opening to prevent condensation.",
              "Use a sterile diluent and clean technique for reconstitution, and swirl gently rather than shaking to limit aggregation of the lipidated peptide. Keep the solution refrigerated, split it into aliquots when needed and avoid repeated freezing and thawing. Pre-filled pens should be refrigerated and kept away from light as well."
            ]
          }
        ],
        faq: [
          ["What is retatrutide?", "Retatrutide is a synthetic peptide studied as a triple agonist of the GIP, GLP-1 and glucagon receptors. It is one molecule, not a blend of three, and is investigated mainly in metabolic research."],
          ["Why does retatrutide activate the glucagon receptor?", "Glucagon receptor signalling is studied for its effects on energy expenditure, liver fat oxidation and amino acid metabolism. Adding it to GIP and GLP-1 activity lets researchers explore those liver and energy pathways together."],
          ["Is retatrutide related to oxyntomodulin?", "Not structurally, but conceptually. Oxyntomodulin is a natural gut peptide that activates GLP-1 and glucagon receptors, and research on it helped inspire the multi-receptor approach that retatrutide takes further."],
          ["How should retatrutide be stored?", "Keep the lyophilized powder sealed, frozen or refrigerated and away from light, and store reconstituted solution in the refrigerator without refreezing. Retatrutide is available as a lyophilized vial or a pre-filled pen for research."]
        ]
      },
      th: {
        title: "Retatrutide คืออะไร: คู่มืองานวิจัยตัวกระตุ้นสามตัวรับ",
        description: "Retatrutide คืออะไร? คู่มืองานวิจัยเรื่องโครงสร้าง การกระตุ้นตัวรับสามชนิด GLP-1/GIP/glucagon บทบาทของ glucagon และการจัดการในห้องปฏิบัติการอย่างถูกต้อง",
        h1: "คู่มือวิจัย Retatrutide: โครงสร้าง การกระตุ้นสามตัวรับ และบทบาทของ glucagon",
        intro: "Retatrutide เป็นเปปไทด์สังเคราะห์ที่ถูกศึกษาในฐานะตัวกระตุ้นตัวรับสามชนิด ได้แก่ GIP, GLP-1 และ glucagon โดยใช้โมเลกุลเดียว ส่วนที่กระตุ้นตัวรับ glucagon คือจุดที่ทำให้สารนี้แตกต่าง และเป็นเหตุผลที่ได้รับความสนใจอย่างมากในงานวิจัยด้านเมแทบอลิซึม บทความนี้อธิบายโครงสร้างของ Retatrutide ความสำคัญของสัญญาณ glucagon หัวข้อวิจัยที่เกี่ยวข้อง และการจัดการในห้องแล็บ",
        sections: [
          {
            h: "Retatrutide คืออะไร",
            p: [
              "Retatrutide หรือที่ในเอกสารวิชาการรู้จักในรหัสพัฒนา LY3437943 เป็นเปปไทด์สายเดียวที่ออกแบบให้จับกับตัวรับสามชนิดจากตระกูลฮอร์โมนเดียวกัน เช่นเดียวกับสารกลุ่ม incretin รุ่นใหม่อื่น ๆ ลำดับกรดอะมิโนของสารนี้พัฒนามาจากโครงสร้างพื้นฐานของ GIP และมีกรดอะมิโนพิเศษที่ช่วยป้องกันการถูกเอนไซม์ย่อยสลายอย่างรวดเร็ว",
              "สายข้างที่เป็นกรดไขมันช่วยให้โมเลกุลจับกับ albumin ในเลือด ทำให้ถูกกำจัดช้าลงและมีครึ่งชีวิตยาว ผลลัพธ์คือโมเลกุลที่เสถียรเพียงหนึ่งเดียวที่กระตุ้นเส้นทางสัญญาณได้ถึงสามเส้นทาง จึงเป็นเครื่องมือที่ทรงพลังในการศึกษาว่าเส้นทางเหล่านี้ทำงานร่วมกันอย่างไร"
            ]
          },
          {
            h: "เส้นทางสู่ตัวกระตุ้นสามตัวรับ",
            p: [
              "แนวคิดการเพิ่มฤทธิ์ glucagon เข้าไปในโมเลกุล incretin ไม่ได้เกิดขึ้นลอย ๆ ลำไส้ของเราผลิตเปปไทด์ชื่อ oxyntomodulin ซึ่งกระตุ้นได้ทั้งตัวรับ GLP-1 และ glucagon งานวิจัยเกี่ยวกับ oxyntomodulin ชี้ว่าการรวมสองสัญญาณนี้อาจส่งผลต่อสมดุลพลังงานในแบบที่สัญญาณใดสัญญาณหนึ่งทำไม่ได้",
              "แนวคิดนี้นำไปสู่ตัวกระตุ้นร่วม GLP-1/glucagon และ GLP-1/GIP ก่อน แล้วจึงพัฒนาเป็นโมเลกุลที่รวมตัวรับทั้งสามไว้ด้วยกัน Retatrutide เป็นหนึ่งในสารที่ก้าวหน้าที่สุดในกลุ่มตัวกระตุ้นสามตัวรับ และเป็นเปปไทด์ที่ถูกจับตามองมากที่สุดตัวหนึ่งในงานวิจัยเมแทบอลิซึมปัจจุบัน"
            ]
          },
          {
            h: "ทำไมนักวิจัยจึงสนใจตัวรับ glucagon",
            p: [
              "คนส่วนใหญ่รู้จัก glucagon ในฐานะฮอร์โมนที่เพิ่มระดับน้ำตาลในเลือด แต่นั่นเป็นเพียงส่วนหนึ่งของบทบาท ตัวรับ glucagon พบมากในตับ ซึ่งมีหน้าที่ควบคุมการเผาผลาญไขมันและกรดอะมิโนด้วย ผลในวงกว้างเหล่านี้คือสิ่งที่ทำให้ส่วน glucagon น่าสนใจมากในเปปไทด์ด้านเมแทบอลิซึม",
              "นักวิจัยให้ความสนใจกับกระบวนการที่ขับเคลื่อนโดย glucagon หลายด้าน ซึ่งตัวกระตุ้นคู่ GIP/GLP-1 ไม่ได้มุ่งเป้าโดยตรง ได้แก่"
            ],
            list: [
              "การใช้พลังงานของร่างกาย ซึ่งศึกษาควบคู่กับผลของ GLP-1 ด้านการรับพลังงาน",
              "การเผาผลาญกรดไขมันในตับและการลดการสะสมไขมันในเซลล์ตับ",
              "การดูดซึมและสลายกรดอะมิโนในตับ ซึ่งเป็นส่วนหนึ่งของวงจรป้อนกลับระหว่างตับกับ alpha cell",
              "การหลั่ง FGF21 ฮอร์โมนจากตับที่เกี่ยวข้องกับสัญญาณเมแทบอลิซึม",
              "การสร้าง ketone body ในภาวะอดอาหาร"
            ]
          },
          {
            h: "การรักษาสมดุลสามสัญญาณในโมเลกุลเดียว",
            p: [
              "หากกระตุ้นตัวรับ glucagon เพียงอย่างเดียว ระดับน้ำตาลในเลือดจะมีแนวโน้มสูงขึ้น สมมติฐานเบื้องหลัง Retatrutide คือฤทธิ์ต่อ GLP-1 และ GIP จะช่วยถ่วงดุลผลนี้ ขณะที่ส่วน glucagon เพิ่มกลไกด้านตับและการใช้พลังงานเข้ามา",
              "ข้อมูลทางเภสัชวิทยาที่ตีพิมพ์อธิบายว่าโมเลกุลนี้ถูกปรับจูนอย่างตั้งใจ ไม่ได้มีฤทธิ์เท่ากันทั้งสามตัวรับ โดยมีฤทธิ์ต่อตัวรับ GIP ค่อนข้างแรง การศึกษาว่าสมดุลนี้กำหนดผลโดยรวมอย่างไรเป็นคำถามหลักทางวิทยาศาสตร์ และเป็นเหตุผลที่ Retatrutide มักถูกศึกษาเทียบกับตัวกระตุ้นแบบคู่และแบบเดี่ยว"
            ]
          },
          {
            h: "หัวข้อวิจัยที่เกี่ยวข้อง",
            p: [
              "เนื่องจากเกี่ยวข้องกับสามเส้นทางสัญญาณ Retatrutide จึงถูกศึกษาในหัวข้อเมแทบอลิซึมที่หลากหลาย โดยตับเป็นอวัยวะที่โดดเด่นเป็นพิเศษ เพราะเป็นแหล่งที่สัญญาณจากตัวรับ glucagon ทำงานมากที่สุด"
            ],
            list: [
              "โรคอ้วนและสมดุลพลังงาน",
              "เบาหวานชนิดที่ 2 และการควบคุมระดับน้ำตาล",
              "ไขมันในตับและโรคตับที่เกี่ยวข้องกับความผิดปกติทางเมแทบอลิซึม",
              "การทำงานของไตและงานวิจัยด้านหัวใจและเมแทบอลิซึม",
              "เมแทบอลิซึมของไขมันและกรดอะมิโนในตับ"
            ]
          },
          {
            h: "การจัดการ Retatrutide ในห้องแล็บ",
            p: [
              "Retatrutide มาในรูปผงแห้งแบบ lyophilized ควรเก็บในขวดปิดสนิท แช่แข็งที่ประมาณ -20 °C สำหรับระยะยาว หรือแช่เย็น 2–8 °C สำหรับระยะสั้น ป้องกันแสงและความชื้น และรอให้ขวดมีอุณหภูมิเท่าห้องก่อนเปิดเพื่อป้องกันการเกิดหยดน้ำ",
              "ใช้สารละลายปลอดเชื้อและเทคนิคที่สะอาดในการละลายผง หมุนขวดเบา ๆ แทนการเขย่าเพื่อลดการจับตัวของเปปไทด์ที่มีสายกรดไขมัน เก็บสารละลายในตู้เย็น แบ่งเป็นส่วนย่อยเมื่อจำเป็น และหลีกเลี่ยงการแช่แข็งสลับละลายซ้ำ ส่วนแบบปากกาบรรจุพร้อมใช้ควรเก็บในตู้เย็นและห่างจากแสงเช่นกัน"
            ]
          }
        ],
        faq: [
          ["Retatrutide คืออะไร?", "Retatrutide เป็นเปปไทด์สังเคราะห์ที่ถูกศึกษาในฐานะตัวกระตุ้นตัวรับ GIP, GLP-1 และ glucagon เป็นโมเลกุลเดียว ไม่ใช่การผสมสารสามตัว และถูกศึกษาเป็นหลักในงานวิจัยด้านเมแทบอลิซึม"],
          ["ทำไม Retatrutide จึงกระตุ้นตัวรับ glucagon?", "สัญญาณจากตัวรับ glucagon ถูกศึกษาในแง่การใช้พลังงาน การเผาผลาญไขมันในตับ และเมแทบอลิซึมของกรดอะมิโน การรวมเข้ากับฤทธิ์ GIP และ GLP-1 ทำให้นักวิจัยศึกษาเส้นทางด้านตับและพลังงานเหล่านี้ไปพร้อมกันได้"],
          ["Retatrutide เกี่ยวข้องกับ oxyntomodulin หรือไม่?", "ไม่ได้เกี่ยวข้องด้านโครงสร้าง แต่เกี่ยวข้องในเชิงแนวคิด oxyntomodulin เป็นเปปไทด์จากลำไส้ที่กระตุ้นตัวรับ GLP-1 และ glucagon งานวิจัยเกี่ยวกับสารนี้เป็นแรงบันดาลใจให้แนวทางกระตุ้นหลายตัวรับ ซึ่ง Retatrutide พัฒนาต่อยอดไปอีกขั้น"],
          ["ควรเก็บ Retatrutide อย่างไร?", "เก็บผงแห้งในขวดปิดสนิท แช่แข็งหรือแช่เย็น และห่างจากแสง ส่วนสารละลายที่เตรียมแล้วให้เก็บในตู้เย็นโดยไม่แช่แข็งซ้ำ Retatrutide มีให้เลือกทั้งแบบขวดผงแห้งและแบบปากกาบรรจุพร้อมใช้ (pre-filled pen) สำหรับงานวิจัย"]
        ]
      },
      fr: {
        title: "Rétatrutide : guide de recherche sur le triple agoniste",
        description: "Qu’est-ce que le rétatrutide ? Structure, triple agonisme GLP-1/GIP/glucagon, rôle du glucagon, axes de recherche et manipulation au laboratoire.",
        h1: "Guide de recherche sur le rétatrutide : structure, triple agonisme et rôle du glucagon",
        intro: "Le rétatrutide est un peptide de synthèse étudié comme triple agoniste des récepteurs du GIP, du GLP-1 et du glucagon, tous activés par une seule molécule. C’est sa composante glucagon qui le distingue et qui explique l’intérêt qu’il suscite en recherche métabolique. Ce guide présente sa construction, l’importance de la signalisation du glucagon, ses axes de recherche et sa manipulation au laboratoire.",
        sections: [
          {
            h: "Ce qu’est le rétatrutide",
            p: [
              "Le rétatrutide, connu dans la littérature sous son code de développement LY3437943, est une chaîne peptidique unique conçue pour solliciter trois récepteurs d’une même superfamille hormonale. Comme d’autres composés incrétines récents, sa séquence dérive d’un squelette inspiré du GIP et intègre des acides aminés non naturels qui la protègent d’une dégradation enzymatique rapide.",
              "Une chaîne latérale de diacide gras lui permet de se lier à l’albumine sanguine, ce qui ralentit son élimination et lui confère une longue demi-vie. On obtient ainsi une molécule stable capable d’activer trois voies de signalisation distinctes, un outil précieux pour étudier la façon dont ces voies coopèrent."
            ]
          },
          {
            h: "Le chemin vers un triple agoniste",
            p: [
              "Associer une activité glucagon à une molécule incrétine n’est pas une idée sortie de nulle part. L’intestin produit naturellement l’oxyntomoduline, un peptide qui active à la fois les récepteurs du GLP-1 et du glucagon. Les travaux sur l’oxyntomoduline ont suggéré que la combinaison de ces deux signaux pouvait agir sur l’équilibre énergétique d’une manière qu’aucun des deux n’atteint seul.",
              "Cette piste a d’abord donné naissance aux co-agonistes GLP-1/glucagon et GLP-1/GIP, puis à des molécules réunissant les trois récepteurs. Le rétatrutide figure parmi les composés les plus avancés de cette classe de triples agonistes et compte aujourd’hui parmi les peptides les plus suivis de la recherche métabolique."
            ]
          },
          {
            h: "Pourquoi le récepteur du glucagon intéresse les chercheurs",
            p: [
              "Le glucagon est surtout connu pour faire monter la glycémie, mais ce n’est qu’une partie de sa biologie. Son récepteur est très présent dans le foie, où il pilote aussi le devenir des graisses et des acides aminés. Ce sont ces effets plus larges qui rendent la composante glucagon si intéressante dans un peptide métabolique.",
              "Les chercheurs s’intéressent à plusieurs processus liés au glucagon qu’un double agoniste GIP/GLP-1 ne cible pas directement :"
            ],
            list: [
              "La dépense énergétique, étudiée en complément des effets du GLP-1 sur les apports",
              "L’oxydation des acides gras dans le foie et la réduction des graisses hépatocytaires",
              "La captation et le catabolisme hépatique des acides aminés, au cœur de la boucle foie-cellules alpha",
              "La libération du FGF21, une hormone hépatique impliquée dans la signalisation métabolique",
              "La production de corps cétoniques en situation de jeûne"
            ]
          },
          {
            h: "Équilibrer trois signaux dans une seule molécule",
            p: [
              "Activé seul, le récepteur du glucagon tend à faire monter la glycémie. L’hypothèse de travail derrière le rétatrutide est que son activité GLP-1 et GIP compense cet effet, tandis que la composante glucagon ajoute sa biologie hépatique et énergétique.",
              "La pharmacologie publiée décrit un profil volontairement ajusté plutôt qu’une activité égale sur les trois récepteurs, avec une activité relativement marquée sur le récepteur du GIP. Comprendre comment cet équilibre façonne la réponse globale est l’une des grandes questions scientifiques autour de la molécule, ce qui explique qu’on l’étudie si souvent aux côtés d’agonistes simples et doubles."
            ]
          },
          {
            h: "Axes de recherche",
            p: [
              "Parce qu’il touche trois voies, le rétatrutide est étudié sur un large éventail de sujets métaboliques. Le foie y occupe une place de choix, puisque c’est là que se concentre la signalisation du récepteur du glucagon."
            ],
            list: [
              "Obésité et équilibre énergétique",
              "Diabète de type 2 et régulation glycémique",
              "Graisse hépatique et maladie du foie liée à un dysfonctionnement métabolique",
              "Fonction rénale et recherche cardiométabolique",
              "Métabolisme hépatique des lipides et des acides aminés"
            ]
          },
          {
            h: "Manipuler le rétatrutide au laboratoire",
            p: [
              "Le rétatrutide se présente sous forme de poudre lyophilisée, à conserver dans un flacon scellé, congelé vers -20 °C pour le long terme ou réfrigéré entre 2 et 8 °C pour de courtes périodes. Protégez-le de la lumière et de l’humidité, et laissez le flacon revenir à température ambiante avant ouverture pour éviter la condensation.",
              "Reconstituez-le avec un diluant stérile et une technique propre, en faisant tourner doucement le flacon plutôt qu’en l’agitant pour limiter l’agrégation du peptide lipidé. Gardez la solution au réfrigérateur, répartissez-la en aliquotes si nécessaire et évitez les congélations et décongélations successives. Les stylos préremplis se conservent eux aussi au réfrigérateur, à l’abri de la lumière."
            ]
          }
        ],
        faq: [
          ["Qu’est-ce que le rétatrutide ?", "Le rétatrutide est un peptide de synthèse étudié comme triple agoniste des récepteurs du GIP, du GLP-1 et du glucagon. Il s’agit d’une seule molécule, pas d’un mélange de trois, étudiée principalement en recherche métabolique."],
          ["Pourquoi le rétatrutide active-t-il le récepteur du glucagon ?", "La signalisation du récepteur du glucagon est étudiée pour ses effets sur la dépense énergétique, l’oxydation des graisses hépatiques et le métabolisme des acides aminés. L’associer aux activités GIP et GLP-1 permet d’explorer ensemble ces voies hépatiques et énergétiques."],
          ["Le rétatrutide a-t-il un lien avec l’oxyntomoduline ?", "Pas sur le plan structural, mais sur le plan conceptuel. L’oxyntomoduline est un peptide intestinal naturel qui active les récepteurs du GLP-1 et du glucagon, et les recherches à son sujet ont inspiré l’approche multirécepteurs que le rétatrutide pousse plus loin."],
          ["Comment conserver le rétatrutide ?", "Gardez la poudre lyophilisée bien fermée, congelée ou réfrigérée et à l’abri de la lumière, et la solution reconstituée au réfrigérateur sans recongélation. Le rétatrutide est disponible en flacon lyophilisé ou en stylo prérempli pour la recherche."]
        ]
      },
      de: {
        title: "Retatrutid: Forschungsleitfaden zum Dreifachagonisten",
        description: "Was ist Retatrutid? Leitfaden zu Struktur, dreifachem GLP-1/GIP/Glukagon-Agonismus, der Rolle des Glukagons, Forschungsfeldern und Handhabung im Labor.",
        h1: "Retatrutid-Forschungsleitfaden: Struktur, Dreifachagonismus und die Rolle des Glukagons",
        intro: "Retatrutid ist ein synthetisches Peptid, das als Dreifachagonist an den Rezeptoren für GIP, GLP-1 und Glukagon untersucht wird, und zwar mit einem einzigen Molekül. Gerade die Glukagonkomponente hebt es von anderen Substanzen ab und erklärt das große Interesse der Stoffwechselforschung. Dieser Leitfaden erläutert den Aufbau von Retatrutid, die Bedeutung der Glukagonsignalisierung, die wichtigsten Forschungsfelder und die Handhabung im Labor.",
        sections: [
          {
            h: "Was Retatrutid ist",
            p: [
              "Retatrutid, in der Fachliteratur auch unter dem Entwicklungscode LY3437943 bekannt, ist eine einzelne Peptidkette, die drei Rezeptoren derselben Hormonsuperfamilie ansprechen soll. Wie andere moderne Inkretinsubstanzen leitet sich seine Sequenz von einem GIP-basierten Grundgerüst ab und enthält nicht proteinogene Aminosäuren, die vor schnellem enzymatischem Abbau schützen.",
              "Eine Fettdisäure-Seitenkette ermöglicht die Bindung an Albumin im Blut, was die Elimination verlangsamt und eine lange Halbwertszeit ergibt. So entsteht ein stabiles Molekül, das drei unterschiedliche Signalwege aktivieren kann, ein wertvolles Werkzeug, um deren Zusammenspiel zu untersuchen."
            ]
          },
          {
            h: "Der Weg zum Dreifachagonisten",
            p: [
              "Die Idee, Glukagonaktivität in ein Inkretinmolekül einzubauen, kam nicht aus dem Nichts. Der Darm bildet von Natur aus Oxyntomodulin, ein Peptid, das sowohl den GLP-1- als auch den Glukagonrezeptor aktiviert. Die Forschung zu Oxyntomodulin legte nahe, dass die Kombination beider Signale die Energiebilanz auf eine Weise beeinflussen kann, die keines der beiden allein erreicht.",
              "Daraus entstanden zunächst GLP-1/Glukagon- und GLP-1/GIP-Koagonisten, später Moleküle, die alle drei Rezeptoren vereinen. Retatrutid gehört zu den am weitesten entwickelten Substanzen dieser Klasse und zählt heute zu den meistbeachteten Peptiden der Stoffwechselforschung."
            ]
          },
          {
            h: "Warum der Glukagonrezeptor Forschende interessiert",
            p: [
              "Glukagon ist vor allem dafür bekannt, den Blutzucker zu erhöhen, doch das ist nur ein Teil seiner Biologie. Sein Rezeptor ist in der Leber stark exprimiert und steuert dort auch den Umgang mit Fetten und Aminosäuren. Genau diese weiterreichenden Effekte machen den Glukagonanteil in einem metabolischen Peptid so interessant.",
              "Im Fokus stehen mehrere glukagonvermittelte Prozesse, die ein dualer GIP/GLP-1-Agonist nicht direkt adressiert:"
            ],
            list: [
              "Energieverbrauch als Ergänzung zu den Effekten von GLP-1 auf die Energieaufnahme",
              "Fettsäureoxidation in der Leber und geringere Fetteinlagerung in Leberzellen",
              "Aufnahme und Abbau von Aminosäuren in der Leber als Teil des Leber-Alphazell-Regelkreises",
              "Freisetzung von FGF21, einem Leberhormon der Stoffwechselsignalisierung",
              "Bildung von Ketonkörpern im Fastenzustand"
            ]
          },
          {
            h: "Drei Signale in einem Molekül ausbalancieren",
            p: [
              "Für sich allein würde eine Aktivierung des Glukagonrezeptors den Blutzucker eher anheben. Die Arbeitshypothese hinter Retatrutid lautet, dass die GLP-1- und GIP-Aktivität diesen Effekt ausgleicht, während die Glukagonkomponente ihre Leber- und Energieverbrauchsbiologie hinzufügt.",
              "Die veröffentlichte Pharmakologie beschreibt ein bewusst abgestimmtes Profil statt gleich starker Aktivität an allen drei Rezeptoren, mit vergleichsweise ausgeprägter Aktivität am GIP-Rezeptor. Wie diese Balance die Gesamtantwort prägt, ist eine der zentralen wissenschaftlichen Fragen rund um das Molekül. Deshalb wird Retatrutid so häufig zusammen mit Einfach- und Dualagonisten untersucht."
            ]
          },
          {
            h: "Forschungsfelder",
            p: [
              "Da Retatrutid drei Signalwege berührt, wird es in einem breiten Spektrum metabolischer Fragestellungen untersucht. Die Leber spielt dabei eine herausragende Rolle, denn dort ist die Glukagonrezeptor-Signalisierung konzentriert."
            ],
            list: [
              "Adipositas und Energiebilanz",
              "Typ-2-Diabetes und Glukoseregulation",
              "Leberfett und stoffwechselbedingte Lebererkrankung",
              "Nierenfunktion und kardiometabolische Forschung",
              "Hepatischer Lipid- und Aminosäurestoffwechsel"
            ]
          },
          {
            h: "Handhabung von Retatrutid im Labor",
            p: [
              "Retatrutid wird als lyophilisiertes Pulver geliefert. Lagern Sie das verschlossene Fläschchen langfristig bei etwa -20 °C oder für kürzere Zeit im Kühlschrank bei 2–8 °C. Schützen Sie es vor Licht und Feuchtigkeit und lassen Sie es vor dem Öffnen auf Raumtemperatur kommen, damit sich kein Kondenswasser bildet.",
              "Verwenden Sie zur Rekonstitution ein steriles Lösungsmittel und saubere Arbeitstechnik und schwenken Sie das Fläschchen sanft, statt es zu schütteln, um die Aggregation des lipidierten Peptids zu begrenzen. Bewahren Sie die Lösung gekühlt auf, teilen Sie sie bei Bedarf in Aliquots und vermeiden Sie wiederholtes Einfrieren und Auftauen. Vorgefüllte Pens gehören ebenfalls lichtgeschützt in den Kühlschrank."
            ]
          }
        ],
        faq: [
          ["Was ist Retatrutid?", "Retatrutid ist ein synthetisches Peptid, das als Dreifachagonist an den Rezeptoren für GIP, GLP-1 und Glukagon untersucht wird. Es handelt sich um ein einziges Molekül und nicht um eine Mischung aus drei Substanzen, vor allem in der Stoffwechselforschung."],
          ["Warum aktiviert Retatrutid den Glukagonrezeptor?", "Die Glukagonrezeptor-Signalisierung wird wegen ihrer Effekte auf Energieverbrauch, Fettoxidation in der Leber und Aminosäurestoffwechsel untersucht. In Kombination mit GIP- und GLP-1-Aktivität lassen sich diese Leber- und Energiewege gemeinsam erforschen."],
          ["Hat Retatrutid etwas mit Oxyntomodulin zu tun?", "Nicht strukturell, aber konzeptionell. Oxyntomodulin ist ein natürliches Darmpeptid, das GLP-1- und Glukagonrezeptoren aktiviert. Die Forschung dazu hat den Mehrfachrezeptor-Ansatz inspiriert, den Retatrutid weiterführt."],
          ["Wie sollte Retatrutid gelagert werden?", "Bewahren Sie das lyophilisierte Pulver verschlossen, gefroren oder gekühlt und lichtgeschützt auf, rekonstituierte Lösungen im Kühlschrank ohne erneutes Einfrieren. Retatrutid ist als lyophilisiertes Fläschchen oder als vorgefüllter Pen für die Forschung erhältlich."]
        ]
      },
      es: {
        title: "Retatrutida: guía de investigación del triple agonista",
        description: "¿Qué es la retatrutida? Estructura, triple agonismo GLP-1/GIP/glucagón, papel del glucagón, líneas de investigación y manipulación en el laboratorio.",
        h1: "Guía de investigación sobre la retatrutida: estructura, triple agonismo y el papel del glucagón",
        intro: "La retatrutida es un péptido sintético que se estudia como triple agonista de los receptores del GIP, el GLP-1 y el glucagón, todos activados por una sola molécula. Su componente de glucagón es lo que la distingue y lo que explica el interés que despierta en la investigación metabólica. En esta guía verás cómo está construida, por qué importa la señal del glucagón, en qué áreas se investiga y cómo se manipula en el laboratorio.",
        sections: [
          {
            h: "Qué es la retatrutida",
            p: [
              "La retatrutida, conocida en la literatura por su código de desarrollo LY3437943, es una única cadena peptídica diseñada para activar tres receptores de la misma superfamilia hormonal. Como otros compuestos incretínicos recientes, su secuencia deriva de un esqueleto basado en el GIP e incluye aminoácidos no naturales que la protegen de una degradación enzimática rápida.",
              "Una cadena lateral de diácido graso le permite unirse a la albúmina de la sangre, lo que frena su eliminación y le da una vida media larga. El resultado es una molécula estable capaz de activar tres vías de señalización distintas, una herramienta muy valiosa para estudiar cómo colaboran entre sí."
            ]
          },
          {
            h: "El camino hacia un triple agonista",
            p: [
              "La idea de añadir actividad de glucagón a una molécula incretínica no surgió de la nada. El intestino produce de forma natural oxintomodulina, un péptido que activa tanto el receptor del GLP-1 como el del glucagón. La investigación sobre la oxintomodulina sugirió que combinar ambas señales podía influir en el equilibrio energético de una forma que ninguna consigue por separado.",
              "De ahí surgieron primero los coagonistas GLP-1/glucagón y GLP-1/GIP, y después moléculas que reúnen los tres receptores. La retatrutida es uno de los compuestos más avanzados de esta clase de triples agonistas y hoy figura entre los péptidos más seguidos de la investigación metabólica."
            ]
          },
          {
            h: "Por qué el receptor del glucagón interesa a los investigadores",
            p: [
              "El glucagón es famoso por elevar la glucosa en sangre, pero eso es solo una parte de su biología. Su receptor abunda en el hígado, donde también controla qué ocurre con las grasas y los aminoácidos. Son estos efectos más amplios los que hacen tan interesante el componente de glucagón en un péptido metabólico.",
              "Los investigadores se centran en varios procesos impulsados por el glucagón a los que un doble agonista GIP/GLP-1 no apunta directamente:"
            ],
            list: [
              "El gasto energético, estudiado como complemento de los efectos del GLP-1 sobre la ingesta",
              "La oxidación de ácidos grasos en el hígado y la menor acumulación de grasa en los hepatocitos",
              "La captación y degradación hepática de aminoácidos, parte del circuito entre hígado y células alfa",
              "La liberación de FGF21, una hormona hepática implicada en la señalización metabólica",
              "La producción de cuerpos cetónicos en situaciones de ayuno"
            ]
          },
          {
            h: "Equilibrar tres señales en una sola molécula",
            p: [
              "Si se activara solo el receptor del glucagón, la glucosa en sangre tendería a subir. La hipótesis de trabajo detrás de la retatrutida es que su actividad sobre GLP-1 y GIP compensa ese efecto, mientras el componente de glucagón aporta su biología hepática y de gasto energético.",
              "La farmacología publicada describe un perfil ajustado a propósito, no una actividad idéntica en los tres receptores, con una actividad relativamente intensa en el receptor del GIP. Entender cómo este equilibrio da forma a la respuesta global es una de las grandes preguntas científicas sobre la molécula, y por eso la retatrutida se estudia tan a menudo junto a agonistas simples y dobles."
            ]
          },
          {
            h: "Líneas de investigación",
            p: [
              "Como actúa sobre tres vías, la retatrutida se investiga en un abanico amplio de temas metabólicos. El hígado ocupa un lugar destacado, ya que es donde se concentra la señalización del receptor del glucagón."
            ],
            list: [
              "Obesidad y equilibrio energético",
              "Diabetes tipo 2 y regulación de la glucosa",
              "Grasa hepática y enfermedad hepática asociada a disfunción metabólica",
              "Función renal e investigación cardiometabólica",
              "Metabolismo hepático de lípidos y aminoácidos"
            ]
          },
          {
            h: "Manipulación de la retatrutida en el laboratorio",
            p: [
              "La retatrutida se presenta como polvo liofilizado, que conviene guardar en el vial cerrado, congelado a unos -20 °C a largo plazo o en la nevera a 2–8 °C durante periodos cortos. Protégela de la luz y la humedad y deja que el vial alcance la temperatura ambiente antes de abrirlo para evitar la condensación.",
              "Reconstituye con un diluyente estéril y una técnica limpia, girando el vial con suavidad en lugar de agitarlo para limitar la agregación del péptido lipidado. Mantén la solución en la nevera, divídela en alícuotas si hace falta y evita congelarla y descongelarla una y otra vez. Las plumas precargadas también se guardan en la nevera y lejos de la luz."
            ]
          }
        ],
        faq: [
          ["¿Qué es la retatrutida?", "La retatrutida es un péptido sintético que se estudia como triple agonista de los receptores del GIP, el GLP-1 y el glucagón. Es una sola molécula, no una mezcla de tres, y se investiga sobre todo en el ámbito metabólico."],
          ["¿Por qué la retatrutida activa el receptor del glucagón?", "La señal del receptor del glucagón se estudia por sus efectos sobre el gasto energético, la oxidación de grasa en el hígado y el metabolismo de los aminoácidos. Sumarla a la actividad sobre GIP y GLP-1 permite explorar juntas esas vías hepáticas y energéticas."],
          ["¿Tiene relación la retatrutida con la oxintomodulina?", "No en su estructura, pero sí en la idea. La oxintomodulina es un péptido intestinal natural que activa los receptores del GLP-1 y del glucagón, y su estudio inspiró el enfoque de varios receptores que la retatrutida lleva más lejos."],
          ["¿Cómo se conserva la retatrutida?", "Guarda el polvo liofilizado bien cerrado, congelado o refrigerado y lejos de la luz, y la solución reconstituida en la nevera sin volver a congelarla. La retatrutida está disponible en vial liofilizado o en pluma precargada para investigación."]
        ]
      },
      it: {
        title: "Retatrutide: guida alla ricerca sul triplo agonista",
        description: "Che cos’è la retatrutide? Struttura, triplo agonismo GLP-1/GIP/glucagone, ruolo del glucagone, ambiti di ricerca e gestione corretta in laboratorio.",
        h1: "Guida alla ricerca sul retatrutide: struttura, triplo agonismo e ruolo del glucagone",
        intro: "La retatrutide è un peptide di sintesi studiato come triplo agonista dei recettori del GIP, del GLP-1 e del glucagone, tutti attivati da un’unica molecola. È proprio la componente glucagone a distinguerla e a spiegare l’interesse che suscita nella ricerca metabolica. Questa guida illustra com’è costruita, perché il segnale del glucagone è importante, in quali ambiti viene studiata e come si gestisce in laboratorio.",
        sections: [
          {
            h: "Che cos’è la retatrutide",
            p: [
              "La retatrutide, nota in letteratura con il codice di sviluppo LY3437943, è un’unica catena peptidica progettata per attivare tre recettori della stessa superfamiglia ormonale. Come altri composti incretinici recenti, la sua sequenza deriva da uno scheletro basato sul GIP e contiene amminoacidi non naturali che la proteggono da una rapida degradazione enzimatica.",
              "Una catena laterale di diacido grasso le consente di legarsi all’albumina del sangue, rallentandone l’eliminazione e garantendo un’emivita lunga. Il risultato è una molecola stabile in grado di attivare tre vie di segnalazione distinte, uno strumento prezioso per studiare come queste vie collaborano."
            ]
          },
          {
            h: "La strada verso un triplo agonista",
            p: [
              "L’idea di inserire un’attività glucagonica in una molecola incretinica non è nata dal nulla. L’intestino produce naturalmente l’ossintomodulina, un peptide che attiva sia il recettore del GLP-1 sia quello del glucagone. Gli studi sull’ossintomodulina hanno suggerito che combinare questi due segnali potesse agire sul bilancio energetico in un modo che nessuno dei due raggiunge da solo.",
              "Da qui sono nati prima i coagonisti GLP-1/glucagone e GLP-1/GIP, poi le molecole che riuniscono tutti e tre i recettori. La retatrutide è tra i composti più avanzati di questa classe di tripli agonisti ed è oggi uno dei peptidi più seguiti nella ricerca metabolica."
            ]
          },
          {
            h: "Perché il recettore del glucagone interessa i ricercatori",
            p: [
              "Il glucagone è noto soprattutto perché alza la glicemia, ma questa è solo una parte della sua biologia. Il suo recettore è molto espresso nel fegato, dove regola anche il destino di grassi e amminoacidi. Sono proprio questi effetti più ampi a rendere così interessante la componente glucagone in un peptide metabolico.",
              "I ricercatori si concentrano su diversi processi guidati dal glucagone che un duplice agonista GIP/GLP-1 non colpisce direttamente:"
            ],
            list: [
              "Il dispendio energetico, studiato come complemento agli effetti del GLP-1 sull’apporto",
              "L’ossidazione degli acidi grassi nel fegato e il minore accumulo di grasso negli epatociti",
              "La captazione e il catabolismo epatico degli amminoacidi, parte del circuito fegato-cellule alfa",
              "Il rilascio di FGF21, un ormone epatico coinvolto nella segnalazione metabolica",
              "La produzione di corpi chetonici durante il digiuno"
            ]
          },
          {
            h: "Bilanciare tre segnali in una sola molecola",
            p: [
              "Da sola, l’attivazione del recettore del glucagone tenderebbe ad alzare la glicemia. L’ipotesi di lavoro alla base della retatrutide è che l’attività su GLP-1 e GIP bilanci questo effetto, mentre la componente glucagone aggiunge la sua biologia epatica e di dispendio energetico.",
              "La farmacologia pubblicata descrive un profilo calibrato di proposito, non un’attività identica sui tre recettori, con un’attività relativamente marcata sul recettore del GIP. Capire come questo equilibrio modelli la risposta complessiva è una delle principali domande scientifiche sulla molecola, ed è il motivo per cui la retatrutide viene studiata così spesso accanto ad agonisti singoli e duplici."
            ]
          },
          {
            h: "Ambiti di ricerca",
            p: [
              "Poiché agisce su tre vie, la retatrutide viene studiata in un’ampia gamma di temi metabolici. Il fegato occupa un posto di primo piano, perché è lì che si concentra la segnalazione del recettore del glucagone."
            ],
            list: [
              "Obesità e bilancio energetico",
              "Diabete di tipo 2 e regolazione glicemica",
              "Grasso epatico e malattia epatica associata a disfunzione metabolica",
              "Funzione renale e ricerca cardiometabolica",
              "Metabolismo epatico di lipidi e amminoacidi"
            ]
          },
          {
            h: "Gestire la retatrutide in laboratorio",
            p: [
              "La retatrutide si presenta come polvere liofilizzata, da conservare nel flaconcino sigillato, congelato a circa -20 °C a lungo termine o in frigorifero a 2–8 °C per periodi brevi. Proteggila da luce e umidità e lascia che il flaconcino raggiunga la temperatura ambiente prima di aprirlo, per evitare la condensa.",
              "Ricostituiscila con un diluente sterile e una tecnica pulita, ruotando delicatamente il flaconcino invece di agitarlo per limitare l’aggregazione del peptide lipidato. Conserva la soluzione in frigorifero, suddividila in aliquote se necessario ed evita congelamenti e scongelamenti ripetuti. Anche le penne preriempite vanno tenute in frigorifero e al riparo dalla luce."
            ]
          }
        ],
        faq: [
          ["Che cos’è la retatrutide?", "La retatrutide è un peptide di sintesi studiato come triplo agonista dei recettori del GIP, del GLP-1 e del glucagone. È un’unica molecola, non una miscela di tre, ed è studiata soprattutto nella ricerca metabolica."],
          ["Perché la retatrutide attiva il recettore del glucagone?", "Il segnale del recettore del glucagone è studiato per i suoi effetti sul dispendio energetico, sull’ossidazione dei grassi nel fegato e sul metabolismo degli amminoacidi. Unirlo all’attività su GIP e GLP-1 permette di esplorare insieme queste vie epatiche ed energetiche."],
          ["La retatrutide ha a che fare con l’ossintomodulina?", "Non dal punto di vista strutturale, ma da quello concettuale. L’ossintomodulina è un peptide intestinale naturale che attiva i recettori del GLP-1 e del glucagone, e gli studi su di essa hanno ispirato l’approccio multirecettoriale che la retatrutide porta più avanti."],
          ["Come si conserva la retatrutide?", "Tieni la polvere liofilizzata ben chiusa, congelata o refrigerata e al riparo dalla luce, e la soluzione ricostituita in frigorifero senza ricongelarla. La retatrutide è disponibile in flaconcino liofilizzato o in penna preriempita per la ricerca."]
        ]
      }
    }
  },
  {
    slug: "nad-vs-nmn-vs-nr",
    locales: ["en", "th", "fr", "de", "es", "it"],
    products: ["nad-1000mg", "mots-c-10mg"],
    content: {
      en: {
        title: "NAD+ vs NMN vs NR: What Is the Difference?",
        description: "NAD+ vs NMN vs nicotinamide riboside: how the NAD+ salvage pathway links them, how each enters cells and why researchers study each form separately.",
        h1: "NAD+ vs NMN vs NR: The Coenzyme and Its Precursors Compared",
        intro: "NAD+ is the active coenzyme, while NMN (nicotinamide mononucleotide) and NR (nicotinamide riboside) are precursors that cells convert into NAD+ through the salvage pathway. NR becomes NMN, and NMN becomes NAD+, so the three molecules sit one step apart on the same route. What separates them for researchers is size, charge, how they enter cells and which enzyme they depend on.",
        sections: [
          {
            h: "Three molecules on one metabolic route",
            p: [
              "Cells can build NAD+ in three ways. The de novo pathway starts from the amino acid tryptophan, the Preiss-Handler pathway starts from nicotinic acid, and the salvage pathway recycles nicotinamide, the fragment left behind every time an enzyme consumes NAD+. In most mammalian tissues, salvage supplies the bulk of the NAD+ pool.",
              "NMN and NR both feed into this salvage route. They are often described as members of the vitamin B3 family together with nicotinamide and nicotinic acid, because they all carry the same nicotinamide or nicotinic acid ring that ends up in NAD+. The differences lie in what is attached to that ring."
            ]
          },
          {
            h: "The salvage pathway step by step",
            p: [
              "The salvage pathway is a short chain of enzymatic reactions. Following it in order shows exactly where each molecule enters."
            ],
            list: [
              "NAD+-consuming enzymes such as sirtuins, PARPs and CD38 break NAD+ down and release nicotinamide",
              "NAMPT combines nicotinamide with a ribose phosphate donor to form NMN, the rate-limiting step",
              "NR kinases NRK1 and NRK2 phosphorylate NR into NMN, a route that bypasses NAMPT",
              "NMNAT enzymes join NMN with ATP to form NAD+, with NMNAT1 in the nucleus, NMNAT2 in the cytoplasm and NMNAT3 in mitochondria"
            ]
          },
          {
            h: "Size, charge and getting into cells",
            p: [
              "NAD+ is the largest of the three and carries charged phosphate groups, so it does not pass freely through cell membranes. Outside cells it is broken down by surface enzymes, notably CD38 and CD73, into smaller fragments such as NMN, NR and nicotinamide. How much exogenous NAD+ acts intact and how much acts through these breakdown products is an open research question.",
              "NR is the smallest and has no phosphate group. It can enter cells through equilibrative nucleoside transporters and is then phosphorylated inside the cell. NMN sits in between: one line of research has proposed a dedicated NMN transporter, while other work suggests NMN is first converted to NR outside the cell before entry. This debate is one of the main reasons researchers compare NMN and NR side by side."
            ]
          },
          {
            h: "Why researchers study each form",
            p: [
              "Each molecule answers a slightly different experimental question, which is why none of them simply replaces the others in the literature."
            ],
            list: [
              "NAD+: the end product itself, needed as a substrate in sirtuin and PARP assays and studied for its extracellular signalling roles",
              "NMN: the direct product of NAMPT, used to study what happens when the rate-limiting step is bypassed",
              "NR: the smallest precursor, used to study nucleoside transport and the NRK-dependent route",
              "All three: compared in work on age-related NAD+ decline and on how tissues maintain their NAD+ pool"
            ]
          },
          {
            h: "Studying NAD+ directly",
            p: [
              "Working with NAD+ itself removes every conversion step from the equation. In enzymatic and cell-free systems this matters a great deal, because sirtuins, PARPs and CD38 all use NAD+ as their substrate, not its precursors. NAD+ is also studied as a signalling molecule outside cells, where it can modify proteins through ADP-ribosylation.",
              "Because NAD+ metabolism is so closely tied to mitochondria, it is frequently investigated together with mitochondria-related compounds such as MOTS-c, a peptide encoded in mitochondrial DNA that is studied in metabolic signalling."
            ]
          },
          {
            h: "Handling NAD+ in the lab",
            p: [
              "NAD+ is supplied as a lyophilized powder that readily attracts moisture. Keep vials tightly sealed, dry, protected from light and refrigerated at 2–8 °C, or frozen at around -20 °C for longer storage. Open a cold vial only once it has reached room temperature to avoid condensation.",
              "In solution NAD+ is less stable than as a dry powder, and it is sensitive to heat, light and alkaline conditions. Reconstitute with a sterile diluent, keep the solution cold and covered, and avoid repeated temperature changes. A solution that turns yellow or cloudy should be discarded."
            ]
          }
        ],
        faq: [
          ["Is NMN the same as NAD+?", "No. NMN is a precursor that the enzyme NMNAT converts into NAD+. NAD+ is the active coenzyme used by enzymes such as sirtuins and PARPs."],
          ["Does NR turn into NMN?", "Yes. Inside cells, NR is phosphorylated by the NR kinases NRK1 and NRK2 to form NMN, which is then converted to NAD+."],
          ["Can NAD+ enter cells directly?", "Not easily. NAD+ is large and charged, and outside cells it is largely broken down into smaller molecules such as NMN, NR and nicotinamide. How much enters intact is still being researched."],
          ["Are NMN and NR the same as niacin?", "Not exactly. Niacin usually refers to nicotinic acid, and sometimes to nicotinamide. NMN and NR are related B3-family molecules that already carry part of the structure needed to build NAD+."],
          ["Which of the three forms is available here?", "Of the three, NAD+ itself is the form offered here, alongside the mitochondria-related peptide MOTS-c. Both are available as lyophilized vials or pre-filled pens for research."]
        ]
      },
      th: {
        title: "NAD+ vs NMN vs NR: ต่างกันอย่างไร",
        description: "NAD+ กับ NMN และ nicotinamide riboside (NR) ต่างกันอย่างไร เชื่อมโยงกันผ่านเส้นทาง salvage แบบไหน เข้าสู่เซลล์อย่างไร และทำไมนักวิจัยจึงศึกษาแต่ละรูปแบบแยกกัน",
        h1: "NAD+ vs NMN vs NR: เปรียบเทียบโคเอนไซม์และสารตั้งต้นทั้งสอง",
        intro: "NAD+ คือโคเอนไซม์ตัวที่ออกฤทธิ์ ส่วน NMN (nicotinamide mononucleotide) และ NR (nicotinamide riboside) เป็นสารตั้งต้นที่เซลล์เปลี่ยนให้เป็น NAD+ ผ่านเส้นทาง salvage โดย NR จะกลายเป็น NMN และ NMN จะกลายเป็น NAD+ ทั้งสามจึงอยู่ห่างกันเพียงขั้นเดียวบนเส้นทางเดียวกัน สิ่งที่ทำให้นักวิจัยแยกศึกษาคือขนาด ประจุ วิธีเข้าสู่เซลล์ และเอนไซม์ที่แต่ละตัวต้องพึ่งพา",
        sections: [
          {
            h: "สามโมเลกุลบนเส้นทางเมแทบอลิซึมเดียวกัน",
            p: [
              "เซลล์สร้าง NAD+ ได้สามทาง เส้นทาง de novo เริ่มจากกรดอะมิโน tryptophan เส้นทาง Preiss-Handler เริ่มจาก nicotinic acid ส่วนเส้นทาง salvage นำ nicotinamide กลับมาใช้ใหม่ ซึ่ง nicotinamide คือชิ้นส่วนที่เหลือทุกครั้งที่เอนไซม์ใช้ NAD+ ไป ในเนื้อเยื่อส่วนใหญ่ของสัตว์เลี้ยงลูกด้วยนม เส้นทาง salvage เป็นแหล่งหลักที่รักษาระดับ NAD+ ไว้",
              "ทั้ง NMN และ NR ต่างเข้าสู่เส้นทาง salvage นี้ สารเหล่านี้มักถูกจัดอยู่ในกลุ่มวิตามิน B3 ร่วมกับ nicotinamide และ nicotinic acid เพราะทั้งหมดมีวงแหวน nicotinamide หรือ nicotinic acid แบบเดียวกันที่จะกลายเป็นส่วนหนึ่งของ NAD+ ความแตกต่างอยู่ที่สิ่งที่ต่อเข้ากับวงแหวนนั้น"
            ]
          },
          {
            h: "เส้นทาง salvage ทีละขั้นตอน",
            p: [
              "เส้นทาง salvage เป็นปฏิกิริยาเอนไซม์ต่อเนื่องเพียงไม่กี่ขั้น การไล่ดูตามลำดับจะเห็นชัดว่าแต่ละโมเลกุลเข้ามาที่จุดไหน"
            ],
            list: [
              "เอนไซม์ที่ใช้ NAD+ เช่น sirtuins, PARPs และ CD38 สลาย NAD+ แล้วปล่อย nicotinamide ออกมา",
              "NAMPT รวม nicotinamide กับตัวให้ ribose phosphate เพื่อสร้าง NMN ซึ่งเป็นขั้นตอนกำหนดอัตรา",
              "เอนไซม์ NR kinase คือ NRK1 และ NRK2 เติมหมู่ฟอสเฟตให้ NR กลายเป็น NMN โดยไม่ต้องผ่าน NAMPT",
              "เอนไซม์ NMNAT รวม NMN กับ ATP เป็น NAD+ โดย NMNAT1 อยู่ในนิวเคลียส NMNAT2 อยู่ในไซโทพลาซึม และ NMNAT3 อยู่ในไมโทคอนเดรีย"
            ]
          },
          {
            h: "ขนาด ประจุ และการเข้าสู่เซลล์",
            p: [
              "NAD+ มีขนาดใหญ่ที่สุดในสามตัวและมีหมู่ฟอสเฟตที่มีประจุ จึงผ่านเยื่อหุ้มเซลล์ได้ไม่ง่าย เมื่ออยู่นอกเซลล์ NAD+ จะถูกเอนไซม์บนผิวเซลล์ โดยเฉพาะ CD38 และ CD73 ย่อยเป็นชิ้นเล็กลง เช่น NMN, NR และ nicotinamide คำถามที่ยังเปิดอยู่ในงานวิจัยคือ NAD+ จากภายนอกออกฤทธิ์ในรูปเดิมมากน้อยเพียงใด และออกฤทธิ์ผ่านผลผลิตจากการสลายเหล่านี้มากแค่ไหน",
              "NR มีขนาดเล็กที่สุดและไม่มีหมู่ฟอสเฟต จึงเข้าสู่เซลล์ผ่านตัวขนส่ง nucleoside แบบ equilibrative แล้วจึงถูกเติมฟอสเฟตภายในเซลล์ ส่วน NMN อยู่ตรงกลาง งานวิจัยกลุ่มหนึ่งเสนอว่ามีตัวขนส่ง NMN โดยเฉพาะ ขณะที่อีกกลุ่มชี้ว่า NMN ถูกเปลี่ยนเป็น NR นอกเซลล์ก่อนแล้วจึงเข้าไป ข้อถกเถียงนี้เป็นเหตุผลหลักที่นักวิจัยนำ NMN และ NR มาเปรียบเทียบกัน"
            ]
          },
          {
            h: "ทำไมนักวิจัยจึงศึกษาแต่ละรูปแบบ",
            p: [
              "แต่ละโมเลกุลตอบคำถามเชิงทดลองที่ต่างกันเล็กน้อย จึงไม่มีตัวใดมาแทนที่ตัวอื่นได้ทั้งหมดในวงการวิจัย"
            ],
            list: [
              "NAD+: ผลผลิตปลายทาง ใช้เป็นสารตั้งต้นในการวิเคราะห์ sirtuin และ PARP และถูกศึกษาบทบาทการส่งสัญญาณนอกเซลล์",
              "NMN: ผลผลิตโดยตรงของ NAMPT ใช้ศึกษาว่าจะเกิดอะไรขึ้นเมื่อข้ามขั้นตอนกำหนดอัตรา",
              "NR: สารตั้งต้นที่เล็กที่สุด ใช้ศึกษาการขนส่ง nucleoside และเส้นทางที่อาศัย NRK",
              "ทั้งสามตัว: ถูกเปรียบเทียบในงานวิจัยเรื่องการลดลงของ NAD+ ตามอายุและการรักษาระดับ NAD+ ในเนื้อเยื่อ"
            ]
          },
          {
            h: "การศึกษา NAD+ โดยตรง",
            p: [
              "การทำงานกับ NAD+ โดยตรงช่วยตัดขั้นตอนการเปลี่ยนรูปทั้งหมดออกไป ในระบบเอนไซม์และระบบที่ไม่มีเซลล์ เรื่องนี้สำคัญมาก เพราะ sirtuins, PARPs และ CD38 ล้วนใช้ NAD+ เป็นสารตั้งต้น ไม่ใช่สารตั้งต้นของ NAD+ นอกจากนี้ NAD+ ยังถูกศึกษาในฐานะโมเลกุลส่งสัญญาณนอกเซลล์ ซึ่งสามารถดัดแปลงโปรตีนผ่านกระบวนการ ADP-ribosylation",
              "เนื่องจากเมแทบอลิซึมของ NAD+ ผูกพันใกล้ชิดกับไมโทคอนเดรีย จึงมักถูกศึกษาร่วมกับสารที่เกี่ยวข้องกับไมโทคอนเดรีย เช่น MOTS-c ซึ่งเป็นเปปไทด์ที่ถูกเข้ารหัสใน DNA ของไมโทคอนเดรียและถูกศึกษาด้านสัญญาณเมแทบอลิซึม"
            ]
          },
          {
            h: "การจัดการ NAD+ ในห้องปฏิบัติการ",
            p: [
              "NAD+ มาในรูปผงแห้งแบบ lyophilized ที่ดูดความชื้นได้ง่าย ควรปิดขวดให้สนิท เก็บในที่แห้ง ป้องกันแสง และแช่เย็นที่ 2–8 °C หรือแช่แข็งที่ประมาณ -20 °C หากเก็บนาน เปิดขวดที่เย็นอยู่เมื่อขวดมีอุณหภูมิเท่าห้องแล้วเท่านั้น เพื่อป้องกันไอน้ำควบแน่น",
              "เมื่ออยู่ในรูปสารละลาย NAD+ จะเสถียรน้อยกว่าผงแห้ง และไวต่อความร้อน แสง และสภาวะด่าง ควรละลายด้วยสารละลายปลอดเชื้อ เก็บสารละลายให้เย็นและมีฝาปิด และหลีกเลี่ยงการเปลี่ยนอุณหภูมิซ้ำ ๆ หากสารละลายเปลี่ยนเป็นสีเหลืองหรือขุ่น ควรทิ้งไป"
            ]
          }
        ],
        faq: [
          ["NMN กับ NAD+ เป็นสารเดียวกันหรือไม่?", "ไม่ใช่ NMN เป็นสารตั้งต้นที่เอนไซม์ NMNAT เปลี่ยนให้เป็น NAD+ ส่วน NAD+ คือโคเอนไซม์ตัวที่ออกฤทธิ์ซึ่งเอนไซม์อย่าง sirtuins และ PARPs นำไปใช้"],
          ["NR เปลี่ยนเป็น NMN ได้หรือไม่?", "ได้ ภายในเซลล์ NR จะถูกเอนไซม์ NRK1 และ NRK2 เติมหมู่ฟอสเฟตจนกลายเป็น NMN แล้วจึงถูกเปลี่ยนเป็น NAD+ ต่อไป"],
          ["NAD+ เข้าสู่เซลล์ได้โดยตรงหรือไม่?", "ไม่ง่ายนัก NAD+ มีขนาดใหญ่และมีประจุ เมื่ออยู่นอกเซลล์ส่วนใหญ่จะถูกย่อยเป็นโมเลกุลเล็กลง เช่น NMN, NR และ nicotinamide ส่วนปริมาณที่เข้าเซลล์ได้ในรูปเดิมยังอยู่ระหว่างการศึกษา"],
          ["NMN และ NR คือ niacin หรือไม่?", "ไม่เชิง niacin มักหมายถึง nicotinic acid และบางครั้งหมายถึง nicotinamide ส่วน NMN และ NR เป็นโมเลกุลในกลุ่ม B3 ที่มีโครงสร้างบางส่วนสำหรับสร้าง NAD+ อยู่แล้ว"],
          ["สารใดในสามตัวนี้ที่มีให้บริการ?", "ในสามตัวนี้ รูปแบบที่มีให้บริการคือ NAD+ โดยตรง พร้อมกับเปปไทด์ที่เกี่ยวข้องกับไมโทคอนเดรียอย่าง MOTS-c ทั้งสองมีให้เลือกทั้งแบบขวดผงแห้งและแบบปากกาบรรจุพร้อมใช้ (pre-filled pen) สำหรับงานวิจัย"]
        ]
      },
      fr: {
        title: "NAD+, NMN ou NR : quelles différences ?",
        description: "NAD+, NMN et nicotinamide riboside : comment la voie de récupération les relie, comment chacun entre dans la cellule et pourquoi les chercheurs les étudient.",
        h1: "NAD+, NMN et NR : le coenzyme et ses précurseurs comparés",
        intro: "Le NAD+ est le coenzyme actif, tandis que le NMN (nicotinamide mononucléotide) et le NR (nicotinamide riboside) sont des précurseurs que la cellule transforme en NAD+ par la voie de récupération. Le NR devient du NMN, et le NMN devient du NAD+ : les trois molécules ne sont donc séparées que d’une étape sur le même trajet. Ce qui les distingue pour les chercheurs, ce sont leur taille, leur charge, leur mode d’entrée dans la cellule et l’enzyme dont chacune dépend.",
        sections: [
          {
            h: "Trois molécules sur une même voie métabolique",
            p: [
              "La cellule dispose de trois façons de fabriquer du NAD+. La voie de novo part du tryptophane, la voie de Preiss-Handler part de l’acide nicotinique, et la voie de récupération, dite salvage, recycle le nicotinamide, ce fragment libéré chaque fois qu’une enzyme consomme du NAD+. Dans la plupart des tissus des mammifères, c’est cette voie de récupération qui alimente l’essentiel du pool de NAD+.",
              "Le NMN et le NR entrent tous deux dans cette voie. On les range souvent dans la famille de la vitamine B3, aux côtés du nicotinamide et de l’acide nicotinique, car tous portent le même noyau qui finira intégré au NAD+."
            ]
          },
          {
            h: "La voie de récupération, étape par étape",
            p: [
              "La voie de récupération est une courte chaîne de réactions enzymatiques. La suivre dans l’ordre montre précisément où chaque molécule intervient."
            ],
            list: [
              "Les enzymes consommatrices de NAD+, comme les sirtuines, les PARP et CD38, le dégradent et libèrent du nicotinamide",
              "La NAMPT associe le nicotinamide à un donneur de ribose phosphate pour former du NMN : c’est l’étape limitante",
              "Les NR kinases NRK1 et NRK2 phosphorylent le NR en NMN, en contournant la NAMPT",
              "Les enzymes NMNAT unissent le NMN à l’ATP pour former du NAD+ : NMNAT1 dans le noyau, NMNAT2 dans le cytoplasme, NMNAT3 dans les mitochondries"
            ]
          },
          {
            h: "Taille, charge et entrée dans la cellule",
            p: [
              "Le NAD+ est le plus volumineux des trois et porte des groupements phosphate chargés : il ne traverse donc pas librement les membranes. Hors de la cellule, il est dégradé par des enzymes de surface, notamment CD38 et CD73, en fragments plus petits comme le NMN, le NR et le nicotinamide. La part du NAD+ exogène qui agit intacte, et celle qui agit via ces produits de dégradation, reste une question ouverte.",
              "Le NR est le plus petit et ne possède aucun phosphate. Il peut entrer par les transporteurs équilibratifs de nucléosides, puis être phosphorylé à l’intérieur de la cellule. Le NMN se situe entre les deux : une piste de recherche a proposé un transporteur spécifique, tandis que d’autres travaux suggèrent qu’il est d’abord converti en NR à l’extérieur de la cellule."
            ]
          },
          {
            h: "Pourquoi les chercheurs étudient chaque forme",
            p: [
              "Chaque molécule répond à une question expérimentale un peu différente, ce qui explique qu’aucune ne remplace simplement les autres dans la littérature."
            ],
            list: [
              "NAD+ : le produit final lui-même, substrat indispensable des essais sur les sirtuines et les PARP, étudié aussi pour sa signalisation extracellulaire",
              "NMN : produit direct de la NAMPT, utilisé pour étudier ce qui se passe quand l’étape limitante est contournée",
              "NR : le plus petit précurseur, utilisé pour étudier le transport des nucléosides et la voie dépendante des NRK",
              "Les trois : comparés dans les travaux sur le déclin du NAD+ avec l’âge et le maintien du pool tissulaire"
            ]
          },
          {
            h: "Étudier directement le NAD+",
            p: [
              "Travailler avec le NAD+ lui-même supprime toutes les étapes de conversion de l’équation. Dans les systèmes enzymatiques et acellulaires, c’est décisif, car les sirtuines, les PARP et CD38 utilisent le NAD+ comme substrat, et non ses précurseurs. Le NAD+ est aussi étudié comme molécule de signalisation hors de la cellule, où il peut modifier des protéines par ADP-ribosylation.",
              "Le métabolisme du NAD+ étant étroitement lié aux mitochondries, on l’étudie souvent avec des composés d’intérêt mitochondrial comme le MOTS-c, un peptide codé par l’ADN mitochondrial et étudié dans la signalisation métabolique."
            ]
          },
          {
            h: "Manipuler le NAD+ au laboratoire",
            p: [
              "Le NAD+ se présente sous forme de poudre lyophilisée très avide d’humidité. Gardez les flacons hermétiquement fermés, au sec, à l’abri de la lumière et au réfrigérateur entre 2 et 8 °C, ou congelés vers -20 °C pour une conservation plus longue. N’ouvrez un flacon froid qu’une fois revenu à température ambiante, pour éviter la condensation.",
              "En solution, le NAD+ est moins stable qu’à l’état sec et craint la chaleur, la lumière et les milieux alcalins. Reconstituez-le avec un diluant stérile, gardez la solution au froid et à l’abri, et évitez les variations de température répétées."
            ]
          }
        ],
        faq: [
          ["Le NMN est-il la même chose que le NAD+ ?", "Non. Le NMN est un précurseur que l’enzyme NMNAT convertit en NAD+. Le NAD+ est le coenzyme actif utilisé par des enzymes comme les sirtuines et les PARP."],
          ["Le NR se transforme-t-il en NMN ?", "Oui. Dans la cellule, le NR est phosphorylé par les NR kinases NRK1 et NRK2 pour donner du NMN, lequel est ensuite converti en NAD+."],
          ["Le NAD+ peut-il entrer directement dans la cellule ?", "Difficilement. Volumineux et chargé, le NAD+ est en grande partie dégradé hors de la cellule en molécules plus petites comme le NMN, le NR et le nicotinamide. La part qui entre intacte fait encore l’objet de recherches."],
          ["Le NMN et le NR sont-ils de la niacine ?", "Pas exactement. La niacine désigne en général l’acide nicotinique, parfois le nicotinamide. Le NMN et le NR sont des molécules apparentées de la famille B3 qui portent déjà une partie de la structure nécessaire au NAD+."],
          ["Laquelle de ces trois formes est proposée ici ?", "Des trois, c’est le NAD+ lui-même qui est proposé ici, aux côtés du MOTS-c, un peptide d’intérêt mitochondrial. Les deux sont disponibles en flacon lyophilisé ou en stylo prérempli pour la recherche."]
        ]
      },
      de: {
        title: "NAD+ vs. NMN vs. NR: Wo liegt der Unterschied?",
        description: "NAD+, NMN und Nicotinamid-Ribosid im Vergleich: wie der Salvage-Weg sie verbindet, wie sie in Zellen gelangen und warum die Forschung jede Form untersucht.",
        h1: "NAD+ vs. NMN vs. NR: das Coenzym und seine Vorstufen im Vergleich",
        intro: "NAD+ ist das aktive Coenzym, während NMN (Nicotinamid-Mononukleotid) und NR (Nicotinamid-Ribosid) Vorstufen sind, die Zellen über den Salvage-Weg in NAD+ umwandeln. Aus NR wird NMN, aus NMN wird NAD+, die drei Moleküle liegen also nur jeweils einen Schritt auseinander. Für die Forschung unterscheiden sie sich vor allem in Größe, Ladung, Aufnahme in die Zelle und dem Enzym, von dem sie abhängen.",
        sections: [
          {
            h: "Drei Moleküle auf einem Stoffwechselweg",
            p: [
              "Zellen können NAD+ auf drei Wegen bilden. Der De-novo-Weg beginnt bei der Aminosäure Tryptophan, der Preiss-Handler-Weg bei Nicotinsäure, und der Salvage-Weg recycelt Nicotinamid, also das Bruchstück, das jedes Mal entsteht, wenn ein Enzym NAD+ verbraucht. In den meisten Geweben von Säugetieren liefert der Salvage-Weg den Großteil des NAD+-Pools.",
              "NMN und NR münden beide in diesen Salvage-Weg. Sie werden häufig gemeinsam mit Nicotinamid und Nicotinsäure zur Vitamin-B3-Familie gezählt, da sie alle denselben Ring tragen, der am Ende Teil von NAD+ wird. Der Unterschied liegt darin, was an diesen Ring gebunden ist."
            ]
          },
          {
            h: "Der Salvage-Weg Schritt für Schritt",
            p: [
              "Der Salvage-Weg ist eine kurze Kette enzymatischer Reaktionen. Verfolgt man ihn der Reihe nach, sieht man genau, wo jedes Molekül einsteigt."
            ],
            list: [
              "NAD+-verbrauchende Enzyme wie Sirtuine, PARPs und CD38 spalten NAD+ und setzen Nicotinamid frei",
              "NAMPT verbindet Nicotinamid mit einem Ribosephosphat-Donor zu NMN, dem geschwindigkeitsbestimmenden Schritt",
              "Die NR-Kinasen NRK1 und NRK2 phosphorylieren NR zu NMN und umgehen damit NAMPT",
              "NMNAT-Enzyme verknüpfen NMN mit ATP zu NAD+: NMNAT1 im Zellkern, NMNAT2 im Zytoplasma, NMNAT3 in den Mitochondrien"
            ]
          },
          {
            h: "Größe, Ladung und der Weg in die Zelle",
            p: [
              "NAD+ ist das größte der drei Moleküle und trägt geladene Phosphatgruppen, weshalb es Zellmembranen nicht frei passiert. Außerhalb der Zelle wird es von Oberflächenenzymen, vor allem CD38 und CD73, in kleinere Bausteine wie NMN, NR und Nicotinamid zerlegt. Wie viel exogenes NAD+ intakt wirkt und wie viel über diese Abbauprodukte, ist eine offene Forschungsfrage.",
              "NR ist das kleinste Molekül und besitzt keine Phosphatgruppe. Es gelangt über equilibrative Nukleosidtransporter in die Zelle und wird dort phosphoryliert. NMN liegt dazwischen: Eine Forschungsrichtung hat einen eigenen NMN-Transporter vorgeschlagen, andere Arbeiten deuten darauf hin, dass NMN zunächst außerhalb der Zelle zu NR umgewandelt wird. Diese Debatte ist ein Hauptgrund, warum NMN und NR direkt miteinander verglichen werden."
            ]
          },
          {
            h: "Warum die Forschung jede Form untersucht",
            p: [
              "Jedes Molekül beantwortet eine etwas andere experimentelle Frage. Deshalb ersetzt keines die anderen einfach in der Literatur."
            ],
            list: [
              "NAD+: das Endprodukt selbst, unverzichtbares Substrat in Sirtuin- und PARP-Assays und Gegenstand der Forschung zu extrazellulärer Signalübertragung",
              "NMN: direktes Produkt von NAMPT, genutzt, um die Umgehung des geschwindigkeitsbestimmenden Schritts zu untersuchen",
              "NR: die kleinste Vorstufe, genutzt für Studien zu Nukleosidtransport und NRK-abhängigem Weg",
              "Alle drei: verglichen in Arbeiten zum altersbedingten NAD+-Rückgang und zur Aufrechterhaltung des NAD+-Pools im Gewebe"
            ]
          },
          {
            h: "NAD+ direkt erforschen",
            p: [
              "Wer mit NAD+ selbst arbeitet, nimmt sämtliche Umwandlungsschritte aus der Gleichung. In enzymatischen und zellfreien Systemen ist das entscheidend, denn Sirtuine, PARPs und CD38 nutzen NAD+ als Substrat, nicht seine Vorstufen. Außerdem wird NAD+ als extrazelluläres Signalmolekül untersucht, das Proteine durch ADP-Ribosylierung verändern kann.",
              "Da der NAD+-Stoffwechsel eng mit den Mitochondrien verknüpft ist, wird er häufig zusammen mit mitochondrienbezogenen Substanzen wie MOTS-c erforscht, einem in der mitochondrialen DNA codierten Peptid, das in der Stoffwechselsignalisierung untersucht wird."
            ]
          },
          {
            h: "Handhabung von NAD+ im Labor",
            p: [
              "NAD+ wird als lyophilisiertes Pulver geliefert, das leicht Feuchtigkeit anzieht. Bewahren Sie die Fläschchen fest verschlossen, trocken, lichtgeschützt und gekühlt bei 2–8 °C auf, für längere Zeit gefroren bei etwa -20 °C. Öffnen Sie ein kaltes Fläschchen erst, wenn es Raumtemperatur erreicht hat, um Kondensation zu vermeiden.",
              "In Lösung ist NAD+ weniger stabil als im trockenen Zustand und empfindlich gegenüber Wärme, Licht und alkalischen Bedingungen. Rekonstituieren Sie mit einem sterilen Lösungsmittel, halten Sie die Lösung kühl und abgedeckt und vermeiden Sie wiederholte Temperaturwechsel. Eine Lösung, die sich gelb verfärbt oder trüb wird, sollte verworfen werden."
            ]
          }
        ],
        faq: [
          ["Ist NMN dasselbe wie NAD+?", "Nein. NMN ist eine Vorstufe, die das Enzym NMNAT in NAD+ umwandelt. NAD+ ist das aktive Coenzym, das Enzyme wie Sirtuine und PARPs nutzen."],
          ["Wird NR zu NMN umgewandelt?", "Ja. In der Zelle phosphorylieren die NR-Kinasen NRK1 und NRK2 das NR zu NMN, das anschließend in NAD+ umgewandelt wird."],
          ["Kann NAD+ direkt in Zellen gelangen?", "Nur schwer. NAD+ ist groß und geladen und wird außerhalb der Zelle größtenteils in kleinere Moleküle wie NMN, NR und Nicotinamid zerlegt. Wie viel intakt aufgenommen wird, ist noch Gegenstand der Forschung."],
          ["Sind NMN und NR dasselbe wie Niacin?", "Nicht ganz. Niacin bezeichnet meist Nicotinsäure, manchmal auch Nicotinamid. NMN und NR sind verwandte Moleküle der B3-Familie, die bereits einen Teil der für NAD+ nötigen Struktur mitbringen."],
          ["Welche der drei Formen ist hier erhältlich?", "Von den dreien wird hier NAD+ selbst angeboten, zusammen mit dem mitochondrienbezogenen Peptid MOTS-c. Beide sind als lyophilisiertes Fläschchen oder als vorgefüllter Pen für die Forschung erhältlich."]
        ]
      },
      es: {
        title: "NAD+ vs NMN vs NR: ¿en qué se diferencian?",
        description: "NAD+, NMN y nicotinamida ribósido: cómo los une la vía de recuperación, cómo entra cada uno en la célula y por qué los investigadores estudian cada forma.",
        h1: "NAD+ vs NMN vs NR: la coenzima y sus precursores, comparados",
        intro: "El NAD+ es la coenzima activa, mientras que el NMN (nicotinamida mononucleótido) y el NR (nicotinamida ribósido) son precursores que la célula transforma en NAD+ a través de la vía de recuperación. El NR se convierte en NMN y el NMN en NAD+, así que las tres moléculas están a un solo paso de distancia en la misma ruta. Lo que las separa para los investigadores es su tamaño, su carga, cómo entran en la célula y de qué enzima depende cada una.",
        sections: [
          {
            h: "Tres moléculas en una misma ruta metabólica",
            p: [
              "La célula puede fabricar NAD+ de tres maneras. La vía de novo parte del aminoácido triptófano, la vía de Preiss-Handler parte del ácido nicotínico y la vía de recuperación, o salvage, recicla la nicotinamida, el fragmento que queda cada vez que una enzima consume NAD+. En la mayoría de los tejidos de los mamíferos, esta vía de recuperación aporta la mayor parte del NAD+.",
              "El NMN y el NR entran en esa misma vía. Suelen agruparse en la familia de la vitamina B3 junto a la nicotinamida y el ácido nicotínico, porque todos llevan el mismo anillo que acabará formando parte del NAD+."
            ]
          },
          {
            h: "La vía de recuperación, paso a paso",
            p: [
              "La vía de recuperación es una cadena corta de reacciones enzimáticas. Recorrerla en orden muestra con precisión dónde entra cada molécula."
            ],
            list: [
              "Las enzimas que consumen NAD+, como las sirtuinas, las PARP y CD38, lo degradan y liberan nicotinamida",
              "La NAMPT une la nicotinamida a un donante de ribosa fosfato para formar NMN, el paso limitante",
              "Las NR quinasas NRK1 y NRK2 fosforilan el NR y lo convierten en NMN, sin pasar por la NAMPT",
              "Las enzimas NMNAT unen el NMN al ATP para formar NAD+: NMNAT1 en el núcleo, NMNAT2 en el citoplasma y NMNAT3 en las mitocondrias"
            ]
          },
          {
            h: "Tamaño, carga y entrada en la célula",
            p: [
              "El NAD+ es la más grande de las tres moléculas y lleva grupos fosfato con carga, de modo que no atraviesa libremente las membranas. Fuera de la célula lo degradan enzimas de superficie, sobre todo CD38 y CD73, en fragmentos más pequeños como el NMN, el NR y la nicotinamida. Cuánto NAD+ exógeno actúa intacto y cuánto actúa a través de estos productos de degradación sigue siendo una pregunta abierta.",
              "El NR es la más pequeña y no tiene fosfato. Puede entrar por los transportadores equilibrativos de nucleósidos y fosforilarse ya dentro de la célula. El NMN queda en medio: una línea de investigación ha propuesto un transportador propio, mientras que otros trabajos sugieren que primero se convierte en NR fuera de la célula."
            ]
          },
          {
            h: "Por qué se estudia cada forma",
            p: [
              "Cada molécula responde a una pregunta experimental algo distinta, y por eso ninguna sustituye sin más a las otras en la literatura."
            ],
            list: [
              "NAD+: el producto final en sí, sustrato imprescindible en los ensayos de sirtuinas y PARP y estudiado por su señalización extracelular",
              "NMN: producto directo de la NAMPT, útil para estudiar qué ocurre cuando se salta el paso limitante",
              "NR: el precursor más pequeño, útil para estudiar el transporte de nucleósidos y la ruta dependiente de las NRK",
              "Los tres: se comparan en los trabajos sobre el descenso del NAD+ con la edad y el mantenimiento del NAD+ en los tejidos"
            ]
          },
          {
            h: "Estudiar el NAD+ directamente",
            p: [
              "Trabajar con el propio NAD+ elimina de la ecuación todos los pasos de conversión. En sistemas enzimáticos y acelulares esto es clave, porque las sirtuinas, las PARP y CD38 usan NAD+ como sustrato, no sus precursores. El NAD+ también se estudia como molécula de señalización fuera de la célula, donde puede modificar proteínas mediante ADP-ribosilación.",
              "Como el metabolismo del NAD+ está tan ligado a las mitocondrias, se investiga a menudo junto a compuestos relacionados con ellas, como el MOTS-c, un péptido codificado en el ADN mitocondrial que se estudia en la señalización metabólica."
            ]
          },
          {
            h: "Manipulación del NAD+ en el laboratorio",
            p: [
              "El NAD+ se presenta como polvo liofilizado que absorbe la humedad con facilidad. Guarda los viales bien cerrados, en seco, protegidos de la luz y en la nevera a 2–8 °C, o congelados a unos -20 °C si se van a conservar más tiempo. Abre un vial frío solo cuando haya alcanzado la temperatura ambiente, para evitar la condensación.",
              "En solución, el NAD+ es menos estable que en polvo y es sensible al calor, la luz y los medios alcalinos. Reconstituye con un diluyente estéril, mantén la solución fría y tapada y evita los cambios de temperatura repetidos."
            ]
          }
        ],
        faq: [
          ["¿El NMN es lo mismo que el NAD+?", "No. El NMN es un precursor que la enzima NMNAT convierte en NAD+. El NAD+ es la coenzima activa que utilizan enzimas como las sirtuinas y las PARP."],
          ["¿El NR se convierte en NMN?", "Sí. Dentro de la célula, las NR quinasas NRK1 y NRK2 fosforilan el NR para formar NMN, que después se convierte en NAD+."],
          ["¿Puede el NAD+ entrar directamente en la célula?", "Con dificultad. El NAD+ es grande y tiene carga, y fuera de la célula se degrada en buena parte en moléculas más pequeñas como el NMN, el NR y la nicotinamida. Cuánto entra intacto sigue investigándose."],
          ["¿El NMN y el NR son niacina?", "No exactamente. La niacina suele referirse al ácido nicotínico y a veces a la nicotinamida. El NMN y el NR son moléculas emparentadas de la familia B3 que ya llevan parte de la estructura necesaria para formar NAD+."],
          ["¿Cuál de las tres formas está disponible aquí?", "De las tres, la que se ofrece aquí es el propio NAD+, junto al MOTS-c, un péptido relacionado con las mitocondrias. Ambos están disponibles en vial liofilizado o en pluma precargada para investigación."]
        ]
      },
      it: {
        title: "NAD+ vs NMN vs NR: quali sono le differenze?",
        description: "NAD+, NMN e nicotinamide riboside: come li collega la via di recupero, come ciascuno entra nella cellula e perché i ricercatori studiano ogni forma a parte.",
        h1: "NAD+ vs NMN vs NR: il coenzima e i suoi precursori a confronto",
        intro: "Il NAD+ è il coenzima attivo, mentre l’NMN (nicotinamide mononucleotide) e l’NR (nicotinamide riboside) sono precursori che la cellula trasforma in NAD+ attraverso la via di recupero. L’NR diventa NMN e l’NMN diventa NAD+, quindi le tre molecole distano un solo passaggio lungo lo stesso percorso. Ciò che le distingue per i ricercatori sono dimensioni, carica, modalità di ingresso nella cellula e l’enzima da cui ciascuna dipende.",
        sections: [
          {
            h: "Tre molecole lungo la stessa via metabolica",
            p: [
              "La cellula può produrre NAD+ in tre modi. La via de novo parte dall’amminoacido triptofano, la via di Preiss-Handler dall’acido nicotinico e la via di recupero, detta salvage, ricicla la nicotinamide, il frammento che resta ogni volta che un enzima consuma NAD+. Nella maggior parte dei tessuti dei mammiferi è questa via di recupero a fornire la quota principale di NAD+.",
              "NMN e NR confluiscono entrambi in questa via. Vengono spesso inseriti nella famiglia della vitamina B3 insieme a nicotinamide e acido nicotinico, perché tutti portano lo stesso anello che finirà nel NAD+. La differenza sta in ciò che è legato a quell’anello."
            ]
          },
          {
            h: "La via di recupero passo dopo passo",
            p: [
              "La via di recupero è una breve catena di reazioni enzimatiche. Seguirla in ordine mostra con precisione dove entra ciascuna molecola."
            ],
            list: [
              "Gli enzimi che consumano NAD+, come sirtuine, PARP e CD38, lo scindono e liberano nicotinamide",
              "La NAMPT unisce la nicotinamide a un donatore di ribosio fosfato formando NMN: è il passaggio limitante",
              "Le NR chinasi NRK1 e NRK2 fosforilano l’NR in NMN, aggirando la NAMPT",
              "Gli enzimi NMNAT legano l’NMN all’ATP formando NAD+: NMNAT1 nel nucleo, NMNAT2 nel citoplasma, NMNAT3 nei mitocondri"
            ]
          },
          {
            h: "Dimensioni, carica e ingresso nella cellula",
            p: [
              "Il NAD+ è la più grande delle tre molecole e porta gruppi fosfato carichi, per cui non attraversa liberamente le membrane. Fuori dalla cellula viene scisso da enzimi di superficie, in particolare CD38 e CD73, in frammenti più piccoli come NMN, NR e nicotinamide. Quanto NAD+ esogeno agisca intatto e quanto attraverso questi prodotti di degradazione resta una questione aperta.",
              "L’NR è la più piccola e non ha gruppi fosfato. Può entrare attraverso i trasportatori equilibrativi dei nucleosidi ed essere poi fosforilato all’interno della cellula. L’NMN si colloca a metà: una linea di ricerca ha proposto un trasportatore dedicato, mentre altri lavori suggeriscono che venga prima convertito in NR all’esterno della cellula. Questo dibattito è uno dei motivi principali per cui NMN e NR vengono messi a confronto."
            ]
          },
          {
            h: "Perché i ricercatori studiano ogni forma",
            p: [
              "Ogni molecola risponde a una domanda sperimentale leggermente diversa, ed è per questo che nessuna sostituisce semplicemente le altre in letteratura."
            ],
            list: [
              "NAD+: il prodotto finale stesso, substrato indispensabile nei saggi su sirtuine e PARP e studiato per la sua segnalazione extracellulare",
              "NMN: prodotto diretto della NAMPT, usato per capire cosa accade quando si aggira il passaggio limitante",
              "NR: il precursore più piccolo, usato per studiare il trasporto dei nucleosidi e la via dipendente dalle NRK",
              "Tutti e tre: confrontati negli studi sul calo del NAD+ con l’età e sul mantenimento del NAD+ nei tessuti"
            ]
          },
          {
            h: "Studiare direttamente il NAD+",
            p: [
              "Lavorare con il NAD+ stesso elimina dall’equazione tutti i passaggi di conversione. Nei sistemi enzimatici e acellulari questo è decisivo, perché sirtuine, PARP e CD38 usano come substrato il NAD+, non i suoi precursori. Il NAD+ è studiato anche come molecola di segnalazione fuori dalla cellula, dove può modificare le proteine tramite ADP-ribosilazione.",
              "Poiché il metabolismo del NAD+ è strettamente legato ai mitocondri, viene spesso studiato insieme a composti di interesse mitocondriale come il MOTS-c, un peptide codificato nel DNA mitocondriale e studiato nella segnalazione metabolica."
            ]
          },
          {
            h: "Gestire il NAD+ in laboratorio",
            p: [
              "Il NAD+ si presenta come polvere liofilizzata che assorbe facilmente l’umidità. Tieni i flaconcini ben chiusi, all’asciutto, al riparo dalla luce e in frigorifero a 2–8 °C, oppure congelati a circa -20 °C per una conservazione più lunga. Apri un flaconcino freddo solo dopo che ha raggiunto la temperatura ambiente, per evitare la condensa.",
              "In soluzione il NAD+ è meno stabile che allo stato secco ed è sensibile a calore, luce e ambienti alcalini. Ricostituiscilo con un diluente sterile, tieni la soluzione al freddo e coperta ed evita sbalzi di temperatura ripetuti. Una soluzione che ingiallisce o diventa torbida va eliminata."
            ]
          }
        ],
        faq: [
          ["L’NMN è la stessa cosa del NAD+?", "No. L’NMN è un precursore che l’enzima NMNAT converte in NAD+. Il NAD+ è il coenzima attivo utilizzato da enzimi come sirtuine e PARP."],
          ["L’NR si trasforma in NMN?", "Sì. All’interno della cellula l’NR viene fosforilato dalle NR chinasi NRK1 e NRK2 e diventa NMN, che poi viene convertito in NAD+."],
          ["Il NAD+ può entrare direttamente nella cellula?", "Con difficoltà. Il NAD+ è grande e carico e fuori dalla cellula viene in gran parte scisso in molecole più piccole come NMN, NR e nicotinamide. Quanto ne entri intatto è ancora oggetto di ricerca."],
          ["NMN e NR sono niacina?", "Non esattamente. Con niacina si intende di solito l’acido nicotinico, a volte la nicotinamide. NMN e NR sono molecole affini della famiglia B3 che portano già una parte della struttura necessaria a formare il NAD+."],
          ["Quale delle tre forme è disponibile qui?", "Delle tre, qui viene proposto il NAD+ stesso, insieme al MOTS-c, un peptide di interesse mitocondriale. Entrambi sono disponibili in flaconcino liofilizzato o in penna preriempita per la ricerca."]
        ]
      }
    }
  }
];
