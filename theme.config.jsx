import Image from 'next/image'
import { useConfig } from 'nextra-theme-docs'

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  docsRepositoryBase: 'https://github.com/nnecec/es6tutorial-next',
  logo: (
    <>
      <Image
        src="/favicon-32x32.png"
        width={16}
        height={16}
        style={{ marginRight: '0.5rem' }}
      />
      <span>ECMAScript 6 入门</span>
    </>
  ),
  project: {
    link: 'https://github.com/nnecec/es6tutorial-next',
  },
  editLink: false,
  head: () => {
    const { frontMatter, title } = useConfig()

    return (
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{`${frontMatter.title || title} - ES6 教程`}</title>
        <meta
          property="og:title"
          content={`ES6 教程 ${frontMatter.title || title} `}
        />
        <meta
          property="og:description"
          content="JavaScript,ES6,ES2020,ES2024 入门教程"
        />
      </>
    )
  },
  footer: {
    content: (
      <div>
        <div>
          CC BY-NC 4.0 {new Date().getFullYear()} ©{' '}
          <a
            href="https://github.com/ruanyf/es6tutorial"
            target="_blank"
            rel="noreferrer">
            ruanyf
          </a>{' '}
        </div>
        <div>
          Powered by{' '}
          <a
            href="https://github.com/nnecec/es6tutorial-next"
            target="_blank"
            rel="noreferrer">
            nnecec
          </a>
        </div>
      </div>
    ),
  },
}
