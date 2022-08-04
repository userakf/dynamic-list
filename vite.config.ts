import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // 配置选项
    }),
    ElementPlus({
      // options
      useSource: true,
      defaultLocale: 'zh-tw',
    })
  ],
  resolve:{
    alias:{
      '@':path.join(__dirname,'src')
    }
  }
})
