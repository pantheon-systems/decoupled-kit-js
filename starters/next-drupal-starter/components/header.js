import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="my-0 mx-auto py-10 px-5 max-w-screen-sm">
      <header className="text-lg">
        <nav>
          <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between">
            {[
              ["🏠 Home", "/"],
              ["📑 Pages", "/pages"],
              ["📰 Articles", "/articles"],
              ["🍳 Recipes", "/recipes"],
            ].map(([title, href]) => (
              <li className="mx-4" key={href}>
                <Link className="text-lg font-sans" href={href}>
                  <a className="hover:underline">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
