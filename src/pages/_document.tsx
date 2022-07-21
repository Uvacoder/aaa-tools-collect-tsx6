import { getSandpackCssText } from '@codesandbox/sandpack-react'
import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang='zh-TW'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Noto+Sans+TC:wght@500;700&family=Fira+Code:wght@300;400;500;600;700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <style
            dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
            id='sandpack'
          />
          <Script
            async
            defer
            data-website-id='6e89024f-bfa9-4d03-805a-7fa9fd24114f'
            src='https://umami.honghong.me/umami.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
