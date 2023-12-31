import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export const apiBaseUrl = 'http://127.0.0.1:5000/'; // 您的本地API地址

// https://vitejs.dev/config/


export default defineConfig({
    base: "/bikaPunchInWeb/",
    server: {
        proxy: {
            "/api": {
                target: "http://124.70.150.192:5000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
