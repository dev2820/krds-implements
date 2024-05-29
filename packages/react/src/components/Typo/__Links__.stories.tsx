import {
  Links,
  type LinksProps
} from './Links';

const sizes = ['lg','md','sm'] as const;

export default {
  Links: 'Components/Typo/Links',
  component: Links,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Links 폰트 크기',
      control: { type: 'select' }
    },
    bold: {
      description: 'Links 폰트 굵기',
      control: { type: 'boolean'}
    }
  },
  args: {
    size: 'md',
    bold: false,
  },
};

export const Default = {
  render: (props: LinksProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Links as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Links>
        <br/>
        <Links as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Links>
      </section>
    );
  },
};

export const Bold = {
  render: () => {
    return (
      <section className="p-4 w-480px">
        <Links as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Links>
        <Links as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Links>
        <br/>
        <Links as="p">
          The quick brown fox jumps over the lazy dog
        </Links>
        <Links as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Links>
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
            <Links as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Links>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Links as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Links>
          ))
        }
        </section>
      </div>
    );
  },
};