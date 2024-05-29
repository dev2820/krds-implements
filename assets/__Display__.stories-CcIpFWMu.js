import{j as s}from"./jsx-runtime-CexXSJP5.js";import{D as r}from"./Display-BzLlPsAt.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const o=["lg","md","sm"],C={title:"Components/Typo/Display",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:o,description:"Display 폰트 크기",control:{type:"select"}}},args:{size:"md"}},n={render:e=>s.jsxs("section",{className:"p-4 w-480px",children:[s.jsx(r,{as:"p",...e,children:"다람쥐 헌 쳇바퀴에 타고파"}),s.jsx("br",{}),s.jsx(r,{as:"p",...e,children:"The quick brown fox jumps over the lazy dog"})]})},a={render:()=>s.jsxs("div",{className:"p-4 w-480px",children:[s.jsx("h2",{children:"Korean"}),s.jsx("section",{className:"flex flex-col gap-4",children:o.map(e=>s.jsxs(r,{as:"p",size:e,children:["(",e,") 다람쥐 헌 쳇바퀴에 타고파"]},e+"kr"))}),s.jsx("br",{}),s.jsx("h2",{children:"English"}),s.jsx("section",{className:"flex flex-col gap-4",children:o.map(e=>s.jsxs(r,{as:"p",size:e,children:["(",e,") The quick brown fox jumps over the lazy dog"]},e+"en"))})]})};var p,i,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (props: DisplayProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Display as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Display>
        <br />
        <Display as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Display>
      </section>;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,t,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Display as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Display>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Display as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Display>)}
        </section>
      </div>;
  }
}`,...(u=(t=a.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};const y=["Default","Size"];export{n as Default,a as Size,y as __namedExportsOrder,C as default};
