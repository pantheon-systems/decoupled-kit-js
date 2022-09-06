import Footer from "./footer";
import Header from "./header";
import PreviewRibbion from "./preview-ribbon";

export default function Layout({ children, footerMenu, preview = false }) {
  return (
    <div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
      {preview && <PreviewRibbion />}
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer menuData={footerMenu} />
    </div>
  );
}
