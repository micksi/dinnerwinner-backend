import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentStructure extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/static/css/bulma.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentStructure
