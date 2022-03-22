import menuData from "../public/menuData.json";
import Link from "next/link";

export default function Footer() {
  const ExampleMenu = () => (
    <nav className="flex flex-col max-w-lg mx-auto lg:max-w-screen-lg">
      <ul>
        {menuData.map(({ title, id, url }) => {
          return (
            <li key={id} className="list-disc text-blue-300 ml-3">
              <Link href={url}>
                <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
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
