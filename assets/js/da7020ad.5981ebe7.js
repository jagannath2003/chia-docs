"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1317],{7500:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"guides/tutorials/coin-spend-rpc","title":"RPC Coin Spend","description":"This tutorial teaches you how to spend a coin with any puzzle using RPC calls. We will be using the password-locked coin puzzle as an example.","source":"@site/docs/guides/tutorials/coin-spend-rpc.md","sourceDirName":"guides/tutorials","slug":"/guides/coin-spend-rpc-tutorial","permalink":"/guides/coin-spend-rpc-tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/tutorials/coin-spend-rpc.md","tags":[],"version":"current","frontMatter":{"slug":"/guides/coin-spend-rpc-tutorial","title":"RPC Coin Spend"},"sidebar":"guides","previous":{"title":"Observer Wallet Guide","permalink":"/guides/observer-wallet-guide"},"next":{"title":"Seeder User Guide","permalink":"/guides/seeder-user-guide"}}');var o=i(4848),a=i(8453);const l={slug:"/guides/coin-spend-rpc-tutorial",title:"RPC Coin Spend"},c=void 0,t={},r=[{value:"Get your coin&#39;s info (amount, puzzle hash &amp; parent info)",id:"get-your-coins-info-amount-puzzle-hash--parent-info",level:2},{value:"Get serialized puzzle and solution",id:"get-serialized-puzzle-and-solution",level:2},{value:"Serialization using clvm_tools",id:"serialization-using-clvm_tools",level:3},{value:"Serialization using Chia Dev Tools",id:"serialization-using-chia-dev-tools",level:3},{value:"Serialization using Chialisp web tool",id:"serialization-using-chialisp-web-tool",level:3},{value:"Spend a coin with RPC call",id:"spend-a-coin-with-rpc-call",level:2}];function f(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This tutorial teaches you how to spend a coin with any puzzle using RPC calls. We will be using the ",(0,o.jsx)(n.a,{href:"/guides/chialisp-first-smart-coin",children:"password-locked coin"})," puzzle as an example."]}),"\n",(0,o.jsx)(n.h2,{id:"get-your-coins-info-amount-puzzle-hash--parent-info",children:"Get your coin's info (amount, puzzle hash & parent info)"}),"\n",(0,o.jsx)(n.p,{children:"RPC call for spending a coin requires you to specify which coin you are spending. For unique identification, you need the coin's amount, puzzle hash, and parent info. Those three pieces of information are also enough to calculate the coin's ID."}),"\n",(0,o.jsxs)(n.p,{children:["If you know the puzzle hash or receive address of the coin you are looking for, you can use ",(0,o.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-dev-tools",children:"Chia Dev Tools"})," to get the coin's information."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example for the password-locked coin:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cdv rpc coinrecords --by puzzlehash 4843c869bba5f65aa1e806cd372dae5668ca3b69640d067e86837ca96b324e71\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Click through this ",(0,o.jsx)(n.a,{href:"https://chialisp.com/docs/tutorials/tools_and_setup",children:"tutorial"})," to learn more about tools and setup."]}),"\n",(0,o.jsx)(n.h2,{id:"get-serialized-puzzle-and-solution",children:"Get serialized puzzle and solution"}),"\n",(0,o.jsx)(n.p,{children:"The next thing you need to know to spend the coin is the coin's puzzle and solution. Puzzles and solutions are provided in a serialized format, so we need to get that for each. The puzzle has to be compiled to low-level Chialisp and is serialized as normal."}),"\n",(0,o.jsxs)(n.p,{children:["To serialize the solution, you need to slightly modify the solution format to make it valid Chialisp program. For that, you need to quote your solution. For example, in case of the solution ",(0,o.jsx)(n.code,{children:"(hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2)"})," you need to change it to ",(0,o.jsx)(n.code,{children:"(q . (hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2))"})," which makes it valid Chialisp program that can be compiled."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example for the password-locked coin:"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Puzzle:"})," ",(0,o.jsx)(n.code,{children:"(a (q 2 (i (= (sha256 5) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q 4 (c 2 (c 11 (c 23 ()))) ()) (q 8)) 1) (c (q . 51) 1))"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Serialized puzzle:"})," ",(0,o.jsx)(n.code,{children:"0xff02ffff01ff02ffff03ffff09ffff0bff0580ffff01a02cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b982480ffff01ff04ffff04ff02ffff04ff0bffff04ff17ff80808080ff8080ffff01ff088080ff0180ffff04ffff0133ff018080"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solution:"})," ",(0,o.jsx)(n.code,{children:"(hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2)"})," (as valid Chialisp program ",(0,o.jsx)(n.code,{children:"(q . (hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2))"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Serialized solution:"})," ",(0,o.jsx)(n.code,{children:"0xff8568656c6c6fffa05f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675ff0280"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"WARNING: You have to change this solution and replace the target puzzle hash with your own to get your coins back"})}),"\n",(0,o.jsxs)(n.h3,{id:"serialization-using-clvm_tools",children:["Serialization using ",(0,o.jsx)(n.a,{href:"https://github.com/Chia-Network/clvm_tools",children:"clvm_tools"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"opc -H <CLVM>"})," command can be used for getting the serialized version of our puzzle and solution as well. The serialized version will be included in the response ",(0,o.jsx)(n.strong,{children:"on the second line"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"opc -H '(a (q 2 (i (= (sha256 5) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q 4 (c 2 (c 11 (c 23 ()))) ()) (q 8)) 1) (c (q . 51) 1))'\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example response:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"4843c869bba5f65aa1e806cd372dae5668ca3b69640d067e86837ca96b324e71\nff02ffff01ff02ffff03ffff09ffff0bff0580ffff01a02cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b982480ffff01ff04ffff04ff02ffff04ff0bffff04ff17ff80808080ff8080ffff01ff088080ff0180ffff04ffff0133ff018080\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"serialization-using-chia-dev-tools",children:["Serialization using ",(0,o.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-dev-tools",children:"Chia Dev Tools"})]}),"\n",(0,o.jsx)(n.p,{children:"Follow repository's README to set up a new project and serialize puzzle."}),"\n",(0,o.jsxs)(n.p,{children:["In short: paste your compiled puzzle/solution to your work file and call ",(0,o.jsx)(n.code,{children:"chialisp build"}),". That will generate ",(0,o.jsx)(n.code,{children:".hex"})," files with a serialized version of your puzzle/solution (depending on your work file)."]}),"\n",(0,o.jsxs)(n.h3,{id:"serialization-using-chialisp-web-tool",children:["Serialization using ",(0,o.jsx)(n.a,{href:"https://clisp.surrealdev.com/",children:"Chialisp web tool"})]}),"\n",(0,o.jsxs)(n.p,{children:["Paste your puzzle in the text area and click ",(0,o.jsx)(n.strong,{children:"Compile"}),". The serialized result will be displayed in the ",(0,o.jsx)(n.strong,{children:"Serialized"})," section."]}),"\n",(0,o.jsx)(n.h2,{id:"spend-a-coin-with-rpc-call",children:"Spend a coin with RPC call"}),"\n",(0,o.jsxs)(n.p,{children:["To spend your coin, you only need to call ",(0,o.jsx)(n.a,{href:"/full-node-rpc#push_tx",children:"push_tx"})," RPC (broadcast transaction example) with values specific to your spend."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl --insecure --cert ~/.chia/mainnet/config/ssl/full_node/private_full_node.crt --key ~/.chia/mainnet/config/ssl/full_node/private_full_node.key -d \'{        "spend_bundle": {\n            "aggregated_signature": "0xc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n            "coin_spends": [\n                {\n                    "coin": {\n                        "amount": 1,\n                        "parent_coin_info": "0xccd5bb71183532bff220ba46c268991a00000000000000000000000000004082",\n                        "puzzle_hash": "0x4843c869bba5f65aa1e806cd372dae5668ca3b69640d067e86837ca96b324e71"\n                    },\n                    "puzzle_reveal": "0xff02ffff01ff02ffff03ffff09ffff0bff0580ffff01a02cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b982480ffff01ff04ffff04ff02ffff04ff0bffff04ff17ff80808080ff8080ffff01ff088080ff0180ffff04ffff0133ff018080 ",\n                    "solution": "0xff8568656c6c6fffa05f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675ff0280"\n                }\n            ]\n        }}\' -H "Content-Type: application/json" -X POST https://localhost:8555/push_tx\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/spend-bundles",children:(0,o.jsx)(n.code,{children:"spend_bundle"})})," object contains an ",(0,o.jsx)(n.code,{children:"aggregated_signature"}),", which we can later assert in the puzzle, and ",(0,o.jsx)(n.code,{children:"coin_spends"}),": a list of objects for all of the coins we are spending. If ",(0,o.jsx)(n.code,{children:"aggregated_signature"})," is not necessary for your puzzle, use 0xc followed by 191 zeros (as in the example above). However, it's worth noting that a puzzle that doesn't use a signature is usually unsafe and should be used only for testing purposes."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"coin_solution"})," contains information about the ",(0,o.jsx)(n.code,{children:"coin"})," it is spending (",(0,o.jsx)(n.code,{children:"amount"}),", ",(0,o.jsx)(n.code,{children:"parent_coin_info"}),", and ",(0,o.jsx)(n.code,{children:"puzzle_hash"}),"). It also includes a serialized puzzle as a ",(0,o.jsx)(n.code,{children:"puzzle_reveal"})," and serialized ",(0,o.jsx)(n.code,{children:"solution"}),". Note: if this is your time constructing a spend bundle, the ",(0,o.jsx)(n.code,{children:"puzzle_hash"})," is the puzzlehash of the receive address that you wish to send to ",(0,o.jsx)(n.code,{children:"coin"})," to."]}),"\n",(0,o.jsxs)(n.p,{children:["If you fill in all your information correctly and send this request, your coin will be spent according to its provided solution, and the response ",(0,o.jsx)(n.code,{children:'{"status": "SUCCESS", "success": true}'})," should be returned from the RPC call."]}),"\n",(0,o.jsx)(n.p,{children:"If your puzzle requires an aggregated signature, stay tuned for more tutorials."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["If you have further questions, join our ",(0,o.jsx)(n.a,{href:"https://discord.gg/chia",children:"Discord"})," and ask in the #chialisp channel."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const o={},a=s.createContext(o);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);