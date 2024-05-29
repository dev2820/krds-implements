import{j as e}from"./jsx-runtime-CexXSJP5.js";import{H as n}from"./Heading-CvIzU8k7.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const o=["lg","md","sm"],C={title:"Components/Typo/Heading",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:o,description:"Heading 폰트 크기",control:{type:"select"}}},args:{size:"md"}},r={render:s=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(n,{as:"p",...s,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(n,{as:"p",...s,children:"The quick brown fox jumps over the lazy dog"})]})},a={render:()=>e.jsxs("div",{className:"p-4 w-480px",children:[e.jsx("h2",{children:"Korean"}),e.jsx("section",{className:"flex flex-col gap-4",children:o.map(s=>e.jsxs(n,{as:"p",size:s,children:["(",s,") 다람쥐 헌 쳇바퀴에 타고파"]},s+"kr"))}),e.jsx("br",{}),e.jsx("h2",{children:"English"}),e.jsx("section",{className:"flex flex-col gap-4",children:o.map(s=>e.jsxs(n,{as:"p",size:s,children:["(",s,") The quick brown fox jumps over the lazy dog"]},s+"en"))})]})};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (props: HeadingProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Heading as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Heading>
        <br />
        <Heading as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Heading>
      </section>;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var t,d,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Heading as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Heading>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Heading as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Heading>)}
        </section>
      </div>;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const j=["Default","Size"];export{r as Default,a as Size,j as __namedExportsOrder,C as default};
