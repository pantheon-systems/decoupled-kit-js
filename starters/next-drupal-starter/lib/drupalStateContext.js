import { createContext, useContext } from "react";
import { DRUPAL_URL } from "./constants";
import { DrupalState } from "@pantheon-systems/drupal-kit";

const DrupalStateContext = createContext();

// For each locale, make an instance of DrupalState (LocaleStore)
const makeLocaleStores = ({ locales, auth = false, debug = false }) =>
  locales.length > 1
    ? locales.map(
        (locale) =>
          new DrupalState({
            apiBase: DRUPAL_URL,
            defaultLocale: locale,
            debug: debug,
            ...(auth && {
              clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
            }),
          })
      )
    : [
        new DrupalState({
          apiBase: DRUPAL_URL,
          debug: debug,
          ...(auth && {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
          }),
        }),
      ];

// exporting so we can reuse in
// getStaticProps and getServerSideProps
export const globalDrupalStateStores = makeLocaleStores({
  locales: process.env.locales,
  debug: process.env.DEBUG_MODE || false,
});

export const globalDrupalStateAuthStores = makeLocaleStores({
  locales: process.env.locales,
  auth: true,
  debug: process.env.DEBUG_MODE || false,
});

export function DrupalStateWrapper({ children }) {
  return (
    <DrupalStateContext.Provider
      value={{
        authStores: [...globalDrupalStateAuthStores],
        stores: [...globalDrupalStateStores],
      }}
    >
      {children}
    </DrupalStateContext.Provider>
  );
}

export function useDSContext() {
  return useContext(DrupalStateContext);
}

// Helper functions

/**
 * Helper function to get the store based on current locale
 * @param {string} currentLocale the current locale of the page
 * @param {array} localeStores the global stores either from useDSContext or globalDrupalStateStores
 * @returns a single PantheonDrupalState store
 */
export const getCurrentLocaleStore = (currentLocale, localeStores) => {
  // check store locale and return the store that matches
  // or for monolingual sites return the store
  const [store] =
    localeStores.length > 1
      ? localeStores.filter(
          ({ defaultLocale }) => defaultLocale === currentLocale
        )
      : localeStores;
  return store;
};
