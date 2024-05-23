import { render, screen } from '@testing-library/react';

import { Spinner } from './';

describe('Spinner', () => {
  it.skip('spin 타입이면 aria-busy를 표현해 스크린 리더가 알 수 있게 한다.', () => {});

  it('progress 타입이면 aria-valuenow를 표현해야하며, progress 변경시 aria-valuenow도 업데이트되어야한다.', () => {
    const { rerender } = render(<Spinner type="progress" progress={0} />);

    const valuenow = screen
      .getByRole('progressbar')
      ?.getAttribute('aria-valuenow');

    expect(valuenow).toBe('0');

    rerender(<Spinner type="progress" progress={30} />);
    const updatedValuenow = screen
      .getByRole('progressbar')
      ?.getAttribute('aria-valuenow');

    expect(updatedValuenow).toBe('30');
  });
});
