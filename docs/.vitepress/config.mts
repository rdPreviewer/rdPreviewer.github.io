import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "rdPreviewer",
  description: "一个基于vue3+ts+vite构建的前端一站式集成预览插件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})

function nav() {
  return [
    { text: '介绍', link: '/guide/' },
  ]
}
function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速上手', link: '/guide/start' },
      ],
    },
    {
      text: '',
      items: [{ text: 'MPreviewer', link: '/guide/MPreviewer' }],
    },
    {
      text: '',
      items: [
        { text: 'MWord', link: '/guide/MWord' },
        { text: 'MExecl', link: '/guide/MExecl' },
        { text: 'MPptx', link: '/guide/MPptx' },
        { text: 'MPdf', link: '/guide/MPdf' },
        { text: 'MText', link: '/guide/MText' },
        { text: 'MImage', link: '/guide/MImage' },
        { text: 'MVideo', link: '/guide/MVideo' },
        { text: 'MAudio', link: '/guide/MAudio' },
      ],
    },    
  ]
}