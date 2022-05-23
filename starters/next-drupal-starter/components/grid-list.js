import { IMAGE_URL } from "../lib/constants";

import Grid from "./grid";
import Image from "next/image";
import Link from "next/link";

export default function GridList({ contentArr, contentType, multiLanguage }) {
  return (
    <>
      {contentArr ? (
        <Grid>
          {contentArr?.map((content) => {
            const imgSrc =
              content.field_media_image?.field_media_image?.uri?.url || "";
            return (
              <Link
                passHref
                href={`${multiLanguage ? `/${content.path.langcode}` : ""}${
                  content.path.alias
                }`}
                key={content.id}
              >
                <a>
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
                    <div className="flex-shrink-0 relative h-40">
                      {imgSrc !== "" ? (
                        <Image
                          src={IMAGE_URL + imgSrc}
                          layout="fill"
                          objectFit="cover"
                          alt={
                            content?.field_media_image?.field_media_image
                              ?.resourceIdObjMeta?.alt ||
                            content?.field_media_image.field_media_image
                              .filename
                          }
                        />
                      ) : (
                        <Image
                          src="/pantheon.png"
                          alt="Pantheon Logo"
                          layout="fill"
                          className="bg-black"
                        />
                      )}
                    </div>
                    <h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
                      {content.title} &rarr;
                    </h2>
                    {content?.field_recipe_category && (
                      <span className="text-right pb-2 pr-3 text-sm text-slate-400">
                        {content?.field_recipe_category[0].name}
                      </span>
                    )}
                  </div>
                </a>
              </Link>
            );
          })}
        </Grid>
      ) : (
        <h2 className="text-xl text-center mt-14">No {contentType} found 🏜</h2>
      )}
    </>
  );
}
