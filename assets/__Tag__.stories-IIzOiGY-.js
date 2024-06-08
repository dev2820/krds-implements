import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{c as g}from"./cn-BeVKbU-K.js";import{T as D}from"./index-VCO98ekG.js";import{X as T}from"./x-DwDGBiHu.js";import"./Body-azYe1GGa.js";import"./index-Bb4qSo10.js";import"./Detail-maxWErGh.js";import"./Display-BzLlPsAt.js";import"./Heading-CvIzU8k7.js";import"./Label-DOncBlms.js";import"./Links-V592Y3Tr.js";import"./Title-BYTkKWDv.js";import"./createLucideIcon-CtRCGPks.js";const s=l.forwardRef(({children:o,className:t,...n},f)=>r.jsxs("button",{className:g("inline-flex flex-row gap-1 items-center","h-8","border border-border bg-background px-4 py-3 rounded-full","hover:cursor-pointer hover:bg-secondary-5","hover:cursor-pointer active:bg-secondary-10","disabled:cursor-not-allowed disabled:bg-disabled",t),ref:f,"aria-pressed":"true",...n,children:[r.jsx(D.Label,{size:"sm",children:o}),r.jsx(T,{size:12,className:"color-grayscale-50"})]})),x=l.forwardRef(({className:o,...t},n)=>r.jsx("div",{className:g("flex flex-row flex-wrap gap-x-3 gap-y-3",o),ref:n,...t}));s.__docgenInfo={description:"",methods:[],displayName:"Tag"};x.__docgenInfo={description:"",methods:[],displayName:"TagGroup"};const z={title:"Components/Tag",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},e={args:{disabled:!1},render:o=>r.jsx(s,{...o,children:"태그"})},a={args:{},render:()=>r.jsx(x,{className:"max-w-480px",children:["태그1","태그2","loooooooooong 태그","loooooooooong 태그2","태그3"].map(o=>r.jsx(s,{children:o}))})};var p,d,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: (props: TagProps) => {
    return <Tag {...props}>태그</Tag>;
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,i,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <TagGroup className="max-w-480px">
        {['태그1', '태그2', 'loooooooooong 태그', 'loooooooooong 태그2', '태그3'].map(tag => <Tag>{tag}</Tag>)}
      </TagGroup>;
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const I=["Default","Group"];export{e as Default,a as Group,I as __namedExportsOrder,z as default};
