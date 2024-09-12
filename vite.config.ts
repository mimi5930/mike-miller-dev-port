import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // default port to 3000
    port: 3000
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  build: {
    outDir: 'build'
  }
})
