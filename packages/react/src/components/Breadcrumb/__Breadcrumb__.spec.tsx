import { render } from '@testing-library/react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './index';

describe('breadcrumb', () => {
  it('Root는 nav 태그를 사용하며 aria-label로 태그를 breadcrumb를 명시해야한다.', () => {
    const { getByTestId } = render(
      <Breadcrumb data-testid="root"></Breadcrumb>,
    );

    const root = getByTestId('root');
    expect(root.tagName).toBe('NAV');
    expect(root.getAttribute('aria-label')).toBe('breadcrumb');
  });

  it('List는 ordered list여야한다', () => {
    const { getByTestId } = render(
      <Breadcrumb>
        <BreadcrumbList data-testid="list"></BreadcrumbList>
      </Breadcrumb>,
    );

    const list = getByTestId('list');
    console.log(list);
    expect(list.tagName).toBe('OL');
  });

  it('Item은 list item이다.', () => {
    const { getByTestId } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem data-testid="item">Home</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    const item = getByTestId('item');
    expect(item.tagName).toBe('LI');
  });

  it('Link는 link role을 가져야한다.', () => {
    const { getByTestId } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="www.google.com" data-testid="link">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    const link = getByTestId('link');
    expect(link).toHaveRole('link');
  });

  it('Separator는 스크린리더가 읽을 수 없어야한다.', () => {
    const { getByText } = render(
      <Breadcrumb separator="/">
        <BreadcrumbList>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>,
    );

    const separator = getByText('/');
    expect(separator.getAttribute('aria-hidden')).toBe('true');
  });
});
