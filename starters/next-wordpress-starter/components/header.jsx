import Link from "next/link";

export default function Header() {
  return (
    <div className="my-0 pt-10 px-5 text-xl">
      <nav>
        <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
          {[
            ["🏠 Home", "/"],
            ["📰 Posts", "/posts"],
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
