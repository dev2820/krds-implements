import{r as a}from"./index-BP8_t0zE.js";import{r as $}from"./index-BxmsGmlx.js";import{a as v}from"./index-BzXAZrtB.js";import{$ as p}from"./index-B-Fq2cco.js";function E(n,t){return a.useReducer((o,r)=>{const i=t[o][r];return i??o},n)}const M=n=>{const{present:t,children:o}=n,r=O(t),i=typeof o=="function"?o({present:r.isPresent}):a.Children.only(o),c=v(r.ref,i.ref);return typeof o=="function"||r.isPresent?a.cloneElement(i,{ref:c}):null};M.displayName="Presence";function O(n){const[t,o]=a.useState(),r=a.useRef({}),i=a.useRef(n),c=a.useRef("none"),l=n?"mounted":"unmounted",[N,s]=E(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const e=f(r.current);c.current=N==="mounted"?e:"none"},[N]),p(()=>{const e=r.current,u=i.current;if(u!==n){const A=c.current,d=f(e);n?s("MOUNT"):d==="none"||(e==null?void 0:e.display)==="none"?s("UNMOUNT"):s(u&&A!==d?"ANIMATION_OUT":"UNMOUNT"),i.current=n}},[n,s]),p(()=>{if(t){const e=m=>{const d=f(r.current).includes(m.animationName);m.target===t&&d&&$.flushSync(()=>s("ANIMATION_END"))},u=m=>{m.target===t&&(c.current=f(r.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(N),ref:a.useCallback(e=>{e&&(r.current=getComputedStyle(e)),o(e)},[])}}function f(n){return(n==null?void 0:n.animationName)||"none"}export{M as $};
