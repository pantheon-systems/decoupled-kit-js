import { IMAGE_URL } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Article({ imgSrc, title, body }) {
  return (
    <article className="prose lg:prose-xl mt-10 mx-auto">
      <h1>{title}</h1>

      <Link passHref href="/">
        <a className="font-nomral">Home &rarr;</a>
      </Link>

      <div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
        {imgSrc ? (
          <div
            className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10"
            style={{ height: "50vh" }}
          >
            <Image
              priority
              src={IMAGE_URL + imgSrc}
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </div>
        ) : null}
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </article>
  );
}
