import { suite, describe, afterEach, beforeAll, expect, it, vi } from "vitest";
import * as utils from "../lib/drupalStateContext";

suite("drupalStateContextUtils", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("makeLocaleStores()", () => {
    const spy = vi.spyOn(utils, "makeLocaleStores");
    it("should make a store for each locale", () => {
      const locales = ["en", "es"];
      const stores = utils.makeLocaleStores({ locales });

      expect(stores.length).toEqual(2);
      expect(stores[0].defaultLocale).toEqual("en");
      expect(stores[1].defaultLocale).toEqual("es");
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it("should make a store for one locale", () => {
      const locales = ["es"];
      const stores = utils.makeLocaleStores({ locales });
      expect(stores.length).toEqual(1);
      expect(stores.defaultLocale).toBe(undefined);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it("should make an authenticated store for each locale if given auth credentials", () => {
      const locales = ["en", "es"];
      const stores = utils.makeLocaleStores({ locales, auth: true });

      expect(stores.length).toEqual(2);
      expect(stores[0].defaultLocale).toEqual("en");
      expect(stores[1].defaultLocale).toEqual("es");
      expect(stores.every((store) => store.auth)).toBe(true);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("getCurrentLocaleStore()", () => {
    const spy = vi.spyOn(utils, "getCurrentLocaleStore");
    let stores;
    beforeAll(() => {
      const locales = ["en", "es", "en-CA"];
      stores = utils.makeLocaleStores({ locales });
      expect(stores.length).toEqual(3);
    });
    it("should return the store for the current locale", () => {
      const currentLocale = "en";
      const store = utils.getCurrentLocaleStore(currentLocale, stores);
      expect(store.defaultLocale).toEqual("en");
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
