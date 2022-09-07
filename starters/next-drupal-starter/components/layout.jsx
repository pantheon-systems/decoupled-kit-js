import Footer from "./footer";
import Header from "./header";
import PreviewRibbon from "./preview-ribbon";

export default function Layout({ children, footerMenu, preview = false }) {
  return (
    <div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
      {preview && <PreviewRibbon />}
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer menuData={footerMenu} />
    </div>
  );
}
