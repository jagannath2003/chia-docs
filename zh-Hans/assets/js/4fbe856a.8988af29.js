"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6666],{3131:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=a(5893),i=a(1151);a(4866),a(5162);const s={slug:"/guides/clawback-user-guide",title:"Clawback User Guide"},c=void 0,l={id:"guides/clawback/clawback-user-guide",title:"Clawback User Guide",description:"Intro",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/clawback/clawback-user-guide.md",sourceDirName:"guides/clawback",slug:"/guides/clawback-user-guide",permalink:"/zh-Hans/guides/clawback-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/clawback/clawback-user-guide.md",tags:[],version:"current",frontMatter:{slug:"/guides/clawback-user-guide",title:"Clawback User Guide"},sidebar:"guides",previous:{title:"Clawback",permalink:"/zh-Hans/guides/clawback-developer-guide"},next:{title:"\u53ef\u64a4\u56de\u4ea4\u6613\u539f\u8bed\u4f7f\u7528\u6307\u5357",permalink:"/zh-Hans/guides/clawback-primitive-guide"}},r={},o=[{value:"Intro",id:"intro",level:2},{value:"Explanation",id:"explanation",level:2},{value:"GUI",id:"gui",level:2},{value:"Review Settings",id:"review-settings",level:3},{value:"Clawback",id:"clawback",level:3},{value:"Claim",id:"claim",level:3},{value:"CLI",id:"cli",level:2},{value:"Clawback",id:"clawback-1",level:3},{value:"Claim",id:"claim-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsxs)(n.p,{children:["This document is a guide for using the clawback functionality introduced in version 1.8.2 of Chia's reference wallet. This document is a guide for using the clawback functionality introduced in version 1.8.2 of Chia's reference wallet. ",(0,t.jsx)(n.em,{children:"Clawback"})," is a new feature that offers protection against sending XCH to the wrong address."]}),"\n",(0,t.jsx)(n.p,{children:"If you are a developer or a CLI user, see the following resources for more info:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/guides/clawback-primitive-guide",children:"Clawback Standalone Primitive Guide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/clawback-cli",children:"Clawback Standalone Primitive CLI Reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=_pC38ulU2js",children:"Youtube video explaining clawback"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In order to use Chia clawbacks, you must have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Version 1.8.2 or later of Chia's reference light wallet or full node. See our ",(0,t.jsx)(n.a,{href:"https://www.chia.net/downloads/",children:"downloads page"})," to obtain a copy. See our ",(0,t.jsx)(n.a,{href:"https://www.chia.net/downloads/",children:"downloads page"})," to obtain a copy."]}),"\n",(0,t.jsxs)(n.li,{children:["A sufficient amount of XCH or TXCH to send a transaction and pay fees. A sufficient amount of XCH or TXCH to send a transaction and pay fees. If you do not have a sufficient amount, you can obtain some from our ",(0,t.jsx)(n.a,{href:"https://faucet.chia.net/",children:"mainnet"})," and ",(0,t.jsx)(n.a,{href:"https://testnet10-faucet.chia.net/",children:"testnet"})," faucets."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Clawback"})," allows the sender of XCH to return funds to their wallet during a fixed window of time before the transaction can be completed."]}),"\n",(0,t.jsx)(n.p,{children:"The following demonstrates an example workflow of this process:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The sender sets up a 1-XCH transaction to the receiver's wallet, and adds a 10-minute clawback"}),"\n",(0,t.jsx)(n.li,{children:"Instead of being sent directly to the receiver's wallet, the 1 XCH is sent to an intermediate location (see below for an explanation)"}),"\n",(0,t.jsxs)(n.li,{children:["For the next 10 minutes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The sender and receiver both see the pending 1-XCH transaction in their wallets"}),"\n",(0,t.jsxs)(n.li,{children:["The sender can choose to return the 1 XCH to his/her wallet (this is a ",(0,t.jsx)(n.em,{children:"clawback"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"The receiver cannot yet claim the money"}),"\n",(0,t.jsxs)(n.li,{children:["The sender and receiver could communicate off-chain. The sender and receiver could communicate off-chain. For example, the sender could call the receiver and ask if the pending transaction appears in their wallet.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If yes, then both parties can be confident that the money was sent to the correct address"}),"\n",(0,t.jsx)(n.li,{children:"If no, then the money was sent to an incorrect address, so the sender will claw it back"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"After 10 minutes, if the sender has not clawed the 1 XCH back, the receiver can claim it"}),"\n",(0,t.jsx)(n.li,{children:"After the receiver has claimed the money, it appears in both wallets as a normal transaction. At this point, the transaction is complete; clawback is no longer possible At this point, the transaction is final. It can no longer be clawed back."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The "intermediate location" is actually a coin with two rules:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Before a certain timestamp, only the sender can spend the coin"}),"\n",(0,t.jsx)(n.li,{children:"After the timestamp, the receiver can also spend the coin"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Nobody else is allowed to spend the coin. It is not held in escrow by any third parties. It is a decentralized solution, created in Chialisp, that is one of many potential custody options in Chia."}),"\n",(0,t.jsx)(n.p,{children:"This guide will show you how to perform the above workflow."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"gui",children:"GUI"}),"\n",(0,t.jsx)(n.h3,{id:"review-settings",children:"Review Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Before initiating a clawback transaction, it's a good idea to review your wallet's settings. Click ",(0,t.jsx)(n.code,{children:"Settings"})," (the gear icon in the lower-left corner of your wallet) and click the ",(0,t.jsx)(n.code,{children:"CUSTODY"})," menu. Click ",(0,t.jsx)(n.code,{children:"Settings"})," (the gear icon in the lower-left corner of your wallet) and click the ",(0,t.jsx)(n.code,{children:"CUSTODY"})," menu."]}),"\n",(0,t.jsx)(n.p,{children:"From this menu:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Sender wallet can enable clawback for all outgoing transactions"}),"\n",(0,t.jsx)(n.li,{children:"The Receiver wallet can automatically claim all clawback transactions by adding a default transaction fee"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For this tutorial, both of these settings will be disabled:"}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/01.png",alt:"Configure default settings"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clawback",children:"Clawback"}),"\n",(0,t.jsx)(n.p,{children:"This section will show you how to initiate a transaction and claw it back."}),"\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.code,{children:"SEND"})," menu as shown below, enter the recipient's address, the amount to send, and an optional blockchain fee."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prior to initiating the transaction, the sender's wallet from this example contained 5 TXCH. The amount to be sent was 1 TXCH. The amount to be sent was 1 TXCH."}),"\n",(0,t.jsx)(n.li,{children:"This example was executed on Chia's testnet, which has higher fee requirements than mainnet. For this reason, a large fee of 100 million mojos was added. For this reason, a large fee of 100 million mojos was added."}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["After you have entered these parameters, click the dropdown for ",(0,t.jsx)(n.code,{children:"Add option to claw back transaction"}),"."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/02.png",alt:"Send XCH"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Add the time (days, minutes, hours) during which the transaction will be able to be clawed back. In this case, we'll use 10 minutes. In this case, we'll use 10 minutes."}),"\n",(0,t.jsxs)(n.p,{children:["Optionally add a memo to describe this transaction, and click ",(0,t.jsx)(n.code,{children:"SEND"}),"."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/03.png",alt:"Set 10-minute clawback"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["The transaction has been added to the mempool. This means that it is still in the ",(0,t.jsx)(n.code,{children:"Pending"})," state for inclusion on the blockchain. The transaction has been added to the mempool. This means that it is still in the ",(0,t.jsx)(n.code,{children:"Pending"})," state for inclusion on the blockchain. At this point, there is no indication in the GUI that this is a clawback transaction."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/04.png",alt:"Wait for pending transaction"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Eventually the clawback transaction will be confirmed on the blockchain. Note that the average time between transaction blocks is 52 seconds. Depending on how busy the mempool is, as well as the size of the included fee, confirmation could take much longer. Note that the average time between transaction blocks is 52 seconds. Depending on how busy the mempool is, as well as the size of the included fee, confirmation could take much longer."}),"\n",(0,t.jsxs)(n.p,{children:["After the transaction has been confirmed, a green ",(0,t.jsx)(n.code,{children:"CLAW BACK THIS TRANSACTION"})," button will appear. This means that the recipient can also see this transaction, but has yet to claim it. While the transaction is in this state, you can claw it back by clicking the button, which will be demonstrated next. This means that the recipient can also see this transaction, but has yet to claim it. While the transaction is in this state, you can claw it back by clicking the button, which will be demonstrated next."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/05.png",alt:"Claw back the transaction"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"clawback"})," action requires another on-chain transaction. The ",(0,t.jsx)(n.code,{children:"clawback"})," action requires another on-chain transaction. Enter a transaction fee and click ",(0,t.jsx)(n.code,{children:"CLAW BACK TRANSACTION"})," to claw it back."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/06.png",alt:"Add fee and claw back"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Just like the original transaction, the clawback will require some time to be confirmed on the blockchain."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/07.png",alt:"Wait for funds to be returned"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"After the clawback has been confirmed, the pending amount is returned to the sender's wallet."}),"\n",(0,t.jsx)(n.p,{children:"In this example, the wallet started with 5 TXCH. Because of the two transaction fees, it now contains 4.9998 TXCH. Because of the two transaction fees, it now contains 4.9998 TXCH."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/08.png",alt:"Two tx fees have been withdrawn"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:'At this point, the transaction is final. At this point, the transaction is final. The sender has the same amount of XCH they started with, minus the two transaction fees. Due to the clawback, the original "receiver" did not receive anything. Due to the clawback, the original "receiver" did not receive anything.'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"claim",children:"Claim"}),"\n",(0,t.jsx)(n.p,{children:"This section will show you how to initiate a clawback transaction from the sender's wallet, and claim the transaction from the receiver's wallet."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"To avoid confusion, the sender's wallet in this example uses a light theme, and the receiver's wallet uses a dark theme."})}),"\n",(0,t.jsx)(n.p,{children:"Just like before, start by creating a new transaction and adding a clawback time and an optional memo. We'll use 10 minutes in this example. We'll use 10 minutes in this example."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/09.png",alt:"Send a new clawback tx"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["After the initial transaction has been confirmed on the blockchain, the green ",(0,t.jsx)(n.code,{children:"CLAW BACK THIS TRANSACTION"})," button will appear in the sender's wallet."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/10.png",alt:"Wait for confirmation"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"The receiver's wallet will show a pending transaction, including the value, the amount of time before the transaction can be claimed, and the included memo."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["While the transaction is in this state, it does not show up in any of the ",(0,t.jsx)(n.code,{children:"Balance"})," fields in the receiver's wallet. This is because the sender can still claw it back. The receiver should therefore not assume the amount will eventually be claimed. This is because the sender can still claw it back. The receiver should therefore not assume the amount will eventually be claimed."]}),"\n",(0,t.jsx)(n.li,{children:"The timer showing how long until the transaction can be claimed does not begin counting down until the original transaction is confirmed on the blockchain."}),"\n"]})}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/11.png",alt:"Can claim in nine minutes"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:['After the timer has expired, the receiver can claim the transaction. However, in this example, "auto claim" was disabled. After the timer has expired, the receiver can claim the transaction. However, in this example, "auto claim" was disabled. Therefore, ',(0,t.jsx)(n.strong,{children:"the sender can still claw back the transaction, even though the timer has expired"}),'. For this reason, it is a good idea for the receiver to enable "auto claim". For this reason, it is a good idea for the receiver to enable "auto claim".']}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/12.png",alt:"Claw back still possible"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:['If "auto claim" is disabled (as in this example), the receiver needs to click ',(0,t.jsx)(n.code,{children:"CLAIM TRANSACTION"})," after the timer has expired."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/13.png",alt:"Claim the transaction"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Enter a transaction fee and optionally click the ",(0,t.jsx)(n.code,{children:"Auto-claim"})," checkbox if desired. Finally, click ",(0,t.jsx)(n.code,{children:"CLAIM TRANSACTION"}),". Finally, click ",(0,t.jsx)(n.code,{children:"CLAIM TRANSACTION"}),"."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/14.png",alt:"Add fee and auto-claim"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["At this point, the ",(0,t.jsx)(n.code,{children:"claim"})," has been submitted to the mempool, but it has yet to be confirmed on chain. As stated previously, the amount of time before the transaction is completed depends on the mempool and the fee. As stated previously, the amount of time before the transaction is completed depends on the mempool and the fee."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/15.png",alt:"Wait for pending claim tx"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["After the claim transaction has completed, it will appear as a normal transaction in the receiver's wallet. It will also appear in the ",(0,t.jsx)(n.code,{children:"Total Balance"})," box. It will also appear in the ",(0,t.jsx)(n.code,{children:"Total Balance"})," box."]}),"\n",(0,t.jsx)(n.p,{children:"At this point, the transaction is final. It can no longer be clawed back."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("img",{src:"/img/clawback/16.png",alt:"Claim is complete"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,t.jsx)(n.p,{children:"The detailed documentation for the clawback CLI commands can be found in the following locations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/wallet-cli#clawback",children:"clawback"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/wallet-cli#get_transactions",children:"get_transactions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/wallet-cli#send-1",children:"send"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"clawback-1",children:"Clawback"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create the clawback spend. Create the clawback spend. This step uses a normal ",(0,t.jsx)(n.code,{children:"send"})," command, with an extra ",(0,t.jsx)(n.code,{children:"--clawback"})," timer:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'chia wallet send -f 4045726944 -a 1 -e "Sending 1 TXCH with 1-hour clawback" -m 0.0001 -t txch1pxam7zakgqfcfr0xm8xcemm76d637w6sg0l7j8h6gv7rdlf8cfxs326mze --clawback_time 3600\n'})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Submitting transaction...\nSubmitting transaction...\nTransaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]\nRun 'chia wallet get_transaction -f 4045726944 -tx 0x5a41dbe755a7a44b827b61cfa384e79bef5f79370f63fa7ffe1ea29212a26bf6' to get status\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"After the above transaction has been confirmed on-chain, obtain the ID for the clawback transaction:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chia wallet get_transactions -f 4045726944 -l 1 --clawback\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Transaction 0661d157b33597c33e5dc2027f07a1f0cbdc72fa950ca9617e08af326ceb7c81\nStatus: Pending\nAmount received in clawback as sender: 1 TXCH\nTo address: txch1pxam7zakgqfcfr0xm8xcemm76d637w6sg0l7j8h6gv7rdlf8cfxs326mze\nCreated at: 2023-06-14 13:14:16\nRecipient claimable time: 2023-06-14 14:14:16\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Next, claw back the transaction (this must be done before the recipient claims it):"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chia wallet clawback -f 4045726944 -ids 0661d157b33597c33e5dc2027f07a1f0cbdc72fa950ca9617e08af326ceb7c81 -m 0.0001\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{'success': True, 'transaction_ids': ['a8295c3924a8ad079093995d3129a38e26faa01ffca175572d21881865dc48ff']}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Finally, show the clawback transaction to verify that it was confirmed:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chia wallet get_transaction -f 4045726944 -tx 0xa8295c3924a8ad079093995d3129a38e26faa01ffca175572d21881865dc48ff\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Transaction a8295c3924a8ad079093995d3129a38e26faa01ffca175572d21881865dc48ff\nStatus: Confirmed\nAmount claim/clawback: 1 TXCH\nTo address: txch1dmdj4ee0ss3m7zunaymz47kdejv2pfwxdhcdjh6zffg935yqmvlsqpvvjq\nCreated at: 2023-06-14 13:17:33\n"})}),"\n",(0,t.jsx)(n.h3,{id:"claim-1",children:"Claim"}),"\n",(0,t.jsx)(n.p,{children:"The process to claim a clawback transaction is similar to the clawback process, except the receiver wallet must perform the claim."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Set up a clawback send transaction with a 60-second clawback window:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'chia wallet send -f 4045726944 -a 1 -e "Sending 1 TXCH with 60-second clawback" -m 0.0001 -t txch1pxam7zakgqfcfr0xm8xcemm76d637w6sg0l7j8h6gv7rdlf8cfxs326mze --clawback_time 60\n'})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Submitting transaction...\nSubmitting transaction...\nTr0ansaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]\nRun 'chia wallet get_transaction -f 4045726944 -tx 0x3ca82042aba188d47a80b663523847fa6050a21e04647c7b31ad3aa9d8d5450f' to get status\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Get the status of the latest clawback transaction:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chia wallet get_transactions -f 4045726944 -l 1 --clawback\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Transaction d4d29b6381e4248fc7361abb900a154e14d3120f6ecc01e7aaccaf9d984ed2f3\nStatus: Pending\nAmount received in clawback as sender: 1 TXCH\nTo address: txch1pxam7zakgqfcfr0xm8xcemm76d637w6sg0l7j8h6gv7rdlf8cfxs326mze\nCreated at: 2023-06-14 13:28:38\nRecipient claimable time: 2023-06-14 13:29:38\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"From the receiver's wallet, claim the transaction after the claimable time has elapsed:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chia wallet clawback -f 2457176934 -ids d4d29b6381e4248fc7361abb900a154e14d3120f6ecc01e7aaccaf9d984ed2f3 -m 0.0001\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{'success': True, 'transaction_ids': ['e969bb32b4b01e2c14f67c9d6c467645779c1898d08eb4e041c937f4ba3fe9cb']}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Finally, show the last transaction's status:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chia wallet get_transaction -f 2457176934 -tx 0xe969bb32b4b01e2c14f67c9d6c467645779c1898d08eb4e041c937f4ba3fe9cb\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Transaction e969bb32b4b01e2c14f67c9d6c467645779c1898d08eb4e041c937f4ba3fe9cb\nStatus: Confirmed\nAmount claim/clawback: 1 TXCH\nTo address: txch1pxam7zakgqfcfr0xm8xcemm76d637w6sg0l7j8h6gv7rdlf8cfxs326mze\nCreated at: 2023-06-14 13:33:10\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>c});a(7294);var t=a(512);const i={tabItem:"tabItem_Ymn6"};var s=a(5893);function c(e){let{children:n,hidden:a,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,c),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>v});var t=a(7294),i=a(512),s=a(2466),c=a(6550),l=a(469),r=a(1980),o=a(7392),d=a(812);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const i=(0,c.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,r._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,s=u(e),[c,r]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,h]=b({queryString:a,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(a);return[i,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:i}),w=(()=>{const e=o??x;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{w&&r(w)}),[w]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=a(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=a(5893);function g(e){let{className:n,block:a,selectedValue:t,selectValue:c,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=r.indexOf(n),i=l[a].value;i!==t&&(o(n),c(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=r.indexOf(e.currentTarget)+1;n=r[a]??r[0];break}case"ArrowLeft":{const a=r.indexOf(e.currentTarget)-1;n=r[a]??r[r.length-1];break}}n?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>r.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=x(e);return(0,p.jsxs)("div",{className:(0,i.Z)("tabs-container",w.tabList),children:[(0,p.jsx)(g,{...n,...e}),(0,p.jsx)(j,{...n,...e})]})}function v(e){const n=(0,f.Z)();return(0,p.jsx)(k,{...e,children:h(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>c});var t=a(7294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);