import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'unstated';

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
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
