import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { head, html, styles };
  }

  render() {
    return (
      <html lang="en" id="root">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="???" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="???" />
          <meta name="apple-mobile-web-app-title" content="???" />
          <meta name="theme-color" content="#00b6b2" />
          <meta name="msapplication-navbutton-color" content="#00b6b2" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="format-detection" content="telephone=no" />

          <link rel="icon" type="image/png" sizes="192x192" href="static/icons/icon.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="static/icons/icon.png" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
