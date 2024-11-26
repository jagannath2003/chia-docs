"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[516],{2142:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"academy/blockchain-basics/coinset-basics","title":"Coin-Set Model Intro","description":"In this lesson, we dive into the coinset model basics and learn what it means to spend a coin in Chia.","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/academy/blockchain-basics/coinset-basics.md","sourceDirName":"academy/blockchain-basics","slug":"/coinset-basics","permalink":"/zh-Hans/coinset-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/blockchain-basics/coinset-basics.md","tags":[],"version":"current","frontMatter":{"title":"Coin-Set Model Intro","slug":"/coinset-basics"},"sidebar":"academy","previous":{"title":"How New Blocks are Formed","permalink":"/zh-Hans/block-formation-basics"},"next":{"title":"Chia Blockchain Security Intro","permalink":"/zh-Hans/security-basics"}}');var i=s(4848),o=s(8453);const a={title:"Coin-Set Model Intro",slug:"/coinset-basics"},c=void 0,r={},h=[{value:"\u5b66\u4e60\u76ee\u6807",id:"\u5b66\u4e60\u76ee\u6807",level:2},{value:"\u5185\u5bb9",id:"\u5185\u5bb9",level:2},{value:"\u811a\u672c",id:"\u811a\u672c",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u77e5\u8bc6\u68c0\u6d4b",id:"\u77e5\u8bc6\u68c0\u6d4b",level:2},{value:"\u9644\u52a0\u8d44\u6e90",id:"\u9644\u52a0\u8d44\u6e90",level:2},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this lesson, we dive into the coinset model basics and learn what it means to spend a coin in Chia."}),"\n",(0,i.jsx)(n.h2,{id:"\u5b66\u4e60\u76ee\u6807",children:"\u5b66\u4e60\u76ee\u6807"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Coin Contents"}),": Learn what data is stored in a coin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Coin Puzzle"}),": Understand the role of a coins puzzle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Coin Solution"}),": Learn about the importance of a coins solution."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u5185\u5bb9",children:"\u5185\u5bb9"}),"\n",(0,i.jsx)("div",{class:"videoWrapper",children:(0,i.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/QMs6Z6_ZQdg",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u811a\u672c",children:"\u811a\u672c"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:" Expand for the full script "}),(0,i.jsxs)(n.p,{children:["00:00",(0,i.jsx)(n.br,{}),"\n",'Chia uses the "coinset model" to keep track of the blockchain\'s state.']}),(0,i.jsx)(n.p,{children:'00:10\nIn this model, every transaction is represented by a "coin" that contains a value, the rules by which the coin can be spent, and signature authorizing the spend.'}),(0,i.jsx)(n.p,{children:'00:20\nWhat this means is that a "coin" can have any value (in mojo) and as long as the rules are satisfied, anyone can spend the coin.'}),(0,i.jsx)(n.p,{children:"00:30\nThere are no accounts represented in the system."}),(0,i.jsx)(n.p,{children:"When a coin is created, the value is locked away in that coin and is inaccessible until the coin is spent,"}),(0,i.jsx)(n.p,{children:"00:40\nat which point new coins will be created with values equal to the original."}),(0,i.jsx)(n.p,{children:"For example, if I want to send 1 XCH to someone else,"}),(0,i.jsx)(n.p,{children:"00:50\nI will create a coin with a value of 1 XCH (or 1 trillion mojos), and set the conditions of the coin to only allow the coin to be spent if given the signature of the other person."}),(0,i.jsx)(n.p,{children:'01:00\nThis in effect "sends" the coin to the other person, because they now control what happens to it. When they want to spend the coin, they provide the correct signature, and a new coin is created,'}),(0,i.jsx)(n.p,{children:"01:10\nwith a value of 1 XCH, itself containing it's own rules of how it can be spent."}),(0,i.jsx)(n.p,{children:"In this way, each coin is only ever used once."}),(0,i.jsx)(n.p,{children:"01:20\nOnce it has been spent, it creates a new coin. In Chia, we call the set of conditions needed to unlock the coin the 'puzzle', and the provided data to unlock the coin is the 'solution'."}),(0,i.jsx)(n.p,{children:"01:30\nThe coin is represented in the chain as a hash of three attributes, the parent coin ID, (or the ID of the previous coin that created this new one),"}),(0,i.jsx)(n.p,{children:"01:40\nthe hash of the puzzle that contains the conditions, and the value of the coin."}),(0,i.jsx)(n.p,{children:"01:50"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Coinset vs Account:"})," Chia adopts the coinset model where everything is a coin that has its own set of rules, more information about the coinset model can be found ",(0,i.jsx)(n.a,{href:"https://docs.chia.net/coin-set-vs-account/",children:"here"}),". This differs from the account model which instead uses contracts (or accounts) to represent users balances and these balances are what is stored on the chain (as opposed to coins and those coins values)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Puzzles:"})," All requirements for spending a coin are contained in the coins puzzle. These puzzles can be simple or complex and effect how, when, and by whom the coin can be spent. The coins puzzle must be determined at the coins creation and cannot be altered thereafter."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solutions:"})," The ability to spend a coin is based on the users ability to provide a valid solution for the coins puzzle."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u77e5\u8bc6\u68c0\u6d4b",children:"\u77e5\u8bc6\u68c0\u6d4b"}),"\n",(0,i.jsxs)(n.admonition,{title:"Question 1 - Coinset",type:"tip",children:[(0,i.jsx)(n.p,{children:"What data is contained in coins on the Chia Blockchain? (Select all that apply)"}),(0,i.jsx)(n.p,{children:"A. Amount (or value)\nB. User account number\nC. Puzzle Hash\nD. Parent Coin ID"})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(n.p,{children:"A. Amount (or value)\nC. Puzzle Hash\nD. Parent Coin ID"})]}),"\n",(0,i.jsx)(n.admonition,{title:"Question 2 - Puzzle",type:"tip",children:(0,i.jsx)(n.p,{children:"True or False: All puzzles on the Chia blockchain are the same."})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(n.p,{children:"False, while coin puzzles might be similar (such as the standard transaction) the parameters in puzzles vary greatly (who can spend the coin, how it can be spent, other special rules)."})]}),"\n",(0,i.jsx)(n.admonition,{title:"Question 3 - Solutions",type:"tip",children:(0,i.jsx)(n.p,{children:"Do all coin solutions require a signature?"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(n.p,{children:"No, it is possible to create coins that do not require any signature or other spender validation (anyone can spend coins) or to even lock coins using non-signature restrictions (such as password protected coins)."})]}),"\n",(0,i.jsx)(n.admonition,{title:"Question 4 - Coinset vs Account Model",type:"tip",children:(0,i.jsx)(n.p,{children:"Does Chia adopt the coinset model or the account model?"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(n.p,{children:"The coinset model."})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u9644\u52a0\u8d44\u6e90",children:"\u9644\u52a0\u8d44\u6e90"}),"\n",(0,i.jsx)(n.h3,{id:"\u94fe\u63a5",children:"\u94fe\u63a5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Detailed ",(0,i.jsx)(n.a,{href:"https://docs.chia.net/coin-set-vs-account/",children:"coinset and account model comparisons"}),": details the differences between the coinset and account models including how these differences effect transactions."]}),"\n",(0,i.jsxs)(n.li,{children:["Overview of ",(0,i.jsx)(n.a,{href:"https://docs.chia.net/coin-set-intro/#puzzles",children:"coin puzzles"}),": overviews the role of a coins puzzle and the effect it has on the coins abiltiy to be spent."]}),"\n",(0,i.jsxs)(n.li,{children:["Security recommendations for ",(0,i.jsx)(n.a,{href:"https://docs.chia.net/coin-set-security/#signing",children:"signing solutions"}),": reviews the recommendations for securing puzzles by requiring that solutions are signed to limit those who can spend the coin."]}),"\n",(0,i.jsxs)(n.li,{children:["Support ",(0,i.jsx)(n.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);