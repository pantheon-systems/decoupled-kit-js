import { describe, it, expect } from "vitest";
import { getPreview } from "../lib/getPreview";

describe("getPreview()", () => {
  it("should return preview parameters if there is a revision in the preview data", async () => {
    const mockContext = {
      previewData: {
        resourceVersionId: "123",
        previewLang: "en",
      },
    };
    const params = await getPreview(
      mockContext,
      "node--article",
      "includes=field_media_image.field_media_image"
    );
    expect(params).toEqual(
      "includes=field_media_image.field_media_image&resourceVersion=id:123"
    );
  });
  it("should not modify parameters if there is no revision in previewData", async () => {
    const umamiKey = "1_00517b73-f66c-43eb-93b1-444a68ab97d8";
    const defaultKey = "1_d4b52b83-e92a-4a4f-b2de-647ecb9fb6d0";

    const mockContext = {
      previewData: {
        previewLang: "en",
        key: PROFILE === "umami" ? umamiKey : defaultKey,
      },
    };
    const params = await getPreview(mockContext, "node--article", "");
    expect(params).toEqual("");
  });
  if (PROFILE === "umami") {
    it("should preview data for the non-default language", async () => {
      const previewKey = "12";

      const mockContext = {
        previewData: {
          previewLang: "es",
          key: previewKey,
        },
      };
      const params = await getPreview(mockContext, "node--article", "");
      expect(params).toEqual("");
    });
  }
});
