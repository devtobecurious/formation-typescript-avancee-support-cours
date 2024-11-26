import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Character',
            // the proper extensions will be added
            fileName: 'lib-character',
            formats: ['cjs', 'es', 'umd']
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            // external: ['vue'],
            //   output: {
            //     // Provide global variables to use in the UMD build
            //     // for externalized deps
            //     globals: {
            //       vue: 'Vue',
            //     },
            //   },
        },
    },
})