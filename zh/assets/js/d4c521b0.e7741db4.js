"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3802],{7343:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(5893),s=i(1151);const o={title:"Inner Puzzles",slug:"/chialisp-inner-puzzle"},r=void 0,l={id:"academy/chialisp/chialisp-inner-puzzle",title:"Inner Puzzles",description:"Learning objectives",source:"@site/docs/academy/chialisp/chialisp-inner-puzzle.md",sourceDirName:"academy/chialisp",slug:"/chialisp-inner-puzzle",permalink:"/zh/chialisp-inner-puzzle",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/chialisp/chialisp-inner-puzzle.md",tags:[],version:"current",frontMatter:{title:"Inner Puzzles",slug:"/chialisp-inner-puzzle"},sidebar:"academy",previous:{title:"Signatures",permalink:"/zh/chialisp-signatures"},next:{title:"Plotting & Farming",permalink:"/zh/academy/plotting-farming"}},c={},a=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Links",id:"links",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Functions"}),": Learn how to define and execute functions in Chialisp."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nesting Puzzles"}),": Understand the use of nesting puzzles in Chialisp."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"content",children:"Content"}),"\n",(0,t.jsx)(n.p,{children:"In this lesson, we'll talk about why you might want to nest puzzles and how to set them up."}),"\n",(0,t.jsx)("div",{class:"videoWrapper",children:(0,t.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/GAw1yMmkO3g",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"script",children:"Script"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:" Expand for the full script "}),(0,t.jsxs)(n.p,{children:["00:00",(0,t.jsx)(n.br,{}),"\n","All puzzles result in the output of a condition that tells a blockchain what to do with a coin that it's wrapped in. Inner puzzles can be thought of as a coin within a coin where the result is a condition that is passed to the outer puzzle which executes it."]}),(0,t.jsxs)(n.p,{children:["00:20",(0,t.jsx)(n.br,{}),"\n","One specific use for this functionality is if you wanted to use a generic inner puzzle and wrap it in an outer puzzle that verifies a signature. The outer puzzle can be a sort of template that you can pass in any generic inner puzzle and it will be signature protected by the outer puzzle. Let's create this exact outer puzzle template."]}),(0,t.jsxs)(n.p,{children:["00:40",(0,t.jsx)(n.br,{}),"\n","We're going to define a module, and for our parameters we'll have a ",(0,t.jsx)(n.code,{children:"PUBLIC_KEY"})," that we'll curry in later, an ",(0,t.jsx)(n.code,{children:"INNER_PUZZLE"})," that we'll also curry in, and then the ",(0,t.jsx)(n.code,{children:"inner_solution"}),". We'll include the ",(0,t.jsx)(n.code,{children:"condition_codes.clib"})," library file and the ",(0,t.jsx)(n.code,{children:"sha256tree.clib"})," library file as well. Then, we're going to define a new function."]}),(0,t.jsxs)(n.p,{children:["01:00",(0,t.jsx)(n.br,{}),"\n","We'll call this ",(0,t.jsx)(n.code,{children:"calculate_output"})," and in the parameters we'll have our ",(0,t.jsx)(n.code,{children:"PUBLIC_KEY"}),", the ",(0,t.jsx)(n.code,{children:"inner_solution"}),", and the ",(0,t.jsx)(n.code,{children:"conditions"})," that we'll execute. In a combine statement, we'll have the standard signature verification that we used in the previous video. (",(0,t.jsx)(n.code,{children:"(defun calculate_output (PUBLIC_KEY inner_solution conditions) (c (list AGG_SIG_MET PUBLIC_KEY (sha256tree inner_solution)) conditions))"}),")"]}),(0,t.jsxs)(n.p,{children:["01:20",(0,t.jsx)(n.br,{}),"\n","For the message that we're verifying, we'll be verifying the ",(0,t.jsx)(n.code,{children:"inner_solution"})," and then we'll return the ",(0,t.jsx)(n.code,{children:"conditions"}),". Now that we've defined our new function, we'll call it with ",(0,t.jsx)(n.code,{children:"calculate_output"}),", provide the ",(0,t.jsx)(n.code,{children:"PUBLIC_KEY"})," and the ",(0,t.jsx)(n.code,{children:"inner_solution"}),", and then we'll use the ",(0,t.jsx)(n.code,{children:"apply"})," operator or ",(0,t.jsx)(n.code,{children:"a"})," on our ",(0,t.jsx)(n.code,{children:"INNER_PUZZLE"}),", providing the ",(0,t.jsx)(n.code,{children:"inner_solution"}),". (",(0,t.jsx)(n.code,{children:"calculate_output PUBLIC_KEY inner_solution (a INNER_PUZZLE inner_solution)"}),")"]}),(0,t.jsxs)(n.p,{children:["01:40",(0,t.jsx)(n.br,{}),"\n","The ",(0,t.jsx)(n.code,{children:"apply"})," operator is how you execute some code. So the ",(0,t.jsx)(n.code,{children:"INNER_PUZZLE"})," will be executed with the ",(0,t.jsx)(n.code,{children:"inner_solution"}),". So this puzzle will first evaluate the inner puzzle with the ",(0,t.jsx)(n.code,{children:"(a INNER_PUZZLE inner_solution))"})," method, and use the result as the condition for our ",(0,t.jsx)(n.code,{children:"calculate_output"})," function."]}),(0,t.jsxs)(n.p,{children:["02:00",(0,t.jsx)(n.br,{}),"\n","This function requires a signature of the ",(0,t.jsx)(n.code,{children:"inner_solution"})," to pass. Now let's write the inner puzzle. For this puzzle, we're going to use a condition called ",(0,t.jsx)(n.code,{children:"ASSERT_HEIGHT_RELATIVE"}),", which specifies when a coin can be spent, based on the number of blocks passed since coin creation. We'll define a module and in our parameters, we'll curry in the ",(0,t.jsx)(n.code,{children:"REQUIRED_BLOCKS"}),". This will be a number of blocks that have to pass before the coin can be spent."]}),(0,t.jsxs)(n.p,{children:["02:20",(0,t.jsx)(n.br,{}),"\n","Then, we'll have our ",(0,t.jsx)(n.code,{children:"conditions"}),". We'll include the ",(0,t.jsx)(n.code,{children:"condition_codes.clib"})," library again, and then we'll define a statement that uses the ",(0,t.jsx)(n.code,{children:"ASSERT_HEIGHT_RELATIVE"})," condition on the ",(0,t.jsx)(n.code,{children:"REQUIRED_BLOCKS"})," that we curried in, and then we'll return the ",(0,t.jsx)(n.code,{children:"conditions"}),"."]}),(0,t.jsxs)(n.p,{children:["02:40",(0,t.jsx)(n.br,{}),"\n","All right, now we have both our inner puzzle and our outer puzzle. Let's curry in the needed values. First we'll get our public key with ",(0,t.jsx)(n.code,{children:"chia keys show"}),", and then we'll curry the block value into the inner puzzle with ",(0,t.jsx)(n.code,{children:"cdv clsp curry inner-puzzle.clsp -a"})," and specify the number of blocks that we want to pass."]}),(0,t.jsxs)(n.p,{children:["03:00",(0,t.jsx)(n.br,{}),"\n","In this case, we'll use ",(0,t.jsx)(n.code,{children:"20"}),". We can now curry this result, along with our public key, into the outer puzzle with ",(0,t.jsx)(n.code,{children:"cdv clsp curry outer-puzzle.clsp -a"}),", enter our public key, ",(0,t.jsx)(n.code,{children:"-a"})," and in quotes we'll paste the compiled inner puzzle."]}),(0,t.jsxs)(n.p,{children:["03:20",(0,t.jsx)(n.br,{}),"\n","Now that we have our final compiled puzzle, we can go ahead and create a coin using the process that we covered in the last video. Once the coin has been created, we can create our solution for this coin. First we get our wallet address and ",(0,t.jsx)(n.code,{children:"decode"})," it. We'll use this in our desired solution. Again, we'll be using the ",(0,t.jsx)(n.code,{children:"CREATE_COIN"})," condition signified by the code ",(0,t.jsx)(n.code,{children:"51"}),"."]}),(0,t.jsxs)(n.p,{children:["03:40",(0,t.jsx)(n.br,{}),"\n","Note that I'm nesting the solution in four (4) sets of parentheses. This is because the outer puzzle parameters list is passed in wrapped with parentheses as is the inner solution. In the inner puzzle, we have another set of parentheses for the list of conditions, and each condition is also wrapped."]}),(0,t.jsxs)(n.p,{children:["04:00",(0,t.jsx)(n.br,{}),"\n","It's important to understand the structure of the puzzle to make sure that the solution you provide is structured properly. Now we'll add the encoded solution into our spend bundle where we already have the coin info and puzzle reveal from coin creation. Next, we'll get our signature using the method we outlined in the previous video. We'll hash our solution and concatenate it with the coin ID and genesis challenge."]}),(0,t.jsxs)(n.p,{children:["04:20",(0,t.jsx)(n.br,{}),"\n","Now we can sign the resulting message with ",(0,t.jsx)(n.code,{children:"chia keys sign"})," and copy the signature into our spend bundle, being sure to append ",(0,t.jsx)(n.code,{children:"0x"})," to signify that it's a value. Now run ",(0,t.jsx)(n.code,{children:"cdv rpc pushtx spendbundle.json"}),"."]}),(0,t.jsxs)(n.p,{children:["04:40",(0,t.jsx)(n.br,{}),"\n","If the number of blocks is not yet passed, it will have a pending status. If successful, we can look up the coin record again and see that the spent block index is more than 20 blocks later than the confirmed block index. In this video, we learned how inner puzzles work and how they interact with outer puzzles. Thanks so much for watching, catch you next time."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"More Parentheses:"})," It's important to take note of where your solutions are going to be used in your puzzle and wrap them in the appropriate amount of parentheses. This can be counter-intuitive as the parentheses can seem unecessary at first glance."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,t.jsx)(n.admonition,{title:"Question 1 - Evaluating Inner Puzzles",type:"tip",children:(0,t.jsx)(n.p,{children:"What operator is used to evaluate a puzzle within another puzzle?"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"apply"})," operator. (",(0,t.jsx)(n.code,{children:"a"}),")"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-chialisp",children:"(a INNER_PUZZLE inner_solution)\n"})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Question 2 - A New Condition",type:"tip",children:(0,t.jsxs)(n.p,{children:["What does the ",(0,t.jsx)(n.code,{children:"ASSERT_HEIGHT_RELATIVE"})," condition check for?"]})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ASSERT_HEIGHT_RELATIVE"})," checks for how many blocks have passed since coin creation. It allows the resolution of a puzzle after a predefined number of blocks have passed."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,t.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["General ",(0,t.jsx)(n.a,{href:"https://docs.chia.net/guides/chialisp-concepts",children:"chialisp concepts"}),": overviews of currying, inner puzzles, and morphing conditions."]}),"\n",(0,t.jsxs)(n.li,{children:["Guided ",(0,t.jsx)(n.a,{href:"https://docs.chia.net/guides/",children:"chialisp walkthroughs"}),": guides for installation, creating smart coins, and working with BLS signatures."]}),"\n",(0,t.jsxs)(n.li,{children:["Chialisp ",(0,t.jsx)(n.a,{href:"https://chialisp.com/",children:"detailed documentation"}),": detailed information on all aspects of chialisp."]}),"\n",(0,t.jsxs)(n.li,{children:["Support ",(0,t.jsx)(n.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);