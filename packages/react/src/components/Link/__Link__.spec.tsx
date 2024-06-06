import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Link } from '.';

describe('link', () => {
  it('Link는 link role을 가져야한다.', () => {
    const { getByTestId } = render(
      <Link href="https://google.com" data-testid="link">
        Link Text
      </Link>,
    );

    const link = getByTestId('link');
    expect(link).toHaveRole('link');
  });

  it('tab, shift+tab으로 이동할 수 있다.', async () => {
    const { getByTestId } = render(
      <>
        <Link href="https://google.com" data-testid="link1">
          Link Text 1
        </Link>
        <Link href="https://google.com" data-testid="link2">
          Link Text 2
        </Link>
      </>,
    );

    const link1 = getByTestId('link1');
    const link2 = getByTestId('link2');

    link1.focus();
    expect(link1).toHaveFocus();

    await userEvent.type(link1, '{tab}');
    expect(link2).toHaveFocus();
  });

  it('href가 주어지지 않은 Link는 tab을 통해 focus할 수 없다.', async () => {
    const { getByTestId } = render(
      <>
        <Link href="https://google.com" data-testid="link1">
          Link Text 1
        </Link>
        <Link data-testid="link2">Link Text 2</Link>
      </>,
    );

    const link1 = getByTestId('link1');
    const link2 = getByTestId('link2');
    link1.focus();
    expect(link1).toHaveFocus();

    await userEvent.type(link1, '{tab}');
    expect(link2).not.toHaveFocus();
  });

  it('click, enter를 통해 실행할 수 있다.', async () => {
    const fakeFn = vi.fn();

    const { getByTestId } = render(
      <>
        <Link href="https://google.com" data-testid="link" onClick={fakeFn}>
          Link Text
        </Link>
      </>,
    );

    const link = getByTestId('link');
    link.focus();
    expect(link).toHaveFocus();

    await userEvent.type(link, '{enter}', { skipClick: true });
    expect(fakeFn).toHaveBeenCalledTimes(1);

    await userEvent.click(link);
    expect(fakeFn).toHaveBeenCalledTimes(2);
  });
});
