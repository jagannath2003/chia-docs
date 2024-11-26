"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6960],{3191:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"architecture/wallets","title":"Wallets","description":"Wallets can communicate with full nodes through the wallet protocol. This is similar to Bitcoin\'s SPV protocol: it allows verification of transactions and block weight, without the bandwidth and CPU requirements of full nodes.","source":"@site/docs/architecture/wallets.md","sourceDirName":"architecture","slug":"/wallet-architecture","permalink":"/wallet-architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/architecture/wallets.md","tags":[],"version":"current","frontMatter":{"title":"Wallets","slug":"/wallet-architecture"},"sidebar":"tutorialSidebar","previous":{"title":"Pools","permalink":"/pool-architecture"},"next":{"title":"Mempool","permalink":"/mempool"}}');var l=o(4848),s=o(8453);const a={title:"Wallets",slug:"/wallet-architecture"},i=void 0,r={},c=[];function h(e){const t={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Wallets can communicate with full nodes through the wallet protocol. This is similar to Bitcoin's SPV protocol: it allows verification of transactions and block weight, without the bandwidth and CPU requirements of full nodes."}),"\n",(0,l.jsxs)(t.p,{children:["Wallet nodes are similar to full nodes, in that they are servers which communicate to other peers in the network. A common use case is to run a wallet locally along with a full node, where the wallet only connects to the full node. Wallets use ",(0,l.jsx)(t.a,{href:"/light-clients",children:"light clients"})," to download weight proofs from nodes to quickly validate which blockchain is the longest. They then ask full nodes to scan the blockchain for their desired transactions. The wallet is also responsible for managing private keys, as well as generating, storing and sending transactions. The wallet exposes an RPC HTTPS websocket JSON API, which user interfaces can use to execute commands."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(6540);const l={},s=n.createContext(l);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);