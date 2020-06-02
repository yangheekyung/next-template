import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import {i18n} from '../i18n';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const currentLanguage = ctx.req.language || i18n.language;
    return { ...initialProps, currentLanguage };
  }

  render() {
    return (
      <Html lang={this.props.currentLanguage}>
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
