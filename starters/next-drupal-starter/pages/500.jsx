import Link from "next/link";

export default function Custom500() {
  // Possible TODO: display error from the global store if one exists 
  return (
    <div className="flex flex-col mx-auto prose-xl mt-20 w-fit">
      <h2 className="text-center">🛑 There was an error on the server 🛑</h2>
      <Link href="/">
        <a className="underline">Go Home</a>
      </Link>
    </div>
  );
}
