import { Select, type SelectProps } from './Select';

const sizes = ['sm', 'md', 'lg'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/select
 */
export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Select 크기',
      control: { type: 'select' },
    },
  },
  args: {
    size: 'md',
  },
};

export const Default = {
  args: {
    placeholder: 'Select option',
  },
  render: (props: SelectProps) => {
    return (
      <section className="p-4 w-480px">
        <Select {...props}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </section>
    );
  },
};

export const Size = {
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => (
          <Select key={size} size={size}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        ))}
      </section>
    );
  },
};
