import Head from "next/head";
import CellovateStore from "../../components/CellovateStore";

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Shop | Cellovate Advanced Peptides</title>
        <meta
          name="description"
          content="Research-grade peptides. Third-party tested. For research use only."
        />
      </Head>
      <CellovateStore />
    </>
  );
}
