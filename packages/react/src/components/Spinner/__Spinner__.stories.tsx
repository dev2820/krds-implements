import { Spinner, type SpinnerProps } from './index';

const types = ['spin', 'progress'] as const;
const sizes = ['lg', 'md', 'sm'] as const;
/**
 * 아코디언은 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현된다. 일반적으로 헤더 목록은 컨트롤 요소로 활용되며 사용자는 필요에 따라 헤더를 선택하여 하위 콘텐츠 섹션을 표시하거나 숨길 수 있다.
 *
 * KRDS Reference: https://uiux.egovframe.go.kr/guide/component/component_04_07.html<br/>
 * API Reference: https://www.radix-ui.com/primitives/docs/components/accordion
 */
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
  },
  args: {
    type: 'spin',
    progress: 25,
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
