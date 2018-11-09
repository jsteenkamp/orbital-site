import sys from 'system-components';
import Link from 'next/link';

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
  fontSize: [6, 7],
  mt: 0,
  mb: 3,
}, props => ({
  '& a': {
    color: 'inherit',
    border: 'none',
    cursor: 'pointer',
    mt: 0,
    mb: 3,
  }
}));

const A = sys({
  is: 'a',
  target: '_blank',
});

const Header = () => (
  <Box>
    <div><H1><Link href="/"><a>Orbital</a></Link></H1></div>
    <div><Link href="/other/about"><a>About</a></Link></div>
  </Box>
);

export default Header;
