import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as z}from"./index-Bb4qSo10.js";import{c as D}from"./cn-BeVKbU-K.js";import"./index-BP8_t0zE.js";function a({as:s,size:b,bold:h,className:f,children:j,...g}){const L=s||"span";return e.jsx(L,{className:D(y({size:b,bold:h}),f),...g,children:j})}const y=z("leading-normal",{variants:{size:{lg:"text-19px",md:"text-17px",sm:"text-15px",xs:"text-13px"},bold:{true:"font-bold",false:"font-normal"}},defaultVariants:{size:"md",bold:!1}});a.__docgenInfo={description:"",methods:[],displayName:"Label",props:{as:{required:!1,tsType:{name:"T"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const l=["lg","md","sm","xs"],T={Label:"Components/Text/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:l,description:"Label 폰트 크기",control:{type:"select"}},bold:{description:"Label 폰트 굵기",control:{type:"boolean"}}},args:{size:"md",bold:!1}},n={render:s=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(a,{as:"p",...s,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(a,{as:"p",...s,children:"The quick brown fox jumps over the lazy dog"})]})},r={render:()=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(a,{as:"p",children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx(a,{as:"p",bold:!0,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(a,{as:"p",children:"The quick brown fox jumps over the lazy dog"}),e.jsx(a,{as:"p",bold:!0,children:"The quick brown fox jumps over the lazy dog"})]})},o={render:()=>e.jsxs("div",{className:"p-4 w-480px",children:[e.jsx("h2",{children:"Korean"}),e.jsx("section",{className:"flex flex-col gap-4",children:l.map(s=>e.jsxs(a,{as:"p",size:s,children:["(",s,") 다람쥐 헌 쳇바퀴에 타고파"]},s+"kr"))}),e.jsx("br",{}),e.jsx("h2",{children:"English"}),e.jsx("section",{className:"flex flex-col gap-4",children:l.map(s=>e.jsxs(a,{as:"p",size:s,children:["(",s,") The quick brown fox jumps over the lazy dog"]},s+"en"))})]})};var t,c,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (props: LabelProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Label as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Label>
        <br />
        <Label as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Label>
      </section>;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <section className="p-4 w-480px">
        <Label as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Label>
        <Label as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Label>
        <br />
        <Label as="p">
          The quick brown fox jumps over the lazy dog
        </Label>
        <Label as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Label>
      </section>;
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,x,C;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Label as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Label>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Label as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Label>)}
        </section>
      </div>;
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const k=["Default","Bold","Size"];export{r as Bold,n as Default,o as Size,k as __namedExportsOrder,T as default};
