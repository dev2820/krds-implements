import { Label } from '../Label';
import { type SwitchProps, Switch } from './Switch';

const sizes = ['sm', 'md'] as const;
/**
 * API Reference: https://ui.shadcn.com/docs/components/switch
 */
export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '스위치 사이즈',
      options: sizes,
      control: { type: 'select' },
    },
    defaultChecked: {
      description: '스위치가 on으로 초기화 되어야하는지 여부',
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'md',
    defaultChecked: false,
    disabled: false,
    required: false,
  },
};

export const Default = {
  args: {},
  render: (props: SwitchProps) => {
    return (
      <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>
    );
  },
};
export const Size = {
  args: {
    defaultChecked: true,
  },
  render: (props: SwitchProps) => {
    return (
      <section className="p-4 flex flex-col items-center gap-2">
        {sizes.map(size => (
          <div className="flex flex-row items-center gap-2" key={size}>
            <Switch id="airplane-mode" {...props} size={size} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        ))}
      </section>
    );
  },
};

export const DefaultChecked = {
  args: {
    defaultChecked: true,
  },
  render: (props: SwitchProps) => {
    return (
      <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>
    );
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (props: SwitchProps) => {
    return (
      <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>
    );
  },
};

export const Required = {
  args: {
    required: true,
  },
  render: (props: SwitchProps) => {
    return (
      <section className="p-4 flex flex-row items-center gap-2">
        <Switch id="airplane-mode" {...props} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </section>
    );
  },
};
