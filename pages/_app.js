import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'unstated';

import MDXProvider from '../components/MDXProvider';

import { H1, H2, H3, H4, H5, H6 } from '../components/Headings';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode: props => (
    <code id="codes" style={{ color: 'purple' }} {...props} />
  ),
  code: props => <code id="codes" style={{ fontWeight: 600 }} {...props} />,
  pre: props => <pre id="codes" style={{ color: 'lightgreen' }} {...props} />,
};

const theme = {
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  colors: {
    text: '#000000',
    lightText: 'rgba(0,0,0,.54)',
    darkText: 'rgba(0,0,0,.60)',
    blacks: ['#000', '#999', '#ccc', '#eee'],
  },
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Provider>
              <Component {...pageProps} />
            </Provider>
          </MDXProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
