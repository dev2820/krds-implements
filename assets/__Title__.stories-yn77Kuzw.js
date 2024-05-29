import{j as e}from"./jsx-runtime-CexXSJP5.js";import{T as r}from"./Title-BYTkKWDv.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const a=["2xl","xl","lg","md","sm","xs"],T={title:"Components/Typo/Title",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:a,description:"타이틀 폰트 크기",control:{type:"select"}}},args:{size:"md"}},n={render:s=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(r,{as:"p",...s,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(r,{as:"p",...s,children:"The quick brown fox jumps over the lazy dog"})]})},o={render:()=>e.jsxs("div",{className:"p-4 w-480px",children:[e.jsx("h2",{children:"Korean"}),e.jsx("section",{className:"flex flex-col gap-4",children:a.map(s=>e.jsxs(r,{as:"p",size:s,children:["(",s,") 다람쥐 헌 쳇바퀴에 타고파"]},s+"kr"))}),e.jsx("br",{}),e.jsx("h2",{children:"English"}),e.jsx("section",{className:"flex flex-col gap-4",children:a.map(s=>e.jsxs(r,{as:"p",size:s,children:["(",s,") The quick brown fox jumps over the lazy dog"]},s+"en"))})]})};var t,i,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (props: TitleProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Title as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Title>
        <br />
        <Title as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Title>
      </section>;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Title as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Title>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Title as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Title>)}
        </section>
      </div>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["Default","Size"];export{n as Default,o as Size,j as __namedExportsOrder,T as default};
