import MIDark from '../../assets/pngs/MI-dark.png';
import MI from '../../assets/pngs/MI.png';
import { Text } from '../Text';
import { Identifier, type IdentifierProps } from './Identifier';

export default {
  title: 'Components/Identifier',
  component: Identifier,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dark: {
      control: {
        type: 'boolean',
      },
    },
    round: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    dark: false,
    round: false,
  },
};

export const Default = {
  args: {},
  render: (props: IdentifierProps) => {
    return (
      <div className="p-4 w-800px">
        <Identifier {...props}>
          <img src={MI} className="h-6" />
          <img src={MI} className="h-6" />
          <Text.Body size="sm">
            이 누리집은 김치냉장고 산하기관 누리집입니다.
          </Text.Body>
        </Identifier>
      </div>
    );
  },
};

export const Round = {
  args: {
    round: true,
  },
  render: (props: IdentifierProps) => {
    return (
      <div className="p-4 w-800px">
        <Identifier {...props}>
          <img src={MI} className="h-6" />
          <img src={MI} className="h-6" />
          <div>이 누리집은 김치냉장고 산하기관 누리집입니다.</div>
        </Identifier>
      </div>
    );
  },
};

export const Dark = {
  args: {
    dark: true,
  },
  render: (props: IdentifierProps) => {
    return (
      <div className="p-4 w-800px">
        <Identifier {...props}>
          <img src={MIDark} className="h-6" />
          <img src={MIDark} className="h-6" />
          <div>이 누리집은 김치냉장고 산하기관 누리집입니다.</div>
        </Identifier>
      </div>
    );
  },
};
