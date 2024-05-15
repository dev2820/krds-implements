import * as Icon from 'lucide-react';

import React from 'react';

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
 * API Reference: https://www.radix-ui.com/primitives/docs/components/accordio
 **/
export default {
  title: 'Components/Masthead',
  component: Masthead,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    type: 'single',
    collapsible: false,
    disabled: false,
  },
};

export const Default = {
  args: {},
  render: (props: MastheadProps) => {
    return (
      <section className="p-4 w-480px">
        <Masthead {...props}>
          <MastheadContainer>
            이 누리집은 가짜 누리집입니다.
            <MastheadTrigger asChild>
              <button className="color-blue flex flex-row items-center gap-1">
                Description 열기 <Icon.ChevronDown size={16} />
              </button>
            </MastheadTrigger>
          </MastheadContainer>
          <MastheadDescription>구체적인 설명</MastheadDescription>
        </Masthead>
      </section>
    );
  },
};
