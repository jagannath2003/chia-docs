"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[794],{7865:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>a});var r=t(5893),c=t(1151);const i={title:"Chia Protocol",slug:"/chia-protocol"},l=void 0,n={id:"protocol/protocol",title:"Chia Protocol",description:"The Chia protocol is composed of a few different sub-protocols. All protocol messages are sent encoded in Streamable format, using the networking protocol defined in the Networking page. The following documents go into depth into the messages sent by each type of service/node, and how they should be interpreted.",source:"@site/docs/protocol/protocol.md",sourceDirName:"protocol",slug:"/chia-protocol",permalink:"/chia-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/protocol.md",tags:[],version:"current",frontMatter:{title:"Chia Protocol",slug:"/chia-protocol"},sidebar:"tutorialSidebar",previous:{title:"Plot Public Keys",permalink:"/plot-public-keys"},next:{title:"Networking Protocol",permalink:"/networking-protocol"}},s={},a=[];function h(o){const e={a:"a",li:"li",ol:"ol",p:"p",...(0,c.a)(),...o.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["The Chia protocol is composed of a few different sub-protocols. All protocol messages are sent encoded in Streamable format, using the networking protocol defined in the ",(0,r.jsx)(e.a,{href:"/networking-protocol",children:"Networking page"}),". The following documents go into depth into the messages sent by each type of service/node, and how they should be interpreted."]}),"\n",(0,r.jsx)(e.p,{children:"The protocol is asynchronous and bidirectional, that is, each end of the connection can send messages, and receive a response, multiple responses, or no response for each message."}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/harvester_protocol.py",children:"Harvester protocol"})," (harvester <-> farmer)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/farmer_protocol.py",children:"Farmer protocol"})," (farmer <-> full node)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/timelord_protocol.py",children:"Timelord protocol"})," (timelord <-> full node)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/full_node_protocol.py",children:"Peer protocol"})," (full node <-> full node)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/pool_protocol.py",children:"Pool protocol"})," (pool <-> farmer)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/wallet_protocol.py",children:"Wallet protocol"})," (wallet/light client <-> full node)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/introducer_protocol.py",children:"Introducer protocol"})," (introducer <-> full node)"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"In addition to the sub-protocols that are specific to services, a few protocols are shared across all or most services."}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/shared_protocol.py",children:"Shared networking protocol"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/protocol_timing.py",children:"Timing protocol"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/protocol_message_types.py",children:"Message types protocol"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/protocol_state_machine.py",children:"State machine protocol"})}),"\n"]})]})}function p(o={}){const{wrapper:e}={...(0,c.a)(),...o.components};return e?(0,r.jsx)(e,{...o,children:(0,r.jsx)(h,{...o})}):h(o)}},1151:(o,e,t)=>{t.d(e,{Z:()=>n,a:()=>l});var r=t(7294);const c={},i=r.createContext(c);function l(o){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function n(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(c):o.components||c:l(o.components),r.createElement(i.Provider,{value:e},o.children)}}}]);