"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7332],{7146:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"guides/dao/dao-known-issues","title":"DAO Known Issues","description":"DAOs are currently under development. Be sure to update to the latest Chia version prior to using the DAO primitive.","source":"@site/docs/guides/dao/dao-known-issues.md","sourceDirName":"guides/dao","slug":"/dao-known-issues","permalink":"/dao-known-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/dao/dao-known-issues.md","tags":[],"version":"current","frontMatter":{"slug":"/dao-known-issues","title":"DAO Known Issues"},"sidebar":"guides","previous":{"title":"DAO CLI Guide","permalink":"/dao-cli-guide"},"next":{"title":"Verifiable Credentials Guide","permalink":"/guides/verifiable-credentials-guide"}}');var o=s(4848),a=s(8453);s(1470),s(9365);const r={slug:"/dao-known-issues",title:"DAO Known Issues"},i=void 0,l={},c=[{value:"Proposal Spam",id:"proposal-spam",level:2},{value:"Fake Proposals to lock DAO CATs",id:"fake-proposals-to-lock-dao-cats",level:2},{value:"Changing a DAO&#39;s settings",id:"changing-a-daos-settings",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["DAOs are currently under development. Be sure to update to the ",(0,o.jsx)(t.a,{href:"https://www.chia.net/downloads/",children:"latest Chia version"})," prior to using the DAO primitive."]}),"\n",(0,o.jsx)(t.p,{children:"As of Chia version 2.1.4, the following DAO issues are known to exist:"}),"\n",(0,o.jsx)(t.h2,{id:"proposal-spam",children:"Proposal Spam"}),"\n",(0,o.jsxs)(t.p,{children:["Under normal circumstances, an attacker can create a malicious proposal to drain the DAO of its treasury. However, even if the attacker has secured enough ",(0,o.jsx)(t.code,{children:"YES"})," votes to meet the ",(0,o.jsx)(t.code,{children:"attendance_required"})," threshold to pass the proposal, the ",(0,o.jsx)(t.code,{children:"soft_close_length"})," will protect against this type of attack. As long as a sufficient number of ",(0,o.jsx)(t.code,{children:"NO"})," votes are added prior to the expiration of the ",(0,o.jsx)(t.code,{children:"soft_close_length"}),", the proposal (and the attack) will fail."]}),"\n",(0,o.jsx)(t.p,{children:"However, prior to creating this proposal, the attacker can use proposal spam to improve the chances of the attack's success."}),"\n",(0,o.jsxs)(t.p,{children:["The DAO wallet subscribes to ",(0,o.jsx)(t.code,{children:"PROPOSAL"})," coins by hinting the ",(0,o.jsx)(t.code,{children:"TREASURY_ID"})," in the ",(0,o.jsx)(t.code,{children:"memos"})," field upon the coin's creation. There is a limit on the number of items a ",(0,o.jsx)(t.code,{children:"full_node"})," will return to a wallet based on a subscribed puzzle*hash (including hinted coins):"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"trusted_max_subscribe_response_items"}),": 500000"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"max_subscribe_response_items"}),": 100000"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The attacker can take advantage of this limit by creating multiple coins, each of which contains a hint equal to the ",(0,o.jsx)(t.code,{children:"TREASURY_ID"}),". Eventually a wallet will no longer get any additional coin states for newer coins from a ",(0,o.jsx)(t.code,{children:"full_node"}),' via the coin state subscription. This is the "proposal spam" part of the attack.']}),"\n",(0,o.jsxs)(t.p,{children:["If the attacker has created a sufficient number of the aforementioned coins to reach the subscription limit, the malicious proposal will be invisible to the wallets of every other DAO member. If the members are not alerted to the existence of the malicious proposal in some other way, the ",(0,o.jsx)(t.code,{children:"soft_close_length"})," will eventually be reached, and the proposal will succeed."]}),"\n",(0,o.jsx)(t.h2,{id:"fake-proposals-to-lock-dao-cats",children:"Fake Proposals to lock DAO CATs"}),"\n",(0,o.jsx)(t.p,{children:"An attacker can create spam proposals with the intent of locking DAO_CATs into voting mode permanently. There are two ways to accomplish this:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Create otherwise valid ",(0,o.jsx)(t.code,{children:"PROPOSAL"})," coins which don't meet the proposal minimum amount (e.g. 0 or 1 mojo coins)."]}),"\n",(0,o.jsx)(t.li,{children:"Create proposals without a timer coin."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In the event that such proposals are voted on by users, because the proposals can never be closed (even via self-destruct), any users who voted on these proposals will never be able to unlock the coins they voted with. Note that coins in this state could continue to be used to vote on other proposals."}),"\n",(0,o.jsxs)(t.p,{children:["The current mitigation to this is that the wallet will filter out any proposals which either don't meet the proposal minimum amount or don't have valid timer coins. It is strongly suggested to use the ",(0,o.jsx)(t.code,{children:"show_proposal"})," command with any proposal that you intend to vote on, and check that it is valid."]}),"\n",(0,o.jsx)(t.h2,{id:"changing-a-daos-settings",children:"Changing a DAO's settings"}),"\n",(0,o.jsxs)(t.p,{children:["Because each proposal is voted on and enacted independently, it is possible to have a situation where a proposal to change one or more of the DAO's settings passes while another proposal is active. In this case, the active proposal will take on the ",(0,o.jsx)(t.em,{children:"new"})," rules imposed by the proposal to change the DAO's settings. This situation could cause the existing proposal to fail, even if it would have passed under the original rules. Other side effects are also possible."]}),"\n",(0,o.jsx)(t.p,{children:"Because of this anomaly, a vote for a proposal to change the DAO's settings could affect any of the DAO's other active proposals. Therefore, members are strongly encouraged to examine all open proposals when deciding whether to vote for a proposal to change the DAO's settings."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(4164);const o={tabItem:"tabItem_Ymn6"};var a=s(4848);function r(e){let{children:t,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,r),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>k});var n=s(6540),o=s(4164),a=s(3104),r=s(6347),i=s(205),l=s(7485),c=s(1682),u=s(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:o}}=e;return{value:t,label:s,attributes:n,default:o}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const o=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:o}=e,a=h(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:s,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Dv)(s);return[o,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:o}),v=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=s(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function w(e){let{className:t,block:s,selectedValue:n,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),o=i[s].value;o!==n&&(c(t),r(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function x(e){let{lazy:t,children:s,selectedValue:a}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var n=s(6540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);