import sys from 'system-components';

const Box = sys({
  p: 0,
  m: 0,
});

const H1 = sys({
  is: 'h1',
  fontSize: [8, 9],
  m: 0,
});


const Header = () => (
  <Box>
    <H1>Orbital</H1>
  </Box>
);

export default Header;
