import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as h}from"./index-Bb4qSo10.js";import{r as S}from"./index-BP8_t0zE.js";import{c as i}from"./cn-BeVKbU-K.js";const j=h(["border-1 border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","w-full","disabled:cursor-not-allowed disabled:opacity-50","invalid:bg-error-50 invalid:border-error","appearance-none"],{variants:{size:{sm:"h-8 pl-3 pt-1.5 pb-5px pr-2 rounded-lg text-sm",md:"h-10 pl-4 py-2 pr-3 rounded-10px text-md",lg:"h-12 pl-4 pt-2.5 pb-11px pr-3 rounded-xl text-lg"}},defaultVariants:{size:"md"}}),t=S.forwardRef(({size:o,placeholder:r,className:x,children:f,...g},v)=>e.jsxs("div",{className:"flex flex-row items-center relative text-grey-700",children:[e.jsxs("select",{className:i(j({size:o}),x),ref:v,defaultValue:r?"":void 0,...g,children:[r&&e.jsx("option",{value:"",disabled:!0,children:r}),f]}),e.jsx("i",{className:i("absolute right-0 i-t-chevron-right rotate-90 text-4 color-grey-700",`${o==="sm"?"mr-2":"mr-3"}`)})]}));t.displayName="Select";t.__docgenInfo={description:"",methods:[],displayName:"Select"};const u=["sm","md","lg"],N={title:"Components/Select",component:t,parameters:{layout:"centered",docs:{description:{component:"API Reference: https://ui.shadcn.com/docs/components/select"}}},tags:["autodocs"],argTypes:{size:{options:u,description:"Select 크기",control:{type:"select"}}},args:{size:"md"}},n={args:{placeholder:"Select option"},render:o=>e.jsx("section",{className:"p-4 w-480px",children:e.jsxs(t,{...o,children:[e.jsx("option",{value:"option1",children:"Option 1"}),e.jsx("option",{value:"option2",children:"Option 2"}),e.jsx("option",{value:"option3",children:"Option 3"})]})})},s={render:()=>e.jsx("section",{className:"p-4 w-480px flex flex-col gap-4",children:u.map(o=>e.jsxs(t,{size:o,children:[e.jsx("option",{value:"option1",children:"Option 1"}),e.jsx("option",{value:"option2",children:"Option 2"}),e.jsx("option",{value:"option3",children:"Option 3"})]},o))})};var p,a,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select option'
  },
  render: (props: SelectProps) => {
    return <section className="p-4 w-480px">
        <Select {...props}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </section>;
  }
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <section className="p-4 w-480px flex flex-col gap-4">
        {sizes.map(size => <Select key={size} size={size}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>)}
      </section>;
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["Default","Size"];export{n as Default,s as Size,_ as __namedExportsOrder,N as default};
