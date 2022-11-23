import Link from "next/link";

const Menu = () => {
  return (
    <main>
      <Link href="/">Anasayfa</Link>
      <Link href="/about">Hakkımızda</Link>
      <Link href="/contact">İletişim</Link>
    </main>
  );
};
export default Menu;
