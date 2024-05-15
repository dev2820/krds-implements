import { Calendar } from './Calendar';

/**
 * API Reference: https://ui.shadcn.com/docs/components/calendar
 */
export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: any) => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <section className="p-4 w-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          {...props}
        />
      </section>
    );
  },
};
