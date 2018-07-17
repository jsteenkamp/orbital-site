import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

// CSS reset
injectGlobal`
  body { max-width: 760px; margin: auto; background: #f5f5f6; font-family: monospace, sans-serif; }
  h1, h2, h3, h4, h5, h6 {font-family: sans-serif;}
  * { box-sizing: border-box; }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Orbital</title>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
