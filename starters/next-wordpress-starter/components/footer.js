export default function Footer() {
  return (
    <footer className="w-full text-white bg-black p-4 mt-12">
      
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
            Wordpress
          </a>
        </span>
      </div>
    </footer>
  );
}
