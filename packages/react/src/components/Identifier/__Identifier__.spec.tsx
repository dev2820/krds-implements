import { render } from '@testing-library/react';

import React from 'react';

import MIDark from '../../assets/pngs/MI-dark.png';
import MI from '../../assets/pngs/MI.png';
import { Identifier, IdentifierLogo } from './index';

describe('Identifier', () => {
  it('식별자 영역은 <section>이나 <article>로 제공한다.', () => {
    const { getByRole } = render(
      <Identifier>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} />
        <IdentifierLogo url={{ light: MI, dark: MIDark }} />이 누리집은
        김치냉장고 산하기관 누리집입니다.
      </Identifier>,
    );

    let element = getByRole('region', { hidden: true });

    if (!element) {
      element = getByRole('article', { hidden: true });
    }

    expect(element).toBeInTheDocument();
    // expect(element.tagName.toLowerCase()).toMatch(/^(section|article)$/);
  });
  it.skip('이미지 로고를 사용하는 경우 스크린 리더를 위한 대체 텍스트를 제공해야 한다.', () => {});
});
