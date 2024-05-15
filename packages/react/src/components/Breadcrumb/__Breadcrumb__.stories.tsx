import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  type BreadcrumbProps,
} from './Breadcrumb';

/**
 * API Reference: https://ui.shadcn.com/docs/components/breadcrumb
 */
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export const Default = {
  args: {},
  render: (props: BreadcrumbProps) => {
    return (
      <section className="p-4 w-480px">
        <Breadcrumb {...props}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/">Home</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/docs/components">Components</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    );
  },
};

export const Separator = {
  args: {},
  render: (props: BreadcrumbProps) => {
    return (
      <section className="p-4 w-480px">
        <Breadcrumb {...props}>
          <BreadcrumbList>
            <BreadcrumbItem>Link 1</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Link 2</BreadcrumbItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbItem>Link 3</BreadcrumbItem>
            <BreadcrumbSeparator type="dash" />
            <BreadcrumbItem>Link 4</BreadcrumbItem>
            <BreadcrumbSeparator type="arrow" />
            <BreadcrumbItem>
              <BreadcrumbPage>Current</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    );
  },
};
