"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8869],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(h,i(i({ref:e},m),{},{components:n})):a.createElement(h,i({ref:e},m))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8807:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:8},s="4.8 CLVM vs EVM",c={unversionedId:"04coin-set-model/clvm_vs_evm",id:"04coin-set-model/clvm_vs_evm",isDocsHomePage:!1,title:"4.8 CLVM vs EVM",description:"We'll start with a brief description of CLVM. For details on the inner workings of CLVM, see our CLVM reference.",source:"@site/docs/04coin-set-model/clvm_vs_evm.md",sourceDirName:"04coin-set-model",slug:"/04coin-set-model/clvm_vs_evm",permalink:"/docs/04coin-set-model/clvm_vs_evm",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/04coin-set-model/clvm_vs_evm.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"4.7 Coin Set vs Account",permalink:"/docs/04coin-set-model/coin_set_vs_account"},next:{title:"5.1 Block Validation",permalink:"/docs/05block-validation/block-validation"}},m=[{value:"Comparison",id:"comparison",children:[]}],p={toc:m};function u(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"48-clvm-vs-evm"},"4.8 CLVM vs EVM"),(0,r.kt)("p",null,"We'll start with a brief description of CLVM. For details on the inner workings of CLVM, see our ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm",title:"CLVM reference on chialisp.com"},"CLVM reference"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network."),(0,r.kt)("li",{parentName:"ul"},"CLVM is built out of cons boxes and atoms. Cons boxes contain two items, which can be either an atom or another cons box."),(0,r.kt)("li",{parentName:"ul"},"All CLVM programs can be represented as a binary tree. Evaluation is similar to that of standard Lisp."),(0,r.kt)("li",{parentName:"ul"},"CLVM uses a minimal operator set, most of which are a single letter.")),(0,r.kt)("h2",{id:"comparison"},"Comparison"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Design decision"),(0,r.kt)("th",{parentName:"tr",align:null},"EVM (Solidity)"),(0,r.kt)("th",{parentName:"tr",align:null},"CLVM (Chialisp)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The blockchain contains..."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart contracts (compiled programs) as well as accounts."),(0,r.kt)("td",{parentName:"tr",align:null},"The root hash of a binary tree, not source code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Money"),(0,r.kt)("td",{parentName:"tr",align:null},"Smart contracts ",(0,r.kt)("em",{parentName:"td"},"contain")," money."),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Chia coins don\u2019t ",(0,r.kt)("em",{parentName:"td"},"contain")," money. They ",(0,r.kt)("em",{parentName:"td"},"are")," money. That said, more complex functionality is possible, allowing coins to contain state, such as money.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Determinism"),(0,r.kt)("td",{parentName:"tr",align:null},"Less deterministic because multiple people can execute code within the same contract. Depending on the order of execution, the result won\u2019t always be the same."),(0,r.kt)("td",{parentName:"tr",align:null},"More deterministic because coins can only be spent once. However, it\u2019s possible to have a coin that multiple people can spend, which would reduce determinism.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Centralization"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple people interact with the same contract. Centralized by design."),(0,r.kt)("td",{parentName:"tr",align:null},"Only the owner interacts with a smart coin. Decentralized by design.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sandboxing"),(0,r.kt)("td",{parentName:"tr",align:null},"No sandboxing. If a contract is hacked, all users can lose their money."),(0,r.kt)("td",{parentName:"tr",align:null},"Strong sandboxing. Spending is the only action allowed on an unspent coin, and only by the owner(s). If a coin is hacked, only that coin\u2019s owner(s) lose(s) their money.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Composability"),(0,r.kt)("td",{parentName:"tr",align:null},"Composition is supported, so it is possible to set rules temporarily governing how money may be spent. However, if money is moved outside of the contract, it will follow different rules.",(0,r.kt)("br",null),(0,r.kt)("br",null)," (Note that it is possible to create a contract that \u201ctraps\u201d ETH inside of it by only allowing money to be sent from the contract to specific types of addresses. However, by definition this limits the functionality of that money to whatever is contained within the contract.)"),(0,r.kt)("td",{parentName:"tr",align:null},"Composition is handled through inner coins. A coin\u2019s creator could say, \u201cAs long as these rules are followed, an inner coin can add any functionality.\u201d Thus, it is possible to set rules that are intrinsic to the money itself, which must be followed ",(0,r.kt)("em",{parentName:"td"},"forever"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEV"),(0,r.kt)("td",{parentName:"tr",align:null},"Changing transaction order is both profitable and common. MEV is high."),(0,r.kt)("td",{parentName:"tr",align:null},"Transactions all occur simultaneously in a block. MEV is low.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reentrancy"),(0,r.kt)("td",{parentName:"tr",align:null},"Contracts can call functions on other contracts. Withdrawals can happen multiple times. Reentrancy is possible and must be carefully guarded against."),(0,r.kt)("td",{parentName:"tr",align:null},"Coins interact with each other through announcements. They cannot call functions on other coins. Spends are atomic. Reentrancy is not possible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auditability/Security"),(0,r.kt)("td",{parentName:"tr",align:null},"Weak. Multiple points of failure. Numerous hacks prove this."),(0,r.kt)("td",{parentName:"tr",align:null},"Strong. If an attacker changes a coin's puzzle, the hash also changes. The attacker is thus attempting to spend a coin that does not exist. The attacker can modify the solution, but the programmer can counter this by using assertions, which will make any such modifications fail.")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We chose CLVM over EVM for the reasons outlined above, and especially because of these advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sandboxing \u2013 coins are independent from one another, providing for strong security"),(0,r.kt)("li",{parentName:"ul"},"Composability \u2013 inner coins make it possible for coins to take on the functionality of other coins"),(0,r.kt)("li",{parentName:"ul"},"Interoperability \u2013 all coins output a list of conditions, so they can inherently interoperate with one another, even if not explicitly designed to do so"),(0,r.kt)("li",{parentName:"ul"},"No side effects - Auditing is easy; reentrancy is not possible")))}u.isMDXComponent=!0}}]);