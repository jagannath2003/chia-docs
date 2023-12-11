(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3963],{8266:(e,s,n)=>{"use strict";n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(5893),t=n(1151),r=n(773);const a={title:"Intro to Chialisp",slug:"/chialisp-intro"},l=void 0,o={id:"academy/chialisp/chialisp-intro",title:"Intro to Chialisp",description:"Learning objectives",source:"@site/docs/academy/chialisp/chialisp-intro.md",sourceDirName:"academy/chialisp",slug:"/chialisp-intro",permalink:"/zh/chialisp-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/chialisp/chialisp-intro.md",tags:[],version:"current",frontMatter:{title:"Intro to Chialisp",slug:"/chialisp-intro"},sidebar:"academy",previous:{title:"Chialisp Overview",permalink:"/zh/academy/chialisp"},next:{title:"Smart Coins",permalink:"/zh/chialisp-smart-coin"}},h={},c=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Runnable Chialisp and clvm plugins",id:"runnable-chialisp-and-clvm-plugins",level:3},{value:"Chialisp plugin",id:"chialisp-plugin",level:4},{value:"Clvm plugin",id:"clvm-plugin",level:4},{value:"Links",id:"links",level:3}];function d(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Syntax and Structure"}),": Understand the basic Chialisp syntax and structure."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Puzzles and Solutions"}),": Understand the use of puzzles and solutions in Chialisp."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Development Environment"}),": Setup and configure the Chialisp development environment."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"content",children:"Content"}),"\n",(0,i.jsx)(s.p,{children:"In this lesson, we review the basics of Chialisp including syntax & structure, inequalities and if statements, and setting up a development environment."}),"\n",(0,i.jsx)("div",{class:"videoWrapper",children:(0,i.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/W9QK4PFIIpA",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"script",children:"Script"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Expand for the full script "}),(0,i.jsxs)(s.p,{children:["00:00",(0,i.jsx)(s.br,{}),"\n","We're going to go over the very basics of Chialisp we'll talk about a few things the basic syntax and structure of a Chialisp program puzzles and solutions and set up a development environment to test it all out."]}),(0,i.jsxs)(s.p,{children:["00:20",(0,i.jsx)(s.br,{}),"\n","So let's get started, the first thing you'll want to do is make sure you have the correct version of python. If you type in python3-version make sure you have python 3.10. Next we're going to want to create a virtual environment so if you run the command python3 -m venv venv."]}),(0,i.jsxs)(s.p,{children:["00:40",(0,i.jsx)(s.br,{}),"\n","This is going to create a virtual environment that we can activate to do our development in and to activate it we're going to type in this command bin\\activate and now you can see that we are in a virtual environment."]}),(0,i.jsxs)(s.p,{children:["01:00",(0,i.jsx)(s.br,{}),"\n","Next we're going to want to install the Chia Dev tools and you can do this by in running pip install Chia Dev tools and let it do its thing. So now let's just make sure we have the correct version by typing cdv --version and you can see we have version 1.1.4."]}),(0,i.jsxs)(s.p,{children:["01:20",(0,i.jsx)(s.br,{}),"\n","So now we have our development environment all set up let's go over some key lisp basics. This is the basic run command it takes a list with an operator followed by two operands."]}),(0,i.jsxs)(s.p,{children:["01:40",(0,i.jsx)(s.br,{}),"\n","In this example, we have the operands two and three and they'll be added together so we should get five. That's not very useful though so let's create a program that we can pass in some parameters and do the addition for us. All right in this example we have defined a module that receives two parameters arg1 arg2 and then runs the operation on those two parameters so when we run this we're going to get the compiled version of the program that we just wrote."]}),(0,i.jsxs)(s.p,{children:["02:00",(0,i.jsx)(s.br,{}),"\n","This is called the puzzle the arguments will be passed into the puzzle as a solution. So how do we run this code? Well our second command is brun so if we pass this compiled puzzle through the brun command and give it a solution such as 7 and 10."]}),(0,i.jsxs)(s.p,{children:["02:20",(0,i.jsx)(s.br,{}),"\n","It's going to use that solution as the parameters for the program so we should get 17. Now let's talk about inequalities and if statements. In this program I'm comparing two numbers 10 and 5, and seeing if the first is greater than the second. So in this case the result would be true and we receive a 1."]}),(0,i.jsxs)(s.p,{children:["02:40",(0,i.jsx)(s.br,{}),"\n","In the opposite case it would be false and we received an empty set so if statements are going to take this structure if followed by our comparison then the result if it's true followed by the result if it's false. So let's run this program, if 1 which is true return true, else return false."]}),(0,i.jsxs)(s.p,{children:["03:00",(0,i.jsx)(s.br,{}),"\n","So we expect to see true. So let's create a puzzle using comparisons and if statements. So we're going to type run and define a module that takes two arguments arg1 arg2. So we're going to define an if statement and we want to know if we add the two arguments together if they're greater than 100."]}),(0,i.jsxs)(s.p,{children:["03:20",(0,i.jsx)(s.br,{}),"\n","So if greater than the addition of argument 1 and argument 2 is greater than 100 then we're going to return large if it's true and small if it's false."]}),(0,i.jsxs)(s.p,{children:["03:40",(0,i.jsx)(s.br,{}),"\n","We'll close this and as you can see it's really easy to get lost in the parentheses so for future videos we'll be using a text editor which will make this a lot easier but if we run this we will receive the compiled version of our program and let's pass that puzzle into brun with our solution so run and"]}),(0,i.jsxs)(s.p,{children:["04:00",(0,i.jsx)(s.br,{}),"\n","we'll add 70 and 100 which is guaranteed to be over 100 so we should receive the result large and that's it. That's the basics of Chialisp; we've talked about basic operators, inequalities if statements compiling our program into puzzles, and passing in a solution."]}),(0,i.jsxs)(s.p,{children:["04:20",(0,i.jsx)(s.br,{}),"\n","In future videos we'll talk about smart coins signatures and inner puzzles. Thanks for joining me and I'll catch you in the next video!"]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"run vs brun:"})," Run is used to serialize and run chialisp puzzles while brun is used to run clvm serialized puzzles generally when passing arguments."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Parentheses:"})," Chialisp is part of the fully parenthesized prefix notation programming language family tracing their ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)",children:"origins"})," to LISP 1 from the 1950s. One highly apparent aspect of these languages is their use of parenthesis to denote lists. It is recommended to use an IDE with proper syntax highlighting when writing these languages to ensure that all parenthesis are in the proper places. To help with this here is a ",(0,i.jsx)(s.a,{href:"https://marketplace.visualstudio.com/items?itemName=ChiaNetwork.chialisp",children:"Chialisp language server extension"})," for Visual Studio."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Prefix Notation:"})," Chialisp being part of the LISP family uses prefix notation. This means that the functions or operators appears first with their arguments following."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,i.jsx)(s.admonition,{title:"Question 1 - Subtraction",type:"tip",children:(0,i.jsx)(s.p,{children:"What is a chialisp puzzle for subtracting two arguments?"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:"(mod (arg1 arg2)\n    (- arg1 arg2)\n)\n"})})]}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 2 - Comparison",type:"tip",children:[(0,i.jsx)(s.p,{children:"What is the serialized form of this chialisp puzzle?"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:"(mod (arg1 arg2)\n    (> arg1 arg2)\n)\n"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:"(> 2 5)\n"})})]}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 3 - If Statement",type:"tip",children:[(0,i.jsx)(s.p,{children:"What is the result of the below serialized puzzle and solution?"}),(0,i.jsx)(s.p,{children:"Puzzle:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:'(a (i 2 (q 1 . "true") (q 1 . "false")) 1)\n'})}),(0,i.jsx)(s.p,{children:"Solution:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:"(1)\n"})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:'"true"'})})]}),"\n",(0,i.jsxs)(s.admonition,{title:"Question 4 - Combining all of the above",type:"tip",children:[(0,i.jsx)(s.p,{children:"What is a Chialisp puzzle that performs the following?"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Accepts two arguments"}),"\n",(0,i.jsx)(s.li,{children:"Adds the two arguments together"}),"\n",(0,i.jsx)(s.li,{children:"Compares the sum of the arguments to 100"}),"\n",(0,i.jsx)(s.li,{children:'Results in "Large" when the sum is greater than 100 and "Small" when the sum is less than 100'}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer) "}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:'(mod (arg1 arg2)\n    (if (> (+ arg1 arg2) 100) "large" "small")\n)\n'})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsx)(s.h3,{id:"runnable-chialisp-and-clvm-plugins",children:"Runnable Chialisp and clvm plugins"}),"\n",(0,i.jsxs)(s.p,{children:["For information on using these plugins please refer to the ",(0,i.jsx)(s.a,{href:"/academy-overview#runnable-chialisp-and-clvm-plugins",children:"academy overview"})]}),"\n",(0,i.jsx)(s.h4,{id:"chialisp-plugin",children:"Chialisp plugin"}),"\n",(0,i.jsx)(r.Z,{flavor:"chialisp",input:"(10 99)",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:'(mod (arg1 arg2)\n    (if (> (+ arg1 arg2) 100) "large" "small")\n)\n'})})}),"\n",(0,i.jsx)(s.h4,{id:"clvm-plugin",children:"Clvm plugin"}),"\n",(0,i.jsx)(r.Z,{flavor:"clvm",input:"(1)",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-chialisp",children:'(a (i 2 (q 1 . "true") (q 1 . "false")) 1)\n'})})}),"\n",(0,i.jsx)(s.h3,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["General ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/guides/chialisp-concepts",children:"chialisp concepts"}),": overviews of currying, inner puzzles, and morphing conditions."]}),"\n",(0,i.jsxs)(s.li,{children:["Guided ",(0,i.jsx)(s.a,{href:"https://docs.chia.net/guides/",children:"chialisp walkthroughs"}),": guides for installation, creating smart coins, and working with BLS signatures."]}),"\n",(0,i.jsxs)(s.li,{children:["Chialisp ",(0,i.jsx)(s.a,{href:"https://chialisp.com/",children:"detailed documentation"}),": detailed information on all aspects of chialisp."]}),"\n",(0,i.jsxs)(s.li,{children:["Support ",(0,i.jsx)(s.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},773:(e,s,n)=>{"use strict";n.d(s,{Z:()=>f});var i=n(2949),t=n(171),r=n(2573),a=n(7294),l=n(5154),o=n(460),h=n.n(o),c=n(9042),d=n.n(c),u=n(23),p=n.n(u);function g(e){return e instanceof Array||(0,a.isValidElement)(e)?a.Children.toArray(e).reduce(((e,s)=>{let n="";return n=(0,a.isValidElement)(s)&&x(s)?g(s.props.children):(0,a.isValidElement)(s)&&!x(s)?"":m(s),e.concat(n)}),""):m(e)}function m(e){return null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString()}function x(e){return(0,a.isValidElement)(e)&&Boolean(e.props.children)}var j=n(5893);function f(e){let{children:s,flavor:n,input:o,tests:h,reporter:c}=e;const{colorMode:u}=(0,i.I)(),m=(0,a.useMemo)((()=>g(s).trim()),[]),[x,f]=(0,a.useState)(m),[y,w]=(0,a.useState)(o??Object.keys(h??{})[0]?.trim()??""),[b,k]=(0,a.useState)(""),[C,z]=(0,a.useState)(0n),[S,I]=(0,a.useState)(null),N=e=>e.replace("Error: ",""),P=(e,s)=>{try{return e.run(s)}catch(n){return k(`While evaluating: ${N(""+n)}`),null}},W=()=>{const e=(()=>{try{return t.Program.fromSource(x)}catch(e){return k(`While parsing: ${N(""+e)}`),null}})();if(!e)return;const s="clvm"===n||e.isCons&&e.first.equals(t.Program.fromText("mod")),i=(e=>{if(n&&"chialisp"!==n)return e;try{return e.compile().value}catch(s){return k(`While compiling: ${N(""+s)}`),null}})(e);if(!i)return;const r=y?t.Program.fromSource(y):t.Program.nil,a=s?P(i,r):{value:i,cost:0n};a&&(k(a.value.toSource()),z(a.cost));let l=!0;for(const[n,o]of Object.entries(h??{})){const e=t.Program.fromSource(n),r=s?P(i,e)?.value:i;if(!r||r.toSource()!==o){l=!1;break}}c?.(l),I(l)},A=S?l.l_A:l.aHS,[F,T]=a.useState(!1);return(0,a.useEffect)((()=>T(!0)),[]),(0,j.jsx)(r.y$,{Prism:globalThis.Prism,theme:F&&("dark"===u?d():p()),code:x,language:"chialisp",children:e=>{let{className:s,style:i}=e;return(0,j.jsxs)("pre",{className:s,style:{...i,position:"relative"},children:[y?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{code:y,setCode:w,language:"chialisp"}),(0,j.jsx)("hr",{style:{marginTop:"14px",marginBottom:"14px"}})]}):"",(0,j.jsx)(v,{code:x,setCode:f,language:"chialisp"}),(0,j.jsx)("div",{style:{position:"absolute",top:"16px",right:"16px"},children:(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[(0,j.jsx)("span",{style:{marginRight:"8px"},children:n&&"chialisp"!==n?"CLVM":"Chialisp"}),!y&&(0,j.jsx)(l.A0H,{size:24,className:"icon-button",cursor:"pointer",onClick:()=>w("()")}),(0,j.jsx)(l.gmG,{size:24,className:"icon-button",cursor:"pointer",onClick:W})]})}),b?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("hr",{style:{marginTop:"14px",marginBottom:"14px"}}),(0,j.jsx)("div",{style:{display:"inline-block"},children:(0,j.jsx)(v,{code:b,language:"chialisp"})}),b&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{display:"inline-block",position:"absolute",right:"60px"},children:(0,j.jsx)(v,{code:`Cost: ${C}`,language:"chialisp"})}),(0,j.jsx)(A,{size:24,color:S?"#77FF77":"#FF7777",style:{position:"absolute",bottom:"16px",right:"16px"}})]})]}):""]})}})}function v(e){let{code:s,setCode:n,language:t}=e;const{colorMode:l}=(0,i.I)(),[o,c]=a.useState(!1);return(0,a.useEffect)((()=>c(!0)),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(r.y$,{Prism:globalThis.Prism,theme:o&&("dark"===l?d():p()),code:s,language:t,children:e=>{let{tokens:i,getLineProps:t,getTokenProps:r}=e,a=i.map(((e,s)=>(0,j.jsx)("div",{...t({line:e}),children:e.map(((e,s)=>(0,j.jsx)("span",{...r({token:e})},s)))},s)));return n?(0,j.jsx)(h(),{value:s,onValueChange:e=>n(e),highlight:()=>a,padding:0}):a}})})}},9042:e=>{e.exports={plain:{color:"#F8F8F2",backgroundColor:"#282A36",fontWeight:"bold"},styles:[{types:["keyword"],style:{color:"rgb(189, 147, 249)"}},{types:["listop","class-name","quotes"],style:{color:"rgb(80, 250, 123)"}},{types:["builtin"],style:{color:"rgb(5, 227, 223)"}},{types:["number","hexadecimal","string","boolean"],style:{color:"rgb(255, 184, 108)",fontWeight:"normal"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["variable"],style:{fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)",fontWeight:"normal"}},{types:["function","car"],style:{color:"rgb(241, 250, 140)"}}]}},23:e=>{e.exports={plain:{color:"#383a42",backgroundColor:"#fafafa",fontWeight:"bold"},styles:[{types:["keyword"],style:{color:"#990096"}},{types:["listop","class-name","quotes"],style:{color:"#006100"}},{types:["builtin"],style:{color:"#127EAF"}},{types:["number","hexadecimal","string","boolean"],style:{color:"#B35C00",fontWeight:"normal"}},{types:["punctuation","symbol"],style:{color:"#383a42"}},{types:["variable"],style:{fontStyle:"italic"}},{types:["comment"],style:{color:"#73737D",fontWeight:"normal"}},{types:["function","car"],style:{color:"#0045DB"}}]}}}]);