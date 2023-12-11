"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3749],{7523:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=n(5893),t=n(1151);const r={title:"Smart Coins",slug:"/chialisp-smart-coin"},a=void 0,o={id:"academy/chialisp/chialisp-smart-coin",title:"Smart Coins",description:"Learning objectives",source:"@site/docs/academy/chialisp/chialisp-smart-coin.md",sourceDirName:"academy/chialisp",slug:"/chialisp-smart-coin",permalink:"/chialisp-smart-coin",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/chialisp/chialisp-smart-coin.md",tags:[],version:"current",frontMatter:{title:"Smart Coins",slug:"/chialisp-smart-coin"},sidebar:"academy",previous:{title:"Intro to Chialisp",permalink:"/chialisp-intro"},next:{title:"Signatures",permalink:"/chialisp-signatures"}},l={},h=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Links",id:"links",level:3}];function c(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Currying"}),": Understand how to create more general use puzzle by using Currying."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Hashing"}),": Understand the need to obfuscate sensitive portions of a puzzle by using Hashing."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Conditions"}),": Using conditions to allow the spender of the coin to decide how it is spent."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"content",children:"Content"}),"\n",(0,i.jsx)(s.p,{children:"In this lesson, we go over currying, hashing, and conditions, and submit and use our first Chia Smart Coin."}),"\n",(0,i.jsx)("div",{class:"videoWrapper",children:(0,i.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/-Nza_N9Xb3Y",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"script",children:"Script"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Expand for the full script "}),(0,i.jsxs)(s.p,{children:["00:00",(0,i.jsx)(s.br,{}),"\n","Everything on a blockchain is a coin. They are often referred to as smart coins because every coin has a chialisp program associated with it. That program, known as the puzzle, decides how and when the coin can be spent, and what happens when it is."]}),(0,i.jsxs)(s.p,{children:["00:20",(0,i.jsx)(s.br,{}),"\n","NFTs, CATs, and standard transactions are all defined using puzzles. In the previous video, we learned how to write basic chialisp programs. Let's apply that to some more complex puzzles and create a coin that can be spent on the blockchain."]}),(0,i.jsxs)(s.p,{children:["00:40",(0,i.jsx)(s.br,{}),"\n","In this video, we'll be talking about currying, hashing, and conditions. So let's get started! We'll start by creating a new chialisp file called ",(0,i.jsx)(s.code,{children:"password.clsp"})," and create a module that takes a parameter ",(0,i.jsx)(s.code,{children:"password"})," and determines if the value passed in equals ",(0,i.jsx)(s.code,{children:"hello"}),". If it does, return correct, if not return incorrect."]}),(0,i.jsxs)(s.p,{children:["01:00",(0,i.jsx)(s.br,{}),"\n","We'll run this using the ",(0,i.jsx)(s.code,{children:"brun"})," command in our terminal and pass in ",(0,i.jsx)(s.code,{children:"hello"})," which should give us a success. Just to test the opposite, we'll pass in something else, and see if that fails. So this is a bit of a refresher on chialisp basics. One of the issues we have with a puzzle like this is that the hard-coded value for the password is both insecure and not very useful."]}),(0,i.jsxs)(s.p,{children:["01:20",(0,i.jsx)(s.br,{}),"\n","We'd like to have a generalized puzzle that we can use for any password we choose to have. For this we'll use currying and hashing. To make this puzzle more generalized, we will be using currying. To do so, let's replace our password parameter with two new ones, ",(0,i.jsx)(s.code,{children:"CORRECT_PASSWORD"})," and ",(0,i.jsx)(s.code,{children:"provided_password"}),", and then run our comparison on those parameters."]}),(0,i.jsxs)(s.p,{children:["01:40",(0,i.jsx)(s.br,{}),"\n","Now in our terminal, we can curry in a value to replace the correct password parameter and compile it. Run ",(0,i.jsx)(s.code,{children:"cdv clsp curry password.clsp -a"})," and pass in our desired password, in this case - ",(0,i.jsx)(s.code,{children:"hello"})," and we get the following result. Now if we run that through ",(0,i.jsx)(s.code,{children:"brun"})," and give it the correct password, we should get a success."]}),(0,i.jsxs)(s.p,{children:["02:00",(0,i.jsx)(s.br,{}),"\n","We can also nest these commands like this - (",(0,i.jsx)(s.code,{children:'brun "$(cdv clsp curry password.clsp -a \'goodbye\')" "(goodbye)"'}),"). The first steps to making our puzzle more secure is to use hashing. A hash function will take an input and return a hash value. One of the most popular hashing algorithms is sha256 which is directly supported within chialisp."]}),(0,i.jsxs)(s.p,{children:["02:20",(0,i.jsx)(s.br,{}),"\n","A few important notes about hash functions; given a value, calculating the hash is extremely easy. Given a hash, calculating the original input is extremely difficult or impossible, and passing the same value through a hashing function multiple times will always result in the same output."]}),(0,i.jsxs)(s.p,{children:["02:40",(0,i.jsx)(s.br,{}),"\n","We can use these principles to our advantage by currying a hash of the expected password instead of the password value itself. This prevents us from revealing the expected password while still allowing us to check if the provided password is correct. This is done by hashing the provided password. So let's change our puzzle to use hashing."]}),(0,i.jsxs)(s.p,{children:["03:00",(0,i.jsx)(s.br,{}),"\n","First, change the curried parameter to ",(0,i.jsx)(s.code,{children:"PASSWORD_HASH"})," and change the other parameter to ",(0,i.jsx)(s.code,{children:"password"}),". In the comparison, use sha256 to hash the given password and compare it to the password hash. To test this we'll first have to hash a password and curry it into our new puzzle."]}),(0,i.jsxs)(s.p,{children:["03:20",(0,i.jsx)(s.br,{}),"\n","Run ",(0,i.jsx)(s.code,{children:'cdv hash "hello"'})," to get the hash for the password 'hello'. We can now curry this into our puzzle like last time, making sure to prefix the hash with ",(0,i.jsx)(s.code,{children:"0x"})," to identify it as a chialisp value. Now we can pass this compiled puzzle through ",(0,i.jsx)(s.code,{children:"brun"})," and provide the correct password to test."]}),(0,i.jsxs)(s.p,{children:["03:40",(0,i.jsx)(s.br,{}),"\n","It's important to know that while hashing is an essential part of securing our puzzle, this is not quite enough. When we provide our solution with the correct password, that password will be visible on the blockchain. Meaning we won't be able to use it again. The final solution to this problem is to use signatures, which we'll talk about in a future video. Now that we've talked about currying and hashing, let's talk about conditions."]}),(0,i.jsxs)(s.p,{children:["04:00",(0,i.jsx)(s.br,{}),"\n","In our password puzzle, let's make a couple of additions. First, we'll add a parameter called conditions and then replace the success and fail messages with that parameter, followed by ",(0,i.jsx)(s.code,{children:"(x)"}),". So what does this do? Well the ",(0,i.jsx)(s.code,{children:"x"})," represents an error. If the password is incorrect, the if statement will evaluate to false and error out, terminating the program and leaving the coin that we are creating unspent."]}),(0,i.jsxs)(s.p,{children:["04:20",(0,i.jsx)(s.br,{}),"\n","If the correct password is given, the conditions that are provided by the spender will be run. So back to our terminal, first we'll need to curry in our hashed password as before. Now that we have the compiled puzzle, we're going to need to do a few things to create the coin. First, we'll need the puzzle hash which we can get by running ",(0,i.jsx)(s.code,{children:"opc -H"})," and passing in our compiled puzzle."]}),(0,i.jsxs)(s.p,{children:["04:40",(0,i.jsx)(s.br,{}),"\n","We'll save the result for later. Next, we'll need the puzzle reveal which is just a serialized form of the puzzle in hex. It's what you must reveal on chain when spending a coin. We can get this by running ",(0,i.jsx)(s.code,{children:"opc"})," and passing in our compiled puzzle. We'll save this for later as well."]}),(0,i.jsxs)(s.p,{children:["05:00",(0,i.jsx)(s.br,{}),"\n","Now to create the coin, we need to encode our puzzle hash into an address with ",(0,i.jsx)(s.code,{children:"cdv encode -p txch"})," and passing in our puzzle hash. We then send that address an amount of xch to lock it. Now let's spend the coin to release value back to our wallet. First, we'll get our wallet address and convert it to a puzzle hash with ",(0,i.jsx)(s.code,{children:"cdv decode"}),"."]}),(0,i.jsxs)(s.p,{children:["05:20",(0,i.jsx)(s.br,{}),"\n","We'll then use this to build the condition we want to pass into the coin. For this example, we're going to use the ",(0,i.jsx)(s.code,{children:"CREATE_COIN"})," condition which is denoted by the code ",(0,i.jsx)(s.code,{children:"51"}),". So to construct our solution, we'll write ",(0,i.jsx)(s.code,{children:"opc"})," then give our password, then the condition we want to pass in."]}),(0,i.jsxs)(s.p,{children:["05:40",(0,i.jsx)(s.br,{}),"\n","In this case, the condition code ",(0,i.jsx)(s.code,{children:"51"}),", our wallet puzzle hash - prefixed by ",(0,i.jsx)(s.code,{children:"0x"}),", and an amount. This output is our solution and we'll save it for later. All right, we now need to retrieve the coin record we created earlier when we committed xch to the puzzle. Run ",(0,i.jsx)(s.code,{children:"cdv rpc coinrecords --by puzzlehash"})," and pass in the original puzzle hash."]}),(0,i.jsxs)(s.p,{children:["06:00",(0,i.jsx)(s.br,{}),"\n","The output may contain a few coin records depending on if you're following the example closely and use the most recent one based on highest block index, and copy the coin record. Now we are going to create a spend bundle. Start a ",(0,i.jsx)(s.code,{children:"json"})," file and create a property called ",(0,i.jsx)(s.code,{children:"coin_spends"})," that contains an array containing an object. (",(0,i.jsx)(s.code,{children:"[{}]"}),")"]}),(0,i.jsxs)(s.p,{children:["06:20",(0,i.jsx)(s.br,{}),"\n","Paste the coin record, followed by the puzzle reveal you generated earlier, and then the solution. Create another property called ",(0,i.jsx)(s.code,{children:"aggregated_signature"})," and assign this value (",(0,i.jsx)(s.code,{children:"0xc0000000000..."}),") That's 191 zeros. Now submit the spend bundle to the mempool with ",(0,i.jsx)(s.code,{children:"cdv rpc pushtx spendbundle.json"}),"."]}),(0,i.jsxs)(s.p,{children:["06:40",(0,i.jsx)(s.br,{}),"\n","If everything was successful, this transaction should be accepted and you should see your wallet balance increase after some time passes. Now you've created your first smart coin. In this video, we talked about how to curry values into a generalized puzzle, how to hash both sensitive values as well as puzzles for creating coins, and touched on conditions that can be passed into puzzles."]}),(0,i.jsxs)(s.p,{children:["07:00",(0,i.jsx)(s.br,{}),"\n","In the next video, we'll talk further about security and how to use signatures to better secure your transactions. See you then."]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Curried parameters:"})," It's considered best practice to write parameters that are intended to be curried in in all caps. This helps keep track of where each parameter is coming from while writing the puzzle."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"0x Prefixes:"})," It's important to keep track of how we are using different values and understand how Chialisp is going to handle them. A common gotcha is forgetting to append ",(0,i.jsx)(s.code,{children:"0x"})," to a value, or in some cases removing it to tell the puzzle how to properly handle the parameter."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Condition Codes:"})," Condition codes are by default signified by a numerical code. In future lessons, we will also use a library that allows us to reference the codes with more descriptive language."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 1 - Curried Parameters",type:"tip",children:[(0,i.jsx)(s.p,{children:"Which parameter in this puzzle will be curried in?"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:'(mod (ARG1 arg2)\n    (if (= ARG1 arg2)\n        "Equal"\n        "Not Equal"\n    )\n)\n'})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(s.p,{children:"ARG1 will be curried in."}),(0,i.jsx)(s.p,{children:"Currying always substitutes parameters in order, so when currying, the first will be replaced. Best practice is to write a curried parameter in all caps to help us keep track."})]}),"\n",(0,i.jsx)(s.admonition,{title:"Question 2 - Hashing Principles",type:"tip",children:(0,i.jsx)(s.p,{children:"What are the three principles of hashing?"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Given a value, hashing that value is computationally easy"}),"\n",(0,i.jsx)(s.li,{children:"Given a hash, calculating the value is computationally difficult or impossible"}),"\n",(0,i.jsx)(s.li,{children:"Hashing the same input, will result in the same output"}),"\n"]})]}),"\n",(0,i.jsx)(s.admonition,{title:"Question 3 - Hashing Puzzle",type:"tip",children:(0,i.jsx)(s.p,{children:"True or False. Sha256 is one of the most popular hashing algorithms and is natively supported by chialisp."})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(s.p,{children:"True"})]}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 4 - Combining all of the above",type:"tip",children:[(0,i.jsx)(s.p,{children:"Write a Chialisp puzzle that performs the following."}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Accepts a curried parameter"}),"\n",(0,i.jsx)(s.li,{children:"Hashes a provided parameter with sha256 and compares it to the curried parameter."}),"\n",(0,i.jsx)(s.li,{children:"Outputs a provided result if the comparison is true."}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:"(mod (PASSWORD_HASH password conditions)\n    (if (= (sha256 password) PASSWORD_HASH)\n        conditions\n        (x)\n    )\n)\n"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsx)(s.h3,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["General ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/guides/chialisp-concepts",children:"chialisp concepts"}),": overviews of currying, inner puzzles, and morphing conditions."]}),"\n",(0,i.jsxs)(s.li,{children:["Guided ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/guides/",children:"chialisp walkthroughs"}),": guides for installation, creating smart coins, and working with BLS signatures."]}),"\n",(0,i.jsxs)(s.li,{children:["Chialisp ",(0,i.jsx)(s.a,{href:"https://chialisp.com/",children:"detailed documentation"}),": detailed information on all aspects of chialisp."]}),"\n",(0,i.jsxs)(s.li,{children:["Support ",(0,i.jsx)(s.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var i=n(7294);const t={},r=i.createContext(t);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);