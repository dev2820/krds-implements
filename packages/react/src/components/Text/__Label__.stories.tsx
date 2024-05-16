import {
  Label,
  type LabelProps
} from './Label';

const sizes = ['lg','md','sm','xs'] as const;

export default {
  Label: 'Components/Text/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: sizes,
      description: 'Label 폰트 크기',
      control: { type: 'select' }
    },
    bold: {
      description: 'Label 폰트 굵기',
      control: { type: 'boolean'}
    }
  },
  args: {
    size: 'md',
    bold: false,
  },
};

export const Default = {
  render: (props: LabelProps<'p'>) => {
    return (
      <section className="p-4 w-480px">
        <Label as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Label>
        <br/>
        <Label as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Label>
      </section>
    );
  },
};

export const Bold = {
  render: () => {
    return (
      <section className="p-4 w-480px">
        <Label as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Label>
        <Label as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Label>
        <br/>
        <Label as="p">
          The quick brown fox jumps over the lazy dog
        </Label>
        <Label as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Label>
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
            <Label as="p" size={size} key={size+'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Label>
          ))
        }
        </section>
        <br/>
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {
          sizes.map(size=>(
            <Label as="p" size={size} key={size+'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Label>
          ))
        }
        </section>
      </div>
    );
  },
};