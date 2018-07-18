import Layout from '../components/Layout';
import Components from '../components/markdown';
import Markdown from '../content/markdown.md';

export const TestMarkdown = () => (
  <Layout>
    <Markdown components={Components} />
  </Layout>
);

export default TestMarkdown;
