import { Button } from '../Button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  type PopoverProps,
} from './Popover';

const sides = ['left', 'right', 'bottom', 'top'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/popover
 */
export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  render: (props: PopoverProps) => {
    return (
      <section className="p-4 w-480px">
        <Popover {...props}>
          <PopoverTrigger>
            <Button>Open</Button>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </section>
    );
  },
};
/**
 * Popover가 등장할 위치는 PopoverContent의 `side` 옵션을 통해 설정할 수 있다.
 */
export const Side = {
  args: {},
  render: (props: PopoverProps) => {
    return (
      <section className="p-4 w-480px flex flex-row gap-4">
        {sides.map(side => (
          <Popover {...props} key={side}>
            <PopoverTrigger>
              <Button>{side}</Button>
            </PopoverTrigger>
            <PopoverContent side={side}>
              The Popover will be located on the {side}
            </PopoverContent>
          </Popover>
        ))}
      </section>
    );
  },
};
