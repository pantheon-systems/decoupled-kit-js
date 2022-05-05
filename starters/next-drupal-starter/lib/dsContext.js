import { createContext } from "react";
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
      })
  );

export const globalDrupalStateStores = makeLocaleStores(process.env.locales);

export function DrupalStateWrapper({ children }) {
  return (
    <DrupalStateContext.Provider value={globalDrupalStateStores}>
      {children}
    </DrupalStateContext.Provider>
  );
}
