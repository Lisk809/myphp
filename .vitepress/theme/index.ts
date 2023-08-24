import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'
import type { Theme } from 'vitepress'
import './index.less'
export default {
  ...DefaultTheme,
  NotFound,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
  }
} as Theme
