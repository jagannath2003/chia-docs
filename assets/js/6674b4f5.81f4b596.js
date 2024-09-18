"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8687],{46:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(4848),i=s(8453);const o={slug:"/guides/crash-course/state",title:"State"},a=void 0,r={id:"guides/crash-course/state",title:"State",description:"Coin Set Refresher",source:"@site/docs/guides/crash-course/state.md",sourceDirName:"guides/crash-course",slug:"/guides/crash-course/state",permalink:"/guides/crash-course/state",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/crash-course/state.md",tags:[],version:"current",frontMatter:{slug:"/guides/crash-course/state",title:"State"},sidebar:"guides",previous:{title:"Signatures",permalink:"/guides/crash-course/signatures"},next:{title:"Inner Puzzles",permalink:"/guides/crash-course/inner-puzzles"}},c={},l=[{value:"Coin Set Refresher",id:"coin-set-refresher",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"State in Chialisp",id:"state-in-chialisp",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Initializing the Coin",id:"initializing-the-coin",level:2},{value:"Retrieving the Message",id:"retrieving-the-message",level:2},{value:"Updating the Message",id:"updating-the-message",level:2},{value:"Breakdown",id:"breakdown",level:3},{value:"Updated Message",id:"updated-message",level:3},{value:"Shared Messages",id:"shared-messages",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"coin-set-refresher",children:"Coin Set Refresher"}),"\n",(0,t.jsxs)(n.p,{children:["Before we jump in to the bulk of this lesson I wanted to remind you of how the Chia blockchain works. Chia uses a ",(0,t.jsx)(n.strong,{children:"coin set"})," model very similar to that of Bitcoin's UTXO model. This is very different than the account model used in other major chains. Instead of having an account with a ",(0,t.jsx)(n.em,{children:"balance"}),", you just have a collection of unspent coins that you are able to spend."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Coin 1: 0.25 XCH"}),"\n",(0,t.jsx)(n.li,{children:"Coin 2: 1.75 XCH"}),"\n",(0,t.jsx)(n.li,{children:"Coin 3: 0.25 XCH"}),"\n",(0,t.jsx)(n.li,{children:"Coin 4: 1.75 XCH"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Balance: 4 XCH"}),"\n",(0,t.jsx)(n.p,{children:'You will often hear "everything is a coin" being said. This is true!'}),"\n",(0,t.jsx)(n.p,{children:"This introduces some unique approaches to creating software on the Chia blockchain."}),"\n",(0,t.jsx)(n.p,{children:"To use Chialisp on the Chia blockchain, we must create a coin. As part of the coin set model, spending a coin results in a collection of removals and additions. The removals are your existing coins used for the spend being destroyed, and the additions are new coins (including any change) being created."}),"\n",(0,t.jsx)(n.p,{children:"Here is an example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Say you have 1.75 XCH"}),"\n",(0,t.jsx)(n.li,{children:"You send .75 XCH to some address (remember, an address is an encoded form of puzzle hash)"}),"\n",(0,t.jsx)(n.li,{children:"This results in all 1.75 of your XCH being spent"}),"\n",(0,t.jsx)(n.li,{children:"a new coin worth 1 XCH is created to be returned back to you (this is called change)"}),"\n",(0,t.jsx)(n.li,{children:"a new coin worth .75 XCH is created for the destination puzzle hash"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Another example:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Say you have 2 XCH made up of multiple small coins"}),"\n",(0,t.jsx)(n.li,{children:"You send 1 XCH to some address"}),"\n",(0,t.jsx)(n.li,{children:"Coins of .1 XCH, .5 XCH, and .45 XCH are being spent to sum up to 1.05 XCH (greater than or equal to 1 XCH spend)"}),"\n",(0,t.jsx)(n.li,{children:"a new coin worth .05 XCH is created to be returned back to you"}),"\n",(0,t.jsx)(n.li,{children:"a new coin worth 1 XCH is created for the destination puzzle hash"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,t.jsxs)(n.p,{children:["We will be building a simple example of a coin that stores a message that anyone can change by spending the coin. This will be built using the previous lesson's project setup, but you can find all of ",(0,t.jsx)(n.code,{children:"index.ts"})," here:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"index.ts"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { mnemonicToSeedSync } from "bip39";\nimport { fromHex, PrivateKey, toHex } from "chia-bls";\nimport { Coin, formatHex, FullNode, sanitizeHex, toCoinId } from "chia-rpc";\nimport { KeyStore, StandardWallet } from "chia-wallet-lib";\nimport { Program } from "clvm-lib";\nimport dotenv from "dotenv";\nimport fs from "fs";\nimport os from "os";\nimport path from "path";\n\ndotenv.config();\n\nconst mnemonic = process.env.MNEMONIC!;\nconst privateKey = PrivateKey.fromSeed(mnemonicToSeedSync(mnemonic));\n\nconst dir = path.join(__dirname, "..");\n\nconst messagePuzzle = Program.deserializeHex(\n  fs.readFileSync(path.join(dir, "message.clsp.hex"), "utf-8"),\n);\n\nconst node = new FullNode(os.homedir() + "/.chia/mainnet");\nconst keyStore = new KeyStore(privateKey);\n\nconst wallet = new StandardWallet(node, keyStore);\nconst genesis = fromHex(process.env.GENESIS!);\n\nconst amount = 1;\nconst fee = 0.00005e12;\n\nasync function newInstance(initialMessage: Program) {\n  await wallet.sync();\n\n  const spend = wallet.createSpend();\n\n  // Curry the puzzle\n  const puzzle = messagePuzzle.curry([\n    // Mod hash\n    Program.fromBytes(messagePuzzle.hash()),\n\n    // Message is empty until the eve is spent\n    Program.nil,\n  ]);\n\n  // Create the eve coin\n  const send = await wallet.send(puzzle.hash(), amount, fee);\n  spend.coin_spends.push(...send);\n\n  // Calculate the root coin id\n  const eveCoin: Coin = {\n    parent_coin_info: formatHex(toHex(toCoinId(send[0].coin))),\n    puzzle_hash: formatHex(puzzle.hashHex()),\n    amount,\n  };\n\n  // Create the eve solution\n  const solution = Program.fromList([\n    // Message\n    initialMessage,\n\n    // Amount\n    Program.fromInt(amount),\n  ]);\n\n  // Spend the eve coin\n  spend.coin_spends.push({\n    coin: eveCoin,\n    puzzle_reveal: puzzle.serializeHex(),\n    solution: solution.serializeHex(),\n  });\n\n  // Sign the wallet spend\n  wallet.signSpend(spend, genesis);\n\n  // Complete the transaction\n  console.log("Eve coin id:", toHex(toCoinId(eveCoin)));\n  console.log(await node.pushTx(spend));\n}\n\ninterface SyncInfo {\n  parent: string;\n  current: string;\n}\n\nasync function sync(): Promise<SyncInfo> {\n  const eveCoinId = process.env.EVE_COIN_ID!;\n\n  let current = eveCoinId;\n  let parent = current;\n\n  while (true) {\n    // Fetch coins created by the current coin\n    const coinRecords = await node.getCoinRecordsByParentIds(\n      [current],\n      undefined,\n      undefined,\n      true,\n    );\n    if (!coinRecords.success) throw new Error(coinRecords.error);\n\n    // If there are none, we are already synced\n    if (!coinRecords.coin_records.length) break;\n\n    // Update the parent\n    parent = current;\n\n    // Continue with the child coin as the new singleton\n    const coinRecord = coinRecords.coin_records[0];\n    current = toHex(toCoinId(coinRecord.coin));\n  }\n\n  return {\n    parent,\n    current,\n  };\n}\n\nasync function getMessage(syncInfo: SyncInfo): Promise<Program> {\n  const coinRecord = await node.getCoinRecordByName(syncInfo.parent);\n  if (!coinRecord.success) throw new Error(coinRecord.error);\n\n  const puzzleAndSolution = await node.getPuzzleAndSolution(\n    syncInfo.parent,\n    coinRecord.coin_record.spent_block_index,\n  );\n  if (!puzzleAndSolution.success) throw new Error(puzzleAndSolution.error);\n\n  const spend = puzzleAndSolution.coin_solution;\n\n  const solution = Program.deserializeHex(sanitizeHex(spend.solution)).toList();\n\n  return solution[0];\n}\n\nasync function printMessage() {\n  const syncInfo = await sync();\n  const message = await getMessage(syncInfo);\n  console.log("Message:", message.toString());\n}\n\nasync function setMessage(newMessage: Program) {\n  await wallet.sync();\n\n  const syncInfo = await sync();\n  const message = await getMessage(syncInfo);\n\n  // Fetch the coin record\n  const coinRecord = await node.getCoinRecordByName(syncInfo.current);\n  if (!coinRecord.success) throw new Error(coinRecord.error);\n\n  const coin = coinRecord.coin_record.coin;\n\n  const spend = wallet.createSpend();\n\n  // Create the current puzzle\n  const puzzle = messagePuzzle.curry([\n    Program.fromBytes(messagePuzzle.hash()),\n    message,\n  ]);\n\n  // Create the solution\n  const solution = Program.fromList([newMessage, Program.fromInt(coin.amount)]);\n\n  spend.coin_spends.push({\n    // Spend the current singleton\n    coin,\n\n    // The puzzle reveal contains the old message\n    puzzle_reveal: puzzle.serializeHex(),\n\n    // Spend it with the new message\n    solution: solution.serializeHex(),\n  });\n\n  const send = await wallet.sendFee(fee);\n\n  spend.coin_spends.push(...send);\n\n  wallet.signSpend(spend, genesis);\n\n  console.log(await node.pushTx(spend));\n}\n\n// newInstance(Program.fromText(\'Hello, world!\'));\n// printMessage();\n// setMessage(Program.fromText(\'Goodbye, world!\'));\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"state-in-chialisp",children:"State in Chialisp"}),"\n",(0,t.jsx)(n.p,{children:"We are now going to be discussing the idea of state. State is used to maintain some value on-chain. This can be done with a coin that recreates itself currying in a new value."}),"\n",(0,t.jsx)(n.p,{children:"The example we will be using today stores a message that can be changed by anyone. Essentially, the first coin we create will store the initial state, which is the message. Then, every time the coin is spent, we will create a new coin that stores the new message inside of it."}),"\n",(0,t.jsxs)(n.p,{children:["The first coin is called the ",(0,t.jsx)(n.strong,{children:"eve"}),", and every coin that follows it forms a complete lineage of the history."]}),"\n",(0,t.jsx)(n.p,{children:"First, we will install the needed Chialisp dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cdv clsp retrieve condition_codes curry_and_treehash\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here is the puzzle we will be using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-chialisp",metastring:"title=message.clsp",children:"(mod (MOD_HASH MESSAGE new_message amount)\n    (include condition_codes.clib)\n    (include curry_and_treehash.clib)\n\n    (defun-inline new_puzzle_hash (MOD_HASH new_message)\n        (puzzle-hash-of-curried-function MOD_HASH\n            (sha256 1 new_message)\n            (sha256 1 MOD_HASH)\n        )\n    )\n\n    (list\n        (list CREATE_COIN (new_puzzle_hash MOD_HASH new_message) amount)\n    )\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifically, this will create a new coin using ",(0,t.jsx)(n.code,{children:"CREATE_COIN"}),". The puzzle hash is calculated by passing ",(0,t.jsx)(n.code,{children:"MOD_HASH"})," and ",(0,t.jsx)(n.code,{children:"new_message"})," to the ",(0,t.jsx)(n.code,{children:"new_puzzle_hash"})," function. This effectively recreates the coin with the same puzzle. The only difference is that is uses the new message."]}),"\n",(0,t.jsx)(n.p,{children:"We will compile this Chialisp code with this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cdv clsp build message.clsp\n"})}),"\n",(0,t.jsx)(n.h2,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,t.jsx)(n.p,{children:"Install NPM:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install npm\n"})}),"\n",(0,t.jsx)(n.p,{children:"Install the needed dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install bip39 chia-bls chia-rpc chia-wallet-lib clvm-lib dotenv\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is the code to set everything up and prepare for building this example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { mnemonicToSeedSync } from 'bip39';\nimport { fromHex, PrivateKey, toHex } from 'chia-bls';\nimport { Coin, formatHex, FullNode, sanitizeHex, toCoinId } from 'chia-rpc';\nimport { KeyStore, StandardWallet } from 'chia-wallet-lib';\nimport { Program } from 'clvm-lib';\nimport dotenv from 'dotenv';\nimport fs from 'fs';\nimport os from 'os';\nimport path from 'path';\n\ndotenv.config();\n\nconst mnemonic = process.env.MNEMONIC!;\nconst privateKey = PrivateKey.fromSeed(mnemonicToSeedSync(mnemonic));\n\nconst dir = path.join(\\_\\_dirname, '..');\n\nconst messagePuzzle = Program.deserializeHex(\nfs.readFileSync(path.join(dir, 'message.clsp.hex'), 'utf-8')\n);\n\nconst node = new FullNode(os.homedir() + '/.chia/mainnet');\nconst keyStore = new KeyStore(privateKey);\n\nconst wallet = new StandardWallet(node, keyStore);\nconst genesis = fromHex(process.env.GENESIS!);\n\nconst amount = 1;\nconst fee = 0.00005e12;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"initializing-the-coin",children:"Initializing the Coin"}),"\n",(0,t.jsx)(n.p,{children:"The first thing that we need to do is create the eve coin. However, that is not enough to be able to fetch the message that is stored on-chain. This is because the puzzle that a coin uses is not revealed until that coin is spent."}),"\n",(0,t.jsx)(n.p,{children:"The solution to this problem is to instantly spend the eve coin when it is created. This way, the solution will contain the message that the next coin uses. This allows the current state to be inferred and the coin to be spent later by someone else."}),"\n",(0,t.jsx)(n.p,{children:"Here is the code that initializes the eve coin and its descendant:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'async function newInstance(initialMessage: Program) {\n  await wallet.sync();\n\n  const spend = wallet.createSpend();\n\n  // Curry the puzzle\n  const puzzle = messagePuzzle.curry([\n    // Mod hash\n    Program.fromBytes(messagePuzzle.hash()),\n\n    // Message is empty until the eve is spent\n    Program.nil,\n  ]);\n\n  // Create the eve coin\n  const send = await wallet.send(puzzle.hash(), amount, fee);\n  spend.coin_spends.push(...send);\n\n  // Calculate the root coin id\n  const eveCoin: Coin = {\n    parent_coin_info: formatHex(toHex(toCoinId(send[0].coin))),\n    puzzle_hash: formatHex(puzzle.hashHex()),\n    amount,\n  };\n\n  // Create the eve solution\n  const solution = Program.fromList([\n    // Message\n    initialMessage,\n\n    // Amount\n    Program.fromInt(amount),\n  ]);\n\n  // Spend the eve coin\n  spend.coin_spends.push({\n    coin: eveCoin,\n    puzzle_reveal: puzzle.serializeHex(),\n    solution: solution.serializeHex(),\n  });\n\n  // Sign the wallet spend\n  wallet.signSpend(spend, genesis);\n\n  // Complete the transaction\n  console.log("Eve coin id:", toHex(toCoinId(eveCoin)));\n  console.log(await node.pushTx(spend));\n}\n\nnewInstance(Program.fromText("Hello, world!"));\n'})}),"\n",(0,t.jsx)(n.p,{children:"Running this, you will get a response similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Eve coin id: a6c5a4d12456ae6dee553b1b17544799f561a62f678d7948df12f28d17bfa96e\n{ status: 'SUCCESS', success: true }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where the eve coin ID is the ID of the first coin."}),"\n",(0,t.jsx)(n.p,{children:"We have successfully created the eve coin, spent it to reveal the current state (the message), and logged the eve coin ID."}),"\n",(0,t.jsx)(n.h2,{id:"retrieving-the-message",children:"Retrieving the Message"}),"\n",(0,t.jsx)(n.p,{children:"We can retrieve the message by getting the eve coin and following its children to the latest (referred to as syncing). The most recent message is provided in the solution of the spend of the previous coin."}),"\n",(0,t.jsxs)(n.p,{children:["For this to work, we read the ",(0,t.jsx)(n.code,{children:"EVE_COIN_ID"})," from the ",(0,t.jsx)(n.code,{children:".env"})," file, which should now look something like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",metastring:"title=.env",children:"MNEMONIC=nasty sunny kingdom popular turn core rifle river twenty edit sort pill rice claw hollow please wash inform cannon empower emotion caught salt close\nGENESIS=d25b25b897564035695996922aa0f9ff9d611bd38cd2ecd0d2383a99a70dfc15\nEVE_COIN_ID=5fe284bfa91c32fd274179769f5b808c916e5135e603cb292a90e04e5867bd1a\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The hash used in ",(0,t.jsx)(n.code,{children:"GENESIS"})," can be found in your chia environments config.yaml file.",(0,t.jsx)(n.br,{}),"\n","Mainnet Genesis = ",(0,t.jsx)(n.code,{children:"ccd5bb71183532bff220ba46c268991a3ff07eb358e8255a65c30a2dce0e5fbb"}),(0,t.jsx)(n.br,{}),"\n","Testnet11 Genesis = ",(0,t.jsx)(n.code,{children:"37a90eb5185a9c4439a91ddc98bbadce7b4feba060d50116a067de66bf236615"}),(0,t.jsx)(n.br,{}),"\n","For the simulator and other testnets please refer to the instances config.yaml ",(0,t.jsx)(n.code,{children:"$CHIA_ROOT/config/config.yaml"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Write the following code to sync the state:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title=index.ts",children:"interface SyncInfo {\n  parent: string;\n  current: string;\n}\n\nasync function sync(): Promise<SyncInfo> {\n  const eveCoinId = process.env.EVE_COIN_ID!;\n\n  let current = eveCoinId;\n  let parent = current;\n\n  while (true) {\n    // Fetch coins created by the current coin\n    const coinRecords = await node.getCoinRecordsByParentIds(\n      [current],\n      undefined,\n      undefined,\n      true,\n    );\n    if (!coinRecords.success) throw new Error(coinRecords.error);\n\n    // If there are none, we are already synced\n    if (!coinRecords.coin_records.length) break;\n\n    // Update the parent\n    parent = current;\n\n    // Continue with the child coin as the new singleton\n    const coinRecord = coinRecords.coin_records[0];\n    current = toHex(toCoinId(coinRecord.coin));\n  }\n\n  return {\n    parent,\n    current,\n  };\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now that we have the current coin and its parent, we can fetch the solution of the parent's spend to find the message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'async function getMessage(syncInfo: SyncInfo): Promise<Program> {\n  const coinRecord = await node.getCoinRecordByName(syncInfo.parent);\n  if (!coinRecord.success) throw new Error(coinRecord.error);\n\n  const puzzleAndSolution = await node.getPuzzleAndSolution(\n    syncInfo.parent,\n    coinRecord.coin_record.spent_block_index,\n  );\n  if (!puzzleAndSolution.success) throw new Error(puzzleAndSolution.error);\n\n  const spend = puzzleAndSolution.coin_solution;\n\n  const solution = Program.deserializeHex(sanitizeHex(spend.solution)).toList();\n\n  return solution[0];\n}\n\nasync function printMessage() {\n  const syncInfo = await sync();\n  const message = await getMessage(syncInfo);\n  console.log("Message:", message.toString());\n}\n\nprintMessage();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Running this with ",(0,t.jsx)(n.code,{children:"npm run start"})," should output the initial message:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Message: "Hello, world!"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-message",children:"Updating the Message"}),"\n",(0,t.jsx)(n.p,{children:"Finally, we can create a new coin by spending the existing coin and providing a new message in the solution."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'async function setMessage(newMessage: Program) {\n  await wallet.sync();\n\n  const syncInfo = await sync();\n  const message = await getMessage(syncInfo);\n\n  // Fetch the coin record\n  const coinRecord = await node.getCoinRecordByName(syncInfo.current);\n  if (!coinRecord.success) throw new Error(coinRecord.error);\n\n  const coin = coinRecord.coin_record.coin;\n\n  const spend = wallet.createSpend();\n\n  // Create the current puzzle\n  const puzzle = messagePuzzle.curry([\n    Program.fromBytes(messagePuzzle.hash()),\n    message,\n  ]);\n\n  // Create the solution\n  const solution = Program.fromList([newMessage, Program.fromInt(coin.amount)]);\n\n  spend.coin_spends.push({\n    // Spend the current singleton\n    coin,\n\n    // The puzzle reveal contains the old message\n    puzzle_reveal: puzzle.serializeHex(),\n\n    // Spend it with the new message\n    solution: solution.serializeHex(),\n  });\n\n  const send = await wallet.sendFee(fee);\n\n  spend.coin_spends.push(...send);\n\n  wallet.signSpend(spend, genesis);\n\n  console.log(await node.pushTx(spend));\n}\n\nsetMessage(Program.fromText("Goodbye, world!"));\n'})}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to set the new message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,t.jsx)(n.h3,{id:"breakdown",children:"Breakdown"}),"\n",(0,t.jsx)(n.p,{children:"This will first find the latest coin from the eve coin ID:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"await wallet.sync();\n\nconst syncInfo = await sync();\nconst message = await getMessage(syncInfo);\n\n// Fetch the coin record\nconst coinRecord = await node.getCoinRecordByName(syncInfo.current);\nif (!coinRecord.success) throw new Error(coinRecord.error);\n\nconst coin = coinRecord.coin_record.coin;\n"})}),"\n",(0,t.jsx)(n.p,{children:"which is then spent using a solution with our new message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Create the solution\nconst solution = Program.fromList([newMessage, Program.fromInt(coin.amount)]);\n\nspend.coin_spends.push({\n  // Spend the current singleton\n  coin,\n\n  // The puzzle reveal contains the old message\n  puzzle_reveal: puzzle.serializeHex(),\n\n  // Spend it with the new message\n  solution: solution.serializeHex(),\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"updated-message",children:"Updated Message"}),"\n",(0,t.jsx)(n.p,{children:"Now, we should be able to retrieve the new message with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"printMessage();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to see the new message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"As a reminder, each step can take some time as the message is updated on chain. Because of this, you'll want to issue each function call separately."})}),"\n",(0,t.jsx)(n.h2,{id:"shared-messages",children:"Shared Messages"}),"\n",(0,t.jsxs)(n.p,{children:["Because this puzzle does not require a signature, anyone can spend the coin providing a new message.\nSay your eve coin ID is ",(0,t.jsx)(n.code,{children:"5fe284bfa91c32fd274179769f5b808c916e5135e603cb292a90e04e5867bd1a"}),", you can share this value with anyone to update this message."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"This has been an introduction to managing to state on the Chia blockchain. We've seen how you can write a puzzle that recreates itself with new values in order to maintain a complete linear history of updates on-chain. You can find the current value by looking at the solution of the last coin's parent."}),"\n",(0,t.jsx)(n.p,{children:"In the world of Chia, this concept is used heavily to store various information. For example, NFTs maintain a list of URIs that point to the data, metadata, and license."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"More Info: Singletons"}),(0,t.jsx)(n.p,{children:'A singleton is a common application of the "recreate self" functionality we used in this lesson. Essentially, a singleton can be used to wrap an inner puzzle and add additional rules to it. In particular, it ensures that only one output is created (with an odd amount). Every time the coin is spent, the output of the inner puzzle is wrapped to maintain the singleton\'s lineage. This restriction can only be broken by melting the singleton.'}),(0,t.jsx)(n.p,{children:"Anyone can create a coin with any puzzle. This means there is a good chance there will be multiple coins with the same puzzle hash. This can lead to confusion as to which coin is which, and may lead to confusion or mistakes. A singleton allows for something to exist on chain that is provably unique. This helps us be sure that we are working with the correct coin."}),(0,t.jsxs)(n.p,{children:["The idea is that you can reuse the singleton behavior without having to write everything in a special way. You can ",(0,t.jsx)(n.a,{href:"https://chialisp.com/singletons",children:"read more about singletons"})," if you want to, but we will not be covering them in this course due to the additional complexities involved in launching and spending them."]}),(0,t.jsx)(n.p,{children:"Often times, puzzles that manage state will be wrapped in the singleton to ensure that there is only one instance of the state at a given time. It would be as simple as using the puzzle we wrote in this lesson as the inner puzzle to a singleton. The only additional restriction is that the coin's amount must be odd."}),(0,t.jsxs)(n.p,{children:["Because the singleton will be a series of spent coins and new coins created over time, we need a different way than the coin ID to identify a singleton. A singleton is instead identified by its ",(0,t.jsx)(n.strong,{children:"launcher ID"}),", which is the coin ID of the singleton's parent coin (think of this as similar to the eve coin ID we created in this lesson). This parent coin is the coin used to create the initial coin of the singleton."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);