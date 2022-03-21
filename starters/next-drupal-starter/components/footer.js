import menuData from "../public/menuData.json";
import Link from "next/link";

export default function Footer() {
  const ExampleMenu = () => (
    <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {menuData.map(({ title, id, url }) => {
        return (
          <Link key={id} href={url}>
            <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300 mx-2 p-3">
              {title}
            </a>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <footer className="min-w-full max-w-screen text-white bg-black p-4 mt-8">
      <ExampleMenu />
      <div className="flex my-4 p-2">
        <span className="mx-auto">
          © {new Date().getFullYear()} Built with{" "}
          <a
            className="text-white hover:text-blue-100 underline"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="text-blue-500 underline hover:text-blue-100"
            href="https://www.drupal.org/"
          >
            Drupal
          </a>
        </span>
      </div>
    </footer>
  );
}
