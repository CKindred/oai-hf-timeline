const port = Number(process.env.PORT ?? 4173);
const dir = "./dist";

Bun.serve({
  port,
  fetch: async (req) => {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const file = Bun.file(`${dir}${path}`);
    if (await file.exists()) return new Response(file);
    return new Response(Bun.file(`${dir}/index.html`));
  },
});

console.log(`Serving ${dir} on http://localhost:${port}`);
