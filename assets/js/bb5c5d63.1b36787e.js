"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[361],{2403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"guides/tutorials/application-structure","title":"Application Structure","description":"Concerns for developing chia apps","source":"@site/docs/guides/tutorials/application-structure.md","sourceDirName":"guides/tutorials","slug":"/guides/application-structure-tutorial","permalink":"/guides/application-structure-tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/tutorials/application-structure.md","tags":[],"version":"current","frontMatter":{"slug":"/guides/application-structure-tutorial","title":"Application Structure"},"sidebar":"guides","previous":{"title":"Tutorials","permalink":"/guides/tutorials"},"next":{"title":"Custom Puzzle Lock","permalink":"/guides/custom-puzzle-lock-tutorial"}}');var o=t(4848),s=t(8453);const a={slug:"/guides/application-structure-tutorial",title:"Application Structure"},r="Basic structure of an app using chia",c={},l=[{value:"Concerns for developing chia apps",id:"concerns-for-developing-chia-apps",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"basic-structure-of-an-app-using-chia",children:"Basic structure of an app using chia"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\n        CHIA                        Your Code\n                 |   +--------------------+       +----------+\n    Node RPC <---|-> | Specialized Wallet |<-----\x3e| Database |\n       ^         |   +--------------------+       +----------+\n       |         |       ^         ^\n       |         |       |         |\n       |         |       |         v\n       v         |       |    +------------------+\n    Wallet RPC --|-------+    | State management |\n                 |            +------------------+\n                 |                    ^\n                                      |\n                                      v\n                                     User\n"})}),"\n",(0,o.jsx)(n.h3,{id:"concerns-for-developing-chia-apps",children:"Concerns for developing chia apps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The app likely needs a connection to the chia RPC at least for now."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A \"wallet\" type system is needed to track blockchain traffic so that the app's\nconcept of the current state can be recovered from the same information that's\nrepresented in the blockchain and in order to keep the state presented to the\nend user consistent via the node API and a well designed set of arguments to\nthe chialisp code. Coins touched in a block are available via the full node's\nget_additions_and_removals and the solutions via get_puzzle_and_solution. By\nchecking out each block, it'll be possible to find specially formatted\ncoin solutions and track them."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The app needs at a minimum to allow the user to take actions in a comprehensible\nway, which means using a combination of the wallet and node's RPC API to"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Establish which public and private keys to use when interacting with coins\non the blockchain via get_transactions, get_coin_record_by_name and\nget_private_key and the master_sk_to_wallet_sk function."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Send transactions to the blockchain via push_tx."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"It's likely that the app won't be able to guarantee that it remains running for\nthe full duration of the purpose of the code it deploys, therefore any state\npicked up from the blockchain should be stored in and retrieved from a local\ncache database."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If more than one party is cooperating over the coin in question, then either an\nidentifier picking out the coin in question needs to be sent out of band or\nsomething identifiable by the recipient needs to be embedded in the coin\nsolution."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);