import Footer from "./footer";
import Header from "@pantheon-systems/nextjs-kit/header";
export default function Layout({ children, footerMenu }) {
  return (
    <div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
      <Header contentType="Posts" />
      <main className="mb-auto">{children}</main>
      <Footer menuItems={footerMenu} />
    </div>
  );
}
