import{j as e}from"./jsx-runtime-CexXSJP5.js";import{T as l}from"./index-cjEwhX3D.js";import{$ as b}from"./index-BzXAZrtB.js";import{c as k}from"./index-Bb4qSo10.js";import{r as a}from"./index-BP8_t0zE.js";import{c as i}from"./cn-BeVKbU-K.js";import{c as j,C as M}from"./chevron-down-CiemvT3s.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=j("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);function E(o,t){return`${o} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function _(o={}){const{name:t,hookName:n="useContext",providerName:r="Provider",errorMessage:s,defaultValue:c}=o,u=a.createContext(c);u.displayName=t;function C(){const x=a.useContext(u);if(!x){const f=new Error(s??E(n,r));throw f.name="ContextError",f}return x}return[u.Provider,C,u]}const[T,p]=_({name:"Masthead",hookName:"useMastheadContext",providerName:"MastheadProvider",defaultValue:{open:!1,setOpen:()=>{}}}),m=a.forwardRef(({className:o,children:t,...n},r)=>{const[s,c]=a.useState(!1),u={open:s,setOpen:C=>{c(C)}};return e.jsx(T,{value:u,children:e.jsx("div",{role:"banner",className:i("bg-background-2 flex flex-col items-center",o),ref:r,...n,children:t})})}),A=a.forwardRef(({className:o,children:t,...n},r)=>{const s=p();return e.jsx("div",{className:i("min-h-8 max-w-desktop w-full",o),"data-orientation":"vertical","data-state":s.open?"open":"close","aria-expanded":s.open?"true":"false",ref:r,...n,children:t})}),w=a.forwardRef(({asChild:o,children:t,className:n,...r},s)=>{const c=p(),u=o?b:"button",C=()=>{c.setOpen(!c.open)};return e.jsxs(u,{className:i("[&[data-state=open]>svg]:rotate-180",n),ref:s,onClick:C,"data-state":c.open?"open":"close",...r,children:[t,e.jsx(M,{size:12,className:"transition-transform duration-200"})]})}),F=k(["overflow-hidden border-border-secondary transition-all duration-300 w-full flex flex-col items-center",'before:content-[""] before:w-full before:flex before:border-t-1 before:border-border-secondary'],{variants:{open:{true:"max-h-500px",false:"max-h-0"}},defaultVariants:{open:!1}}),N=a.forwardRef(({children:o,className:t,...n},r)=>{const s=p();return e.jsx("dl",{className:i(F({open:s.open}),t),"data-orientation":"vertical","data-state":s.open?"open":"close",ref:r,...n,children:o})}),g=a.forwardRef(({className:o,...t},n)=>e.jsx("dt",{className:i("mt-7 mb-5 max-w-desktop w-full",o),ref:n,...t})),y=a.forwardRef(({children:o,className:t,...n},r)=>e.jsx("dd",{className:i("mb-7 pl-28px max-w-desktop w-full",t),ref:r,...n,children:o}));m.__docgenInfo={description:"",methods:[],displayName:"Root"};A.__docgenInfo={description:"",methods:[],displayName:"Container"};w.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};N.__docgenInfo={description:"",methods:[],displayName:"Description"};g.__docgenInfo={description:"",methods:[],displayName:"DescriptionTitle"};y.__docgenInfo={description:"",methods:[],displayName:"DescriptionContent"};const K={title:"Components/Masthead",component:m,parameters:{layout:"centered",docs:{description:{component:`공식 배너는 사용자가 대한민국 정부 조직 및 관련 기관에서 운영 및 관리하는 디지털 정부서비스임을 식별할 수 있도록 제공하는 정보 배너이다.

KRDS Reference: https://uiux.egovframe.go.kr/guide/component/component_02_01.html<br/>`}}},tags:["autodocs"],argTypes:{},args:{}},d={args:{},render:o=>e.jsx("section",{className:"p-4 w-full",children:e.jsxs(m,{...o,children:[e.jsxs(A,{className:"pl-28px korean-flag flex flex-row items-center flex-wrap <mobile:gap-2",children:[e.jsx(l.Body,{size:"sm",className:"mr-5i color-text-title",children:"이 누리집은 가짜 누리집입니다."}),e.jsx(w,{className:"color-secondary flex flex-row items-center gap-1",children:e.jsx(l.Body,{size:"sm",className:"color-secondary",children:"가짜 누리집 열기"})})]}),e.jsxs(N,{children:[e.jsx(g,{className:"goverment pl-28px flex flex-row items-center",children:e.jsx(l.Body,{size:"md",bold:!0,children:"가짜 누리집 주소 확인하기"})}),e.jsxs(y,{children:[e.jsxs(l.Detail,{as:"p",className:"mb-7 color-text-detail",children:["go.kr을 사용하지 않는 이 누리집은 대한민국 정부에서 관리하지 않는 가짜 누리집입니다.",e.jsx("br",{}),"이 밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하지 않고 있다면 아래 URL에서 도메인 주소를 확인할 수 없습니다."]}),e.jsxs(l.Body,{as:"a",href:"#",size:"sm",className:"inline-flex flex-row items-center gap-2 color-text-body",children:["안 운영중인 가짜 누리집안보기",e.jsx(v,{className:"inline-block",size:20})]})]})]})]})})};var B,D,h;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: (props: MastheadProps) => {
    return <section className="p-4 w-full">
        <Masthead {...props}>
          <MastheadContainer className="pl-28px korean-flag flex flex-row items-center flex-wrap <mobile:gap-2">
            <Text.Body size="sm" className="mr-5i color-text-title">
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
              <Text.Detail as="p" className="mb-7 color-text-detail">
                go.kr을 사용하지 않는 이 누리집은 대한민국 정부에서 관리하지
                않는 가짜 누리집입니다.
                <br />이 밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하지 않고
                있다면 아래 URL에서 도메인 주소를 확인할 수 없습니다.
              </Text.Detail>
              <Text.Body as="a" href="#" size="sm" className="inline-flex flex-row items-center gap-2 color-text-body">
                안 운영중인 가짜 누리집안보기
                <Icon.ExternalLink className="inline-block" size={20} />
              </Text.Body>
            </MastheadDescriptionContent>
          </MastheadDescription>
        </Masthead>
      </section>;
  }
}`,...(h=(D=d.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const G=["Default"];export{d as Default,G as __namedExportsOrder,K as default};
