import { IdentifierGuide, IdentifierLogo } from '.';
import MIDark from '../../assets/pngs/MI-dark.png';
import MI from '../../assets/pngs/MI.png';
import { Identifier, type IdentifierProps } from './index';

export default {
  title: 'Components/Identifier',
  component: Identifier,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDark: {
      control: {
        type: 'boolean',
      },
    },
    isRound: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    isDark: false,
    isRound: false,
  },
};

export const Default = {
  args: {},
  render: (props: IdentifierProps) => {
    return (
      <Identifier {...props}>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} />
        <IdentifierLogo url={{ light: MI, dark: MIDark }} />
        <IdentifierGuide>
          이 누리집은 김치냉장고 산하기관 누리집입니다.
        </IdentifierGuide>
      </Identifier>
    );
  },
};

export const IsRound = {
  args: {
    isRound: true,
  },
  render: (props: IdentifierProps) => {
    return (
      <Identifier {...props}>
        <IdentifierLogo url={MI} />
        <IdentifierLogo url={MI} />
        <IdentifierGuide>
          이 누리집은 김치냉장고 산하기관 누리집입니다.
        </IdentifierGuide>
      </Identifier>
    );
  },
};

export const IsDark = {
  args: {
    isDark: true,
  },
  render: (props: IdentifierProps) => {
    return (
      <Identifier {...props}>
        <IdentifierLogo url={{ light: MI, dark: MIDark }} />
        <IdentifierLogo url={{ light: MI, dark: MIDark }} />
        <IdentifierGuide>
          이 누리집은 김치냉장고 산하기관 누리집입니다.
        </IdentifierGuide>
      </Identifier>
    );
  },
};
