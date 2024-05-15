import { type SkeletonProps, Skeleton } from './Skeleton';

/**
 * API Reference: https://ui.shadcn.com/docs/components/skeleton
 */
export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: SkeletonProps) => {
    return (
      <section className="p-4 w-480px">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" {...props} />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" {...props} />
            <Skeleton className="h-4 w-[200px]" {...props} />
          </div>
        </div>
      </section>
    );
  },
};
