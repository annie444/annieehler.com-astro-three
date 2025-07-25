import type { APIRoute } from "astro"
import { SITE } from "~/config.mjs"

const robotsTxt = `\
User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap-index.xml
`

export const GET: APIRoute = () => new Response(robotsTxt)
