import {
  Body,
  type BodyProps
} from './Body';

const sizes = ['lg','md','sm'] as const;

export default {
  Body: 'Components/Typo/Body',
  component: Body,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Body 폰트 크기',
      control: { type: 'select' }
    },
    bold: {
      description: 'Body 폰트 굵기',
      control: { type: 'boolean'}
    }
  },
  args: {
    size: 'md',
    bold: false,
  },
};

export const Default = {
  render: (props: BodyProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Body as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Body>
        <br/>
        <Body as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Body>
      </section>
    );
  },
};

export const Bold = {
  render: () => {
    return (
      <section className="p-4 w-480px">
        <Body as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Body>
        <Body as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Body>
        <br/>
        <Body as="p">
          The quick brown fox jumps over the lazy dog
        </Body>
        <Body as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Body>
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
            <Body as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Body>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Body as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Body>
          ))
        }
        </section>
      </div>
    );
  },
};