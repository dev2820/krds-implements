import { type RadioGroupProps, RadioGroup, RadioGroupItem } from './RadioGroup';

/**
 * API Reference: https://ui.shadcn.com/docs/components/radio-group
 */
export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: RadioGroupProps) => {
    return (
      <section className="p-4 w-480px">
        <RadioGroup defaultValue="option-one" {...props}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <label htmlFor="option-one">Option One</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <label htmlFor="option-two">Option Two</label>
          </div>
        </RadioGroup>
      </section>
    );
  },
};

export const Disabled = {
  args: {},
  render: (props: RadioGroupProps) => {
    return (
      <section className="p-4 w-480px">
        <RadioGroup defaultValue="option-one" {...props}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-one"
              id="option-one-disabled"
              disabled
            />
            <label htmlFor="option-one">Option One</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-two"
              id="option-two-disabled"
              disabled
            />
            <label htmlFor="option-two">Option Two</label>
          </div>
        </RadioGroup>
      </section>
    );
  },
};
