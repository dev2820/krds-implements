import { Button } from '../Button';
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from './Drawer';

/**
 * API Reference: https://ui.shadcn.com/docs/components/drawer
 */
export default {
  title: 'Components/Drawer',
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
        <Drawer>
          <DrawerTrigger>
            <Button>Open</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">any body contents</div>
            <DrawerFooter>
              <Button type="submit">Submit</Button>
              <DrawerClose asChild>
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </section>
    );
  },
};
