import Components from '../components/markdown';
import Quote from './quote/index.md';
import Development from './development/index.md';
import Design from './design/index.md';
import JavaScript from './javascript/index.md';
import DataViz from './dataviz/index.md';
import ML from './ml/index.md';

const Index = () => (
  <>
    <Quote components={Components} />
    <Development components={Components} />
    <Design components={Components} />
    <JavaScript components={Components} />
    <DataViz components={Components} />
    <ML components={Components} />
  </>
);

export default Index;
