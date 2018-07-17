import Layout from '../components/Layout';
import Components from '../components/markdown';
import Home from '../content/home.md';

const Index = () => {
  return (
    <Layout>
      <Home components={Components} />
    </Layout>
  );
};

export default Index;
