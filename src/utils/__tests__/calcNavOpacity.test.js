import calculateNavOpacity from '../calcNavOpacity';

describe('#navbar scroll function', () => {
  test('expect opacity to be 100 initially', () => {
    let scrollY = 0;
    let opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(100);
  });
  test('expect opacity to be 0 when Y offset is 100', () => {
    let scrollY = 100;
    let opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(0);
  });
  test('opacity should be 0 when Scroll is greater than 100', () => {
    let scrollY = 216;
    let opacity = calculateNavOpacity(scrollY);

    expect(opacity).toBe(0);
  });
});
