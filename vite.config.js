import ViteRestart from 'vite-plugin-restart';
import path from 'path';

let port = 5173;

/** @type {import('vite').UserConfig} */
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    publicDir: path.resolve(__dirname, 'src/public'),
    build: {
        manifest: true,
        outDir: path.resolve(__dirname, 'web/dist/'),
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, 'src/js/app.js'),
            },
        },
        modulePreload: true,
    },
    server: {
        host: '0.0.0.0',
        port: port,
    },
    plugins: [
        ViteRestart({
            reload: [
              path.resolve(__dirname, 'templates/**/*'),
            ],
        }),
    ],
});