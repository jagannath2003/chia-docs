"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8989],{4199:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"keys/plot-ids","title":"Plot IDs","description":"A plot ID is a 32-byte value that is used as a deterministic seed to create an entire plot. In other words, two plots with the same plot ID will create byte-identical plot files. Plot IDs are public values that get put into Proof of Space objects.","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/keys/plot-ids.md","sourceDirName":"keys","slug":"/plot-ids","permalink":"/zh-Hans/plot-ids","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/keys/plot-ids.md","tags":[],"version":"current","frontMatter":{"title":"Plot IDs","slug":"/plot-ids"},"sidebar":"tutorialSidebar","previous":{"title":"BLS Keys","permalink":"/zh-Hans/bls-keys"},"next":{"title":"Plot Public Keys","permalink":"/zh-Hans/plot-public-keys"}}');var i=o(4848),n=o(8453);const a={title:"Plot IDs",slug:"/plot-ids"},r=void 0,l={},c=[];function h(e){const t={a:"a",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A plot ID is a 32-byte value that is used as a deterministic seed to create an entire plot. In other words, two plots with the same plot ID will create byte-identical plot files. Plot IDs are public values that get put into Proof of Space objects."}),"\n",(0,i.jsx)(t.p,{children:"A plot ID can be generated in one of two ways, depending on the desired farming method of the plot."}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:"/img/keys/plot-id.png",alt:"drawing"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Farm to pool public key. This method of farming is desirable if solo farming (no pools). To farm a plot like this, we hash together the pool public key and the plot public key (explained later). When successfully farming a block, the pool private key must sign the reward address. The drawback of this method is that if using a pool, the pool cannot be changed, and the plot is tied to the pool forever."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Farm to pool contract address. This method of farming is suitable for users who want to farm to a pool, and to be able to change pools in the future. Most farmers will likely use this method."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Instead of requiring a signature by the pool, rewards go straight into the puzzle hash (or address), that is encoded into the plot. This address is a smart contract controlled by the user, which specifies the user's current pool. The user can switch pools, with a timeout delay that the pool operator may customize (typically 30 minutes)."}),"\n",(0,i.jsxs)(t.p,{children:["This approach requires creating a blockchain transaction of at least one mojo before farming. Farmers can get 100 mojos for free from the official ",(0,i.jsx)(t.a,{href:"https://faucet.chia.net",children:"faucet"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The plot public key is explained in the next section."})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var s=o(6540);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);