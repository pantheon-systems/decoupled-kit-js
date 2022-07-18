import { afterEach, describe, it, expect, vi } from "vitest";
import { getPaths } from "../lib/getPaths";
import { globalDrupalStateStores } from "../lib/drupalStateContext";

import umamiPaths from "./data/umamiPaths.json";
import defaultProfilePaths from "./data/defaultProfilePaths.json";

const mockGetPaths = vi.fn().mockImplementation(getPaths);

describe("getPaths()", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const mockContext = {
    locales: process.env.locales,
  };
  it("should return an array of paths", async () => {
    const paths = await mockGetPaths(
      mockContext,
      globalDrupalStateStores,
      "node--article",
      "slug",
      "articles",
      false
    );

    if (PROFILE === "umami") {
      expect(paths).toEqual(umamiPaths);
    } else if (PROFILE === "default") {
      expect(paths).toEqual(defaultProfilePaths);
    }
    expect(mockGetPaths).toHaveBeenCalled(1);
  });
  it("should return an empty array if failGracefully is true", async () => {
    const paths = await mockGetPaths(
      mockContext,
      globalDrupalStateStores,
      "node--x",
      "slug",
      "pages",
      true
    );

    expect(paths).toEqual([]);
    expect(mockGetPaths).toHaveBeenCalled(1);
  });
});
