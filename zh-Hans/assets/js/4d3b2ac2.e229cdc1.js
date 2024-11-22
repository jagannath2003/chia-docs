"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1536],{3227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(4848),o=r(8453);r(1470),r(9365);const i={title:"Timelords",slug:"/troubleshooting/timelords"},s=void 0,a={id:"troubleshooting/timelords",title:"Timelords",description:"Checking Timelord Logs",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/troubleshooting/timelords.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/timelords",permalink:"/zh-Hans/troubleshooting/timelords",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/troubleshooting/timelords.md",tags:[],version:"current",frontMatter:{title:"Timelords",slug:"/troubleshooting/timelords"},sidebar:"tutorialSidebar",previous:{title:"Locating Keys",permalink:"/zh-Hans/troubleshooting/locating-keys"},next:{title:"Using Github for Chia Contributions",permalink:"/zh-Hans/contribution/using-github"}},l={},c=[{value:"Checking Timelord Logs",id:"checking-timelord-logs",level:2},{value:"Common Timelord Error Logs",id:"common-timelord-error-logs",level:2},{value:"Chia logs",id:"chia-logs",level:3},{value:"ASIC logs",id:"asic-logs",level:3},{value:"Timelord support",id:"timelord-support",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"checking-timelord-logs",children:"Checking Timelord Logs"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Make sure to set your logs to INFO for the below commands to work.\nTo do so run: ",(0,n.jsx)(t.code,{children:"chia configure --log-level INFO"})]})}),"\n",(0,n.jsxs)(t.p,{children:["The below commands are for use with linux OS.",(0,n.jsx)(t.br,{}),"\n","The ",(0,n.jsx)(t.code,{children:"tail"})," command only pulls new information as it is added to the log files showing new information as it is added.",(0,n.jsx)(t.br,{}),"\n","The ",(0,n.jsx)(t.code,{children:"cat"})," command pulls all current data from the log files providing a snapshot of where it was and is currently."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The matched strings are missing the first letter (E or S) intentionally.",(0,n.jsx)(t.br,{}),"\n",'This is due to the two instances of each log, for example the log where others create the proof of time has the string "Not skipping" while the log where your machine creates the PoT has the string "Skipping".']})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Continuous:"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'tail -F ~/.chia/mainnet/log/debug.log | grep "stimated"'})," : running output of the current estimated IPS as seen by the network (note this will be lower than the IPS reported by the ASIC software).",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'tail -F ~/.chia/mainnet/log/debug.log | grep "kipping"'})," : running output of peak heights being added to the node. If a height is skipped than very likely your timelord created the PoT, if the height is not skipped then a different timelord created the PoT."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Static:"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'cat ~/.chia/mainnet/log/debug.log | grep "stimated"'})," : static output of the current estimated IPS as seen by the network (note this will be lower than the IPS reported by the ASIC software).",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'cat ~/.chia/mainnet/log/debug.log | grep "kipping"'})," : statis output of peak heights added to the node. If a height is skipped than very likely your timelord created the PoT, if the height is not skipped then a different timelord created the PoT."]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Example Estimated IPS Logs"}),(0,n.jsx)(t.p,{children:"These logs indicate your timelord has completed a Proof of Time, note there are three VDF chains and the specific VDF that was completed will be indicated. Also note that this does not mean your timelord is the fastest timelord, only that it completed a PoT."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'cat ~/.chia/mainnet/log/debug.log | grep "stimated"\n'})}),(0,n.jsx)(t.p,{children:"Response:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"2024-04-11T16:59:01.482 timelord chia.timelord.timelord   : INFO     Finished PoT chall:79a8b30ee7aaa3064ac4.. 1981176 iters, Estimated IPS: 575336.2, Chain: Chain.REWARD_CHAIN\n2024-04-11T16:59:01.588 timelord chia.timelord.timelord   : INFO     Finished PoT chall:027e1c04ae11d627179b.. 1981176 iters, Estimated IPS: 558173.6, Chain: Chain.INFUSED_CHALLENGE_CHAIN\n2024-04-11T16:59:01.627 timelord chia.timelord.timelord   : INFO     Finished PoT chall:50cd37772d5bae2a00d4.. 1981176 iters, Estimated IPS: 552043.3, Chain: Chain.CHALLENGE_CHAIN\n"})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Example Skipping Peak Log"}),(0,n.jsxs)(t.p,{children:["These logs indicate your timelord is skipping the peak height, one can reasonably assume that they have completed the Proof of Time the fastest or at least as fast as the other timelords.",(0,n.jsx)(t.br,{}),"\n","Note: a capital ",(0,n.jsx)(t.code,{children:"S"})," is used here to just pull the Skipping peak logs."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'cat ~/.chia/mainnet/log/debug.log | grep "Skipping"\n'})}),(0,n.jsx)(t.p,{children:"Response:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"2024-05-01T06:30:27.983 timelord chia.timelord.timelord_api: INFO     Skipping peak, already have.\n"})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Example Not Skipping Peak Log"}),(0,n.jsxs)(t.p,{children:["These logs indicate your timelord is not skipping the peak height, this means that your timelord was not the fastest at completing the PoT and it is getting the peak from a peer node.",(0,n.jsx)(t.br,{}),"\n","Note: a lower case ",(0,n.jsx)(t.code,{children:"s"})," is used here to just pull the Not skipping peak logs."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'cat ~/.chia/mainnet/log/debug.log | grep "skipping"\n'})}),(0,n.jsx)(t.p,{children:"Response:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"2024-05-01T06:30:27.983 timelord chia.timelord.timelord_api: INFO     Not skipping peak, don't have. Maybe we are not the fastest timelord.\n"})})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If you have set up the timelord services to run through systemD you can use the below command(s) for pulling those records."})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If running as a service:"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'journalctl -f -u chia-hw-vdf | grep "MHz"'})," : output of the ASIC timelord reported IPS (this will be higher than the estimated IPS as seen by the network). If not using systemD this information is available in the the terminal output where the ",(0,n.jsx)(t.code,{children:"hw_vdf_client"})," command was run."]}),"\n",(0,n.jsx)(t.h2,{id:"common-timelord-error-logs",children:"Common Timelord Error Logs"}),"\n",(0,n.jsx)(t.h3,{id:"chia-logs",children:"Chia logs"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'timelord chia.timelord.timelord   : ERROR    Error while handling message: Traceback (most recent call last):\n  File "chia/timelord/timelord.py", line 893, in _manage_chains\n  File "chia/timelord/timelord.py", line 440, in _submit_iterations\n  File "asyncio/streams.py", line 359, in drain\n  File "chia/timelord/timelord.py", line 221, in _stop_chain\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This error occurs when the ASIC software has been shutdown unexpectedly and will start spamming your log file.",(0,n.jsx)(t.br,{}),"\n","The current resolution is to restart the chia processes with something like ",(0,n.jsx)(t.code,{children:"chia start full_node timelord-only -r"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"asic-logs",children:"ASIC logs"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Warning: too much work for VDF aux threads"})," - This generally means that the frequency is set too high, it is recommended to use the auto-frequency flag for the software to self adjust and resolve this error ",(0,n.jsx)(t.code,{children:"--auto-freq 60"})," updates the frequency every 60 seconds.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"Bad data size after stop: -1"})," - This is a known logging error related to how the chia client and ASIC disconnect after a stop. There is no concern with having this error in your logs."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"timelord-support",children:"Timelord support"}),"\n",(0,n.jsxs)(t.p,{children:["Join Our ",(0,n.jsx)(t.a,{href:"https://discord.gg/chia",children:"Discord"})," and jump into the #support channel for support"]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const o={tabItem:"tabItem_Ymn6"};var i=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),o=r(4164),i=r(3104),s=r(6347),a=r(205),l=r(7485),c=r(1682),d=r(679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,i=u(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=p({queryString:r,groupId:o}),[g,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),b=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),o=a[r].value;o!==n&&(c(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(6540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);