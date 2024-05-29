import{j as e}from"./jsx-runtime-CexXSJP5.js";import{L as r}from"./Label-DOncBlms.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const l=["lg","md","sm","xs"],D={Label:"Components/Text/Label",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:l,description:"Label 폰트 크기",control:{type:"select"}},bold:{description:"Label 폰트 굵기",control:{type:"boolean"}}},args:{size:"md",bold:!1}},n={render:s=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(r,{as:"p",...s,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(r,{as:"p",...s,children:"The quick brown fox jumps over the lazy dog"})]})},a={render:()=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(r,{as:"p",children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx(r,{as:"p",bold:!0,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(r,{as:"p",children:"The quick brown fox jumps over the lazy dog"}),e.jsx(r,{as:"p",bold:!0,children:"The quick brown fox jumps over the lazy dog"})]})},o={render:()=>e.jsxs("div",{className:"p-4 w-480px",children:[e.jsx("h2",{children:"Korean"}),e.jsx("section",{className:"flex flex-col gap-4",children:l.map(s=>e.jsxs(r,{as:"p",size:s,children:["(",s,") 다람쥐 헌 쳇바퀴에 타고파"]},s+"kr"))}),e.jsx("br",{}),e.jsx("h2",{children:"English"}),e.jsx("section",{className:"flex flex-col gap-4",children:l.map(s=>e.jsxs(r,{as:"p",size:s,children:["(",s,") The quick brown fox jumps over the lazy dog"]},s+"en"))})]})};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var t,i,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,C,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const g=["Default","Bold","Size"];export{a as Bold,n as Default,o as Size,g as __namedExportsOrder,D as default};
