import Link from "next/link";
import "../pages/_app.js";
const Menu = () => {
  return (
    <div>
      <nav>
        <Link href="/">Anasayfa</Link>
        <Link href="/about">Hakkımızda</Link>
        <Link href="/contact">İletişim</Link>
      </nav>
    </div>
  );
};
export default Menu;
