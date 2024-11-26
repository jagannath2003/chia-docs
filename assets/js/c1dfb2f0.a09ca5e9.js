"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7783],{5453:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"walletconnect/cats","title":"CAT Commands","description":"Commands","source":"@site/docs/walletconnect/cats.md","sourceDirName":"walletconnect","slug":"/walletconnect-cats","permalink":"/walletconnect-cats","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/walletconnect/cats.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"CATs","title":"CAT Commands","slug":"/walletconnect-cats"},"sidebar":"tutorialSidebar","previous":{"title":"General","permalink":"/walletconnect-commands"},"next":{"title":"NFTs","permalink":"/walletconnect-nfts"}}');var n=t(4848),c=t(8453);const i={sidebar_label:"CATs",title:"CAT Commands",slug:"/walletconnect-cats"},l=void 0,r={},h=[{value:"Commands",id:"commands",level:2},{value:"<code>chia_getCATWalletInfo</code>",id:"chia_getcatwalletinfo",level:3},{value:"Output Data",id:"output-data",level:4},{value:"<code>chia_getCATAssetId</code>",id:"chia_getcatassetid",level:3},{value:"Output Data",id:"output-data-1",level:4},{value:"<code>chia_spendCAT</code>",id:"chia_spendcat",level:3},{value:"Output Data",id:"output-data-2",level:4},{value:"<code>chia_addCATToken</code>",id:"chia_addcattoken",level:3},{value:"Output Data",id:"output-data-3",level:4}];function a(e){const d={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h2,{id:"commands",children:"Commands"}),"\n",(0,n.jsx)(d.h3,{id:"chia_getcatwalletinfo",children:(0,n.jsx)(d.code,{children:"chia_getCATWalletInfo"})}),"\n",(0,n.jsx)(d.p,{children:"Gets the wallet name and id of a given CAT, by its asset id."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Parameter"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"assetId"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"Asset id."})]})})]}),"\n",(0,n.jsx)(d.h4,{id:"output-data",children:"Output Data"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Parameter"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"name"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"Wallet name."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"walletId"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"Wallet id."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"success"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"chia_getcatassetid",children:(0,n.jsx)(d.code,{children:"chia_getCATAssetId"})}),"\n",(0,n.jsx)(d.p,{children:"Gets the asset id of a CAT by its wallet id."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Parameter"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"walletId"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"Wallet id."})]})})]}),"\n",(0,n.jsx)(d.h4,{id:"output-data-1",children:"Output Data"}),"\n",(0,n.jsxs)(d.p,{children:["The output is a hex encoded asset id of type ",(0,n.jsx)(d.code,{children:"string"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"chia_spendcat",children:(0,n.jsx)(d.code,{children:"chia_spendCAT"})}),"\n",(0,n.jsx)(d.p,{children:"Sends an amount of CAT mojos in a given wallet to a recipient address."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Parameter"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"walletId"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"CAT wallet id to use coins from."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"amount"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"Amount in mojos."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"fee"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"Transaction fee in mojos."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"address"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"Bech32m encoded recipient address."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"waitForConfirmation?"})," ",(0,n.jsx)(d.em,{children:"(optional)"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:"Whether to wait for inclusion in a block."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"memos?"})," ",(0,n.jsx)(d.em,{children:"(optional)"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string[]"})}),(0,n.jsx)(d.td,{children:"A list of coin memos (such as hint)."})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"output-data-2",children:"Output Data"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Parameter"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"transaction"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.a,{href:"/walletconnect-commands#transactionrecord",children:(0,n.jsx)(d.code,{children:"TransactionRecord"})})}),(0,n.jsx)(d.td,{children:"Transaction record."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"transactionId"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"Transaction id."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"success"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:"Backend success status."})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"chia_addcattoken",children:(0,n.jsx)(d.code,{children:"chia_addCATToken"})}),"\n",(0,n.jsx)(d.p,{children:"Imports a CAT by its asset id into the wallet, and assigns a name to it."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Parameter"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"assetId"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"Asset id."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"name"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"Wallet name."})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"output-data-3",children:"Output Data"}),"\n",(0,n.jsxs)(d.p,{children:["The output is a wallet id of type ",(0,n.jsx)(d.code,{children:"number"}),"."]})]})}function o(e={}){const{wrapper:d}={...(0,c.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,d,t)=>{t.d(d,{R:()=>i,x:()=>l});var s=t(6540);const n={},c=s.createContext(n);function i(e){const d=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(c.Provider,{value:d},e.children)}}}]);