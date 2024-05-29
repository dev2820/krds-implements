import {
Heading,
type HeadingProps
} from './Heading';

const sizes = ['lg','md','sm'] as const;

export default {
  title: 'Components/Typo/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Heading 폰트 크기',
      control: { type: 'select' }
    }
  },
  args: {
    size: 'md'
  },
};

export const Default = {
  render: (props: HeadingProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Heading as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Heading>
        <br/>
        <Heading as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Heading>
      </section>
    );
  },
};


export const Size = {
  render: () => {
    return (
      <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Heading as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Heading>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Heading as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Heading>
          ))
        }
        </section>
      </div>
    );
  },
};