import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: path.resolve(__dirname, './node_modules/@luigi-project/core') + '/[!.]*',
                    dest: './luigi-core',
                },
                {
                    src: path.resolve(__dirname, './src') + '/[!.]*',
                    dest: '.',
                },
            ],
        }),
    ],
    appType: 'mpa'
})
