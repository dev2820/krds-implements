import { Badge, type BadgeProps } from './Badge';

const variants = ['subtle', 'solid', 'outline'] as const;
const colorSchemes = [
  'primary',
  'success',
  'warning',
  'error',
  'info',
] as const;

/**
 * API Reference: https://ui.shadcn.com/docs/components/badge
 */
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
    colorScheme: {
      options: colorSchemes,
      description: 'badge 색상',
      control: { type: 'select' },
    },
  },
  args: {
    variant: 'subtle',
    colorScheme: 'primary',
  },
};

export const Default = {
  args: {},
  render: (props: BadgeProps) => {
    return (
      <section className="p-4 w-480px">
        <Badge {...props}>Badge</Badge>
      </section>
    );
  },
};

export const Variant = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row gap-4">
        {variants.map(variant => (
          <Badge variant={variant} key={variant}>
            Badge
          </Badge>
        ))}
      </section>
    );
  },
};

export const ColorScheme = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-row gap-4">
        {colorSchemes.map(colorScheme => (
          <Badge colorScheme={colorScheme} key={colorScheme}>
            Badge
          </Badge>
        ))}
      </section>
    );
  },
};
