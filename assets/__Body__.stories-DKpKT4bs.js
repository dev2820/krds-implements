import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as o}from"./Body-azYe1GGa.js";import"./index-BP8_t0zE.js";import"./index-Bb4qSo10.js";import"./cn-BeVKbU-K.js";const u=["lg","md","sm"],D={Body:"Components/Typo/Body",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:u,description:"Body 폰트 크기",control:{type:"select"}},bold:{description:"Body 폰트 굵기",control:{type:"boolean"}}},args:{size:"md",bold:!1}},r={render:s=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(o,{as:"p",...s,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(o,{as:"p",...s,children:"The quick brown fox jumps over the lazy dog"})]})},n={render:()=>e.jsxs("section",{className:"p-4 w-480px",children:[e.jsx(o,{as:"p",children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx(o,{as:"p",bold:!0,children:"다람쥐 헌 쳇바퀴에 타고파"}),e.jsx("br",{}),e.jsx(o,{as:"p",children:"The quick brown fox jumps over the lazy dog"}),e.jsx(o,{as:"p",bold:!0,children:"The quick brown fox jumps over the lazy dog"})]})},a={render:()=>e.jsxs("div",{className:"p-4 w-480px",children:[e.jsx("h2",{children:"Korean"}),e.jsx("section",{className:"flex flex-col gap-4",children:u.map(s=>e.jsxs(o,{as:"p",size:s,children:["(",s,") 다람쥐 헌 쳇바퀴에 타고파"]},s+"kr"))}),e.jsx("br",{}),e.jsx("h2",{children:"English"}),e.jsx("section",{className:"flex flex-col gap-4",children:u.map(s=>e.jsxs(o,{as:"p",size:s,children:["(",s,") The quick brown fox jumps over the lazy dog"]},s+"en"))})]})};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (props: BodyProps<'p'>) => {
    return <section className="p-4 w-480px">
        <Body as="p" {...props}>
          다람쥐 헌 쳇바퀴에 타고파
        </Body>
        <br />
        <Body as="p" {...props}>
          The quick brown fox jumps over the lazy dog
        </Body>
      </section>;
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var t,i,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <section className="p-4 w-480px">
        <Body as="p">
          다람쥐 헌 쳇바퀴에 타고파
        </Body>
        <Body as="p" bold>
          다람쥐 헌 쳇바퀴에 타고파
        </Body>
        <br />
        <Body as="p">
          The quick brown fox jumps over the lazy dog
        </Body>
        <Body as="p" bold>
          The quick brown fox jumps over the lazy dog
        </Body>
      </section>;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,C,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-4 w-480px">
        <h2>Korean</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Body as="p" size={size} key={size + 'kr'}>
              ({size}) 다람쥐 헌 쳇바퀴에 타고파
            </Body>)}
        </section>
        <br />
        <h2>English</h2>
        <section className='flex flex-col gap-4'>
        {sizes.map(size => <Body as="p" size={size} key={size + 'en'}>
              ({size}) The quick brown fox jumps over the lazy dog
            </Body>)}
        </section>
      </div>;
  }
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const b=["Default","Bold","Size"];export{n as Bold,r as Default,a as Size,b as __namedExportsOrder,D as default};
