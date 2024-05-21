import { render } from '@testing-library/react';

import MIDark from '../../assets/pngs/MI-dark.png';
import MI from '../../assets/pngs/MI.png';
import { Identifier, IdentifierLogo, IdentifierGuide } from './index';

describe('Identifier', () => {
  it('식별자 영역은 <section>이나 <article>로 제공한다.', () => {
    const { getByRole } = render(
      <Identifier>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} alt="김치냉장고 로고"/>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} alt="김치냉장고 로고"/>
        <IdentifierGuide>이 누리집은 김치냉장고 산하기관 누리집입니다.</IdentifierGuide>
      </Identifier>,
    );

    let element = getByRole('region', { hidden: true });

    if (!element) {
      element = getByRole('article', { hidden: true });
    }

    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toMatch(/^(section|article)$/);
  });

  it.skip('이미지 로고를 사용하는 경우 스크린 리더를 위한 대체 텍스트를 제공해야 한다.');

  it('dark모드일 때 다른 URL을 사용하도록 설정할 수 있다.', async () => {
    const identifierDark = render(
      <Identifier isDark>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} alt="김치냉장고 로고"/>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} alt="김치냉장고 로고"/>
        <IdentifierGuide>이 누리집은 김치냉장고 산하기관 누리집입니다.</IdentifierGuide>
      </Identifier>,
    );

    const darkImageEls = await identifierDark.findAllByRole('img');
    darkImageEls.forEach(imgEl=> {
      expect(imgEl).toHaveAttribute('src',MIDark)
    })

  });
})
