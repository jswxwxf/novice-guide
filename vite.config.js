import path from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      css: {
        postcss: {
          plugins: [autoprefixer({})],
        },
      },
    },
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    assetsInlineLimit: (filePath, content) => {
      // 根据文件类型自定义不同的内联策略
      const ext = path.extname(filePath);
      // 不内联mp3文件
      if (ext === '.mp3') {
        return false;
      }
      // 对于其他类型文件
      return content.length < 30 * 1024;
    },
  },
});
