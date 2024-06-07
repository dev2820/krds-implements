import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  Disclosure,
  DisclosureContainer,
  DisclosureControl,
} from './Disclosure';

describe('Disclosure', () => {
  it('컨트롤에 focus가 있는 상태에서 Enter, Space시 컨트롤이 실행되어야한다.', async () => {
    const { getByTestId } = render(
      <Disclosure defaultOpen={false}>
        <DisclosureControl data-testid="control">control</DisclosureControl>
        <DisclosureContainer data-testid="container">
          content
        </DisclosureContainer>
      </Disclosure>,
    );

    const control = getByTestId('control');

    control.focus();
    expect(control).toHaveFocus();

    await userEvent.click(control);
    expect(control.getAttribute('aria-expanded')).toBe('true');

    await userEvent.type(control, '{enter}', { skipClick: true });
    expect(control.getAttribute('aria-expanded')).toBe('false');

    await userEvent.type(control, '{space}');
    expect(control.getAttribute('aria-expanded')).toBe('true');
  });

  it('Tab, 키를 눌렀을 때 Control에 포커스가 가야한다.', async () => {
    const { getByTestId } = render(
      <Disclosure>
        <DisclosureControl data-testid="control">control</DisclosureControl>
        <DisclosureContainer>content</DisclosureContainer>
      </Disclosure>,
    );
    const control = getByTestId('control');

    await userEvent.tab();
    expect(control).toHaveFocus();
  });

  it('컨트롤의 role은 button이다.', () => {
    const { getByTestId } = render(
      <Disclosure>
        <DisclosureControl data-testid="control">control</DisclosureControl>
        <DisclosureContainer>content</DisclosureContainer>
      </Disclosure>,
    );
    const control = getByTestId('control');

    expect(control).toHaveRole('button');
  });
});
