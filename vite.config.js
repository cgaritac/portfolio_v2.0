import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import pkg from './package.json';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();
const envVariables = {};
for (const key in process.env) {
    if (key.startsWith('VITE_')) {
        envVariables[`process.env.${key}`] = JSON.stringify(process.env[key]);
    }
}
export default defineConfig({
    plugins: [react()],
    define: {
        envVariables,
        _APP_VERSION_: JSON.stringify(pkg.version),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
