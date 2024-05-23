import { Spinner, type SpinnerProps } from './index';

const types = ['spin', 'progress'] as const;
const sizes = ['lg', 'md', 'sm'] as const;

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: types,
      description: '타입 (spin/progress 타입)',
      control: { type: 'select' },
    },
    progress: {
      description: 'spinner 트랙의 채워진 정도 (spin타입이면 기본 25)',
      control: { type: 'number' },
    },
    size: {
      options:sizes,
      description: 'spinner의 크기',
      control: { type: 'select'}
    }
  },
  args: {
    type: 'spin',
    progress: 25,
    size: 'md'
  },
};

export const Default = {
  args: {},
  render: (props: SpinnerProps) => {
    return <Spinner {...props} />;
  },
};

export const TypeSpin = {
  args: {},
  render: () => {
    return <Spinner type="spin" />;
  },
};

export const TypeProgress = {
  args: {},
  render: () => {
    return <Spinner type="progress" progress={50} />;
  },
};

export const Size = {
  args: {},
  render: () => {
    return (
      <div className="flex flex-row gap-4">
        {sizes.map(size => (
          <Spinner type="progress" size={size} progress={50} />
        ))}
      </div>
    );
  },
};

export const Progress = {
  args: {},
  render: () => {
    return (
      <div className="flex flex-row gap-4">
        {[0, 25, 50, 75, 100].map(progress => (
          <Spinner type="progress" progress={progress} />
        ))}
      </div>
    );
  },
};
