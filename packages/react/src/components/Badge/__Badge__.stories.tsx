import { Badge, type BadgeProps } from './Badge';

const types = ['subtle', 'solid', 'outline'] as const;
const colors = ['primary', 'secondary', 'tertiary', 'new', 'danger'] as const;
const variants = ['dot', 'count', 'text'];

type Color = (typeof colors)[number];

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: variants,
      description: 'badge 타입',
      control: { type: 'select' },
    },
    color: {
      options: colors,
      description: 'badge 색상 (secondary, tertiar, danger는 text 형태 한정)',
      control: { type: 'select' },
    },
    type: {
      options: types,
      description: 'badge 타입 (text 형태 한정)',
      control: { type: 'select' },
    },
    text: {
      description: '문자열 badge의 텍스트',
      control: { type: 'string' },
    },
    count: {
      description: '숫자 badge의 숫자',
      control: { type: 'number' },
    },
    isOverCount: {
      description: '숫자 badge의 숫자',
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'text',
    color: 'primary',
    type: 'solid',
    text: '배지',
    count: NaN,
    isOverCount: false,
  },
};

export const Default = {
  args: {},
  render: (props: BadgeProps) => {
    return (
      <section className="p-4 w-480px">
        <Badge {...props}></Badge>
      </section>
    );
  },
};

export const DotBadge = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row gap-4">
        {['primary', 'new'].map(color => (
          <Badge variant="dot" key={color} color={color as Color} />
        ))}
      </section>
    );
  },
};

export const CountBadge = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row gap-4">
        {['primary', 'new'].map(color => (
          <Badge variant="count" key={color} color={color as Color} count={3} />
        ))}
        {['primary', 'new'].map(color => (
          <Badge
            variant="count"
            key={color}
            color={color as Color}
            count={999}
            isOverCount
          />
        ))}
      </section>
    );
  },
};

export const TextBadge = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          {['primary', 'secondary', 'tertiary', 'danger'].map(color => (
            <Badge
              variant="text"
              key={color}
              color={color as Color}
              text="배지"
              type="solid"
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {['primary', 'secondary', 'tertiary', 'danger'].map(color => (
            <Badge
              variant="text"
              key={color}
              color={color as Color}
              text="배지"
              type="outline"
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {['primary', 'secondary', 'tertiary', 'danger'].map(color => (
            <Badge
              variant="text"
              key={color}
              color={color as Color}
              text="배지"
              type="subtle"
            />
          ))}
        </div>
      </section>
    );
  },
};
