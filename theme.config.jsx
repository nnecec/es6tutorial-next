import Image from 'next/image'

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
