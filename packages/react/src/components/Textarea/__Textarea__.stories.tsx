import { type TextareaProps, Textarea } from '../Textarea';

/**
 * API Reference: https://ui.shadcn.com/docs/components/textarea
 */
export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  render: (props: TextareaProps) => {
    return (
      <section className="p-4 w-480px">
        <Textarea placeholder="Type your message here." {...props} />
      </section>
    );
  },
};

export const Invalid = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (props: TextareaProps) => {
    return (
      <section className="p-4 w-480px">
        <Textarea required {...props} />
      </section>
    );
  },
};

export const Disabled = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (props: TextareaProps) => {
    return (
      <section className="p-4 w-480px">
        <Textarea disabled {...props} />
      </section>
    );
  },
};
