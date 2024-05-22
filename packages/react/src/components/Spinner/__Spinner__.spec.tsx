import { isHighContrast } from '@krds/utils';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { Spinner } from './';

describe('Spinner', () => {
  it('track과 identifier의 명도 대비가 3:1이상이어야한다.', () => {
    // MyComponent.test.jsx

    const { getByTestId } = render(<Spinner />);
    const track = getByTestId('track');
    const identifier = getByTestId('identifier');

    // getComputedStyle를 사용하여 배경색 값을 읽어옴
    const trackStyle = getComputedStyle(track);
    const trackColor = trackStyle.backgroundColor;
    const identifierStyle = getComputedStyle(identifier);
    const identifierColor = identifierStyle.backgroundColor;

    console.log(trackColor);
    expect(isHighContrast(trackColor, identifierColor, 3)).toBe(true);
  });
});
