import { useToast } from '@/hooks/useToast';

import { Toast, ToastAction, Toaster } from '../Toast';

/**
 * API Reference: https://ui.shadcn.com/docs/components/toast
 */
export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: () => {
    const { toast } = useToast();
    return (
      <section className="p-4 w-480px">
        <button
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up ',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          Add to calendar
        </button>
        <Toaster />
      </section>
    );
  },
};
