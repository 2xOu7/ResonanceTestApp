import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.AppcuesSettings = {
                enableURLDetection: true
              };
            `,
          }}
        />
        <script async src={'//fast.appcues.com/218956.js'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
