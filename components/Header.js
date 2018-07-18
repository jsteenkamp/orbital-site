import sys from 'system-components';

const Box = sys({
  p: 0,
  m: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  fontSize: 4,
});

const H1 = sys({
  is: 'h1',
  fontSize: [8, 10],
  mt: 0,
  mb: 3,
});

const A = sys({
  is: 'a',
  target: '_blank',
});

const Header = () => (
  <Box>
    <div><H1>Orbital</H1></div>
    <div><A href="https://twitter.com/johanstn">@johanst</A></div>
  </Box>
);

export default Header;
