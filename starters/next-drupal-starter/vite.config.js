import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// loads .env.test.local
const env = loadEnv("test", process.cwd(), "");

// NOTE:
// https://github.com/testing-library/react-testing-library/releases/tag/v13.0.0
// need to use `render(ui, { legacyRoot: true})` for snapshot tests
// as react >18 is no longer supported for >13 or react-testing-library
export default defineConfig({
  test: {},
  plugins: [react()],
  define: {
    "process.env.backendUrl": JSON.stringify(env.VITE_BACKEND_URL),
    "process.env.IMAGE_DOMAIN": JSON.stringify(env.VITE_IMAGE_DOMAIN),
    "process.env.locales": `\['en', 'es' \]`,
  },
});
