import sys from 'system-components';

export const Code = sys({
  is: 'code',
  fontWeight: 600,
  color: 'lightgreen',
});

export const InlineCode = sys({
  is: 'code',
  color: 'purple',
});

export const Pre = sys({
  is: 'pre',
  color: 'orange',
});
