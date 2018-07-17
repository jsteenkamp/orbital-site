import Layout from '../components/Layout.js';
import Home from '../content/home.md';
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

const Index = () => {
  return (
    <Layout>
      <Home components={components} />
    </Layout>
  );
};

export default Index;
