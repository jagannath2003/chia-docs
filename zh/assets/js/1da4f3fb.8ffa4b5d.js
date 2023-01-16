"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return a?o.createElement(d,i(i({ref:t},h),{},{components:a})):o.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={title:"Intro to Chia",slug:"/chia-intro"},i=void 0,s={unversionedId:"about/chia-intro",id:"about/chia-intro",title:"Intro to Chia",description:"Chia is a cryptocurrency and blockchain smart transaction platform. Chia was designed from the ground up to make cryptocurrency easier to use -- and harder to lose -- than cash. The PoST consensus has a much lower energy consumption compared to Proof of Work (PoW), and part of Chia's vision involves improving the carbon footprint of the blockchain industry.",source:"@site/docs/about/chia-intro.md",sourceDirName:"about",slug:"/chia-intro",permalink:"/zh/chia-intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/about/chia-intro.md",tags:[],version:"current",frontMatter:{title:"Intro to Chia",slug:"/chia-intro"},sidebar:"tutorialSidebar",previous:{title:"Intro to Cryptocurrencies",permalink:"/zh/cryptocurrency-intro"},next:{title:"Plotting Basics",permalink:"/zh/plotting-basics"}},l={},c=[{value:"Smart Transactions",id:"smart-transactions",level:2},{value:"Decentralized",id:"decentralized",level:2},{value:"Improved Pooling",id:"improved-pooling",level:2},{value:"Other key features",id:"other-key-features",level:2}],h={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Chia is a cryptocurrency and blockchain smart transaction platform. Chia was designed from the ground up to make cryptocurrency easier to use -- and harder to lose -- than cash. The PoST consensus has a much ",(0,n.kt)("a",{parentName:"p",href:"https://chiapower.org",title:"Chia's energy consumption statistics"},"lower energy consumption")," compared to Proof of Work (PoW), and part of Chia's vision involves improving the carbon footprint of the blockchain industry."),(0,n.kt)("p",null,"On August 1, 2017, ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/profiles/bram-cohen",title:"Bram Cohen's Chia profile"},"Bram Cohen")," founded the Chia company and incorporated it in the state of Delaware. Bram led the development of Chia, along with many engineers, researchers, and open source contributors. Along the way, Chia created three new inventions in applied cryptography, and advanced the interest and adoption in a fourth:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/chiapos",title:"Chia's Proof of Space repository on GitHub"},"Proofs of Space")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/chiavdf",title:"Chia's VDF on GitHub"},"Time")," (PoST), the first (and only) Nakamoto consensus since Proof of Work."),(0,n.kt)("li",{parentName:"ul"},"The first production use of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/bls-signatures",title:"Chia's BLS Signatures on GitHub"},"BLS Signatures"),"."),(0,n.kt)("li",{parentName:"ul"},"The first production use of a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/chiavdf",title:"Chia's VDF on GitHub"},"Verifiable Delay Function (VDF)"),"."),(0,n.kt)("li",{parentName:"ul"},"The first production use of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/vdf-competition/blob/main/classgroups.pdf",title:"Binary quadratic forms white paper, by Lipa Long"},"class groups of unknown order"),".")),(0,n.kt)("p",null,"Chia's mainnet was launched on March 19, 2021. Development of its ecosystem is ongoing."),(0,n.kt)("p",null,"For more information on the company's strategies, see ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/whitepaper",title:"Chia's business white paper"},"Chia's business white paper"),"."),(0,n.kt)("h2",{id:"smart-transactions"},"Smart Transactions"),(0,n.kt)("p",null,"Chia has a new smart transaction model, which uses a powerful (yet simple) higher-level language called ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com",title:"Chialisp.com"},"chialisp"),", and an accompanying lower-level language called CLVM (ChiaLisp Virtual Machine)."),(0,n.kt)("p",null,"Chia uses the coin set model (similar to Bitcoin's UTXO) to track the blockchain's state. The simple nature of this model facilitates the writing of high value and secure contracts. Unlike in systems that use the account model such as Ethereum, the code that creates Chia's coins is strongly sandboxed. This increases security, reduces Maximum Extractable Value (MEV), and makes the code fully auditable."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For more info, see ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com/",title:"Chialisp.com"},"chialisp.com"),".")),(0,n.kt)("h2",{id:"decentralized"},"Decentralized"),(0,n.kt)("p",null,"Chia uses a consensus algorithm called ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/ChiaGreenPaper.pdf",title:"Chia's Green Paper"},"Proofs of Space and Time"),". This algorithm allows anyone with an internet connection and some free disk space to participate in securing the network. Because of this process of farming (analogous to mining), Chia has become the most decentralized blockchain on the planet, with ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.chia.net/d/em15uQ47k/peer-info"},"hundreds of thousands of full nodes")," securing the system."),(0,n.kt)("h2",{id:"improved-pooling"},"Improved Pooling"),(0,n.kt)("p",null,"Like many other blockchains, Chia allows pooling to smooth out the rewards structure for smaller farmers. However, Chia's pooling protocol has three unique features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Farmers create new blocks, whether they're farming solo or as a member of a pool.")),(0,n.kt)("p",null,"This design decision was made in conjunction with Chia's goal of decentralization. In other blockchains such as Bitcoin, four or five pools control over 51% of the global hashrate on any given day. (Sources: ",(0,n.kt)("a",{parentName:"p",href:"https://www.blockchain.com/pools",title:"blockchain.com pie chart of Bitcoin's hashrate distribution"},"blockchain.com"),", ",(0,n.kt)("a",{parentName:"p",href:"https://blockchair.com/bitcoin/charts/hashrate-distribution",title:"blockchair.com pie chart of Bitcoin's hashrate distribution"},"blockchair.com"),") Arguably, the easiest way to attack Bitcoin would be to bribe each of these pools' operators."),(0,n.kt)("p",null,"In Chia, the pool operators are only responsible for distributing rewards. They cannot modify the blockchain. Therefore, Chia's pooling protocol doesn't lead to increased centralization."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Joining a pool is permissionless. Farmers don't need to sign up for anything in order to join.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When a block is won, the farmer gets 1/8 of the rewards, and the pool operator gets the other 7/8. This was done to discourage pool operators from harming their competition by farming on a competing pool and neglecting to create a block when they find a proof (Solo farmers collect the entire reward when they create a block)."))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For more info on Chia's pooling protocol, see the ",(0,n.kt)("a",{parentName:"p",href:"/pool-protocol"},"Pool Protocol page"),".")),(0,n.kt)("h2",{id:"other-key-features"},"Other key features"),(0,n.kt)("p",null,"There are many other innovations in Chia, some of which include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"BLS signatures"),", which allow aggregating all of a block's signatures together.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Scalability and performance")," improvements, which allow running a Chia node on a Raspberry Pi. Here are ",(0,n.kt)("a",{parentName:"p",href:"/chia-on-raspberry-pi"},"instructions for farming on a Raspberry Pi"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Weight proofs and light clients"),", which enable fast syncing from a mobile device. For more info, see ",(0,n.kt)("a",{parentName:"p",href:"/light-clients"},"light clients"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Chia Asset Tokens")," (CATs) are fungible tokens that can be minted from standard XCH. The possiblilties are endless! ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com/cats"},"Read more on CATs")," or watch a ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yxagP_VC8BE"},"CATs video intro"),". Additionally, a community member has created ",(0,n.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/",title:"TAIL database"},"TAIL Database"),", which contains a list of CATs in the wild.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Offer files")," enable the peer-to-peer exchange of assets, including standard XCH, as well as CATs. ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com/offers"},"Read more on Offers")," or watch a ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/Z2FoZSNtttM",title:"Offers intro on YouTube"},"brief intro video"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NFTs")," enable and drive real-world applications of digital ownership through true marketplace independence, consistent provenance, and digital permanence. We laid out our ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/2022/05/11/our-vision-for-chia-nfts.en.html"},"vision for NFTs on Chia")," and launched our ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/2022/06/29/1.4.0-introducing-the-chia-nft1-standard.en.html"},"NFT1 standard")," in June 2022.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This documentation will explain the motivation and implementation of the different components of the Chia system to a technical audience, and provide in-depth explanations of how everything works. If you would like to skip to how to make dapps (decentralized\napps) on Chia, please visit ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com"},"chialisp.com"),"."))))}p.isMDXComponent=!0}}]);