"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7974],{9888:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>f,toc:()=>t});var s=a(5893),c=a(1151);const i={slug:"/guides/crash-course/signatures",title:"Signatures"},d=void 0,f={id:"guides/crash-course/signatures",title:"Signatures",description:"In the previous lesson we created our first coin and spent it. This was fun and a good exercise, but had some security problems. Specifically, we used a hashed password. This is very limited because once you spend that coin, your provided solution is revealed and your password can no longer be used securely for anything in the future.",source:"@site/docs/guides/crash-course/signatures.md",sourceDirName:"guides/crash-course",slug:"/guides/crash-course/signatures",permalink:"/zh/guides/crash-course/signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/crash-course/signatures.md",tags:[],version:"current",frontMatter:{slug:"/guides/crash-course/signatures",title:"Signatures"},sidebar:"guides",previous:{title:"Smart Coins",permalink:"/zh/guides/crash-course/smart-coins"},next:{title:"State",permalink:"/zh/guides/crash-course/state"}},r={},t=[{value:"Intro to Keys",id:"intro-to-keys",level:2},{value:"Intro to Signatures",id:"intro-to-signatures",level:2},{value:"Verifying signatures in Chialisp",id:"verifying-signatures-in-chialisp",level:2},{value:"Practice",id:"practice",level:2},{value:"Spending the coin",id:"spending-the-coin",level:2},{value:"Build a Solution",id:"build-a-solution",level:2},{value:"Signing a Message",id:"signing-a-message",level:2},{value:"Get Coin Id",id:"get-coin-id",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the previous lesson we created our first coin and spent it. This was fun and a good exercise, but had some security problems. Specifically, we used a hashed password. This is very limited because once you spend that coin, your provided solution is revealed and your password can no longer be used securely for anything in the future."}),"\n",(0,s.jsx)(n.p,{children:"Additionally, when you submit your spend to the network, a full node can view the solution (including the password), allowing a bad player to spend the coin themselves."}),"\n",(0,s.jsx)(n.p,{children:"The solution to this is to use signatures. But, before we introduce signatures, let's go over a quick introduction of public and private keys."}),"\n",(0,s.jsx)(n.h2,{id:"intro-to-keys",children:"Intro to Keys"}),"\n",(0,s.jsx)(n.p,{children:"When you create a Chia wallet you are given 24 words that you should keep secure and private. These words are used to generate a master private key. A master private key can be used to derive multiple child keys, all accessed and controlled from your 24 words (in other words, 24 words = full access to your wallet)."}),"\n",(0,s.jsx)(n.p,{children:"With each private key there is an associated public key, which can be shared without revealing your private key."}),"\n",(0,s.jsx)(n.p,{children:"You can retrieve your key info using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chia keys show\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will give you your ",(0,s.jsx)(n.code,{children:"master public key"}),", while keeping your seed phrase and private key hidden. Although rarely needed or recommended, you can see this info with the ",(0,s.jsx)(n.code,{children:"--show-mnemonic-seed"})," flag after ",(0,s.jsx)(n.code,{children:"chia keys show"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Having a public key that derives from a private key allows us to do interesting things. Specifically, we can sign a message using our private key which can be verified as authentic. Let's read about that more."}),"\n",(0,s.jsx)(n.h2,{id:"intro-to-signatures",children:"Intro to Signatures"}),"\n",(0,s.jsxs)(n.p,{children:["If you wanted to send a message to someone but they wish to have the ability to verify the sender, you can use ",(0,s.jsx)(n.strong,{children:"signatures"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A digital signature allows you to use a private key to sign a message. This message can be verified by a recipient using your public key to verify the message comes from you."}),"\n",(0,s.jsxs)(n.p,{children:["To see this in action, let's sign a message with the master public key. Each key is labeled with a keypath from ",(0,s.jsx)(n.code,{children:"chia keys sign"}),", it resembles ",(0,s.jsx)(n.code,{children:"m/12381/8444/0/0"}),", or just ",(0,s.jsx)(n.code,{children:"m"})," for your master public key."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'chia keys sign --message "hello" --hd_path m\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will then allow you to choose your wallet by fingerprint:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Choose key:\n1) 1660000549\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or, you can pass that in as an additional flag to ",(0,s.jsx)(n.code,{children:"chia keys sign"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'chia keys sign --message "hello" --hd_path m --fingerprint 1660000549\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Public key: b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d\nSignature: 91c3d0504c2c5e02091f92cf0c3f79f2d7350656b0dc554dfc94f7e256b53d415e1a15108e329004ff1c5e91e24b445d18e52b2777e9a01a7a12d7f69a9df30c6fe3c196bdc5aa8072ea23d0edb6422253bb02d560bce721a459e6cf9e847aed\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Public key"})," in this response should match the key shown in ",(0,s.jsx)(n.code,{children:"chia keys show"}),". The second part of this response is the ",(0,s.jsx)(n.strong,{children:"signature"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This signature will be passed along with the message ",(0,s.jsx)(n.code,{children:"hello"})," to whoever we want to see it. The signature can be used to verify the message against your public key without exposing your private key. To verify a message we need:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The signature,"}),"\n",(0,s.jsx)(n.li,{children:"the sender's public key,"}),"\n",(0,s.jsx)(n.li,{children:"the message"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia keys verify --message hello --signature 91c3d0504c2c5e02091f92cf0c3f79f2d7350656b0dc554dfc94f7e256b53d415e1a15108e329004ff1c5e91e24b445d18e52b2777e9a01a7a12d7f69a9df30c6fe3c196bdc5aa8072ea23d0edb6422253bb02d560bce721a459e6cf9e847aed --public_key b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"True\n"})}),"\n",(0,s.jsx)(n.p,{children:"In order for this concept to work, the public key must be known to be the public key of the original sender. When this is the case we can verify that the message came from the original source and that the message has not been altered."}),"\n",(0,s.jsxs)(n.p,{children:["If we change either of these two pieces of information, the signature is no longer valid. The signature only works with the message ",(0,s.jsx)(n.code,{children:"hello"})," and that specific public key."]}),"\n",(0,s.jsx)(n.p,{children:"Now, let's learn about the use of signatures in Chialisp."}),"\n",(0,s.jsx)(n.h2,{id:"verifying-signatures-in-chialisp",children:"Verifying signatures in Chialisp"}),"\n",(0,s.jsxs)(n.p,{children:["One of the available conditions is ",(0,s.jsx)(n.code,{children:"AGG_SIG_ME"}),", which takes a public key and a message to sign."]}),"\n",(0,s.jsxs)(n.p,{children:["The general syntax for this is ",(0,s.jsx)(n.code,{children:"(50 public_key message)"})]}),"\n",(0,s.jsx)(n.p,{children:"Take a look at this example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-chialisp",metastring:"title='signature.clsp'",children:"(mod (PUBLIC_KEY conditions)\n    (include condition_codes.clib)\n    (include sha256tree.clib)\n\n    (c\n        (list AGG_SIG_ME PUBLIC_KEY (sha256tree conditions))\n        conditions\n    )\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We will be introducing a few new things here. The first new thing introduced is ",(0,s.jsx)(n.code,{children:"c"}),", which will combine the new ",(0,s.jsx)(n.code,{children:"AGG_SIG_ME"})," condition with the conditions passed in as a solution."]}),"\n",(0,s.jsx)(n.p,{children:"The other new idea is an include, which allows us to use the names of conditions instead of the numbers."}),"\n",(0,s.jsx)(n.p,{children:"To get these include files, issue the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cdv clsp retrieve sha256tree condition_codes\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's now understand the basic signature requirement.\nThis code expects the public key to be curried, with our ",(0,s.jsx)(n.code,{children:"AGG_SIG_ME"})," condition being set up like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-chialisp",children:"(list AGG_SIG_ME PUBLIC_KEY (sha256tree conditions))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"message"})," in this case is ",(0,s.jsx)(n.code,{children:"Sha256tree conditions"})," which takes the tree hash of our passed in conditions. We put anything in the message we do not want changed by the farmer. We will be using ",(0,s.jsx)(n.code,{children:"sha256tree"})," on the value because you cannot use a list. ",(0,s.jsx)(n.code,{children:"sha256tree"})," gets the tree hash of the conditions."]}),"\n",(0,s.jsxs)(n.p,{children:["By having this as the message of ",(0,s.jsx)(n.code,{children:"AGG_SIG_ME"})," we will be able to prove that the conditions have not been modified (as we are verifying against the public key, similar to ",(0,s.jsx)(n.code,{children:"chia keys verify"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,s.jsx)(n.p,{children:"Let's go through creating this coin and spending it. As we go through this we will need to keep track of a lot of information. It may be helpful to open a text file to keep track."}),"\n",(0,s.jsx)(n.p,{children:"First, let's get our public key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia keys show\n"})}),"\n",(0,s.jsx)(n.p,{children:"The public key response may look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Master public key (m): b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, curry in your public key ",(0,s.jsx)(n.strong,{children:"prefixed with 0x"})," (important). I'll use mine in this example, so be sure to update with the appropriate value!"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv clsp curry signature.clsp -a 0xb8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response (reminder, yours will be different):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-chialisp",children:"(a (q 2 (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 11 ()))) ()))) 11) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0xb8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d) 1))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, use your compiled code to get the serialized version of the code (the puzzle reveal) and the puzzle hash:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'opc "(a (q 2 (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 11 ()))) ()))) 11) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0xb8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d) 1))"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ff02ffff01ff02ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff0bff80808080ff80808080ff0b80ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b0b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954dff018080\n"})}),"\n",(0,s.jsx)(n.p,{children:"That is the puzzle reveal, now for the puzzle hash:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'opc -H "(a (q 2 (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 11 ()))) ()))) 11) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0xb8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d) 1))"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aa0dc6276e519a604dd0a750b8efb53c5d65b55f189cc0ca29d498d45b69a216\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, using this puzzle hash we can encode an address:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv encode --prefix txch aa0dc6276e519a604dd0a750b8efb53c5d65b55f189cc0ca29d498d45b69a216\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"txch14gxuvfmw2xdxqnws5agt3ma483wktd2lrzwvpj3f6jvdgkmf5gtq8g3aw3\n"})}),"\n",(0,s.jsx)(n.p,{children:"Great! Now you have all of the information to create your coin!"}),"\n",(0,s.jsx)(n.h1,{id:"create-a-coin",children:"Create a Coin"}),"\n",(0,s.jsxs)(n.p,{children:["To create a coin we send a certain amount of chia to the address for this Chialisp. The ",(0,s.jsx)(n.code,{children:"amount"})," is up to you, the value used determines the value of this locked-up coin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia wallet send --amount 0.01 --fee 0.00005 --address txch14gxuvfmw2xdxqnws5agt3ma483wktd2lrzwvpj3f6jvdgkmf5gtq8g3aw3\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Transaction submitted to nodes: [{'peer_id': '67095d445d879556da95feeee70174c66b131d4f29bd447df5fbc56789a01f24', 'inclusion_status': 'SUCCESS', 'error_msg': None}]\nRun 'chia wallet get_transaction -f 1660000549 -tx 0x2bf4497e18147f2f857321829c557dfa4e92b7e1dd1a183e423fa1d6697c0a49' to get status\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's get that status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia wallet get_transaction -f 1660000549 -tx 0x2bf4497e18147f2f857321829c557dfa4e92b7e1dd1a183e423fa1d6697c0a49\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Transaction 2bf4497e18147f2f857321829c557dfa4e92b7e1dd1a183e423fa1d6697c0a49\nStatus: In mempool\nAmount sent: 0.01 TXCH\nTo address: txch14gxuvfmw2xdxqnws5agt3ma483wktd2lrzwvpj3f6jvdgkmf5gtq8g3aw3\nCreated at: 2022-10-30 03:19:22\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Eventually, ",(0,s.jsx)(n.code,{children:"Status: in mempool"})," will change to ",(0,s.jsx)(n.code,{children:"Status: Confirmed"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"spending-the-coin",children:"Spending the coin"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we created the coin we can start to craft a spend bundle. Build this outline in a ",(0,s.jsx)(n.code,{children:"spendbundle.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "coin_spends": [\n        {\n            "coin": {\n                "amount": 10000000000,\n                "parent_coin_info": "",\n                "puzzle_hash": ""\n            },\n            "puzzle_reveal": "",\n            "solution": ""\n        }\n    ],\n    "aggregated_signature": ""\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's figure out the ",(0,s.jsx)(n.code,{children:"coin"}),", ",(0,s.jsx)(n.code,{children:"puzzle_reveal"})," (calculated earlier), ",(0,s.jsx)(n.code,{children:"solution"}),", and ",(0,s.jsx)(n.code,{children:"aggregated_signature"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Once this transaction is confirmed, we can retrieve the coin info needed to craft a spend bundle. To do this, we will need to use the puzzle hash we calculated earlier."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv rpc coinrecords --by puzzlehash aa0dc6276e519a604dd0a750b8efb53c5d65b55f189cc0ca29d498d45b69a216\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "coin": {\n            "amount": 10000000000,\n            "parent_coin_info": "0x2ae27f44c228eeb9b16eb3f878c51e5bc468009eea79fce976e9d0a25b0e2b85",\n            "puzzle_hash": "0xaa0dc6276e519a604dd0a750b8efb53c5d65b55f189cc0ca29d498d45b69a216"\n        },\n        "coinbase": false,\n        "confirmed_block_index": 321848,\n        "spent_block_index": 0,\n        "timestamp": 1667114401\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You will only need the ",(0,s.jsx)(n.code,{children:"coin"})," object from this response."]}),"\n",(0,s.jsxs)(n.p,{children:["Again, you can calculate the puzzle reveal with ",(0,s.jsx)(n.code,{children:"opc"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'opc "(a (q 2 (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 11 ()))) ()))) 11) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0xb8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d) 1))"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ff02ffff01ff02ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff0bff80808080ff80808080ff0b80ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b0b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954dff018080\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's take a moment to craft a solution."}),"\n",(0,s.jsx)(n.h2,{id:"build-a-solution",children:"Build a Solution"}),"\n",(0,s.jsxs)(n.p,{children:["The solution for this puzzle requires us to provide a list of conditions. This is how we control what happens with the coin. We will continue to use ",(0,s.jsx)(n.code,{children:"51 (CREATE_COIN)"})," which requires a puzzle hash for where to send the coin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia wallet get_address\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"txch1nmntlv7nwvkx37llrlxwjmazd2url7x9wdhw6fww4lj8edr4pafsh0y5l5\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv decode txch1nmntlv7nwvkx37llrlxwjmazd2url7x9wdhw6fww4lj8edr4pafsh0y5l5\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"9ee6bfb3d3732c68fbff1fcce96fa26ab83ff8c5736eed25ceafe47cb4750f53\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, craft the complete solution, ",(0,s.jsx)(n.strong,{children:"make sure to prefix with 0x for your puzzle hash (important)"})]}),"\n",(0,s.jsx)(n.h1,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'opc "(((51 0x9ee6bfb3d3732c68fbff1fcce96fa26ab83ff8c5736eed25ceafe47cb4750f53 9950000000)))"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ffffff33ffa09ee6bfb3d3732c68fbff1fcce96fa26ab83ff8c5736eed25ceafe47cb4750f53ff85025110f380808080\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, the difference between the coin value and the value used in ",(0,s.jsx)(n.code,{children:"CREATE_COIN"})," goes to the farmer as a fee."]}),"\n",(0,s.jsx)(n.h2,{id:"signing-a-message",children:"Signing a Message"}),"\n",(0,s.jsxs)(n.p,{children:["The expected message for our signature is the tree hash of our conditions (from our chialisp code ",(0,s.jsx)(n.code,{children:"(list AGG_SIG_ME PUBLIC_KEY (sha256tree conditions))"}),"). For this to work, we must first get the conditions tree hash."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["We are not calculating the tree hash for the entire solution, just the ",(0,s.jsx)(n.code,{children:"CREATE_COIN"}),", so make sure you get the parenthesis right."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'opc -H "((51 0x9ee6bfb3d3732c68fbff1fcce96fa26ab83ff8c5736eed25ceafe47cb4750f53 9950000000))"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"d96954e94653367e85bee3195b8a8f4a6470626e51ba10a96fc24d0e8bcdd7c1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To sign the message we will actually need the ",(0,s.jsx)(n.code,{children:"coin_id"})," and the genesis challenge."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Genesis Challenge?",type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AGG_SIG_ME"})," requires multiple pieces of information as to prevent reusable signatures. One of these things is the genesis challenge, which is a different value for every network. You will find this information from ",(0,s.jsx)(n.code,{children:"chia show -s"})," or in the ",(0,s.jsx)(n.code,{children:"config.yaml"})," file of your chia configuration."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"less ~/.chia/mainnet/config/config.yaml\n"})}),(0,s.jsxs)(n.p,{children:["and then search for ",(0,s.jsx)(n.code,{children:"genesis_challenge"}),", picking the one for the appropriate network (such as testnet10). The value will be a hex string such as ",(0,s.jsx)(n.code,{children:"ae83525ba8d1dd3f09b277de18ca3e43fc0af20d20c4b3e92ef2a48bd291ccb2"})," (that is the value for testnet10)."]})]}),"\n",(0,s.jsx)(n.h2,{id:"get-coin-id",children:"Get Coin Id"}),"\n",(0,s.jsx)(n.p,{children:"The coin ID is actually the hash of the parent coin info, the coin puzzle hash, and the amount."}),"\n",(0,s.jsxs)(n.p,{children:["One way to get the coin ID is to retrieve a coin through ",(0,s.jsx)(n.code,{children:"cdv inspect"}),". This will take the parent ID, your coin's puzzle hash, and the amount."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv inspect -id coins --parent-id 0x2ae27f44c228eeb9b16eb3f878c51e5bc468009eea79fce976e9d0a25b0e2b85 --puzzle-hash 0xaa0dc6276e519a604dd0a750b8efb53c5d65b55f189cc0ca29d498d45b69a216 --amount 10000000000\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"['43ab980558015de0d255b7eadf763feb9de22233bcdfde22b1c2823dfa2a53b5']\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, we can use our coin ID to craft a message."}),"\n",(0,s.jsx)(n.h1,{id:"concatenate-message",children:"Concatenate Message"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AGG_SIG_ME"})," expects the concatenation of the conditions tree hash, coin ID, and the genesis challenge."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'run "(concat 0xd96954e94653367e85bee3195b8a8f4a6470626e51ba10a96fc24d0e8bcdd7c1 0x43ab980558015de0d255b7eadf763feb9de22233bcdfde22b1c2823dfa2a53b5 0xd25b25b897564035695996922aa0f9ff9d611bd38cd2ecd0d2383a99a70dfc15)"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0xd96954e94653367e85bee3195b8a8f4a6470626e51ba10a96fc24d0e8bcdd7c143ab980558015de0d255b7eadf763feb9de22233bcdfde22b1c2823dfa2a53b5d25b25b897564035695996922aa0f9ff9d611bd38cd2ecd0d2383a99a70dfc15\n"})}),"\n",(0,s.jsx)(n.h1,{id:"sign-message",children:"Sign Message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia keys sign --as-bytes --message d96954e94653367e85bee3195b8a8f4a6470626e51ba10a96fc24d0e8bcdd7c143ab980558015de0d255b7eadf763feb9de22233bcdfde22b1c2823dfa2a53b5d25b25b897564035695996922aa0f9ff9d611bd38cd2ecd0d2383a99a70dfc15 --hd_path m\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"You will actually want to take the 0x off this time."})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Public key: b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954d\nSignature: a3994dc9c0ef41a903d3335f0afe42ba16c88e7881706798492da4a1653cd10c69c841eeb56f44ae005e2bad27fb7ebb16ce8bbfbd708ea91dd4ff24f030497b50e694a8270eccd07dbc206b8ffe0c34a9ea81291785299fae8206a1e1bbc1d1\n"})}),"\n",(0,s.jsx)(n.h1,{id:"the-spend-bundle",children:"The Spend Bundle"}),"\n",(0,s.jsx)(n.p,{children:"Using the gathered info thus far, we can craft our spend bundle:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "coin_spends": [\n        {\n            "coin": {\n                "amount": 10000000000,\n                "parent_coin_info": "0x2ae27f44c228eeb9b16eb3f878c51e5bc468009eea79fce976e9d0a25b0e2b85",\n                "puzzle_hash": "0xaa0dc6276e519a604dd0a750b8efb53c5d65b55f189cc0ca29d498d45b69a216"\n            },\n            "puzzle_reveal": "ff02ffff01ff02ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff0bff80808080ff80808080ff0b80ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b0b8f7dd239557ff8c49d338f89ac1a258a863fa52cd0a502e3aaae4b6738ba39ac8d982215aa3fa16bc5f8cb7e44b954dff018080",\n            "solution": "ffffff33ffa09ee6bfb3d3732c68fbff1fcce96fa26ab83ff8c5736eed25ceafe47cb4750f53ff85025110f380808080"\n        }\n    ],\n    "aggregated_signature": "a3994dc9c0ef41a903d3335f0afe42ba16c88e7881706798492da4a1653cd10c69c841eeb56f44ae005e2bad27fb7ebb16ce8bbfbd708ea91dd4ff24f030497b50e694a8270eccd07dbc206b8ffe0c34a9ea81291785299fae8206a1e1bbc1d1"\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv rpc pushtx spendbundle.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "status": "SUCCESS",\n    "success": true\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you have an incorrect signature, you'll get a message like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"(\"{'error': 'Failed to include transaction \"\n '93247303fe92bf8c25459b912e5ea01bc13c5a59f876ad673e8455487a1056eb, error '\n \"BAD_AGGREGATE_SIGNATURE', 'success': False}\")\n"})}),"\n",(0,s.jsx)(n.p,{children:"If this is the case, you'll want to double check your signing message. You can also try the debug command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cdv inspect spendbundles spendbundle.json --debug\n"})}),"\n",(0,s.jsx)(n.p,{children:"Congratulations, you now have a working understanding of signatures!"})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>f,a:()=>d});var s=a(7294);const c={},i=s.createContext(c);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function f(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);