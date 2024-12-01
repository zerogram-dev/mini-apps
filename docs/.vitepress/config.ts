import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Telegram Mini Apps",

  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction',
      },
      {
        text: 'Features',
        link: '/features',
      },
      {
        text: 'Types',
        link: '/types',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zerogram-dev/mini-apps' }
    ],

    editLink: {
      pattern: 'https://github.com/zerogram-dev/mini-apps/edit/main/docs/:path'
    }
  }
})
