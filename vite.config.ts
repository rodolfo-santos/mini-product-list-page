import { fileURLToPath, URL } from 'node:url';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default ({ command }: { command: string }) => {
  process.env = { ...process.env, ...loadEnv(command, process.cwd()) };
  return {
    plugins: [
      vue(),
      vueJsx(),
      ViteEjsPlugin({
        system: process.env.VITE_BRAND,
        siteKeyRecaptcha: process.env.VITE_SITE_KEY_RECAPTCHA
      })
    ],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src/core', import.meta.url)),
        '%': fileURLToPath(new URL(`./src/systems/${process.env.VITE_BRAND}`, import.meta.url)),
        '~swiper': path.resolve(__dirname, './node_modules/swiper')
      }
    },
    server: {
      port: 3030
    }
  };
};
