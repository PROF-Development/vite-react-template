import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import loadConfig from './src/config/loaders';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      'api/':{
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})