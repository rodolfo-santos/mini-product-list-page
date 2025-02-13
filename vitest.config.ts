import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

export default () => {
  Object.keys(process.env).forEach((key) => {
    process.env[key] = process.env[key] ?? '';
  });

  return defineConfig({
    test: {
      name: process.env.TEST_GROUP,
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest/setup',
      logHeapUsage: true,
      coverage: {
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.{js,jsx,ts,tsx,vue}'],
        exclude: ['src/tests/**/*', 'src/models/**/*', 'src/**/index.ts', 'src/main.ts', '**/plugins/**/*', '**/experiments.ts.']
      }
    },
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src/core', import.meta.url)),
        '%': fileURLToPath(new URL(`./src/systems/${process.env.VITE_BRAND}`, import.meta.url)),
        '~swiper': path.resolve(__dirname, './node_modules/swiper')
      }
    }
  });
};
