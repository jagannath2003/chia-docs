"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8730],{9191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(5893),s=t(1151);const o={title:"Coin Selection",slug:"/coin-selection"},l=void 0,a={id:"reference-client/coin-selection",title:"Coin Selection",description:"Chia uses the Coin Set model of accounting, under which everything is a coin. When Chia wallets perform certain actions, they must select one or more coins to spend or reserve. (Coin selection is performed automatically by the software; the wallet's user is not involved.) When Chia wallets perform certain actions, they must select one or more coins to spend or reserve. (Coin selection is performed automatically by the software; the wallet's user is not involved.)",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference-client/coin-selection.md",sourceDirName:"reference-client",slug:"/coin-selection",permalink:"/zh-Hans/coin-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/reference-client/coin-selection.md",tags:[],version:"current",frontMatter:{title:"Coin Selection",slug:"/coin-selection"},sidebar:"tutorialSidebar",previous:{title:"Headless Node",permalink:"/zh-Hans/headless-node"},next:{title:"Overview",permalink:"/zh-Hans/rpc"}},c={},h=[{value:"Old algorithm -- largest first",id:"old-algorithm----largest-first",level:4},{value:"New algorithm -- knapsack",id:"new-algorithm----knapsack",level:4},{value:"Why use knapsack?",id:"why-use-knapsack",level:4}];function r(e){const n={a:"a",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Chia uses the ",(0,i.jsx)(n.a,{href:"/coin-set-intro",children:"Coin Set"})," model of accounting, under which ",(0,i.jsx)(n.em,{children:"everything"})," is a coin. When Chia wallets perform certain actions, they must select one or more coins to spend or reserve. (Coin selection is performed automatically by the software; the wallet's user is not involved.) When Chia wallets perform certain actions, they must select one or more coins to spend or reserve. (Coin selection is performed automatically by the software; the wallet's user is not involved.)"]}),"\n",(0,i.jsx)(n.p,{children:"Actions that require coin selection include, but are not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sending XCH to another wallet"}),"\n",(0,i.jsx)(n.li,{children:"Locking up XCH in an Offer"}),"\n",(0,i.jsx)(n.li,{children:"Creating a DID"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sometimes, coin selection is a straight-forward task. For example, let's say Alice's wallet contains one coin worth 1 XCH, and she wants to send 0.5 XCH to Bob. Alice's wallet will handle this by:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Spending the 1-XCH coin, thereby unlocking its value"}),"\n",(0,i.jsx)(n.li,{children:"Creating a coin worth 0.5 XCH and assigning it to Bob's wallet"}),"\n",(0,i.jsx)(n.li,{children:'Creating another coin worth 0.5 XCH and assigning it to Alice\'s wallet as "change"'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In this case, there was only one coin to select, so the choice was obvious. Let's look at a more complex example. Let's look at a more complex example."}),"\n",(0,i.jsx)(n.p,{children:"Alice wants to send 0.5 XCH to Bob. In her wallet, she has:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One coin worth 0.6 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.3 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.2 XCH"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Her wallet has two obvious choices in deciding which coin(s) to spend:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Spend the 0.6-XCH coin and create two new coins: one worth 0.5 XCH for Bob, and one worth 0.1 XCH for Alice's change."}),"\n",(0,i.jsx)(n.li,{children:"Spend the coins worth 0.3 XCH and 0.2 XCH and create one new coin worth 0.5 XCH for Bob. No change coin is needed in this case. No change coin is needed in this case."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For option 1, Alice's wallet spends one coin and creates two coins -- 1 input, 2 outputs."}),"\n",(0,i.jsx)(n.p,{children:"For option 2, Alice's wallet spends two coins and creates one coin -- 2 inputs, 1 output."}),"\n",(0,i.jsx)(n.p,{children:"Which option will Alice's wallet choose?"}),"\n",(0,i.jsx)(n.h4,{id:"old-algorithm----largest-first",children:"Old algorithm -- largest first"}),"\n",(0,i.jsx)(n.p,{children:"Prior to version 1.4 of Chia's reference wallet, option 1 would have been chosen. This is because the reference wallet simply selected the largest coin available. If that coin didn't contain a sufficient amount of XCH to complete the transaction, the wallet added the next-largest coin, and so on until a sufficient amount was reached. This is because the reference wallet simply selected the largest coin available. If that coin didn't contain a sufficient amount of XCH to complete the transaction, the wallet added the next-largest coin, and so on until a sufficient amount was reached."}),"\n",(0,i.jsx)(n.p,{children:"This algorithm was simple, but it created some frustrating outcomes. For example, let's say Alice wanted to create an offer to buy an NFT for 0.0001 XCH. In her wallet, she had:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One coin worth 0.0001 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 10 XCH"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In this case, her wallet would have selected the 10-XCH coin. While waiting for her offer to be accepted, her 10-XCH coin would have been reserved, and only her 0.0001-XCH coin would have been available to be spent. In this case, her wallet would have selected the 10-XCH coin. While waiting for her offer to be accepted, her 10-XCH coin would have been reserved, and only her 0.0001-XCH coin would have been available to be spent. This would have been all the more frustrating for Alice because she had a coin worth exactly the correct amount (0.0001 XCH), but it wasn't selected."}),"\n",(0,i.jsx)(n.h4,{id:"new-algorithm----knapsack",children:"New algorithm -- knapsack"}),"\n",(0,i.jsx)(n.p,{children:"Starting in version 1.4, Chia's reference wallet switched to using the same coin-selection algorithm as Bitcoin Core. This algorithm's basic outline goes like this: This algorithm's basic outline goes like this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Search for a single coin that matches the amount to be sent, including the transaction fee. If an exact match is found, use it. If an exact match is found, use it."}),"\n",(0,i.jsx)(n.li,{children:"Add up all of the coins smaller than the amount to be sent. If they match exactly, use them. If they match exactly, use them."}),"\n",(0,i.jsx)(n.li,{children:"If the sum of the smaller coins is smaller than the amount to be sent, then an exact match is impossible. In this case, use the smallest coin that is larger than the amount to be sent. In this case, use the smallest coin that is larger than the amount to be sent."}),"\n",(0,i.jsxs)(n.li,{children:["Run the knapsack selection algorithm:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sort all coins that are smaller than the amount to be sent, in descending order."}),"\n",(0,i.jsx)(n.li,{children:"Traverse the list of sorted coins, and choose whether to select each individual coin, where each coin has a 50% probability of being selected."}),"\n",(0,i.jsx)(n.li,{children:"As each new coin is selected, determine whether the sum of the selected coins is greater than or equal to the amount to be sent. If yes, then a valid solution has been found. If, and only if, this is the best valid solution so far (defined as the solution that comes closest to the amount to be sent), save it. If yes, then a valid solution has been found. If, and only if, this is the best valid solution so far (defined as the solution that comes closest to the amount to be sent), save it."}),"\n",(0,i.jsx)(n.li,{children:"Replace the last coin selected with a smaller coin. If, an only if, this results in the best solution so far, save it. If, an only if, this results in the best solution so far, save it."}),"\n",(0,i.jsx)(n.li,{children:"Continue to traverse the list, using various combinations of selected coins in search of a better solution than the best one found so far. Do this for up to 1000 iterations. Do this for up to 1000 iterations."}),"\n",(0,i.jsx)(n.li,{children:"If no valid solution has been found after 1000 iterations, re-traverse the list of smaller coins, this time selecting all of them. Once again, save only the best solution. Once again, save only the best solution."}),"\n",(0,i.jsx)(n.li,{children:"Perform up to 1000 iterations of this second traversal. Perform up to 1000 iterations of this second traversal. If we exclude edge cases, such as when a wallet contains more than 1000 coins, a valid solution will be found -- the sum of the smaller coins is larger than the amount to be sent."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's review the scenario from the previous section and apply the new coin selection algorithm."}),"\n",(0,i.jsx)(n.p,{children:"Alice wants to send 0.5 XCH to Bob. In her wallet, she has:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One coin worth 0.6 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.3 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.2 XCH"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Under the new algorithm, Alice's wallet will:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Search for a single coin that matches. None are found. None are found."}),"\n",(0,i.jsx)(n.li,{children:"Add up all of the smaller coins. Add up all of the smaller coins. An exact match is found (0.3 + 0.2 = 0.5), so use it."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now let's say Alice wanted to include a transaction fee of 10 million mojos (0.00001 XCH). In this case, step 2 would fail to produce an exact match, so we would move to the next step: In this case, step 2 would fail to produce an exact match, so we would move to the next step:"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"The sum of all smaller coins is still smaller than the amount to be sent, so the coin worth 0.6 XCH would be used."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's look at a more complex example:"}),"\n",(0,i.jsx)(n.p,{children:"Alice wants to send 0.5 XCH to Bob. Alice wants to send 0.5 XCH to Bob. She will include a transaction fee of 0.00001 XCH. In her wallet, she has: In her wallet, she has:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One coin worth 0.6 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.5 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.4 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.3 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 0.2 XCH"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Prior to version 1.4, the 0.6-XCH coin would have been selected. In versions 1.4 and later, the new algorithm is applied: In versions 1.4 and later, the new algorithm is applied:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"No single coin matches the amount plus the fee (0.50001)."}),"\n",(0,i.jsx)(n.li,{children:"The sum of the smaller coins is 0.5 + 0.4 + 0.3 + 0.2 = 1.4, which does not equal 0.50001."}),"\n",(0,i.jsx)(n.li,{children:"The sum from step 2 is larger than the amount to be sent."}),"\n",(0,i.jsxs)(n.li,{children:["Let's say the following coin selections occur:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"0.5 - not selected"}),"\n",(0,i.jsx)(n.li,{children:"0.4 - selected"}),"\n",(0,i.jsx)(n.li,{children:"0.3 - selected"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"At this point, we have a valid match: 0.4 + 0.3 > 0.50001. At this point, we have a valid match: 0.4 + 0.3 > 0.50001. The final coin in Alice's wallet is worth 0.2 XCH. If this coin is selected, it will replace the coin worth 0.3 XCH, making the best match 0.4 + 0.2. If this coin is not selected, a better match will not be found. If this coin is selected, it will replace the coin worth 0.3 XCH, making the best match 0.4 + 0.2. If this coin is not selected, a better match will not be found."}),"\n",(0,i.jsx)(n.p,{children:"This example shows two interesting facets of the new algorithm:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"It is not always possible to predict which coins will be selected."}),"\n",(0,i.jsx)(n.li,{children:"The best possible match is not guaranteed to be found."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"why-use-knapsack",children:"Why use knapsack?"}),"\n",(0,i.jsx)(n.p,{children:"This algorithm is used in both Bitcoin Core and Chia's reference wallet because it provides a good balance between accuracy and computational intensity. It is also clearly superior in many cases. It is also clearly superior in many cases."}),"\n",(0,i.jsx)(n.p,{children:"Let's revisit the example from the top of this document:"}),"\n",(0,i.jsx)(n.p,{children:"Alice wants to create an offer to buy an NFT for 0.0001 XCH. In her wallet, she has: In her wallet, she has:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One coin worth 0.0001 XCH"}),"\n",(0,i.jsx)(n.li,{children:"One coin worth 10 XCH"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Under the old algorithm, the 10-XCH coin would have been selected and reserved for the offer. Under the old algorithm, the 10-XCH coin would have been selected and reserved for the offer. This would have left Alice with a spendable balance of 0.0001 XCH while the offer was pending."}),"\n",(0,i.jsx)(n.p,{children:"Under the new algorithm, the 0.0001-XCH coin is selected and reserved. Alice still has 10 XCH available to spend. Alice still has 10 XCH available to spend."}),"\n",(0,i.jsx)(n.p,{children:"Because of scenarios such as this, wallet developers in Chia's community are recommended to use the knapsack algorithm for coin selection."}),"\n",(0,i.jsx)(n.p,{children:"For more information, see:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://blog.summerofbitcoin.org/coin-selection-for-dummies-part-3/",children:"blog"})," explaining the knapsack algorithm"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf",children:"technical details"})," of the knapsack algorithm used by Bitcoin Core, including edge cases not mentioned here"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/coin_selection.py",children:"source code"})," Chia uses for coin selection"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(7294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);