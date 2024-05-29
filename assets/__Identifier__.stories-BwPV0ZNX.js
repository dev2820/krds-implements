import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as j}from"./index-Bb4qSo10.js";import{r as g}from"./index-BP8_t0zE.js";import{T as U}from"./index-CDfRmw7X.js";import{c as S}from"./create-context-F0uuYADf.js";import{c as x}from"./cn-BeVKbU-K.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Title-BYTkKWDv.js";import"./Body-azYe1GGa.js";import"./Detail-maxWErGh.js";import"./Label-DOncBlms.js";const K=r=>typeof r=="string",[M,G]=S({name:"Identifier",hookName:"useIdentifierContext",providerName:"IdentifierProvider",defaultValue:{isDark:!1,isRound:!1}}),N=j(["h-10 overflow-hidden"],{variants:{isDark:{true:"bg-grayscale-100 color-grayscale-0",false:"bg-grayscale-0 color-text-body"},isRound:{true:"rounded-3 px-5",false:""}},defaultVariants:{isDark:!1,isRound:!1}}),a=g.forwardRef(({children:r,className:o,isDark:n=!1,isRound:t=!1,...d},f)=>{const Y={isDark:n??!1,isRound:t??!1};return e.jsxs("section",{className:x(N({isDark:n,isRound:t}),o),ref:f,...d,"aria-labelledby":"identifier",children:[e.jsx("h3",{id:"identifier",className:"sr-only",children:"identifier"}),e.jsx(M,{value:Y,children:e.jsx("div",{className:"max-w-desktop w-full h-full flex flex-row items-center gap-3",children:r})})]})});a.displayName="Identifier";const s=g.forwardRef(({url:r,alt:o="",className:n},t)=>{const{isDark:d}=G(),f=K(r)?r:d?r.dark??r.light:r.light;return e.jsx("img",{src:f,alt:o,ref:t,className:x("h-6",`${d?"dark":"none-dark"}`,n)})});s.displayName="IdentifierLogo";const u=g.forwardRef(({className:r,...o},n)=>e.jsx(U.Body,{as:"span",size:"sm",className:r,ref:n,...o}));u.displayName="IdentifierGuide";a.__docgenInfo={description:"",methods:[],displayName:"Identifier",props:{isDark:{defaultValue:{value:"false",computed:!1},required:!1},isRound:{defaultValue:{value:"false",computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"IdentifierLogo",props:{alt:{defaultValue:{value:"''",computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"IdentifierGuide"};const p="data:image/png;base64,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",i="data:image/png;base64,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",q={title:"Components/Identifier",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isDark:{control:{type:"boolean"}},isRound:{control:{type:"boolean"}}},args:{isDark:!1,isRound:!1}},A={args:{},render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{url:{light:i,dark:p}}),e.jsx(s,{url:{light:i,dark:p}}),e.jsx(u,{children:"이 누리집은 김치냉장고 산하기관 누리집입니다."})]})},l={args:{isRound:!0},render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{url:i}),e.jsx(s,{url:i}),e.jsx(u,{children:"이 누리집은 김치냉장고 산하기관 누리집입니다."})]})},c={args:{isDark:!0},render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{url:{light:i,dark:p}}),e.jsx(s,{url:{light:i,dark:p}}),e.jsx(u,{children:"이 누리집은 김치냉장고 산하기관 누리집입니다."})]})};var m,I,C;A.parameters={...A.parameters,docs:{...(m=A.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: (props: IdentifierProps) => {
    return <Identifier {...props}>
        <IdentifierLogo url={{
        light: MI,
        dark: MIDark
      }} />
        <IdentifierLogo url={{
        light: MI,
        dark: MIDark
      }} />
        <IdentifierGuide>
          이 누리집은 김치냉장고 산하기관 누리집입니다.
        </IdentifierGuide>
      </Identifier>;
  }
}`,...(C=(I=A.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var B,k,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isRound: true
  },
  render: (props: IdentifierProps) => {
    return <Identifier {...props}>
        <IdentifierLogo url={MI} />
        <IdentifierLogo url={MI} />
        <IdentifierGuide>
          이 누리집은 김치냉장고 산하기관 누리집입니다.
        </IdentifierGuide>
      </Identifier>;
  }
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var R,E,h;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isDark: true
  },
  render: (props: IdentifierProps) => {
    return <Identifier {...props}>
        <IdentifierLogo url={{
        light: MI,
        dark: MIDark
      }} />
        <IdentifierLogo url={{
        light: MI,
        dark: MIDark
      }} />
        <IdentifierGuide>
          이 누리집은 김치냉장고 산하기관 누리집입니다.
        </IdentifierGuide>
      </Identifier>;
  }
}`,...(h=(E=c.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};const P=["Default","IsRound","IsDark"];export{A as Default,c as IsDark,l as IsRound,P as __namedExportsOrder,q as default};
