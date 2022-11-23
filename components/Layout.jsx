import Head from "next/head";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Siteme Hoşgeldiniz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-wdith" />
      </Head>
      <main>
        <Menu />
        {children}
        <footer>Design by furkan</footer>
      </main>
    </div>
  );
};
export default Layout;
