import sys from 'system-components';
import Header from './Header';

const Container = sys({
  m: [3, 5],
  p: 0,
  fontSize: 4,
});

const Layout = props => (
  <Container>
    <Header />
    {props.children}
  </Container>
);

export default Layout;
