import CellovateStore from "../../components/CellovateStore";
import Seo, { breadcrumbLd } from "../../components/Seo";

export default function ShopPage() {
  return (
    <>
      <Seo
        title="Shop Research Peptides | Cellovate Advanced Peptides"
        description="BPC-157, TB-500, GHK-Cu, CJC-1295, Ipamorelin, SS-31, NAD+ and more — research-grade peptides, third-party tested on every batch. For research use only."
        jsonLd={breadcrumbLd([["Home", "/"], ["Shop", "/shop"]])}
      />
      <CellovateStore />
    </>
  );
}
