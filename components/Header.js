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
  fontSize: [7, 8],
}, props => ({
  '& a': {
    color: 'inherit',
    border: 'none',
    cursor: 'pointer',
  }
}));

const A = sys({
  is: 'a',
  target: '_blank',
});

const Header = () => (
  <Box>
    <div><H1><Link href="/"><a>Orbital</a></Link></H1></div>
  </Box>
);

//     <div><Link href="/other/about"><a>About</a></Link></div>

export default Header;
