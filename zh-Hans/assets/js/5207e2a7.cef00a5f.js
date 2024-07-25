"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8722],{1215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),a=t(1151);const i={title:"Offers",slug:"/academy-offers"},r=void 0,o={id:"academy/primitives/academy-offers",title:"Offers",description:"In this lesson, we talk about Chia Offers and how they enables safe peer-to-peer trading.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/academy/primitives/academy-offers.md",sourceDirName:"academy/primitives",slug:"/academy-offers",permalink:"/zh-Hans/academy-offers",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/primitives/academy-offers.md",tags:[],version:"current",frontMatter:{title:"Offers",slug:"/academy-offers"},sidebar:"academy",previous:{title:"CATs",permalink:"/zh-Hans/academy-cat"}},l={},c=[{value:"\u5b66\u4e60\u76ee\u6807",id:"\u5b66\u4e60\u76ee\u6807",level:2},{value:"\u5185\u5bb9",id:"\u5185\u5bb9",level:2},{value:"\u811a\u672c",id:"\u811a\u672c",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u77e5\u8bc6\u68c0\u6d4b",id:"\u77e5\u8bc6\u68c0\u6d4b",level:2},{value:"\u9644\u52a0\u8d44\u6e90",id:"\u9644\u52a0\u8d44\u6e90",level:2},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:3}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this lesson, we talk about Chia Offers and how they enables safe peer-to-peer trading."}),"\n",(0,s.jsx)(n.h2,{id:"\u5b66\u4e60\u76ee\u6807",children:"\u5b66\u4e60\u76ee\u6807"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Peer-to-peer trading"}),": Understand what offers are and how they enable P2P trading."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Managing offer files"}),": Learn how to share, accept, and cancel offers."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u5bb9",children:"\u5185\u5bb9"}),"\n",(0,s.jsx)("div",{class:"videoWrapper",children:(0,s.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/O7Anp-oPV_A",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u811a\u672c",children:"\u811a\u672c"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" Expand for the full script "}),(0,s.jsx)(n.p,{children:"0:00\nChia Offers are used to trade assets between two parties safely and securely in a direct, peer-to-peer transaction. They can be used to trade any combination of assets including XCH, CATs, and NFTs."}),(0,s.jsx)(n.p,{children:"0:20\nWhen an offer is accepted, the trade happens atomically, meaning the entirety of the trade settles simultaneously with no counterparty risk. The creator of an offer specifies the assets they wish to offer as well as the assets they wish to receive."}),(0,s.jsx)(n.p,{children:"0:40\nAn offer file is then created, represented as a string of characters containing an incomplete and partially signed spend bundle. The creator can then share this offer file through any means, such as email, QR code, and offer file exchange services. Anyone that sees an offer file and wants to accept the trade can do so by signing and completing the other side of the spend bundle and submit it to the blockchain to be settled atomically."}),(0,s.jsx)(n.p,{children:"1:00\nAssets with smart contracts attached such as NFTs that include creator royalties are also enforced. If a creator wishes to cancel an existing offer, they can simply spend any of the assets offered to invalidate it."}),(0,s.jsx)(n.p,{children:"1:20\nOffers can also be set to automatically expire after a certain amount of time if nobody takes it. Offer files allow for true peer-to-peer transactions, introducing a new way to create safe and decentralized liquid markets for assets on the Chia blockchain."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Locked coins:"}),' Some wallets including the GUI Reference Wallet will indicate part of the balance of an asset as "locked" or "unspendable" if an Offer was created offering that asset. In truth, those coins aren\'t actually unspendable but if they ',(0,s.jsx)(n.em,{children:"are"})," spent, any offer(s) that use those coins will be invalid. In order to not lock up more than the offered amount, one can split their coins into smaller amounts prior to creating an offer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Canceling open offers:"}),' If an offer has been previously shared (e.g. uploaded to dexie) and the creator wishes to cancel it, they need to cancel with the "Cancel on blockchain" function enabled to ensure the offer is truly invalidated and not just deleted locally.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Blockchain fees:"})," Accepting an offer is an on-chain transaction and hence requires a transaction fee to be prioritized when blocks are full. The creator can embed fees as part of the offer file but the buyer can also optionally include a transaction fee as well."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u77e5\u8bc6\u68c0\u6d4b",children:"\u77e5\u8bc6\u68c0\u6d4b"}),"\n",(0,s.jsx)(n.admonition,{title:"Question 1 - Supported assets",type:"tip",children:(0,s.jsx)(n.p,{children:"True or False; An offer file is only for trading NFTs."})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,s.jsx)(n.p,{children:"\u9519\u8bef An offer file can be used to trade any combination of assets including (but not limited to) XCH, CATs, and NFTs. Offer files can also be used with other types of coins such as Verifiable Credentials or DataLayer singletons."})]}),"\n",(0,s.jsx)(n.admonition,{title:"Question 2 - NFT Royalties",type:"tip",children:(0,s.jsx)(n.p,{children:"True or False; When creating an offer for NFTs, creator royalties (if any) must be included."})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,s.jsx)(n.p,{children:"True. If an NFT specifies a creator royalty, this amount must be included as part of the requested assets to be considered valid. Royalties are applied to XCH and CATs that are a part of the offer. Wallets will automatically calculate and include these coins to be sent to the NFT creator."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u9644\u52a0\u8d44\u6e90",children:"\u9644\u52a0\u8d44\u6e90"}),"\n",(0,s.jsx)(n.h3,{id:"\u94fe\u63a5",children:"\u94fe\u63a5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["More about ",(0,s.jsx)(n.a,{href:"https://docs.chia.net/guides/primitives/",children:"primitives"}),": guides for each primitive, and how to use them."]}),"\n",(0,s.jsxs)(n.li,{children:["CLI ",(0,s.jsx)(n.a,{href:"https://docs.chia.net/guides/crash-course/cats-offers-nfts/#offers",children:"Guide"}),": documentation on how to interact with offers with the CLI."]}),"\n",(0,s.jsxs)(n.li,{children:["Chialisp",(0,s.jsx)(n.a,{href:"https://chialisp.com/",children:"\u8be6\u7ec6\u6587\u6863"}),"\uff1a\u63d0\u4f9b\u6709\u5173Chialisp\u5404\u4e2a\u65b9\u9762\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["Support ",(0,s.jsx)(n.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n",(0,s.jsxs)(n.li,{children:["Offer file ",(0,s.jsx)(n.a,{href:"https://dexie.space",children:"exchanges"}),": a bulletin board system for sharing and discovering offer files."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);