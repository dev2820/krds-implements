import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { Button } from '../Button';
import { Input } from '../Input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';

/**
 * API Reference: https://ui.shadcn.com/docs/components/form
 */
export default {
  title: 'Components/Form',
  component: Form,
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
    const formSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
      },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
      alert(JSON.stringify(data));
    }

    return (
      <section className="p-4 w-480px">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="md" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </section>
    );
  },
};
