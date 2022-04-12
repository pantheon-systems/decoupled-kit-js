import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="my-0 pt-10 px-5 text-xl">
      <nav>
        <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
          {[
            ["🏠 Home", "/"],
            ["📰 Articles", "/articles"],
            ["📑 Pages", "/pages"],
          ].map(([title, href]) => (
            <li className={`${href === "/" ? "mr-auto" : "mx-4"}`} key={href}>
              <Link className="font-sans" href={href}>
                <a className="hover:underline">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
