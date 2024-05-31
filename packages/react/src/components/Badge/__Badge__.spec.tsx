import { render, screen } from '@testing-library/react';

import { Badge } from './';

describe('Badge', () => {
  it('role이 status여야한다.', () => {
    const { getByRole } = render(<Badge />);

    expect(!!getByRole('status')).toBe(true);
  });

  it('count 타입 뱃지는 count attribute로 제공한 값을 textContent로 포함해야한다.', () => {
    const { rerender } = render(<Badge variant="count" count={10} />);

    const countBadge = screen.getByRole('status');

    expect(countBadge).toHaveTextContent('10');

    rerender(<Badge variant="count" count={30} />);
    const updatedCountBadge = screen.getByRole('status');

    expect(updatedCountBadge).toHaveTextContent('30');

    rerender(<Badge variant="text" count={30} />);
    const notCountBadge = screen.getByRole('status');

    expect(notCountBadge).toHaveTextContent('');
  });

  it('count 타입 뱃지는 isOverCount 설정시 + 문자가 앞에 붙어야한다.', () => {
    render(<Badge variant="count" isOverCount count={10} />);

    const countBadge = screen.getByRole('status');

    expect(countBadge).toHaveTextContent('+10');
  });

  it('text 타입 뱃지는 text attribute로 제공한 값을 textContent로 포함해야한다.', () => {
    const { rerender } = render(<Badge variant="text" text="foo" />);

    const textBadge = screen.getByRole('status');

    expect(textBadge).toHaveTextContent('foo');

    rerender(<Badge variant="text" text="bar" />);
    const updatedCountBadge = screen.getByRole('status');

    expect(updatedCountBadge).toHaveTextContent('bar');

    rerender(<Badge variant="count" text="no-text" />);
    const notTextBadge = screen.getByRole('status');

    expect(notTextBadge).toHaveTextContent('NaN');
  });
});
