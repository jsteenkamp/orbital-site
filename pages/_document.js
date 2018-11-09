import Document, { Head, Main, NextScript } from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

// CSS reset
const GlobalStyle = createGlobalStyle`
  body {max-width:839px; margin:auto; font-family:"avenir next", avenir, sans-serif;}
  h1, h2, h3, h4, h5, h6 {margin:0; padding:0; font-family:"avenir next", avenir, sans-serif;}
  * {box-sizing:border-box;}
  a, a:link, a:active {color: #0151ba; text-decoration:none; border-bottom: 3px solid rgba(126, 191, 249, 0.6);}
  a:visited, a:hover {border-color: rgba(126, 191, 249, 1);}
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <GlobalStyle />
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
