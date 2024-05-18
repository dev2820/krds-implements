import{j as e}from"./jsx-runtime-CexXSJP5.js";import{D as r}from"./Detail-maxWErGh.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const t=["lg","md","sm"],g={Detail:"Components/Text/Detail",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:t,description:"Detail 폰트 크기",control:{type:"select"}},bold:{description:"Detail 폰트 굵기",control:{type:"boolean"}}},args:{size:"md",bold:!1}},n={render:s=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(r,{as:"p",...s,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(r,{as:"p",...s,children:"The quick brown fox jumps over the lazy dog"})]})},a={render:()=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(r,{as:"p",children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx(r,{as:"p",bold:!0,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(r,{as:"p",children:"The quick brown fox jumps over the lazy dog"}),e.jsx(r,{as:"p",bold:!0,children:"The quick brown fox jumps over the lazy dog"})]})},o={render:()=>e.jsxs("div",{className:"p-4 w-480px",children:[e.jsx("h2",{children:"Korean"}),e.jsx("section",{className:"flex flex-col gap-4",children:t.map(s=>e.jsxs(r,{as:"p",size:s,children:["(",s,") 다람쥐 헌 쳇바퀴에 타고파"]},s+"kr"))}),e.jsx("br",{}),e.jsx("h2",{children:"English"}),e.jsx("section",{className:"flex flex-col gap-4",children:t.map(s=>e.jsxs(r,{as:"p",size:s,children:["(",s,") The quick brown fox jumps over the lazy dog"]},s+"en"))})]})};var i,l,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (props: DetailProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Detail as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Detail>
        <br />
        <Detail as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Detail>
      </section>;
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <section className="p-4 w-480px">
        <Detail as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Detail>
        <Detail as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Detail>
        <br />
        <Detail as="p">
          The quick brown fox jumps over the lazy dog
        </Detail>
        <Detail as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Detail>
      </section>;
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,C,D;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Detail as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Detail>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Detail as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Detail>)}
        </section>
      </div>;
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const z=["Default","Bold","Size"];export{a as Bold,n as Default,o as Size,z as __namedExportsOrder,g as default};
