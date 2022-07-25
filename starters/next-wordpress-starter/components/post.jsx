import Image from "next/image";
import Link from "next/link";

export default function Post({
  post: { title, date, featuredImage, content },
}) {
  return (
    <article className="prose lg:prose-xl mt-10 mx-auto">
      <h1>{title}</h1>
      <p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>

      <Link passHref href="/">
        <a className="font-normal">Home &rarr;</a>
      </Link>
      <div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
        {featuredImage && (
          <div
            className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10"
            style={{ height: "50vh" }}
          >
            <Image
              priority
              src={featuredImage.node.sourceUrl}
              layout="fill"
              objectFit="cover"
              alt="Featured Image"
            />
          </div>
        )}
      </div>

      <div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
        <div
          className="break-words"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
}
