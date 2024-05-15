import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';

import { TooltipProps } from './Tooltip';

/**
 * API Reference: https://ui.shadcn.com/docs/components/tooltip
 */
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: TooltipProps) => {
    return (
      <section className="p-4 w-480px">
        <TooltipProvider>
          <Tooltip {...props}>
            <TooltipTrigger asChild>
              <button>Hover</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>
    );
  },
};
