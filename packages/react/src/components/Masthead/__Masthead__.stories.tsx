import * as Icon from 'lucide-react';

import { Body } from '../Text/Body';
import { Title } from '../Text/Title';
import {
  Masthead,
  MastheadContainer,
  MastheadDescription,
  MastheadTrigger,
  type MastheadProps,
} from './index';

/**
 * 공식 배너는 사용자가 대한민국 정부 조직 및 관련 기관에서 운영 및 관리하는 디지털 정부서비스임을 식별할 수 있도록 제공하는 정보 배너이다.
 *
 * KRDS Reference: https://uiux.egovframe.go.kr/guide/component/component_02_01.html<br/>
 **/
export default {
  title: 'Components/Masthead',
  component: Masthead,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Default = {
  args: {},
  render: (props: MastheadProps) => {
    return (
      <section className="p-4 w-full">
        <Masthead {...props}>
          <MastheadContainer className="flex flex-row items-center flex-wrap gap-4 <mobile:gap-2 px-4 py-2">
            <Body size="sm">이 누리집은 가짜 누리집입니다.</Body>
            <MastheadTrigger asChild>
              <button className="color-secondary flex flex-row items-center gap-1">
                <Body size="sm">가짜 누리집 열기</Body>
                <Icon.ChevronDown size={12} />
              </button>
            </MastheadTrigger>
          </MastheadContainer>
          <MastheadDescription>
            <dl className="py-6 border-t border-border-secondary px-4">
              <h3 className="flex flex-row items-center mb-4">
                <div className="inline-block h-5 w-5 bg-black rounded-full mr-2 "></div>
                <Title as="dt" size="sm">
                  가짜 누리집 주소 확인하기
                </Title>
              </h3>
              <Body as="dd" size="sm" className="ml-7">
                이 누리집은 가짜 누리집입니다.
                <br />
                대충 아무말 넣고싶은데 그럴싸한 단어를 넣기 힘드네요.
              </Body>
            </dl>
          </MastheadDescription>
        </Masthead>
      </section>
    );
  },
};
