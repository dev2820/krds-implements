import {
  Title,
  type TitleProps
} from './Title';

const sizes = ['2xl','xl','lg','md','sm','xs'] as const;

export default {
  title: 'Components/Typo/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: '타이틀 폰트 크기',
      control: { type: 'select' }
    }
  },
  args: {
    size: 'md'
  },
};

export const Default = {
  render: (props: TitleProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Title as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Title>
        <br/>
        <Title as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Title>
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
            <Title as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Title>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Title as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Title>
          ))
        }
        </section>
      </div>
    );
  },
};