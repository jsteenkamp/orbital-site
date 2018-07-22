import sys from 'system-components';
import { themeGet } from 'styled-system';

const Box = sys(
  {
    m: [2, 3, 4],
    p: [2, 4, 6],
    width: [1, 1 / 2, 1 / 4],
    fontSize: [6, 4, 2],
    border: '1px solid',
    borderColor: 'blacks.0',
  },
  props => ({
    color: themeGet('colors.blacks.0')(props),
  })
);

const TestBox = props => (
  <Box>
    <p>Test Component</p>
  </Box>
);

export default TestBox;
