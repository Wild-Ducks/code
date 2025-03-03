const fs = require("fs");

const pages = [
  { url: "https://wild-ducks.github.io/code/website/index.html", priority: 1.0 },
  { url: "https://wild-ducks.github.io/code/website/about.html", priority: 0.8 },
  { url: "https://wild-ducks.github.io/code/website/consult.html", priority: 0.7 }
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

pages.forEach(page => {
  sitemap += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>${page.priority}</priority>
  </url>`;
});

sitemap += `\n</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);
console.log("Sitemap updated successfully!");
