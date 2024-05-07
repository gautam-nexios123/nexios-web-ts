/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_FRONTEND_LIVE_URL,
    generateRobotsTxt: true, 
    generateIndexSitemap: true, 
    sitemapSize: 7000,
    outDir: './public',
  }