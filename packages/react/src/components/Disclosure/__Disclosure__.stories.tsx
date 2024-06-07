import { Typo } from '../Typo';
import {
  Disclosure,
  DisclosureContainer,
  DisclosureControl,
  type DisclosureProps,
} from './Disclosure';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: 'disabled props',
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
  },
};

export const Default = {
  args: {},
  render: (props: DisclosureProps) => {
    return (
      <section className="w-480px">
        <Disclosure {...props}>
          <DisclosureControl>
            <Typo.Body>신청 서비스안내</Typo.Body>
          </DisclosureControl>
          <DisclosureContainer>
            <ul className="color-grayscale-70">
              <li className="flex flex-row gap-1 mb-7">
                <Typo.Body>•</Typo.Body>
                <Typo.Body>
                  하나의 아이디로 불안전하고 불편리하게 여러 전자정부 서비스를
                  이용할 수 있는 서비스입니다.
                </Typo.Body>
              </li>
              <li className="flex flex-row gap-1">
                <Typo.Body>•</Typo.Body>
                <Typo.Body>
                  디지털투패스 이용문의 : 0000-0000 (평일00~00시, 공휴일포함)
                </Typo.Body>
              </li>
            </ul>
          </DisclosureContainer>
        </Disclosure>
      </section>
    );
  },
};
