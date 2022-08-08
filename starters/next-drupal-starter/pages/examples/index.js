import { DrupalClient } from "next-drupal"

import { isMultiLanguage } from "../../lib/isMultiLanguage.js";

import Layout from "../../components/layout";
import PageHeader from "../../components/page-header.js";
import Link from "next/link";

export default function LandingSSRExample({
  menues,
}) {
  return (
    
    <Layout footerMenu={menues}>
      <PageHeader title="Pantheon Decoupled Examples" />
      <div className="mt-12 mx-auto max-w-[50vw]">
      <ul><strong></strong>
          
      <li className="prose justify-items-start" key="id">
                <h2>Drupalcon Landing page</h2>
                <div id="Summary" />Example using Next.js to consume json from Drupal 
                <br></br>
                <Link
                  passHref
                  href="/examples/landing/drupalcon">
                  <a className="font-normal underline">Read more →</a>
                </Link>
              </li>

              <li className="prose justify-items-start" key="id">
                <h2>Pagination</h2>
                <div id="Summary" />Example doing Pagination 
                <br></br>
                <Link
                  passHref
                  href="examples/pagination">
                  <a className="font-normal underline">Read more →</a>
                </Link>
              </li>
            

        </ul>
        </div>

    </Layout>
  )
}


