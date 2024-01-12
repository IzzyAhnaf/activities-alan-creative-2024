import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/toko-latihan/',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'localhost:8000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  //   hmr: {
  //     overlay: false,
  //   },
  //   fs: {
  //     strict: false,
  //   },
  //   historyApiFallback: true,
  // },
})
