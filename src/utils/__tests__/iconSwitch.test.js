// function should take in text, split it into an array, find key words, replace them with icons, and reorganize so non-icon words are last

import iconSwitch from '../iconSwitch';

describe('#iconSwitch function', () => {
  test('function returns a string', () => {
    let testString = 'MongoDB, GraphQL, Chakra UI, react';

    let { string } = iconSwitch(testString);

    expect(typeof string).toBe('string');
  });
  test('function returns an array', () => {
    let testString = 'MongoDB, GraphQL, Chakra UI, React';

    let { array } = iconSwitch(testString);

    expect(Array.isArray(array)).toBeTruthy();
  });
  test('function return string is formatted with commas and capitalized', () => {
    let testString =
      'MongoDB, Random Tech One, GraphQL, Chakra UI, React, Random Tech Two';

    let { string } = iconSwitch(testString);

    expect(string).toBe('Random Tech One, Chakra UI, Random Tech Two');
  });
});
