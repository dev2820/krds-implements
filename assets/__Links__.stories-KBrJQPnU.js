import{j as s}from"./jsx-runtime-CexXSJP5.js";import{L as n}from"./Links-V592Y3Tr.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const i=["lg","md","sm"],D={Links:"Components/Typo/Links",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:i,description:"Links 폰트 크기",control:{type:"select"}},bold:{description:"Links 폰트 굵기",control:{type:"boolean"}}},args:{size:"md",bold:!1}},r={render:e=>s.jsxs("section",{className:"p-4 w-480px",children:[s.jsx(n,{as:"p",...e,children:"다람쥐 헌 쳇바퀴에 타고파"}),s.jsx("br",{}),s.jsx(n,{as:"p",...e,children:"The quick brown fox jumps over the lazy dog"})]})},o={render:()=>s.jsxs("section",{className:"p-4 w-480px",children:[s.jsx(n,{as:"p",children:"다람쥐 헌 쳇바퀴에 타고파"}),s.jsx(n,{as:"p",bold:!0,children:"다람쥐 헌 쳇바퀴에 타고파"}),s.jsx("br",{}),s.jsx(n,{as:"p",children:"The quick brown fox jumps over the lazy dog"}),s.jsx(n,{as:"p",bold:!0,children:"The quick brown fox jumps over the lazy dog"})]})},a={render:()=>s.jsxs("div",{className:"p-4 w-480px",children:[s.jsx("h2",{children:"Korean"}),s.jsx("section",{className:"flex flex-col gap-4",children:i.map(e=>s.jsxs(n,{as:"p",size:e,children:["(",e,") 다람쥐 헌 쳇바퀴에 타고파"]},e+"kr"))}),s.jsx("br",{}),s.jsx("h2",{children:"English"}),s.jsx("section",{className:"flex flex-col gap-4",children:i.map(e=>s.jsxs(n,{as:"p",size:e,children:["(",e,") The quick brown fox jumps over the lazy dog"]},e+"en"))})]})};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (props: LinksProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Links as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Links>
        <br />
        <Links as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Links>
      </section>;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var t,l,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <section className="p-4 w-480px">
        <Links as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Links>
        <Links as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Links>
        <br />
        <Links as="p">
          The quick brown fox jumps over the lazy dog
        </Links>
        <Links as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Links>
      </section>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,C,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Links as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Links>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Links as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Links>)}
        </section>
      </div>;
  }
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const b=["Default","Bold","Size"];export{o as Bold,r as Default,a as Size,b as __namedExportsOrder,D as default};