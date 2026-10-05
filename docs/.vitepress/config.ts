import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: '我的博客',
  description: '技术笔记与随笔',
  lang: 'zh-CN',
  appearance: true,

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/network/start' },  
      { text: 'B站个人中心', link: 'https://space.bilibili.com/3546725755127816' },
    ],

    sidebar: [
      {
        text: '网络',
        items: [
          { text: 'DNS 解析', link: '/notes/network/dns' },
          { text: 'HTTPS 原理', link: '/notes/network/https' }
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: '常用命令', link: '/notes/linux/commands' }
        ]
      }
    ],

    outlineTitle: '页面导航',
    docFooter: { prev: '上一页', next: '下一页' }
  }
})