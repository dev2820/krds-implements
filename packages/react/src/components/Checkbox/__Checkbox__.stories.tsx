import { Checkbox, CheckboxProps } from './Checkbox';

const sizes = ['md', 'lg', 'xl'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/checkbox
 */
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '',
      options: sizes,
      control: { type: 'select' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'lg',
    indeterminate: false,
  },
};

export const Default = {
  args: {},
  render: (props: CheckboxProps) => {
    return (
      <section className="p-4 w-480px">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" {...props} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </section>
    );
  },
};

export const Size = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => (
          <div className="flex items-center space-x-2" key={size}>
            <Checkbox id="terms" size={size} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        ))}
      </section>
    );
  },
};

export const Indeterminate = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" indeterminate={true} defaultChecked={true} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </section>
    );
  },
};
