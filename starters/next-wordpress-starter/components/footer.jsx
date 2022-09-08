import Link from "next/link";

export default function Footer({ menuItems = [] }) {
  const FooterMenu = () => (
    <nav className="flex flex-col max-w-lg mx-auto lg:max-w-screen-lg">
      <ul>
        {menuItems.map(({ label, path, id }) => {
          return (
            <li
              key={id}
              className="list-disc text-blue-300 hover:text-blue-100 ml-3"
            >
              <Link href={`/posts${path}`}>
                <a className="hover:underline focus:text-purple-600  active:text-purple-300">
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <footer className="w-full text-white bg-black p-4 mt-12">
      <FooterMenu />
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
            href="https://wordpress.com/"
          >
            WordPress
          </a>
        </span>
      </div>
    </footer>
  );
}
