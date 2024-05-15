import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  type CardProps,
} from './Card';

const variants = ['elevated', 'outline', 'filled'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/card
 */
export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: variants,
      description: '카드 타입',
      control: { type: 'select' },
    },
  },
  args: {},
};

export const Default = {
  args: {},
  render: (props: CardProps) => {
    return (
      <section className="p-4 w-480px">
        <Card {...props}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    );
  },
};

export const Variant = {
  args: {},
  render: () => {
    return (
      <section className="p-4 w-480px flex flex-col gap-4">
        {variants.map(variant => (
          <Card variant={variant} key={variant}>
            <CardHeader>
              <CardTitle>Lorem Ipsum</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </CardContent>
          </Card>
        ))}
      </section>
    );
  },
};
