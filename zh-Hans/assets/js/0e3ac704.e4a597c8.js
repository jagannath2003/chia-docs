"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6672],{8497:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"new-proof-format/new-proof-farming-requirements","title":"Farming Requirements","description":"In general, the larger your farm, the more powerful your harvesters will need to be. However, keep in mind that one farm can be broken into multiple harvesters, so it it possible to run a large farm without any high-end equipment.","source":"@site/docs/new-proof-format/new-proof-farming-requirements.md","sourceDirName":"new-proof-format","slug":"/new-proof-farming-requirements","permalink":"/zh-Hans/new-proof-farming-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/new-proof-format/new-proof-farming-requirements.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Farming Requirements","title":"Farming Requirements","slug":"/new-proof-farming-requirements"},"sidebar":"tutorialSidebar","previous":{"title":"Plotting Requirements","permalink":"/zh-Hans/new-proof-plotting-requirements"},"next":{"title":"Timeline","permalink":"/zh-Hans/new-proof-timeline"}}');var a=t(4848),s=t(8453);t(1470),t(9365);const o={sidebar_label:"Farming Requirements",title:"Farming Requirements",slug:"/new-proof-farming-requirements"},i=void 0,l={},u=[{value:"Requirements by farm size",id:"requirements-by-farm-size",level:3},{value:"Raspberry Pi support",id:"raspberry-pi-support",level:3}];function c(e){const r={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"In general, the larger your farm, the more powerful your harvesters will need to be. However, keep in mind that one farm can be broken into multiple harvesters, so it it possible to run a large farm without any high-end equipment."}),"\n",(0,a.jsx)(r.h3,{id:"requirements-by-farm-size",children:"Requirements by farm size"}),"\n",(0,a.jsxs)(r.p,{children:["These are the current guidelines ",(0,a.jsx)(r.strong,{children:"per harvester"})," using the default compression for the plot format:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"< 100 TiB"}),": For farmers using spare space on their machines, a modern consumer level CPU and < 1 GiB RAM should be sufficient and have negligible impact on their system."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:" < 1 PiB"}),": For small farmers a modern consumer level CPU and 1GiB RAM should be sufficient."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"1 PiB - 10 PiB"}),": Medium sized farms may benefit from an integrated GPU (e.g. Apple M-Series processor or Intel with onboard graphics), or some utilization on a GPU."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"> 10 PiB"}),": a dedicated GPU is required and possibly more than 1GiB of motherboard RAM depending on the number of plots."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"If using a GPU, the RAM requirement is currently expected to be less than 1 GiB."}),"\n",(0,a.jsx)(r.h3,{id:"raspberry-pi-support",children:"Raspberry Pi support"}),"\n",(0,a.jsx)(r.p,{children:"We are still pending benchmarks to assess how many plots a Raspberry Pi may support for default plot format settings. However, plots can be made with additional data (~10-15% more space), so that even a Raspberry Pi could support many PiB on a single harvester."})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>o});t(6540);var n=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>q});var n=t(6540),a=t(4164),s=t(3104),o=t(6347),i=t(205),l=t(7485),u=t(1682),c=t(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function h(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,d]=f({queryString:t,groupId:a}),[h,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??h;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function w(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=l.indexOf(r),a=i[t].value;a!==n&&(u(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function x(e){const r=h(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...r,...e}),(0,v.jsx)(y,{...r,...e})]})}function q(e){const r=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(6540);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);