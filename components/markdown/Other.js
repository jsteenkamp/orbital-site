import sys from 'system-components';

export const UL = sys({
  is: 'ul',
  type: 'square',
});

export const A = sys({
  is: 'a',
  target: '_blank',
});

export const P = sys({
  is: 'p',
  color: 'text',
});

export const Img = sys({
  is: 'img',
  width: '100%',
});