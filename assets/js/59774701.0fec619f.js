"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[623],{1573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(5893),r=t(1151);t(4866),t(5162);const i={title:"Dual Farming",slug:"dual-farming-testnet-mainnet"},l=void 0,s={id:"farming/dual-farming-testnet-mainnet",title:"Dual Farming",description:"These instructions are tailored for Linux. A similar approach could likely be followed for MacOS.",source:"@site/docs/farming/dual-farming-testnet-mainnet.md",sourceDirName:"farming",slug:"/farming/dual-farming-testnet-mainnet",permalink:"/farming/dual-farming-testnet-mainnet",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/farming/dual-farming-testnet-mainnet.md",tags:[],version:"current",frontMatter:{title:"Dual Farming",slug:"dual-farming-testnet-mainnet"},sidebar:"tutorialSidebar",previous:{title:"Farming Considerations",permalink:"/farming-considerations"},next:{title:"Farming FAQ",permalink:"/farming-faq"}},o={},c=[{value:"Set Up Mainnet Installation",id:"set-up-mainnet-installation",level:2},{value:"Set Up Testnet Installation",id:"set-up-testnet-installation",level:2},{value:"Swapping between mainnet and testnet",id:"swapping-between-mainnet-and-testnet",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"These instructions are tailored for Linux. A similar approach could likely be followed for MacOS."})}),"\n",(0,a.jsx)(n.p,{children:"In some cases, you may want to farm the same plots you farm on mainnet on one of the testnets as well, without removing them from mainnet. This is doable with a bit of extra legwork to set up unique ports for the testnet Chia installation."}),"\n",(0,a.jsxs)(n.p,{children:["There are a couple options for setting this up. You can either ensure you have the ",(0,a.jsx)(n.code,{children:"CHIA_ROOT"})," set to unique values for each instance you want to run, or else run the installations on separate users. These instructions will show setting a specific ",(0,a.jsx)(n.code,{children:"CHIA_ROOT"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"set-up-mainnet-installation",children:"Set Up Mainnet Installation"}),"\n",(0,a.jsxs)(n.p,{children:["For the mainnet installation, we will stick with the default ports and ",(0,a.jsx)(n.code,{children:"CHIA_ROOT"}),", so these steps are essentially no different than the standard ",(0,a.jsx)(n.a,{href:"/installation",children:"installation instructions"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"set-up-testnet-installation",children:"Set Up Testnet Installation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["(Optional) Install ",(0,a.jsx)(n.a,{href:"https://github.com/mikefarah/yq#install",children:"yq"})," to make editing the yaml files easier","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Alternatively, you can manually edit the ports in ",(0,a.jsx)(n.code,{children:"config.yaml"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Run this command:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export CHIA_ROOT=~/.chia/testnet\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Run this command:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chia init\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Run this command:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chia configure --testnet true\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["cd to the ",(0,a.jsx)(n.code,{children:"~/.chia/testnet/config"})," directory and run the following script. Alternatively, you can edit the file manually. You do not need to use the ports listed below. However, if you choose to change the port numbers, ensure that they are different than the default values for mainnet:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yq -i '.daemon_port = 55401' ./config.yaml\nyq -i '.\"*\".log_syslog_port = 1514' ./config.yaml\nyq -i '.data_layer.port = 10561' ./config.yaml\nyq -i '.data_layer.rpc_port = 10562' ./config.yaml\nyq -i '.data_layer.wallet_peer.port = 11256' ./config.yaml\nyq -i '.data_layer.host_port = 10565' ./config.yaml\n\nyq -i '.farmer.port = 10447' ./config.yaml\nyq -i '.farmer.rpc_port = 10559' ./config.yaml\nyq -i '.farmer.harvester_peer.port = 10448' ./config.yaml\n\nyq -i '.harvester.port = 10448' ./config.yaml\nyq -i '.harvester.rpc_port = 10560' ./config.yaml\nyq -i '.harvester.farmer_peer.port = 10447' ./config.yaml\n\nyq -i '.wallet.port = 10449' ./config.yaml\nyq -i '.wallet.rpc_port = 11256' ./config.yaml\n\nyq -i '.full_node.rpc_port = 10555' ./config.yaml\nyq -i '.full_node.wallet_peer.port = 10449' ./config.yaml\nyq -i '.full_node.farmer_peer.port = 10447' ./config.yaml\n\nyq -i '.ui.port = 10222' ./config.yaml\nyq -i '.ui.rpc_port = 10555' ./config.yaml\nyq -i '.ui.daemon_port = 55401' ./config.yaml\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"Run this command:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chia start farmer\n"})}),"\n",(0,a.jsx)(n.h2,{id:"swapping-between-mainnet-and-testnet",children:"Swapping between mainnet and testnet"}),"\n",(0,a.jsxs)(n.p,{children:["To swap between running commands for mainnet and running commands for testnet, you need to ensure your ",(0,a.jsx)(n.code,{children:"CHIA_ROOT"})," is set properly before running any commands:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Mainnet:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export CHIA_ROOT=~/.chia/mainnet\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Testnet:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export CHIA_ROOT=~/.chia/testnet\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(512),i=t(2466),l=t(6550),s=t(469),o=t(1980),c=t(7392),u=t(812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),y=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var a=t(7294);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);