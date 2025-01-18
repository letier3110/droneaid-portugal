// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

import basicSsl from '@vitejs/plugin-basic-ssl'

import node from '@astrojs/node'

import cloudflare from '@astrojs/cloudflare';

const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')
const isDev = process.env.NODE_ENV === 'development'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  // plugins: [basicSsl()],
  // server: {
  //   https: true
  // }
  vite: {
    plugins: isDev ? [ basicSsl() ] : []
  },
  integrations: [mdx(), sitemap()],

  adapter: cloudflare()
})