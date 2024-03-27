import { defineConfig } from 'vite';
// import { copy } from 'vite-plugin-copy';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: path.resolve(__dirname, './node_modules/@luigi-project/core') + '/[!.]*',
                    dest: './luigi-core',
                },
                {
                    src: 'luigi-config.js',
                    dest: '.'
                }
            ],
        }),
    ]
})
//
// export default defineConfig({
//     plugins: [
//         copy([
//             { src: 'node_modules/@luigi-project/core/luigi.js', dest: 'dist/luigi-core' }
//         ]),
//         // copy({
//         //     targets: [
//         //         { src: 'luigi-config.js', dest: 'dist' },
//         //         { src: 'node_modules/@luigi-project/core/sdfds', dest: 'dist/luigi-core' }
//         //     ],
//         //     hook: 'writeBundle' // Use the `writeBundle` hook to copy the files after the bundle is written
//         // })
//     ]
// });
