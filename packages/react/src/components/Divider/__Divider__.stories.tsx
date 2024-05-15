import { Divider } from './Divider';

/**
 * API Reference: https://ui.shadcn.com/docs/components/separator
 */
export default {
  title: 'Components/Divider',
  component: Divider,
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
    return (
      <section className="p-4 w-480px">
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Divider className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Divider orientation="vertical" />
            <div>Docs</div>
            <Divider orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </section>
    );
  },
};
