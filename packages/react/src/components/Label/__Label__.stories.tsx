import { Checkbox } from '../Checkbox';
import { Label, type LabelProps } from './Label';

/**
 * API Reference: https://ui.shadcn.com/docs/components/label
 */
export default {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: LabelProps) => {
    return (
      <section className="p-4 w-480px">
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" {...props}>
              Accept terms and conditions
            </Label>
          </div>
        </div>
      </section>
    );
  },
};

export const Disabled = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px">
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-unique" disabled />
            <Label htmlFor="terms-unique">Accept terms and conditions</Label>
          </div>
        </div>
      </section>
    );
  },
};
