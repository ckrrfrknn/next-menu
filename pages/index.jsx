import Head from "next/head";
import Layout from "../components/Layout";
import "../pages/_app.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ANASAYFA</title>
      </Head>
      <h1>Anasayfa</h1>
    </Layout>
  );
}
