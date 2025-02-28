import { defineConfig } from "vite";

const filename = "kitten-engineers.inject.js";

const KE_RELEASE_CHANNEL = JSON.stringify(process.env.KE_RELEASE_CHANNEL ?? "fixed");
const KE_VERSION = JSON.stringify(process.env.RELEASE_VERSION ?? `${manifest.version}-live`);

export default defineConfig({
  build: {
    lib: {
      entry: "source/entrypoint-userscript.ts",
      name: "kitten-engineers",
    },
    minify: false,
    outDir: "output",
    rollupOptions: {
      external: ["jquery"],
      output: {
        extend: true,
        format: "umd",
        entryFileNames: filename,
      },
    },
    sourcemap: "inline",
  },
  define: {
    KE_RELEASE_CHANNEL,
    KE_VERSION,
  },
});
