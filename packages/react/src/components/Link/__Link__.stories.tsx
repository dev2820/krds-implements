import { ExternalLinkIcon } from 'lucide-react';

import { Link, type LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {
    href: 'https://google.com',
  },
  render: (props: LinkProps) => {
    return <Link {...props}>Google</Link>;
  },
};

export const WithIcon = {
  args: {
    href: 'https://google.com',
    icon: <ExternalLinkIcon size={16} />,
  },
  render: (props: LinkProps) => {
    return <Link {...props}>Google</Link>;
  },
};
