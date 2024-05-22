import { isHighContrast } from '.';

describe('isHighContrast', () => {
  const black = '#000000';
  const white = '#FFFFFF';

  it('should return true if high contrast than given value', () => {
    expect(isHighContrast(black, white, 21)).toBe(true);
    expect(isHighContrast(black, white, 22)).toBe(false);
  });
});
