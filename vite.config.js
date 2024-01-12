import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/activities-alan-creative-2024/' : '',
  publicPath: '/',
  server: {
    proxy: {
      '/activities-alan-creative-2024': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/activities-alan-creative-2024/, ''),
      },
    }
  }

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
