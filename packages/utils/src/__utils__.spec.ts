import { isNil } from './index';

describe('isNil', () => {
  const testCases = [
    [null, true, 'null'],
    [undefined, true, 'undefined'],
    ['', false, 'an empty string'],
    [0, false, 'zero'],
    [false, false, 'false'],
    [[], false, 'an empty array'],
    [{}, false, 'an empty object'],
    ['hello', false, 'a non-empty string'],
    [42, false, 'a non-zero number'],
    [true, false, 'true'],
    [[1, 2, 3], false, 'a non-empty array'],
    [{ key: 'value' }, false, 'a non-empty object'],
  ] as const;

  it.each(testCases)('should return %s when input is %s', (input, expected) => {
    expect(isNil(input)).toBe(expected);
  });
});
