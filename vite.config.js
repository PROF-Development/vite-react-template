import yaml from '@rollup/plugin-yaml';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import loadConfig from './scripts/loadConfig.js';

const config = loadConfig();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), yaml()],
    server: {
        proxy: {
            '/api/': {
                target: config.API_URL,
                changeOrigin: true,
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
        css: true,
    },
});
