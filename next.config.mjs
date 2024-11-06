import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withNextra({
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh/',
        permanent: true,
      },
    ]
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })
