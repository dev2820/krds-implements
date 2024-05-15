import { Alert, AlertDescription, AlertProps, AlertTitle } from './Alert';

const variants = ['default', 'error'] as const;

/**
 * API Reference: https://ui.shadcn.com/docs/components/alert
 */
export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: variants,
      description: 'alert 타입',
      control: { type: 'select' },
    },
  },
  args: {
    variant: 'default',
  },
};

export const Default = {
  args: {},
  render: (props: AlertProps) => {
    return (
      <section className="p-4 w-480px">
        <Alert {...props}>
          <i className="i-t-warning text-6" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </section>
    );
  },
};
