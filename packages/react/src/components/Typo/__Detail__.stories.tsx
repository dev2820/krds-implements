import {
  Detail,
  type DetailProps
} from './Detail';

const sizes = ['lg','md','sm'] as const;

export default {
  Detail: 'Components/Typo/Detail',
  component: Detail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Detail 폰트 크기',
      control: { type: 'select' }
    },
    bold: {
      description: 'Detail 폰트 굵기',
      control: { type: 'boolean'}
    }
  },
  args: {
    size: 'md',
    bold: false,
  },
};

export const Default = {
  render: (props: DetailProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Detail as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Detail>
        <br/>
        <Detail as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Detail>
      </section>
    );
  },
};

export const Bold = {
  render: () => {
    return (
      <section className="p-4 w-480px">
        <Detail as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Detail>
        <Detail as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Detail>
        <br/>
        <Detail as="p">
          The quick brown fox jumps over the lazy dog
        </Detail>
        <Detail as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Detail>
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
            <Detail as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Detail>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Detail as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Detail>
          ))
        }
        </section>
      </div>
    );
  },
};