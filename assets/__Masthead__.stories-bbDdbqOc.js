import{j as e}from"./jsx-runtime-CexXSJP5.js";import{T as C}from"./index-CDfRmw7X.js";import{$ as N}from"./index-BzXAZrtB.js";import{c as g}from"./index-Bb4qSo10.js";import{r}from"./index-BP8_t0zE.js";import{c as b}from"./create-context-F0uuYADf.js";import{c as u}from"./cn-BeVKbU-K.js";import{C as j}from"./chevron-down-IPPJBYSD.js";import{c as k}from"./createLucideIcon-CtRCGPks.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Label-DOncBlms.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=k("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),[_,p]=b({name:"Masthead",hookName:"useMastheadContext",providerName:"MastheadProvider",defaultValue:{open:!1,setOpen:()=>{}}}),m=r.forwardRef(({className:o,children:t,...s},a)=>{const[n,i]=r.useState(!1),l={open:n,setOpen:d=>{i(d)}};return e.jsx(_,{value:l,children:e.jsx("div",{role:"banner",className:u("bg-background-2 flex flex-col items-center",o),ref:a,...s,children:t})})}),D=r.forwardRef(({className:o,children:t,...s},a)=>{const n=p();return e.jsx("div",{className:u("min-h-8 max-w-desktop w-full",o),"data-orientation":"vertical","data-state":n.open?"open":"close","aria-expanded":n.open?"true":"false",ref:a,...s,children:t})}),h=r.forwardRef(({asChild:o,children:t,className:s,...a},n)=>{const i=p(),l=o?N:"button",d=()=>{i.setOpen(!i.open)};return e.jsxs(l,{className:u("[&[data-state=open]>svg]:rotate-180",s),ref:n,onClick:d,"data-state":i.open?"open":"close",...a,children:[t,e.jsx(j,{size:12,className:"transition-transform duration-200"})]})}),v=g(["overflow-hidden border-border-secondary transition-all duration-300 w-full flex flex-col items-center",'before:content-[""] before:w-full before:flex before:border-t-1 before:border-border-secondary'],{variants:{open:{true:"max-h-500px",false:"max-h-0"}},defaultVariants:{open:!1}}),y=r.forwardRef(({children:o,className:t,...s},a)=>{const n=p();return e.jsx("dl",{className:u(v({open:n.open}),t),"data-orientation":"vertical","data-state":n.open?"open":"close",ref:a,...s,children:o})}),A=r.forwardRef(({className:o,...t},s)=>e.jsx("dt",{className:u("mt-7 mb-5 max-w-desktop w-full",o),ref:s,...t})),w=r.forwardRef(({children:o,className:t,...s},a)=>e.jsx("dd",{className:u("mb-7 pl-28px max-w-desktop w-full",t),ref:a,...s,children:o}));m.__docgenInfo={description:"",methods:[],displayName:"Root"};D.__docgenInfo={description:"",methods:[],displayName:"Container"};h.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};y.__docgenInfo={description:"",methods:[],displayName:"Description"};A.__docgenInfo={description:"",methods:[],displayName:"DescriptionTitle"};w.__docgenInfo={description:"",methods:[],displayName:"DescriptionContent"};const K={title:"Components/Masthead",component:m,parameters:{layout:"centered",docs:{description:{component:`공식 배너는 사용자가 대한민국 정부 조직 및 관련 기관에서 운영 및 관리하는 디지털 정부서비스임을 식별할 수 있도록 제공하는 정보 배너이다.

KRDS Reference: https://uiux.egovframe.go.kr/guide/component/component_02_01.html<br/>`}}},tags:["autodocs"],argTypes:{},args:{}},c={args:{},render:o=>e.jsx("section",{className:"p-4 w-full",children:e.jsxs(m,{...o,children:[e.jsxs(D,{className:"pl-28px korean-flag flex flex-row items-center flex-wrap <mobile:gap-2",children:[e.jsx(C.Body,{size:"sm",className:"mr-5i color-text-title",children:"이 누리집은 가짜 누리집입니다."}),e.jsx(h,{className:"color-secondary flex flex-row items-center gap-1",children:e.jsx(C.Body,{size:"sm",className:"color-secondary",children:"가짜 누리집 열기"})})]}),e.jsxs(y,{children:[e.jsx(A,{className:"goverment pl-28px flex flex-row items-center",children:e.jsx(C.Body,{size:"md",bold:!0,children:"가짜 누리집 주소 확인하기"})}),e.jsxs(w,{children:[e.jsxs(C.Detail,{as:"p",className:"mb-7 color-text-detail",children:["go.kr을 사용하지 않는 이 누리집은 대한민국 정부에서 관리하지 않는 가짜 누리집입니다.",e.jsx("br",{}),"이 밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하지 않고 있다면 아래 URL에서 도메인 주소를 확인할 수 없습니다."]}),e.jsxs(C.Body,{as:"a",href:"#",size:"sm",className:"inline-flex flex-row items-center gap-2 color-text-body",children:["안 운영중인 가짜 누리집안보기",e.jsx(M,{className:"inline-block",size:20})]})]})]})]})})};var f,B,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: (props: MastheadProps) => {
    return <section className="p-4 w-full">
        <Masthead {...props}>
          <MastheadContainer className="pl-28px korean-flag flex flex-row items-center flex-wrap <mobile:gap-2">
            <Typo.Body size="sm" className="mr-5i color-text-title">
              이 누리집은 가짜 누리집입니다.
            </Typo.Body>
            <MastheadDropdown className="color-secondary flex flex-row items-center gap-1">
              <Typo.Body size="sm" className="color-secondary">
                가짜 누리집 열기
              </Typo.Body>
            </MastheadDropdown>
          </MastheadContainer>
          <MastheadDescription>
            <MastheadDescriptionTitle className="goverment pl-28px flex flex-row items-center">
              <Typo.Body size="md" bold>
                가짜 누리집 주소 확인하기
              </Typo.Body>
            </MastheadDescriptionTitle>
            <MastheadDescriptionContent>
              <Typo.Detail as="p" className="mb-7 color-text-detail">
                go.kr을 사용하지 않는 이 누리집은 대한민국 정부에서 관리하지
                않는 가짜 누리집입니다.
                <br />이 밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하지 않고
                있다면 아래 URL에서 도메인 주소를 확인할 수 없습니다.
              </Typo.Detail>
              <Typo.Body as="a" href="#" size="sm" className="inline-flex flex-row items-center gap-2 color-text-body">
                안 운영중인 가짜 누리집안보기
                <Icon.ExternalLink className="inline-block" size={20} />
              </Typo.Body>
            </MastheadDescriptionContent>
          </MastheadDescription>
        </Masthead>
      </section>;
  }
}`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const G=["Default"];export{c as Default,G as __namedExportsOrder,K as default};
