import {
  type TabsProps,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './Tabs';

/**
 * API Reference: https://ui.shadcn.com/docs/components/tabs
 */
export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: TabsProps) => {
    return (
      <section className="p-4 w-480px">
        <Tabs defaultValue="account" className="w-[400px]" {...props}>
          <TabsList className="w-full">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </section>
    );
  },
};
