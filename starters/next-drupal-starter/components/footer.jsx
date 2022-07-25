import Link from "next/link";

export default function Footer({ menuData }) {
  const ExampleMenu = () => {
    const menuArr = [];
    if (menuData) {
      // some not so great code to account for nested menu elements
      for (let i = 0; i < menuData.length; i++) {
        if (menuData[i + 1] && menuData[i + 1].parent) {
          menuArr.push(
            <ul key={menuData[i].id}>
              <li className="list-disc text-blue-300 ml-3">
                <Link href={menuData[i].url}>
                  <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                    {menuData[i].title}
                  </a>
                </Link>
              </li>
              <li className="list-disc text-blue-300 ml-8">
                <Link href={menuData[i + 1].url}>
                  <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                    {menuData[i + 1].title}
                  </a>
                </Link>
              </li>
            </ul>
          );
          // increment iterator to skip the next render
          i++;
        } else {
          menuArr.push(
            <li key={menuData[i].id} className="list-disc text-blue-300 ml-3">
              <Link href={menuData[i].url}>
                <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                  {menuData[i].title}
                </a>
              </Link>
            </li>
          );
        }
      }
    }
    return (
      <nav className="flex flex-col max-w-lg mx-auto lg:max-w-screen-lg">
        <ul>{menuArr?.map((menu) => menu)}</ul>
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
