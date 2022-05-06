import { createContext, useContext } from "react";
import { DRUPAL_URL } from "./constants";
import { DrupalState } from "@pantheon-systems/drupal-kit";

const DrupalStateContext = createContext();

// For each locale, make an instance of DrupalState (LocaleStore)
const makeLocaleStores = (locales) =>
  locales.map(
    (locale) =>
      new DrupalState({
        apiBase: DRUPAL_URL,
        defaultLocale: locale,
        debug: true,
      })
  );

const makeAuthStores = (locales) =>
  locales.map(
    (locale) =>
      new DrupalState({
        apiBase: DRUPAL_URL,
        defaultLocale: locale,
        debug: true,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      })
  );

// exporting so we can reuse in
// getStaticProps and getServerSideProps
export const globalDrupalStateStores = makeLocaleStores(process.env.locales);
export const globalDrupalStateAuthStores = makeAuthStores(process.env.locales);

export function DrupalStateWrapper({ children }) {
  return (
    <DrupalStateContext.Provider
      value={[...globalDrupalStateStores, ...globalDrupalStateAuthStores]}
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
  const [store] = localeStores.filter(
    ({ defaultLocale }) => defaultLocale === currentLocale
  );
  return store;
};
