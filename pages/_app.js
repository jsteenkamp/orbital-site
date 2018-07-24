import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'unstated';
import theme from '../theme';
import Layout from '../components/Layout';

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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
