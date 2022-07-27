import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, footerMenu }) {
  return (
    <div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer menuData={footerMenu} />
    </div>
  );
}
