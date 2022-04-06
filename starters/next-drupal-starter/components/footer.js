import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Footer() {
  const { locale } = useRouter();

  const menuData = useMemo(
    () => require(`../public/${locale}-menuData.json`),
    [locale]
  );

  const ExampleMenu = () => {
    return (
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
  };
  return (
    <footer className="w-full text-white bg-black p-4 mt-12">
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
