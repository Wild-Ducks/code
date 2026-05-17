/*
 * Wild Ducks LLC Sitemap Generator
 *
 * Generates sitemap.xml for GitHub Pages deployment.
 * Update this list as new public pages are added.
 */

const fs = require("fs");

/* Public site pages */

const pages = [

  {
    url: "https://wildducks.us/website/index.html",
    priority: 1.0
  },

  {
    url: "https://wildducks.us/website/content.html",
    priority: 0.9
  },

  {
    url: "https://wildducks.us/website/think-quantum.html",
    priority: 0.9
  },

  {
    url: "https://wildducks.us/website/books.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/website/podcasts.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/website/videos.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/website/code.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/website/about.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/website/consult.html",
    priority: 0.7
  }

];

/* Begin XML document */

let sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

/* Add page entries */

pages.forEach(page => {

  sitemap += `
  <url>

    <loc>${page.url}</loc>

    <lastmod>
      ${new Date().toISOString().split("T")[0]}
    </lastmod>

    <priority>${page.priority}</priority>

  </url>`;

});

/* Close XML */

sitemap += `
</urlset>`;

/* Write sitemap file */

fs.writeFileSync("sitemap.xml", sitemap);

console.log("Sitemap updated successfully!");