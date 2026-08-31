// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    image: {
        domains: ['coffeshop.local'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'coffeshop.local',
                pathname: '/wp-content/uploads/**'
            }
        ]
    },

});
