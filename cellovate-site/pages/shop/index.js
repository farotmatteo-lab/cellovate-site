import Head from "next/head";
import CellovateStore from "../../components/CellovateStore";

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Shop | Cellovate Advanced Peptides</title>
        <meta
          name="description"
          content="Research-grade peptides supplied for laboratory use. Not for human consumption."
        />
      </Head>
      <CellovateStore />
    </>
  );
}
