import { ChevronRight } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  type BreadcrumbProps,
} from './index';

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
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    );
  },
};

/**
 * separator attribute를 통해 separator를 변경할 수 있습니다.
 */
export const Separator = {
  args: {},
  render: () => {
    return (
      <section>
        <Breadcrumb separator={<ChevronRight size={12} />}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    );
  },
};

/**
 * ellipsis attribute를 통해 ellipsis를 변경할 수 있습니다.
 * ellipsis에는 Dropdown등을 적용해 생략된 링크들에 접근할 수 있게 할 수 있습니다.
 */
export const Ellipsis = {
  args: {},
  render: () => {
    return (
      <section>
        <Breadcrumb ellipsis={'...'}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    );
  },
};
