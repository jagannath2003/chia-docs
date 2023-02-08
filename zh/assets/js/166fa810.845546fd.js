"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=h(n),c=o,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||a;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var h=2;h<a;h++)s[h]=n[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=n(7462),o=(n(7294),n(3905));const a={id:"chialisp-primer-first-smart-coin",slug:"/guides/chialisp-first-smart-coin",title:"4. First Smart Coin"},s=void 0,r={unversionedId:"guides/chialisp-primer/chialisp-primer-first-smart-coin",id:"guides/chialisp-primer/chialisp-primer-first-smart-coin",title:"4. First Smart Coin",description:"By now, you should understand what Chialisp is and how you can use it to write programs and modules that can be run on the command-line. In this guide, we are going to write a simple puzzle, use it to lock a coin with a password, and finally spend it. This example is insecure for a variety of reasons which will be explained after, but it's a good tool for learning how smart coins work.",source:"@site/docs/guides/chialisp-primer/first-smart-coin.md",sourceDirName:"guides/chialisp-primer",slug:"/guides/chialisp-first-smart-coin",permalink:"/zh/guides/chialisp-first-smart-coin",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/chialisp-primer/first-smart-coin.md",tags:[],version:"current",frontMatter:{id:"chialisp-primer-first-smart-coin",slug:"/guides/chialisp-first-smart-coin",title:"4. First Smart Coin"},sidebar:"guides",previous:{title:"3. Testnet Setup",permalink:"/zh/guides/chialisp-testnet-setup"},next:{title:"5. BLS Signatures",permalink:"/zh/guides/chialisp-bls-signatures"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Password Puzzle",id:"password-puzzle",level:2},{value:"Puzzles",id:"puzzles",level:2},{value:"Currying",id:"currying",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Coins",id:"coins",level:2},{value:"Putting it Together",id:"putting-it-together",level:2},{value:"Creating the Coin",id:"creating-the-coin",level:3},{value:"Spending the Coin",id:"spending-the-coin",level:3},{value:"Potential Questions",id:"potential-questions",level:2},{value:"Why Allow Arbitrary Conditions?",id:"why-allow-arbitrary-conditions",level:3},{value:"Why are Password Coins Insecure?",id:"why-are-password-coins-insecure",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:h},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By now, you should understand what Chialisp is and how you can use it to write programs and modules that can be run on the command-line. In this guide, we are going to write a simple ",(0,o.kt)("strong",{parentName:"p"},"puzzle"),", use it to lock a ",(0,o.kt)("strong",{parentName:"p"},"coin")," with a password, and finally spend it. This example is insecure for a variety of reasons which will be explained after, but it's a good tool for learning how smart coins work."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The previous guide detailed how to set up the testnet. You will need to follow it to continue."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"While this guide can be followed on the command-line like the first, we recommend writing more complicated Chialisp programs like this one that you plan on reusing in a text editor of your choice, then using the command-line to compile it and use the RPC commands.")),(0,o.kt)("h2",{id:"password-puzzle"},"Password Puzzle"),(0,o.kt)("p",null,"Write the following Chialisp code in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"password.clsp"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="password.clsp"',title:'"password.clsp"'},";;; This puzzle locks coins with a password.\n;;; It should not be used for production purposes.\n;;; Use a password that has no meaning to you, preferably random.\n\n(mod (\n        PASSWORD_HASH ; This is the sha256 hash of the password.\n\n        password ; This is the original password used in the password hash.\n        conditions ; An arbitrary list of conditions to output.\n    )\n\n    ; If the hash of the password matches,\n    (if (= (sha256 password) PASSWORD_HASH)\n        ; Output the conditions list.\n        conditions\n\n        ; Otherwise, throw an error.\n        (x)\n    )\n)\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The puzzle takes in a ",(0,o.kt)("strong",{parentName:"li"},"curried in")," value ",(0,o.kt)("inlineCode",{parentName:"li"},"PASSWORD_HASH"),"."),(0,o.kt)("li",{parentName:"ol"},"The solution takes in the ",(0,o.kt)("inlineCode",{parentName:"li"},"password")," and desired ",(0,o.kt)("inlineCode",{parentName:"li"},"conditions"),"."),(0,o.kt)("li",{parentName:"ol"},"If the hash of the password matches the curried in value, output the ",(0,o.kt)("inlineCode",{parentName:"li"},"conditions"),"."),(0,o.kt)("li",{parentName:"ol"},"Otherwise, throw an error to prevent the spend from occurring.")),(0,o.kt)("h2",{id:"puzzles"},"Puzzles"),(0,o.kt)("p",null,"We've mentioned previously that Chialisp can be used to write puzzles, but you may be wondering what exactly a puzzle is. A puzzle is a special module that is used to lock a coin with a set of rules. These rules affect how and when they can be spent, and what happens when they are."),(0,o.kt)("h3",{id:"currying"},"Currying"),(0,o.kt)("p",null,"Currying can be thought of as defining the value of function parameters before it is called. This is usually used with modules to allow the same puzzle to be reused for multiple different scenarios."),(0,o.kt)("p",null,"In this example, the curried in ",(0,o.kt)("inlineCode",{parentName:"p"},"PASSWORD_HASH")," represents the hash of the password that is required to spend the coin. Not every instance of this puzzle will have the same password, so we create a parameter and curry the value when we actually make an instance of this puzzle."),(0,o.kt)("h3",{id:"conditions"},"Conditions"),(0,o.kt)("p",null,"A condition consists of a condition number followed by its arguments. They can do a variety of things, from the creation of new coins and requiring other spends to happen at the same time, to various assertions related to the state of the blockchain."),(0,o.kt)("p",null,"A complete list of conditions can be found on the ",(0,o.kt)("a",{parentName:"p",href:"/conditions"},"Conditions page"),", but we will only be using one in this tutorial: condition ",(0,o.kt)("inlineCode",{parentName:"p"},"51"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE_COIN"),", creates a new coin with the given ",(0,o.kt)("inlineCode",{parentName:"p"},"puzzle_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," if the spend is valid. It is used to send money to another puzzle hash (which is analagous to an address)."),(0,o.kt)("h2",{id:"coins"},"Coins"),(0,o.kt)("p",null,"Everything on the Chia Blockchain, including the standard transactions used to move money between wallets, is a coin. Coins are identified by their id, which is just a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function"},"sha256 hashed")," representation of the following three components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent_coin_id"),", which is the id of the coin that created this one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"puzzle_hash"),", which is the hash of the puzzle used to spend the coin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),", which is the amount of money locked with the coin, in mojos (a trillionth of an XCH).")),(0,o.kt)("p",null,"Multiple coins can have the same puzzle hash, and a coin can create multiple children. The only limitation is that no two coins can have the same parent, puzzle hash, and amount, as their ids would be the same."),(0,o.kt)("p",null,"A coin can be spent by revealing its puzzle and providing a solution. The solution is then passed to its puzzle, which outputs a list of conditions."),(0,o.kt)("h2",{id:"putting-it-together"},"Putting it Together"),(0,o.kt)("p",null,"We will now use these concepts and the ",(0,o.kt)("inlineCode",{parentName:"p"},"password.clsp")," file you just wrote to create and spend a coin."),(0,o.kt)("h3",{id:"creating-the-coin"},"Creating the Coin"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Don't use a password that you use or plan to use for anything else, as this is not a secure smart coin. The most ideal choice for this is any number of random characters of your choice, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"x7h2dDkE"),". Just write it down for later.")),(0,o.kt)("p",null,"The first step is to curry the puzzle with the password's hash and get the puzzle hash and puzzle reveal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'opc -H "$(cdv clsp curry password.clsp --args "$(run "(sha256 \'password\')")")"\n')),(0,o.kt)("p",null,"Write down both values this produces, the first one being the puzzle hash, and the second being the puzzle reveal."),(0,o.kt)("p",null,"You can convert the puzzle hash to an address and send funds to it like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cdv encode --prefix txch "PuzzleHash"\nchia wallet send --amount 0.01 --fee 0.00005 --address "txch1Address"\n')),(0,o.kt)("p",null,"This will send 10 billion mojos with a fee of 100 million mojos (the current recommended amount to get the transaction to go through quickly) to the address you specify, therefore creating your coin!"),(0,o.kt)("h3",{id:"spending-the-coin"},"Spending the Coin"),(0,o.kt)("p",null,"There's only one thing left to do, which is to spend the coin that we just created. We are going to be using a few RPC calls to do this."),(0,o.kt)("p",null,"First, we need to find the coin that we just created by its puzzle hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cdv rpc coinrecords --only-unspent --by puzzlehash "PuzzleHash"\n')),(0,o.kt)("p",null,"Take note of the values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"coin")," object in the output."),(0,o.kt)("p",null,"Get the puzzle hash of your wallet address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet get_address\ncdv decode "txch1WalletAddress"\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you put the ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," prefix in front of the wallet's puzzle hash in this command. It isn't required for the other commands, but in this case it will compile as a string without it, which you don't want.")),(0,o.kt)("p",null,"Then, get the solution in hex, with the password and your wallet puzzle hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"opc \"('password' ((51 0xWalletPuzzleHash 9900000000)))\"\n")),(0,o.kt)("p",null,"This will produce a solution with the password that will create a new coin with the amount minus a fee of 100 million mojos. A coin will go back to your wallet when you spend the coin with this solution."),(0,o.kt)("p",null,"We will not be using an aggregated signature for the spend bundle, so we will specify the signature equivalent of zero. Just paste the long value in the below spend bundle."),(0,o.kt)("p",null,"Use the coin information you gathered with the ",(0,o.kt)("inlineCode",{parentName:"p"},"coinrecords")," command, the ",(0,o.kt)("inlineCode",{parentName:"p"},"puzzle_reveal")," from the first ",(0,o.kt)("inlineCode",{parentName:"p"},"opc")," command you ran, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"solution")," from the second."),(0,o.kt)("p",null,"Write the following in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"spendbundle.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="spendbundle.json"',title:'"spendbundle.json"'},'{\n    "coin_spends": [\n        {\n            "coin": {\n                "amount": 10000000000,\n                "parent_coin_info": "0xParentCoinInfo",\n                "puzzle_hash": "0xPuzzleHash"\n            },\n            "puzzle_reveal": "PuzzleReveal",\n            "solution": "Solution"\n        }\n    ],\n    "aggregated_signature": "0xc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"\n}\n')),(0,o.kt)("p",null,"Finally, run the following command to push the transaction to the Testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdv rpc pushtx spendbundle.json\n")),(0,o.kt)("p",null,"If all went well, this should spend the coin! Otherwise, retrace your steps carefully to try to find what went wrong. If you still can't figure it out, don't hesitate to ask us on our ",(0,o.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase team")," and we will answer as soon as we can."),(0,o.kt)("h2",{id:"potential-questions"},"Potential Questions"),(0,o.kt)("p",null,"Here are some questions you may have had when creating and spending the coin."),(0,o.kt)("h3",{id:"why-allow-arbitrary-conditions"},"Why Allow Arbitrary Conditions?"),(0,o.kt)("p",null,"We allow any conditions to be passed in the solution. While you might think that for this example we would only need to create a single coin, this allows us to reserve network fees, or to enable more complicated functionality later such as interacting with other spends. In this example, we will only use the create coin condition in this list."),(0,o.kt)("h3",{id:"why-are-password-coins-insecure"},"Why are Password Coins Insecure?"),(0,o.kt)("p",null,"When you spend one or more coins, the puzzle and its solution go into the ",(0,o.kt)("a",{parentName:"p",href:"/mempool"},"mempool")," until the block is inevitably farmed. This means that anyone can read the password in plain text during this time, or after the coin is spent."),(0,o.kt)("p",null,"A simple solution to that would be to use a new random password every time you create a coin. However, a malicious farmer can actually change the solution to spends however they would like before adding it to their block. In doing so, they could change where the money will go in order to steal the coin."),(0,o.kt)("p",null,"While there are other ways, the most common solution to that is to simply require a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLS_digital_signature"},"digital signature")," instead of a password. This is a cryptographically secure way of ensuring that the solution is not tampered with. If it is, the spend will no longer be valid. We will worry about this in a future guide, so you can safely ignore this concept for now."),(0,o.kt)("p",null,"So, while a password example is a good idea for learning and testing purposes, it is certainly not feasible for real-world use."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This is only scratching the surface of what's possible to do with smart coins on the Chia Blockchain. But it's a good foundation of understanding for more complicated examples to come. Every guide in this series builds off of the others, so make sure to take a break to let it soak in, and refresh your memory on concepts that you need to when you come back. We're looking forward to the awesome things you will build with this technology!"))}d.isMDXComponent=!0}}]);