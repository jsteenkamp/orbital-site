import { withMDXComponents } from '../components/MDXProvider';
import MD from '../content/markdown.md';

const Markdown = props => <MD components={components} />;

export default withMDXComponents(MD);
