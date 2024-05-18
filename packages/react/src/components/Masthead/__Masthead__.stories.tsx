import * as Icon from 'lucide-react';

import { Text } from '../Text';
import {
  Masthead,
  MastheadContainer,
  MastheadDescription,
  MastheadDescriptionContent,
  MastheadDescriptionTitle,
  MastheadDropdown,
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
          <MastheadContainer className="pl-28px korean-flag flex flex-row items-center flex-wrap <mobile:gap-2">
            <Text.Body size="sm" className="mr-5">
              이 누리집은 가짜 누리집입니다.
            </Text.Body>
            <MastheadDropdown className="color-secondary flex flex-row items-center gap-1">
              <Text.Body size="sm" className="color-secondary">
                가짜 누리집 열기
              </Text.Body>
            </MastheadDropdown>
          </MastheadContainer>
          <MastheadDescription>
            <MastheadDescriptionTitle className="goverment pl-28px flex flex-row items-center">
              <Text.Body size="md" bold>
                가짜 누리집 주소 확인하기
              </Text.Body>
            </MastheadDescriptionTitle>
            <MastheadDescriptionContent>
              <Text.Detail as="p" className="mb-7">
                go.kr을 사용하지 않는 이 누리집은 대한민국 정부에서 관리하지
                않는 가짜 누리집입니다.
                <br />이 밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하지 않고
                있다면 아래 URL에서 도메인 주소를 확인할 수 없습니다.
              </Text.Detail>
              <Text.Body
                as="a"
                href="#"
                size="sm"
                className="inline-flex flex-row items-center gap-2"
              >
                안 운영중인 가짜 누리집안보기
                <Icon.ExternalLink className="inline-block" size={20} />
              </Text.Body>
            </MastheadDescriptionContent>
          </MastheadDescription>
        </Masthead>
      </section>
    );
  },
};
