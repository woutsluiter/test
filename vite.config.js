import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';

export default {
    plugins: [
        vituum({
            imports: {
                filenamePattern: {
                    '+.css': [],
                    '+.scss': 'src/styles',
                },
            },
        }),
        twig(),
    ],
    // build: {
    //     rollupOptions: {
    //         input: ['./index.twig'],
    //     },
    // },
};
