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
    url: "https://wildducks.us/",
    priority: 1.0
  },

  {
    url: "https://wildducks.us/content.html",
    priority: 0.9
  },

  {
    url: "https://wildducks.us/think-quantum.html",
    priority: 0.9
  },

  {
    url: "https://wildducks.us/books.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/podcasts.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/videos.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/code.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/about.html",
    priority: 0.8
  },

  {
    url: "https://wildducks.us/consult.html",
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
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>${page.priority}</priority>
  </url>`;

});

/* Close XML */

sitemap += `
</urlset>`;

/* Write sitemap file */

fs.writeFileSync("sitemap.xml", sitemap);

console.log("Sitemap updated successfully!");