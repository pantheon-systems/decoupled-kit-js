import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
}
