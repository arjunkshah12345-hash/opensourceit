import { build } from "esbuild";

await build({
  entryPoints: ["scripts/check.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "scripts/.check-bundle.mjs",
  logLevel: "silent",
});

await import("./.check-bundle.mjs");
