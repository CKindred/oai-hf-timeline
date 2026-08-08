import tailwind from "bun-plugin-tailwind";

const result = await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "./dist",
  plugins: [tailwind],
  minify: true,
  sourcemap: "linked",
});

if (!result.success) {
  for (const message of result.logs) {
    console.error(message);
  }
  process.exit(1);
}

console.log(`Build complete: ${result.outputs.length} files written to ./dist`);
