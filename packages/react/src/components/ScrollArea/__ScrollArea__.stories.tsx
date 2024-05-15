import { type ScrollAreaProps, ScrollArea } from './ScrollArea';

/**
 * API Reference: https://ui.shadcn.com/docs/components/scroll-area
 */
export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: ScrollAreaProps) => {
    return (
      <section className="p-4 w-480px">
        <ScrollArea
          className="h-[200px] w-[350px] rounded-md border p-4"
          {...props}
        >
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester. And then, one day, the people of
          the kingdom discovered that the jokes left by Jokester were so funny
          that they couldn&apos;t help but laugh. And once they started
          laughing, they couldn&apos;t stop. Jokester began sneaking into the
          castle in the middle of the night and leaving jokes all over the
          place: under the king&apos;s pillow, in his soup, even in the royal
          toilet. The king was furious, but he couldn&apos;t seem to stop
          Jokester. And then, one day, the people of the kingdom discovered that
          the jokes left by Jokester were so funny that they couldn&apos;t help
          but laugh. And once they started laughing, they couldn&apos;t stop.
        </ScrollArea>
      </section>
    );
  },
};
