import { defineConfig } from "vite";
import babel from 'vite-plugin-babel'

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom'
    },
    build: {
        target: 'esnext',
        polyfillDynamicImport: true,
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        })
    ]
})