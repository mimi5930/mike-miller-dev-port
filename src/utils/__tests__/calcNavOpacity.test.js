import { calculateNavOpacity } from '../calcNavOpacity';

describe('#navbar scroll function', () => {
  test('expect opacity to be 100 initially', () => {
    let scrollY = 0;
    let opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(100);
  });
  test('expect opacity to be 0 when Y offset has any value', () => {
    let scrollY = 36;
    let opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(0);
  });
  test('expect opacity to be back to 100 when Y Scroll returns to 0', () => {
    let scrollY = 54;
    let opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(0);

    scrollY = 0;
    opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(100);
  });
});
