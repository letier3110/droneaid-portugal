// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { loadEnv } from 'vite'

import cloudflare from '@astrojs/cloudflare'
import basicSsl from '@vitejs/plugin-basic-ssl'


import node from '@astrojs/node';


const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  // plugins: [basicSsl()],
  // server: {
  //   https: true
  // }
  vite: {
    plugins: [ basicSsl() ]
  },
  integrations: [mdx(), sitemap()],

  adapter: node({
    mode: 'standalone'
  })
})