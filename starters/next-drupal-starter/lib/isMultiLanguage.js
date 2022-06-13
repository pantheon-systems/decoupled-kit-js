/**
 * @param {import('next').GetServerSidePropsContext.locales | import('next').GetStaticPathsContext.locales | import('next').GetStaticPropsContext.locales | import('next').NextRouter.locales} locales - from Nextjs context
 * @returns {boolean} true if a site has multiple languages configured, otherwise false.
 */
export const isMultiLanguage = (locales) => (locales.length > 1 ? true : false);
