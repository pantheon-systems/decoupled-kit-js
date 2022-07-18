import { afterEach, describe, it, expect, vi } from "vitest";
import * as utils from "../lib/isMultiLanguage";

const spy = vi.spyOn(utils, "isMultiLanguage");

describe("isMultiLanguage()", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should return true if there are multiple locales", () => {
    expect(utils.isMultiLanguage(["en", "es"])).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it("should return false if there is one locale", () => {
    expect(utils.isMultiLanguage(["es"])).toBe(false);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
