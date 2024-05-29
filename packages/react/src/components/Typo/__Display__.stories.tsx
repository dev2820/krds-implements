import {
  Display,
  type DisplayProps
} from './Display';

const sizes = ['lg','md','sm'] as const;

export default {
  title: 'Components/Typo/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Display 폰트 크기',
      control: { type: 'select' }
    }
  },
  args: {
    size: 'md'
  },
};

export const Default = {
  render: (props: DisplayProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Display as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Display>
        <br/>
        <Display as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Display>
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
            <Display as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Display>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Display as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Display>
          ))
        }
        </section>
      </div>
    );
  },
};