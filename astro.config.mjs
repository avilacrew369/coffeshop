// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
  },

  image: {
      domains: ['coffeshop.local', 'panthercoffee.panther-black-dev.me'],
      remotePatterns: [
          {
              protocol: 'http',
              hostname: 'coffeshop.local',
              pathname: '/wp-content/uploads/**'
          }
      ]
  },

  adapter: netlify(),
});