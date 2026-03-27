import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(
  ({mode})=>{
    const env = loadEnv(mode, process.cwd())
  return {
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/users': {
        target: env.VITE_BACKEND_SERVER_URL,
        changeOrigin:true,
        secure:true
      }
    },
  },
}
})
