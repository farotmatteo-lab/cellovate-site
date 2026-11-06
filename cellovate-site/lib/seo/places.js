import { FRANCE_PLACES } from "./places-europe/france";
import { GERMANY_PLACES } from "./places-europe/germany";
import { SPAIN_PLACES } from "./places-europe/spain";
import { ITALY_PLACES } from "./places-europe/italy";
import { UK_PLACES } from "./places-europe/united-kingdom";

// Country and city pages served at /{lang}/peptides/{slug}.
// Each page carries its own local content (delivery, districts, practical
// notes) in every language it is published in, so no two pages are the same
// template with a different city name.
//
// delivery: shown in the delivery card. featured: product handles shown on
// the page (hidden or draft products are skipped automatically).

const TH_FEATURED = [
  "retatrutide-20mg",
  "tirzepatide",
  "bpc-157-tb-500-blend",
  "mots-c-10mg",
  "klow-80mg",
  "nad-1000mg",
];

const TH_RECOVERY_FIRST = [
  "bpc-157-tb-500-blend",
  "tb-500-10mg",
  "klow-80mg",
  "retatrutide-20mg",
  "cjc-1295-without-dac-ipamorelin",
  "mots-c-10mg",
];

const TH_LONGEVITY_FIRST = [
  "nad-1000mg",
  "mots-c-10mg",
  "ss-31",
  "glow-70mg-bpc157-tb500-ghk-cu",
  "retatrutide-20mg",
  "ghk-cu-50mg",
];

const THAILAND_PLACES = [
  // ───────────────────────────── THAILAND (country hub) ─────────────────────────────
  {
    slug: "thailand",
    type: "country",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_FEATURED,
    name: { en: "Thailand", th: "ประเทศไทย" },
    content: {
      en: {
        title: "Research Peptides in Thailand | Same-Day Pattaya Delivery",
        description:
          "Research peptides delivered across Thailand: same-day in Pattaya for orders before 7pm, 1–3 business days nationwide. Vials and pre-filled pens. Research use only.",
        h1: "Research peptides delivered across Thailand",
        intro:
          "Cellovate ships research peptides from Pattaya to every province in Thailand. Orders placed before 7pm are delivered the same day inside Pattaya, and the rest of the country receives tracked parcels in 1 to 3 business days. Every compound is available as a classic lyophilized vial or as a pre-filled pen, with prices shown in baht.",
        delivery: "Same day in Pattaya (order before 7pm) · 1–3 business days nationwide",
        sections: [
          {
            h: "Shipped from inside Thailand",
            p: [
              "Because stock leaves from Pattaya, nothing crosses a border on its way to you: no customs clearance, no weeks in international freight, no parcel sitting in an airport warehouse. A domestic courier hands it over in days, with tracking from dispatch to your door.",
              "That matters in a hot climate. Lyophilized peptides tolerate normal transit, but the shorter the journey, the less time a parcel spends in a delivery van at 35°C. Once it arrives, keep sealed vials somewhere cool and move reconstituted material to the fridge (2–8°C).",
            ],
          },
          {
            h: "Vials or pre-filled pens",
            p: [
              "Each compound comes in two formats. The vial is the standard lyophilized powder, to be reconstituted with bacteriostatic water. The pen is pre-filled and multi-dose, which removes the reconstitution step and is easier to handle in a small condo kitchen than a full bench setup.",
            ],
          },
        ],
        faq: [
          ["How long does delivery take in Thailand?", "Same day in Pattaya for orders placed before 7pm. Everywhere else in Thailand, 1 to 3 business days by tracked domestic courier."],
          ["Can I order by chat instead of the website?", "Yes. Send the product, dosage and format on WhatsApp and we confirm availability and delivery time before you pay."],
          ["How do I pay?", "By card or crypto at checkout. Prices are displayed in baht for visitors in Thailand."],
          ["Is the packaging discreet?", "Yes. Parcels are plain, with nothing on the outside that names the contents."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัยในประเทศไทย | ส่งพัทยาภายในวัน",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยทั่วประเทศไทย ส่งภายในวันในพัทยาเมื่อสั่งก่อน 19:00 น. ต่างจังหวัด 1–3 วันทำการ มีทั้งแบบขวดและปากกาพร้อมใช้ เพื่องานวิจัยเท่านั้น",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยทั่วประเทศไทย",
        intro:
          "Cellovate จัดส่งเปปไทด์สำหรับงานวิจัยจากพัทยาไปทุกจังหวัดทั่วประเทศ คำสั่งซื้อก่อน 19:00 น. จัดส่งถึงมือภายในวันเดียวกันในเขตพัทยา ส่วนจังหวัดอื่นได้รับพัสดุพร้อมเลขติดตามภายใน 1–3 วันทำการ ทุกรายการมีให้เลือกทั้งแบบขวดผงแห้ง (lyophilized) และแบบปากกาพร้อมใช้ แสดงราคาเป็นเงินบาท",
        delivery: "พัทยาส่งภายในวัน (สั่งก่อน 19:00 น.) · ทั่วประเทศ 1–3 วันทำการ",
        sections: [
          {
            h: "ส่งจากในประเทศไทย",
            p: [
              "สินค้าออกจากพัทยาโดยตรง จึงไม่ต้องผ่านศุลกากร ไม่ต้องรอขนส่งระหว่างประเทศหลายสัปดาห์ และไม่ต้องค้างอยู่ในคลังสนามบิน ขนส่งในประเทศส่งถึงภายในไม่กี่วัน พร้อมเลขติดตามตั้งแต่ส่งออกจนถึงหน้าบ้าน",
              "ในอากาศร้อนแบบเมืองไทย เรื่องนี้สำคัญมาก เปปไทด์แบบผงแห้งทนต่อการขนส่งปกติได้ แต่ยิ่งเดินทางสั้น พัสดุก็ยิ่งอยู่ในรถขนส่งที่ร้อน 35°C น้อยลง เมื่อได้รับแล้ว ควรเก็บขวดที่ยังไม่เปิดไว้ในที่เย็น และเก็บสารที่ผสมแล้วในตู้เย็น (2–8°C)",
            ],
          },
          {
            h: "แบบขวด หรือปากกาพร้อมใช้",
            p: [
              "ทุกสารมีสองรูปแบบ แบบขวดคือผงแห้งมาตรฐาน ต้องผสมกับน้ำ bacteriostatic ส่วนแบบปากกาบรรจุพร้อมใช้หลายครั้ง ไม่ต้องผสมเอง และจัดการได้ง่ายกว่าในพื้นที่จำกัดอย่างครัวคอนโด",
            ],
          },
        ],
        faq: [
          ["จัดส่งในประเทศไทยใช้เวลากี่วัน?", "ในพัทยาส่งภายในวันเมื่อสั่งก่อน 19:00 น. จังหวัดอื่นทั่วประเทศ 1–3 วันทำการ ผ่านขนส่งในประเทศพร้อมเลขติดตาม"],
          ["สั่งผ่านแชทแทนเว็บไซต์ได้ไหม?", "ได้ ส่งชื่อสินค้า ขนาด และรูปแบบมาทาง WhatsApp เราจะยืนยันสินค้าและเวลาจัดส่งก่อนชำระเงิน"],
          ["ชำระเงินอย่างไร?", "ชำระด้วยบัตรหรือคริปโตที่หน้าชำระเงิน ราคาแสดงเป็นเงินบาทสำหรับผู้เข้าชมในประเทศไทย"],
          ["บรรจุภัณฑ์มิดชิดไหม?", "มิดชิด กล่องพัสดุเรียบๆ ไม่มีข้อความระบุสิ่งของภายใน"],
        ],
      },
    },
  },

  // ───────────────────────────── PATTAYA ─────────────────────────────
  {
    slug: "pattaya",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_RECOVERY_FIRST,
    name: { en: "Pattaya", th: "พัทยา" },
    content: {
      en: {
        title: "Research Peptides Pattaya | Same-Day Delivery Before 7pm",
        description:
          "Research peptides in Pattaya with same-day delivery for orders placed before 7pm: Jomtien, Naklua, Pratumnak, Central Pattaya and East Pattaya. Vials and pens.",
        h1: "Research peptides in Pattaya, delivered the same day",
        intro:
          "Pattaya is where Cellovate ships from, so this is the fastest delivery we offer anywhere. Place your order before 7pm and it reaches you the same day, whether you are in a Jomtien condo, a Pratumnak villa or a house out in East Pattaya. No courier depot, no next-day wait.",
        delivery: "Same day for orders placed before 7pm · Orders after 7pm: next day",
        sections: [
          {
            h: "Where we deliver same day",
            p: [
              "Central Pattaya and Beach Road, Naklua and Wongamat, Pratumnak Hill, Jomtien and Na Jomtien, Thepprasit, East Pattaya out to Huay Yai and Nongprue, and the Mabprachan and Siam Country Club area. If you are just outside these zones, send your location on WhatsApp and we confirm the timing before you pay.",
            ],
          },
          {
            h: "Condos, hotels and the heat",
            p: [
              "Most of Pattaya lives in condos and hotels, where parcels are left with the reception or the juristic office. Same-day delivery shortens that wait, but it is still worth collecting promptly: a lobby in March or April is no place for research material.",
              "Sealed lyophilized vials are stable for normal handling. Once reconstituted, keep material at 2–8°C, away from light, and never leave it in a parked car or on a scooter seat.",
            ],
          },
          {
            h: "Built for Pattaya's training crowd",
            p: [
              "Pattaya has one of the densest concentrations of gyms, Muay Thai camps and Hyrox boxes in Thailand, and recovery research is what this crowd asks about most: BPC-157 and TB-500, the KLOW and GLOW blends, and the GH secretagogue stack CJC-1295 + Ipamorelin. Metabolic research compounds such as Retatrutide and Tirzepatide follow close behind.",
            ],
          },
        ],
        faq: [
          ["What is the cut-off for same-day delivery in Pattaya?", "7pm. Orders placed before 7pm are delivered the same day; orders placed later go out the next day."],
          ["Do you deliver to Jomtien, Naklua and East Pattaya?", "Yes, all of them, plus Pratumnak, Thepprasit, Huay Yai, Nongprue and the Mabprachan area."],
          ["Can I order by WhatsApp and pay on delivery?", "You can order by WhatsApp. Payment is made by card or crypto before dispatch."],
          ["Can I pick up in person?", "No. We work by delivery only, which is why same-day delivery is available across the city."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย พัทยา | ส่งภายในวัน สั่งก่อน 19:00 น.",
        description:
          "เปปไทด์สำหรับงานวิจัยในพัทยา ส่งภายในวันเมื่อสั่งก่อน 19:00 น. จอมเทียน นาเกลือ พระตำหนัก พัทยากลาง และพัทยาตะวันออก มีทั้งแบบขวดและปากกา",
        h1: "เปปไทด์สำหรับงานวิจัยในพัทยา ส่งถึงภายในวัน",
        intro:
          "Cellovate จัดส่งจากพัทยาโดยตรง พัทยาจึงเป็นพื้นที่ที่ส่งได้เร็วที่สุด สั่งก่อน 19:00 น. รับสินค้าได้ในวันเดียวกัน ไม่ว่าจะอยู่คอนโดจอมเทียน วิลล่าพระตำหนัก หรือบ้านในพัทยาตะวันออก ไม่ต้องผ่านคลังขนส่ง ไม่ต้องรอข้ามวัน",
        delivery: "ส่งภายในวันเมื่อสั่งก่อน 19:00 น. · สั่งหลัง 19:00 น. ส่งวันถัดไป",
        sections: [
          {
            h: "พื้นที่จัดส่งภายในวัน",
            p: [
              "พัทยากลางและถนนเลียบชายหาด นาเกลือและวงศ์อมาตย์ เขาพระตำหนัก จอมเทียนและนาจอมเทียน ถนนเทพประสิทธิ์ พัทยาตะวันออกไปถึงห้วยใหญ่และหนองปรือ รวมถึงย่านมาบประชันและสยามคันทรีคลับ หากอยู่นอกพื้นที่เหล่านี้เล็กน้อย ส่งตำแหน่งมาทาง WhatsApp เราจะยืนยันเวลาจัดส่งก่อนชำระเงิน",
            ],
          },
          {
            h: "คอนโด โรงแรม และอากาศร้อน",
            p: [
              "คนพัทยาส่วนใหญ่อยู่คอนโดหรือโรงแรม พัสดุมักถูกฝากไว้ที่ล็อบบี้หรือนิติบุคคล การส่งภายในวันช่วยลดเวลารอ แต่ก็ควรรีบไปรับ ล็อบบี้ในเดือนมีนาคมหรือเมษายนไม่ใช่ที่สำหรับเก็บสารวิจัย",
              "ขวดผงแห้งที่ยังไม่เปิดมีความคงตัวในการจัดเก็บปกติ แต่เมื่อผสมแล้วควรเก็บที่ 2–8°C พ้นแสง และห้ามทิ้งไว้ในรถที่จอดตากแดดหรือใต้เบาะมอเตอร์ไซค์",
            ],
          },
          {
            h: "สำหรับสายฝึกซ้อมในพัทยา",
            p: [
              "พัทยามียิม ค่ายมวยไทย และสนาม Hyrox หนาแน่นที่สุดแห่งหนึ่งของประเทศ กลุ่มนี้สนใจงานวิจัยด้านการฟื้นตัวมากที่สุด ได้แก่ BPC-157 และ TB-500 เบลนด์ KLOW และ GLOW และ CJC-1295 + Ipamorelin ตามมาด้วยสารวิจัยด้านเมตาบอลิซึมอย่าง Retatrutide และ Tirzepatide",
            ],
          },
        ],
        faq: [
          ["ต้องสั่งก่อนกี่โมงจึงจะส่งภายในวันในพัทยา?", "ก่อน 19:00 น. คำสั่งซื้อก่อนเวลานี้ส่งภายในวัน หลังจากนั้นจัดส่งวันถัดไป"],
          ["ส่งจอมเทียน นาเกลือ และพัทยาตะวันออกไหม?", "ส่งทั้งหมด รวมถึงพระตำหนัก เทพประสิทธิ์ ห้วยใหญ่ หนองปรือ และย่านมาบประชัน"],
          ["สั่งทาง WhatsApp แล้วจ่ายปลายทางได้ไหม?", "สั่งทาง WhatsApp ได้ แต่ชำระเงินด้วยบัตรหรือคริปโตก่อนจัดส่ง"],
          ["ไปรับสินค้าเองได้ไหม?", "ไม่ได้ เราให้บริการแบบจัดส่งเท่านั้น จึงสามารถส่งภายในวันได้ทั่วเมือง"],
        ],
      },
    },
  },

  // ───────────────────────────── BANGKOK ─────────────────────────────
  {
    slug: "bangkok",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_FEATURED,
    name: { en: "Bangkok", th: "กรุงเทพฯ" },
    content: {
      en: {
        title: "Research Peptides Bangkok | Tracked Delivery in 1–3 Days",
        description:
          "Research peptides delivered to Bangkok in 1–3 business days: Sukhumvit, Silom, Sathorn, Ari, Rama 9, Bangna and beyond. Vials and pre-filled pens, prices in baht.",
        h1: "Research peptides delivered to Bangkok",
        intro:
          "Bangkok orders leave our Pattaya base and travel up the motorway with a tracked domestic courier, reaching most of the city within 1 to 3 business days. There is no walk-in shop for research compounds in Bangkok, so delivery to your condo or office is the way to get them.",
        delivery: "1–3 business days, tracked",
        sections: [
          {
            h: "Districts we cover",
            p: [
              "Every district of the Bangkok Metropolitan Region: Sukhumvit from Nana to On Nut, Thonglor and Ekkamai, Silom, Sathorn and Rama 4, Ari, Ratchada, Rama 9 and Ladprao, Bangna and Udomsuk, and the outer areas of Nonthaburi, Thonburi and Samut Prakan.",
            ],
          },
          {
            h: "The juristic office problem",
            p: [
              "Almost every Bangkok condo routes parcels through the juristic office or the lobby desk, where they can wait for hours. Two habits help: order early in the week so a parcel does not sit through a weekend, and use the tracking link to collect it the day it lands. An office address with someone at reception is often the safer choice.",
            ],
          },
          {
            h: "Pens for small kitchens",
            p: [
              "Pre-filled pens suit Bangkok living. They remove the reconstitution step, which is the fiddliest part of working with lyophilized vials when the workspace is a studio kitchen.",
            ],
          },
        ],
        faq: [
          ["How fast is delivery to Bangkok?", "1 to 3 business days by tracked domestic courier."],
          ["Is there a shop I can visit in Bangkok?", "No. Research compounds are not sold over the counter; we deliver directly to your address."],
          ["Can you deliver to my office?", "Yes. An office with a staffed reception is often a better option than a condo lobby."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย กรุงเทพฯ | จัดส่ง 1–3 วันทำการ",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยถึงกรุงเทพฯ ภายใน 1–3 วันทำการ สุขุมวิท สีลม สาทร อารีย์ พระราม 9 บางนา และทุกเขต มีทั้งแบบขวดและปากกา ราคาเป็นเงินบาท",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยถึงกรุงเทพฯ",
        intro:
          "คำสั่งซื้อจากกรุงเทพฯ ส่งออกจากพัทยาผ่านขนส่งในประเทศพร้อมเลขติดตาม ถึงพื้นที่ส่วนใหญ่ของกรุงเทพฯ ภายใน 1–3 วันทำการ กรุงเทพฯ ไม่มีหน้าร้านขายสารวิจัย การจัดส่งถึงคอนโดหรือออฟฟิศจึงเป็นช่องทางหลัก",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม",
        sections: [
          {
            h: "เขตที่จัดส่ง",
            p: [
              "ทุกเขตในกรุงเทพฯ และปริมณฑล สุขุมวิทตั้งแต่นานาถึงอ่อนนุช ทองหล่อและเอกมัย สีลม สาทร และพระราม 4 อารีย์ รัชดา พระราม 9 และลาดพร้าว บางนาและอุดมสุข รวมถึงนนทบุรี ฝั่งธนบุรี และสมุทรปราการ",
            ],
          },
          {
            h: "ปัญหาพัสดุค้างที่นิติบุคคล",
            p: [
              "คอนโดเกือบทุกแห่งในกรุงเทพฯ ให้พัสดุไปพักที่นิติบุคคลหรือเคาน์เตอร์ล็อบบี้ ซึ่งอาจค้างอยู่หลายชั่วโมง มีสองวิธีที่ช่วยได้ คือสั่งช่วงต้นสัปดาห์เพื่อไม่ให้พัสดุค้างข้ามวันหยุด และใช้ลิงก์ติดตามเพื่อไปรับทันทีในวันที่ถึง การส่งไปออฟฟิศที่มีพนักงานต้อนรับมักปลอดภัยกว่า",
            ],
          },
          {
            h: "ปากกาสำหรับครัวเล็ก",
            p: [
              "แบบปากกาพร้อมใช้เหมาะกับชีวิตในกรุงเทพฯ เพราะไม่ต้องผสมเอง ซึ่งเป็นขั้นตอนที่ยุ่งยากที่สุดของขวดผงแห้งเมื่อพื้นที่ทำงานคือครัวห้องสตูดิโอ",
            ],
          },
        ],
        faq: [
          ["จัดส่งถึงกรุงเทพฯ ใช้เวลากี่วัน?", "1–3 วันทำการ ผ่านขนส่งในประเทศพร้อมเลขติดตาม"],
          ["มีหน้าร้านในกรุงเทพฯ ไหม?", "ไม่มี สารวิจัยไม่ได้วางขายหน้าร้าน เราจัดส่งตรงถึงที่อยู่ของคุณ"],
          ["ส่งไปที่ออฟฟิศได้ไหม?", "ได้ ออฟฟิศที่มีพนักงานต้อนรับมักเป็นตัวเลือกที่ดีกว่าล็อบบี้คอนโด"],
        ],
      },
    },
  },

  // ───────────────────────────── PHUKET ─────────────────────────────
  {
    slug: "phuket",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_RECOVERY_FIRST,
    name: { en: "Phuket", th: "ภูเก็ต" },
    content: {
      en: {
        title: "Research Peptides Phuket | Delivery to Villas, Condos & Camps",
        description:
          "Research peptides delivered to Phuket in 1–3 business days: Patong, Kata, Rawai, Chalong, Kamala, Bang Tao and Phuket Town. Vials and pre-filled pens.",
        h1: "Research peptides delivered to Phuket",
        intro:
          "Phuket orders ship by tracked courier and arrive within 1 to 3 business days, to Patong, Kata and Karon, Rawai and Chalong, the west-coast beaches from Kamala to Bang Tao, and Phuket Town. Villas, condos and training-camp accommodation all receive deliveries.",
        delivery: "1–3 business days, tracked",
        sections: [
          {
            h: "Island deliveries",
            p: [
              "Phuket is connected to the mainland by road, so parcels travel the normal domestic network rather than waiting for a ferry. Villas with no reception are the one exception to watch: give a phone number the courier can reach, and if you are out training during the day, a condo or hotel desk may be the easier address.",
            ],
          },
          {
            h: "Camps and long stays",
            p: [
              "Thousands of visitors spend weeks or months at the Muay Thai, MMA and fitness camps around Chalong and Rawai. For that crowd, recovery research is the main interest, with BPC-157 and TB-500 and the KLOW blend leading, alongside the GH secretagogue stack CJC-1295 + Ipamorelin.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Phuket take?", "1 to 3 business days by tracked domestic courier."],
          ["Do you deliver to villas without a reception?", "Yes. Add a phone number to the order so the courier can reach you on arrival."],
          ["Can I order from a training camp?", "Yes. Use the camp or accommodation address and your name as it appears at the front desk."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย ภูเก็ต | ส่งถึงวิลล่า คอนโด และค่ายมวย",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยถึงภูเก็ตภายใน 1–3 วันทำการ ป่าตอง กะตะ ราไวย์ ฉลอง กมลา บางเทา และตัวเมืองภูเก็ต มีทั้งแบบขวดและปากกา",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยถึงภูเก็ต",
        intro:
          "คำสั่งซื้อในภูเก็ตจัดส่งพร้อมเลขติดตาม ถึงภายใน 1–3 วันทำการ ทั้งป่าตอง กะตะและกะรน ราไวย์และฉลอง หาดฝั่งตะวันตกตั้งแต่กมลาถึงบางเทา และตัวเมืองภูเก็ต ส่งได้ทั้งวิลล่า คอนโด และที่พักในค่ายฝึก",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม",
        sections: [
          {
            h: "การจัดส่งบนเกาะ",
            p: [
              "ภูเก็ตเชื่อมกับแผ่นดินใหญ่ด้วยถนน พัสดุจึงใช้เครือข่ายขนส่งในประเทศปกติ ไม่ต้องรอเรือ ข้อควรระวังคือวิลล่าที่ไม่มีพนักงานต้อนรับ ควรใส่เบอร์โทรที่ขนส่งติดต่อได้ และหากออกไปซ้อมช่วงกลางวัน การส่งไปคอนโดหรือโรงแรมอาจสะดวกกว่า",
            ],
          },
          {
            h: "ค่ายฝึกและการพักระยะยาว",
            p: [
              "ผู้คนนับพันมาพักฝึกหลายสัปดาห์หรือหลายเดือนที่ค่ายมวยไทย MMA และฟิตเนสแถวฉลองและราไวย์ สำหรับกลุ่มนี้ งานวิจัยด้านการฟื้นตัวคือความสนใจหลัก นำโดย BPC-157 และ TB-500 และเบลนด์ KLOW รวมถึง CJC-1295 + Ipamorelin",
            ],
          },
        ],
        faq: [
          ["จัดส่งถึงภูเก็ตใช้เวลากี่วัน?", "1–3 วันทำการ ผ่านขนส่งในประเทศพร้อมเลขติดตาม"],
          ["ส่งวิลล่าที่ไม่มีพนักงานต้อนรับได้ไหม?", "ได้ ใส่เบอร์โทรในคำสั่งซื้อเพื่อให้ขนส่งติดต่อได้เมื่อมาถึง"],
          ["สั่งส่งไปที่ค่ายฝึกได้ไหม?", "ได้ ใช้ที่อยู่ของค่ายหรือที่พัก และชื่อที่ตรงกับที่ลงทะเบียนไว้กับเคาน์เตอร์"],
        ],
      },
    },
  },

  // ───────────────────────────── CHIANG MAI ─────────────────────────────
  {
    slug: "chiang-mai",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_LONGEVITY_FIRST,
    name: { en: "Chiang Mai", th: "เชียงใหม่" },
    content: {
      en: {
        title: "Research Peptides Chiang Mai | Tracked Delivery 1–3 Days",
        description:
          "Research peptides delivered to Chiang Mai in 1–3 business days: Nimman, Old City, Santitham, Chang Phueak, Hang Dong and San Kamphaeng. Vials and pens.",
        h1: "Research peptides delivered to Chiang Mai",
        intro:
          "Chiang Mai is the longest domestic run we make, and parcels still arrive within 1 to 3 business days by tracked courier: Nimmanhaemin, the Old City, Santitham, Chang Phueak, and the outer areas of Hang Dong, San Kamphaeng and Mae Rim.",
        delivery: "1–3 business days, tracked",
        sections: [
          {
            h: "A city of long-stay researchers",
            p: [
              "Chiang Mai's remote workers and long-stay residents have made the city a hub of the biohacking scene, with a strong interest in longevity and cellular-energy research: NAD+, MOTS-c and SS-31, along with the GLOW blend and GHK-Cu.",
            ],
          },
          {
            h: "Cool season, hot season",
            p: [
              "The cool months make Chiang Mai the easiest city in Thailand for storing material. March to May is the opposite: hot, and often hazy, with indoor temperatures that climb fast in houses without air conditioning. Keep reconstituted material at 2–8°C all year round.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Chiang Mai take?", "1 to 3 business days by tracked domestic courier."],
          ["Do you deliver outside the city centre?", "Yes, including Hang Dong, San Kamphaeng, Mae Rim and Saraphi."],
          ["Which formats are available?", "Every compound comes as a lyophilized vial or a pre-filled multi-dose pen."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย เชียงใหม่ | จัดส่ง 1–3 วันทำการ",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยถึงเชียงใหม่ภายใน 1–3 วันทำการ นิมมาน คูเมือง สันติธรรม ช้างเผือก หางดง และสันกำแพง มีทั้งแบบขวดและปากกา",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยถึงเชียงใหม่",
        intro:
          "เชียงใหม่เป็นเส้นทางที่ไกลที่สุดของเราในประเทศ แต่พัสดุก็ยังถึงภายใน 1–3 วันทำการพร้อมเลขติดตาม ทั้งนิมมานเหมินท์ คูเมือง สันติธรรม ช้างเผือก และรอบนอกอย่างหางดง สันกำแพง และแม่ริม",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม",
        sections: [
          {
            h: "เมืองของนักวิจัยที่พักระยะยาว",
            p: [
              "คนทำงานทางไกลและผู้พักอาศัยระยะยาวในเชียงใหม่ทำให้เมืองนี้เป็นศูนย์กลางของวงการไบโอแฮ็กกิ้ง โดยสนใจงานวิจัยด้านอายุยืนและพลังงานระดับเซลล์ ได้แก่ NAD+ MOTS-c และ SS-31 รวมถึงเบลนด์ GLOW และ GHK-Cu",
            ],
          },
          {
            h: "หน้าหนาว และหน้าร้อน",
            p: [
              "ช่วงหน้าหนาวทำให้เชียงใหม่เป็นเมืองที่เก็บสารได้ง่ายที่สุดในประเทศ แต่เดือนมีนาคมถึงพฤษภาคมตรงกันข้าม อากาศร้อนและมักมีหมอกควัน อุณหภูมิในบ้านที่ไม่มีแอร์สูงขึ้นเร็ว ควรเก็บสารที่ผสมแล้วที่ 2–8°C ตลอดทั้งปี",
            ],
          },
        ],
        faq: [
          ["จัดส่งถึงเชียงใหม่ใช้เวลากี่วัน?", "1–3 วันทำการ ผ่านขนส่งในประเทศพร้อมเลขติดตาม"],
          ["ส่งนอกตัวเมืองไหม?", "ส่ง รวมถึงหางดง สันกำแพง แม่ริม และสารภี"],
          ["มีรูปแบบไหนบ้าง?", "ทุกสารมีทั้งแบบขวดผงแห้ง และแบบปากกาพร้อมใช้หลายครั้ง"],
        ],
      },
    },
  },

  // ───────────────────────────── HUA HIN ─────────────────────────────
  {
    slug: "hua-hin",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_LONGEVITY_FIRST,
    name: { en: "Hua Hin", th: "หัวหิน" },
    content: {
      en: {
        title: "Research Peptides Hua Hin | Delivery to Hua Hin & Cha-am",
        description:
          "Research peptides delivered to Hua Hin and Cha-am in 1–3 business days: town centre, Khao Takiab, Soi 88, Black Mountain and Pranburi. Vials and pens.",
        h1: "Research peptides delivered to Hua Hin",
        intro:
          "Hua Hin and Cha-am receive tracked deliveries within 1 to 3 business days: the town centre, Khao Takiab, the Soi 88 and Black Mountain areas inland, and south to Pranburi.",
        delivery: "1–3 business days, tracked",
        sections: [
          {
            h: "Houses and golf estates",
            p: [
              "Much of Hua Hin lives in houses and gated estates rather than condos, which makes delivery straightforward: the parcel comes to your door. Add a phone number in case the security gate needs to call ahead.",
            ],
          },
          {
            h: "Longevity research in Hua Hin",
            p: [
              "Hua Hin's mature, health-focused community leans towards longevity research rather than performance research: NAD+, MOTS-c, SS-31 and the copper peptide GHK-Cu, with Retatrutide close behind for metabolic research.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Cha-am and Pranburi?", "Yes. Both are covered within 1 to 3 business days."],
          ["Can you deliver inside a gated estate?", "Yes. Include a phone number so the courier can be let in at the gate."],
          ["How do I pay?", "By card or crypto at checkout, with prices shown in baht."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย หัวหิน | จัดส่งหัวหินและชะอำ",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยถึงหัวหินและชะอำภายใน 1–3 วันทำการ ตัวเมือง เขาตะเกียบ ซอย 88 แบล็คเมาน์เทน และปราณบุรี มีทั้งแบบขวดและปากกา",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยถึงหัวหิน",
        intro:
          "หัวหินและชะอำได้รับพัสดุพร้อมเลขติดตามภายใน 1–3 วันทำการ ทั้งตัวเมือง เขาตะเกียบ ย่านซอย 88 และแบล็คเมาน์เทน ไปจนถึงปราณบุรี",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม",
        sections: [
          {
            h: "บ้านและหมู่บ้านสนามกอล์ฟ",
            p: [
              "คนหัวหินจำนวนมากอยู่บ้านและหมู่บ้านจัดสรรมากกว่าคอนโด การจัดส่งจึงง่าย พัสดุถึงหน้าบ้านโดยตรง ใส่เบอร์โทรไว้เผื่อป้อมยามต้องโทรแจ้งก่อน",
            ],
          },
          {
            h: "งานวิจัยด้านอายุยืนในหัวหิน",
            p: [
              "ชุมชนหัวหินที่ใส่ใจสุขภาพสนใจงานวิจัยด้านอายุยืนมากกว่าด้านสมรรถภาพ ได้แก่ NAD+ MOTS-c SS-31 และคอปเปอร์เปปไทด์ GHK-Cu ตามด้วย Retatrutide สำหรับงานวิจัยด้านเมตาบอลิซึม",
            ],
          },
        ],
        faq: [
          ["ส่งชะอำและปราณบุรีไหม?", "ส่ง ทั้งสองพื้นที่ภายใน 1–3 วันทำการ"],
          ["ส่งเข้าหมู่บ้านที่มีป้อมยามได้ไหม?", "ได้ ใส่เบอร์โทรเพื่อให้ขนส่งผ่านประตูเข้าไปได้"],
          ["ชำระเงินอย่างไร?", "ชำระด้วยบัตรหรือคริปโตที่หน้าชำระเงิน แสดงราคาเป็นเงินบาท"],
        ],
      },
    },
  },

  // ───────────────────────────── KOH SAMUI ─────────────────────────────
  {
    slug: "koh-samui",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_LONGEVITY_FIRST,
    name: { en: "Koh Samui", th: "เกาะสมุย" },
    content: {
      en: {
        title: "Research Peptides Koh Samui | Island Delivery, Tracked",
        description:
          "Research peptides delivered to Koh Samui by tracked courier: Chaweng, Lamai, Bophut, Fisherman's Village, Maenam and Nathon. Vials and pre-filled pens.",
        h1: "Research peptides delivered to Koh Samui",
        intro:
          "Parcels for Koh Samui travel by the regular courier network and cross on the car ferry from Don Sak, reaching Chaweng, Lamai, Bophut and Fisherman's Village, Maenam and Nathon within our 1 to 3 business day window.",
        delivery: "1–3 business days, tracked (islands at the upper end)",
        sections: [
          {
            h: "Ferry timing",
            p: [
              "Because of the ferry crossing, Samui deliveries usually land at the upper end of the window rather than the next day. Rough-sea days can add a little more. Ordering early in the week keeps your parcel from waiting over a weekend at a depot.",
            ],
          },
          {
            h: "Retreats and wellness stays",
            p: [
              "Samui's detox retreats and wellness resorts make longevity research the island's main interest: NAD+, MOTS-c, SS-31 and the GLOW blend. For villa deliveries, give a phone number and a pin location, since many Samui addresses are hard for couriers to find.",
            ],
          },
        ],
        faq: [
          ["How long does delivery to Koh Samui take?", "Within 1 to 3 business days, usually at the upper end because of the ferry crossing."],
          ["Can you deliver to a villa?", "Yes. Add a phone number and share a map pin on WhatsApp to help the courier."],
          ["Do you deliver to Koh Phangan and Koh Tao?", "Message us on WhatsApp with the address and we confirm timing before you order."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย เกาะสมุย | จัดส่งถึงเกาะ พร้อมเลขติดตาม",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยถึงเกาะสมุยพร้อมเลขติดตาม เฉวง ละไม บ่อผุด หมู่บ้านชาวประมง แม่น้ำ และหน้าทอน มีทั้งแบบขวดและปากกา",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยถึงเกาะสมุย",
        intro:
          "พัสดุไปเกาะสมุยใช้เครือข่ายขนส่งปกติและข้ามเรือเฟอร์รี่จากดอนสัก ถึงเฉวง ละไม บ่อผุดและหมู่บ้านชาวประมง แม่น้ำ และหน้าทอน ภายในกรอบเวลา 1–3 วันทำการ",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม (พื้นที่เกาะใช้เวลาใกล้ขอบบน)",
        sections: [
          {
            h: "เวลาข้ามเรือ",
            p: [
              "เนื่องจากต้องข้ามเรือ พัสดุไปสมุยมักถึงช่วงปลายของกรอบเวลา ไม่ใช่วันถัดไป วันที่คลื่นลมแรงอาจใช้เวลาเพิ่มเล็กน้อย การสั่งช่วงต้นสัปดาห์ช่วยไม่ให้พัสดุค้างที่คลังข้ามวันหยุด",
            ],
          },
          {
            h: "รีทรีตและการพักเพื่อสุขภาพ",
            p: [
              "รีทรีตดีท็อกซ์และรีสอร์ตเพื่อสุขภาพบนเกาะ ทำให้งานวิจัยด้านอายุยืนเป็นความสนใจหลัก ได้แก่ NAD+ MOTS-c SS-31 และเบลนด์ GLOW สำหรับการส่งวิลล่า ควรใส่เบอร์โทรและแชร์ตำแหน่งบนแผนที่ เพราะที่อยู่บนเกาะหลายแห่งหายาก",
            ],
          },
        ],
        faq: [
          ["จัดส่งถึงเกาะสมุยใช้เวลากี่วัน?", "ภายใน 1–3 วันทำการ ส่วนใหญ่อยู่ช่วงปลายเพราะต้องข้ามเรือ"],
          ["ส่งวิลล่าได้ไหม?", "ได้ ใส่เบอร์โทรและแชร์หมุดแผนที่ทาง WhatsApp เพื่อช่วยขนส่ง"],
          ["ส่งเกาะพะงันและเกาะเต่าไหม?", "ส่งที่อยู่มาทาง WhatsApp เราจะยืนยันเวลาจัดส่งก่อนสั่งซื้อ"],
        ],
      },
    },
  },

  // ───────────────────────────── CHONBURI ─────────────────────────────
  {
    slug: "chonburi",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_FEATURED,
    name: { en: "Chonburi", th: "ชลบุรี" },
    content: {
      en: {
        title: "Research Peptides Chonburi | Si Racha, Bang Saen, Amata",
        description:
          "Research peptides delivered across Chonburi province: Chonburi city, Bang Saen, Si Racha, Laem Chabang, Amata City and Bo Win. Shipped from nearby Pattaya.",
        h1: "Research peptides delivered across Chonburi",
        intro:
          "We ship from Pattaya, inside Chonburi province, so the rest of the province is the shortest courier run we make outside the city: Chonburi town, Bang Saen, Si Racha and Laem Chabang, the Amata City and Pinthong industrial estates, and Bo Win.",
        delivery: "1–3 business days, tracked · Pattaya: same day before 7pm",
        sections: [
          {
            h: "Si Racha and the industrial estates",
            p: [
              "Si Racha's large Japanese community and the engineers working the Eastern Seaboard estates make Chonburi a busy delivery area. Deliveries go to condos in Si Racha town as well as to company dormitories and estate offices; use the address where someone signs for parcels during the day.",
            ],
          },
          {
            h: "Closer than you think",
            p: [
              "If you are on the southern edge of the province, near Bang Lamung or Huay Yai, you may fall inside our Pattaya same-day zone. Send your location on WhatsApp and we tell you which applies before you order.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Si Racha and Amata City?", "Yes, within 1 to 3 business days."],
          ["Is same-day delivery available outside Pattaya?", "Areas next to Pattaya, such as Bang Lamung and Huay Yai, may qualify. Ask on WhatsApp with your location."],
          ["Can I have it delivered to my workplace?", "Yes. A staffed office or estate reception is a good option."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย ชลบุรี | ศรีราชา บางแสน อมตะ",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยทั่วจังหวัดชลบุรี ตัวเมืองชลบุรี บางแสน ศรีราชา แหลมฉบัง อมตะซิตี้ และบ่อวิน ส่งจากพัทยาซึ่งอยู่ใกล้",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยทั่วชลบุรี",
        intro:
          "เราส่งจากพัทยาซึ่งอยู่ในจังหวัดชลบุรี พื้นที่อื่นในจังหวัดจึงเป็นเส้นทางที่สั้นที่สุดนอกตัวเมือง ทั้งตัวเมืองชลบุรี บางแสน ศรีราชาและแหลมฉบัง นิคมอุตสาหกรรมอมตะซิตี้และปิ่นทอง และบ่อวิน",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม · พัทยา: ส่งภายในวันเมื่อสั่งก่อน 19:00 น.",
        sections: [
          {
            h: "ศรีราชาและนิคมอุตสาหกรรม",
            p: [
              "ชุมชนชาวญี่ปุ่นในศรีราชา และวิศวกรในนิคมอุตสาหกรรมภาคตะวันออก ทำให้ชลบุรีเป็นพื้นที่จัดส่งที่คึกคัก เราส่งได้ทั้งคอนโดในตัวเมืองศรีราชา หอพักบริษัท และสำนักงานในนิคม ควรใช้ที่อยู่ที่มีคนเซ็นรับพัสดุในช่วงกลางวัน",
            ],
          },
          {
            h: "ใกล้กว่าที่คิด",
            p: [
              "หากอยู่ทางใต้ของจังหวัด ใกล้บางละมุงหรือห้วยใหญ่ อาจอยู่ในพื้นที่ส่งภายในวันของพัทยา ส่งตำแหน่งมาทาง WhatsApp เราจะแจ้งก่อนสั่งซื้อว่าเข้าเงื่อนไขแบบไหน",
            ],
          },
        ],
        faq: [
          ["ส่งศรีราชาและอมตะซิตี้ไหม?", "ส่ง ภายใน 1–3 วันทำการ"],
          ["นอกพัทยาส่งภายในวันได้ไหม?", "พื้นที่ติดพัทยา เช่น บางละมุงและห้วยใหญ่ อาจได้ สอบถามทาง WhatsApp พร้อมตำแหน่ง"],
          ["ส่งไปที่ทำงานได้ไหม?", "ได้ สำนักงานหรือเคาน์เตอร์นิคมที่มีพนักงานเป็นตัวเลือกที่ดี"],
        ],
      },
    },
  },

  // ───────────────────────────── KRABI ─────────────────────────────
  {
    slug: "krabi",
    type: "city",
    country: "thailand",
    locales: ["en", "th"],
    featured: TH_RECOVERY_FIRST,
    name: { en: "Krabi", th: "กระบี่" },
    content: {
      en: {
        title: "Research Peptides Krabi | Delivery to Ao Nang & Krabi Town",
        description:
          "Research peptides delivered to Krabi in 1–3 business days: Ao Nang, Krabi Town, Klong Muang, Tubkaek and Railay pick-up points. Vials and pre-filled pens.",
        h1: "Research peptides delivered to Krabi",
        intro:
          "Krabi receives tracked deliveries within 1 to 3 business days: Ao Nang, Krabi Town, Nopparat Thara, Klong Muang and Tubkaek. Railay has no road access, so parcels there go to an Ao Nang address for collection.",
        delivery: "1–3 business days, tracked",
        sections: [
          {
            h: "Climbers, divers and long stays",
            p: [
              "Krabi's rock-climbing and diving community trains hard on tendons and joints, and recovery research is the natural focus here: BPC-157 and TB-500, TB-500 on its own, and the KLOW blend.",
            ],
          },
          {
            h: "Resort and guesthouse deliveries",
            p: [
              "Resorts and guesthouses in Ao Nang accept parcels at reception. Ask the front desk to keep the parcel out of the sun and collect it when you get back, since reception areas along the beach road heat up quickly in the afternoon.",
            ],
          },
        ],
        faq: [
          ["Do you deliver to Railay?", "Railay has no road access. Use an Ao Nang address or a resort that holds parcels for guests."],
          ["How long does delivery to Krabi take?", "1 to 3 business days by tracked domestic courier."],
          ["Can I send the parcel to my resort?", "Yes. Use the resort address and the name your booking is under."],
        ],
      },
      th: {
        title: "เปปไทด์สำหรับงานวิจัย กระบี่ | ส่งอ่าวนางและตัวเมืองกระบี่",
        description:
          "จัดส่งเปปไทด์สำหรับงานวิจัยถึงกระบี่ภายใน 1–3 วันทำการ อ่าวนาง ตัวเมืองกระบี่ คลองม่วง ทับแขก และจุดรับของไร่เลย์ มีทั้งแบบขวดและปากกา",
        h1: "จัดส่งเปปไทด์สำหรับงานวิจัยถึงกระบี่",
        intro:
          "กระบี่ได้รับพัสดุพร้อมเลขติดตามภายใน 1–3 วันทำการ ทั้งอ่าวนาง ตัวเมืองกระบี่ หาดนพรัตน์ธารา คลองม่วง และทับแขก ไร่เลย์ไม่มีถนนเข้าถึง พัสดุจึงต้องส่งไปที่อยู่ในอ่าวนางเพื่อรับต่อ",
        delivery: "1–3 วันทำการ พร้อมเลขติดตาม",
        sections: [
          {
            h: "นักปีนผา นักดำน้ำ และผู้พักระยะยาว",
            p: [
              "ชุมชนปีนผาและดำน้ำในกระบี่ใช้เอ็นและข้อต่อหนัก งานวิจัยด้านการฟื้นตัวจึงเป็นความสนใจหลัก ได้แก่ BPC-157 และ TB-500 TB-500 แบบเดี่ยว และเบลนด์ KLOW",
            ],
          },
          {
            h: "การส่งไปรีสอร์ตและเกสต์เฮาส์",
            p: [
              "รีสอร์ตและเกสต์เฮาส์ในอ่าวนางรับพัสดุไว้ที่เคาน์เตอร์ ควรขอให้เก็บพัสดุให้พ้นแดดและไปรับเมื่อกลับถึงที่พัก เพราะบริเวณเคาน์เตอร์ริมถนนชายหาดร้อนเร็วในช่วงบ่าย",
            ],
          },
        ],
        faq: [
          ["ส่งไร่เลย์ไหม?", "ไร่เลย์ไม่มีถนนเข้าถึง ใช้ที่อยู่ในอ่าวนาง หรือรีสอร์ตที่รับฝากพัสดุให้แขก"],
          ["จัดส่งถึงกระบี่ใช้เวลากี่วัน?", "1–3 วันทำการ ผ่านขนส่งในประเทศพร้อมเลขติดตาม"],
          ["ส่งไปที่รีสอร์ตได้ไหม?", "ได้ ใช้ที่อยู่ของรีสอร์ตและชื่อที่ใช้จองห้องพัก"],
        ],
      },
    },
  },
];

export const PLACES = [
  ...THAILAND_PLACES,
  ...FRANCE_PLACES,
  ...GERMANY_PLACES,
  ...SPAIN_PLACES,
  ...ITALY_PLACES,
  ...UK_PLACES,
];

export function getPlace(slug) {
  return PLACES.find((p) => p.slug === slug);
}

export function placesInCountry(country) {
  return PLACES.filter((p) => p.country === country && p.type === "city");
}

export function countryHub(country) {
  return PLACES.find((p) => p.country === country && p.type === "country");
}
