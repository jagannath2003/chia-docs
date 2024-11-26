"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5257],{3959:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"plotting/plotting-how-to","title":"How To Plot","description":"To create plots, you must have:","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/plotting/plotting-how-to.md","sourceDirName":"plotting","slug":"/plotting-how-to","permalink":"/zh-Hans/plotting-how-to","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/plotting-how-to.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"How To Plot","title":"How To Plot","slug":"/plotting-how-to"},"sidebar":"tutorialSidebar","previous":{"title":"Choosing a Compression Level","permalink":"/zh-Hans/plotting-compression"},"next":{"title":"SSD\u7684\u8010\u4e45\u6027","permalink":"/zh-Hans/ssd-endurance"}}');var l=o(4848),i=o(8453);o(1470),o(9365);const a={sidebar_label:"How To Plot",title:"How To Plot",slug:"/plotting-how-to"},s=void 0,r={},c=[{value:"Public Keys",id:"public-keys",level:2},{value:"CLI",id:"cli",level:3},{value:"GUI",id:"gui",level:3},{value:"Pool Contract Address",id:"pool-contract-address",level:2},{value:"CLI",id:"cli-1",level:3},{value:"GUI",id:"gui-1",level:3},{value:"CLI Plotting",id:"cli-plotting",level:2},{value:"BladeBit CUDA",id:"bladebit-cuda",level:4},{value:"BladeBit RAM",id:"bladebit-ram",level:4},{value:"BladeBit Disk",id:"bladebit-disk",level:4},{value:"madMAx",id:"madmax",level:4},{value:"ChiaPoS",id:"chiapos",level:4},{value:"\u56fe\u5f62\u7528\u6237\u754c\u9762\uff08GUI\uff09\u751f\u6210\u5730\u5757",id:"\u56fe\u5f62\u7528\u6237\u754c\u9762gui\u751f\u6210\u5730\u5757",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"To create plots, you must have:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"A farmer public key"})," -- created upon creating a new wallet"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"A pool public key"})," -- created upon creating a new wallet"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"A pool contract address"})," -- created upon creating a new plot NFT"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["This page will give a basic overview of how to obtain these values. This page will give a basic overview of how to obtain these values. For a detailed description, see the ",(0,l.jsx)(t.a,{href:"/farming-guide",children:"Beginner's Guide to Farming"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["If you already have a wallet with a plot NFT, feel free to skip to the section for ",(0,l.jsx)(t.a,{href:"#cli-plotting",children:"CLI Plotting"})," or ",(0,l.jsx)(t.a,{href:"#%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2gui%E7%94%9F%E6%88%90%E5%9C%B0%E5%9D%97",children:"GUI Plotting"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"public-keys",children:"Public Keys"}),"\n",(0,l.jsx)(t.h3,{id:"cli",children:"CLI"}),"\n",(0,l.jsx)(t.p,{children:"If you do not have a key/wallet, run the following command:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia keys generate\n"})}),"\n",(0,l.jsxs)(t.p,{children:["You will be prompted to add a human-readable name to your wallet. This name is only used locally (it is not stored on the blockchain). If you do not enter a name, a number called a ",(0,l.jsx)(t.em,{children:"fingerprint"})," will be used instead. It is possible to change this name later. This name is only used locally (it is not stored on the blockchain). If you do not enter a name, a number called a ",(0,l.jsx)(t.em,{children:"fingerprint"})," will be used instead. It is possible to change this name later."]}),"\n",(0,l.jsx)(t.p,{children:"Example response:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"Generating private key\nEnter the label you want to assign to this key (Press Enter to skip): Test Wallet\nAdded private key with public key fingerprint 2225787457\n"})}),"\n",(0,l.jsxs)(t.p,{children:["In order to view your farmer public key, run ",(0,l.jsx)(t.code,{children:"chia keys show"}),", optionally including the ",(0,l.jsx)(t.code,{children:"-f <fingerprint>"})," flag to show only the info for the key you just generated:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia keys show\n"})}),"\n",(0,l.jsx)(t.p,{children:"The result will include the farmer public key and the pool public key. Make note of them for the subsequent steps. For example: Make note of them for the subsequent steps. For example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"Showing all public keys derived from your master seed and private key:\n\nLabel: Test Wallet\nFingerprint: 2225787457\nMaster public key (m): ab895c85aea6e7339f1a021ad14eddfa3f5ef97eb37ccbdf0b30c1c88c593065e9409f7401d409c8efe17b903e7c9be1\nFarmer public key (m/12381/8444/0/0): ab9b6fda0bbd7510058559cd3b5ce297de5c009d960862b139104feb49a0fe94faace31075009599943327554574c5fc\nPool public key (m/12381/8444/1/0): 894c772c219a6d05dc7b0a51fe05f891849e1e26283387f249d7074ead5dcff2fe779ee69f4570c60d1970f0fda77eac\nFirst wallet address: xch12kqlkrgq7mkxwt64j5fsge3q84sg007wqyc8egkptyjflmazp7gqd7gh7c\n"})}),"\n",(0,l.jsx)(t.h3,{id:"gui",children:"GUI"}),"\n",(0,l.jsx)(t.p,{children:"If you do not have a key, you will need to create one:"}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/01.png",alt:"Create a new wallet key"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"You will be presented with a list of twenty-four words. This is your wallet's recovery phrase. These words are all that are needed to recover your wallet on a new computer. Write them down and store them in a safe place. The order of the words is important. This is your wallet's recovery phrase. These words are all that are needed to recover your wallet on a new computer. Write them down and store them in a safe place. The order of the words is important."}),"\n",(0,l.jsxs)(t.p,{children:["You can also choose a custom name for your wallet. Click ",(0,l.jsx)(t.code,{children:"NEXT"})," when you are finished. Click ",(0,l.jsx)(t.code,{children:"NEXT"})," when you are finished."]}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"If someone obtains a copy of these words, they can steal your entire wallet, including all of its funds. Be sure to store your recovery phrase in a safe place. Be sure to store your recovery phrase in a safe place."})}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/02.png",alt:"Wallet seed phrase"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"You will be taken to your new wallet. You will be taken to your new wallet. In order to obtain your farmer public key, you will need to log out of the wallet. Click the icon next to the bell icon. Click the icon next to the bell icon."}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/03.png",alt:"Log out"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(t.p,{children:["Click the three dots in the lower-right corner of your wallet, then click ",(0,l.jsx)(t.code,{children:"Details"}),"."]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/04.png",alt:"Show details"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"Among other information, your farmer public key and pool public key will be shown. If you plan to plot from the CLI, make note of these keys. Among other information, your farmer public key and pool public key will be shown. If you plan to plot from the CLI, make note of these keys. If you will stick with the GUI for plotting, these keys will be obtained automatically later."}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/05.png",alt:"Public keys"})}),"\n",(0,l.jsx)(t.h2,{id:"pool-contract-address",children:"Pool Contract Address"}),"\n",(0,l.jsx)(t.p,{children:"In order to obtain a pool contract address, you will need to create a Plot NFT."}),"\n",(0,l.jsx)(t.h3,{id:"cli-1",children:"CLI"}),"\n",(0,l.jsxs)(t.p,{children:["First, you will need to decide whether to join a pool. For this example, we will use ",(0,l.jsx)(t.code,{children:"-s pool"})," to join a pool. If you want to solo farm, use ",(0,l.jsx)(t.code,{children:"-s local"})," instead. First, you will need to decide whether to join a pool. For this example, we will use ",(0,l.jsx)(t.code,{children:"-s pool"})," to join a pool. If you want to solo farm, use ",(0,l.jsx)(t.code,{children:"-s local"})," instead. (Later, you can change pools, using the plot NFT you are about to create.)"]}),"\n",(0,l.jsxs)(t.p,{children:["If you choose to join a pool, you will need to add the URL by adding the ",(0,l.jsx)(t.code,{children:"-u"})," flag. For this example, we will join OpenChia, but there are many great pools to choose from. For a list of reputable pools, see ",(0,l.jsx)(t.a,{href:"https://chialinks.com/pools/",children:"Chialinks.com"}),". (Chia Network, Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks). For this example, we will join OpenChia, but there are many great pools to choose from. ",(0,l.jsx)(t.code,{children:"Connect to pool"})," -- You will need to enter a valid pool URL. We will use OpenChia for this example, but there are many great pools to choose from. For a list of reputable pools, see ",(0,l.jsx)(t.a,{href:"https://chialinks.com/pools/",children:"Chialinks.com"}),". (Chia Network, Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks). (Chia Network Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks)."]}),"\n",(0,l.jsxs)(t.p,{children:["Finally, you have the option of adding a blockchain fee with the ",(0,l.jsx)(t.code,{children:"-m"})," flag. We will add a one-mojo fee for this example, which typically is sufficient to complete your transaction within a few minutes. We will add a one-mojo fee for this example, which typically is sufficient to complete your transaction within a few minutes."]}),"\n",(0,l.jsx)(t.p,{children:"In order to run this command, you will need to have one mojo in your wallet for the plot NFT, and one mojo for the blockchain fee."}),"\n",(0,l.jsx)(t.p,{children:"For example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotnft create -s pool -u https://pool.openchia.io -m 0.000000000001\n"})}),"\n",(0,l.jsx)(t.p,{children:"Response:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"---- Pool parameters fetched from https://pool.openchia.io ----\n{'authentication_token_timeout': 5,\n 'description': 'A pool you can trust. ---- Pool parameters fetched from https://pool.openchia.io ----\n{'authentication_token_timeout': 5,\n 'description': 'A pool you can trust. We embrace open source.',\n 'fee': '0.01',\n 'logo_url': 'https://www.chia.net/img/chia_logo.svg',\n 'minimum_difficulty': 1,\n 'name': 'OpenChia.io Pool',\n 'protocol_version': 1,\n 'relative_lock_height': 32,\n 'target_puzzle_hash': '0x55a2d443901f7655893cecf1c98e4152591e8641c64a2b0294cad1a754d02f89'}\n----------------------------------------------------------------\nWill create a plot NFT and join pool: https://pool.openchia.io.\nTransaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]\nRun 'chia wallet get_transaction -f 782655656 -tx 0x7e6f64d1858263378a66869aefee7bb27ffc2bf3cccb3cc1d89a522d24559654' to get status\nTransaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]\nRun 'chia wallet get_transaction -f 782655656 -tx 0x7e6f64d1858263378a66869aefee7bb27ffc2bf3cccb3cc1d89a522d24559654' to get status\n"})}),"\n",(0,l.jsxs)(t.p,{children:["After the transaction has completed, you can obtain the plot NFT's information by running ",(0,l.jsx)(t.code,{children:"chia plotnft show"}),". For example: For example:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotnft show\n"})}),"\n",(0,l.jsx)(t.p,{children:"Response:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"Current state: FARMING_TO_POOL\nCurrent state from block height: 4099277\nLauncher ID: fc64e39395f60398532545d0e3116398e5edcdbeacd140606ec25fa36243bc9c\nTarget address (not for plotting): xch12k3dgsusram9tzfuancunrjp2fv3apjpce9zkq55etg6w4xs97ysgcrlwh\nNumber of plots: 0\nOwner public key: b571502c188db6ee65cafc9fcc9cfdcb2cff06795687a70bf8d76a48e89adb34b2d28e8d93cabc394e5779a8ae65c38e\nPool contract address (use ONLY for plotting - do not send money to this address): xch1l6tt70hrhewlyvjs37vc5tvw80c89cy8dcxcnynsqatsyf5466aq63f9mq\nCurrent pool URL: https://pool.openchia.io\nCurrent difficulty: 1\nPoints balance: 0\nPoints found (24h): 0\nPercent Successful Points (24h): 0.00%\nPayout instructions (pool will pay to this address): xch16ycs0t3cmn63wysrn8hpg93dgevy3cw9yt3mmx2anrz52dkuj9nsauzyzt\nRelative lock height: 32 blocks\n"})}),"\n",(0,l.jsx)(t.p,{children:'The pool contract address is listed in the middle of the output. It will begin with "xch". It will begin with "xch".'}),"\n",(0,l.jsx)(t.h3,{id:"gui-1",children:"GUI"}),"\n",(0,l.jsxs)(t.p,{children:["Open your wallet, click the ",(0,l.jsx)(t.code,{children:"Pooling"})," icon in the lower-left corner, and click ",(0,l.jsx)(t.code,{children:"JOIN A POOL"}),":"]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/06.png",alt:"Join a pool"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"Select either option:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"Self pool"}),' -- Select this if you are a solo farmer. Technically, you will be joining a "pool" where you are the only member. Technically, you will be joining a "pool" where you are the only member.']}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"Connect to pool"})," -- You will need to enter a valid pool URL. We will use OpenChia for this example, but there are many great pools to choose from. ",(0,l.jsx)(t.code,{children:"Connect to pool"})," -- You will need to enter a valid pool URL. We will use OpenChia for this example, but there are many great pools to choose from. For a list of reputable pools, see ",(0,l.jsx)(t.a,{href:"https://chialinks.com/pools/",children:"Chialinks.com"}),". (Chia Network, Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks). (Chia Network Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks)."]}),"\n"]}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsx)(t.p,{children:"Later, you can change pools, using the plot NFT you are about to create."})}),"\n",(0,l.jsx)(t.p,{children:"Creating a plot NFT requires an on-chain transaction that will cost one mojo. You are also recommended to enter a blockchain fee. Depending on how busy the network is, a one-mojo fee is typically enough to complete your transaction within a few minutes. You are also recommended to enter a blockchain fee. Depending on how busy the network is, a one-mojo fee is typically enough to complete your transaction within a few minutes."}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/07.png",alt:"Create a plot NFT"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(t.p,{children:["If you entered a valid pool URL, the details will pop up. For example, this pool has a fee of 1%. If everything looks acceptable, click ",(0,l.jsx)(t.code,{children:"CREATE"}),": For example, this pool has a fee of 1%. If everything looks acceptable, click ",(0,l.jsx)(t.code,{children:"CREATE"}),":"]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/08.png",alt:"Pool details"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"Your transaction will be pushed to the blockchain. While it is pending, a new screen will appear: While it is pending, a new screen will appear:"}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/09.png",alt:"Plot NFT pending"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"After the transaction has been finalized (typically 1-3 minutes), the details of your plot NFT will appear:"}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/10.png",alt:"Plot NFT details"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"The pool contract address will be displayed automatically when creating a plot in the GUI."}),"\n",(0,l.jsx)(t.h2,{id:"cli-plotting",children:"CLI Plotting"}),"\n",(0,l.jsxs)(t.p,{children:["If you are unsure which plotter to use, the ",(0,l.jsx)(t.a,{href:"/plotting-software",children:"Plotting Software"})," page will help you to decide."]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.a,{href:"/plotters-cli",children:"plotters CLI documentation"})," will guide you through using each of the plotters included with Chia. The basic commands to use are as follows: The basic commands to use are as follows:"]}),"\n",(0,l.jsx)(t.h4,{id:"bladebit-cuda",children:"BladeBit CUDA"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsxs)(t.strong,{children:["Be sure to add ",(0,l.jsx)(t.code,{children:"--disk-128"})," if you have at least 128 GB of RAM, but less than 256 GB."]})," See the ",(0,l.jsx)(t.a,{href:"/plotters-cli",children:"plotters CLI documentation"})," for more details."]}),"\n",(0,l.jsxs)(t.admonition,{type:"info",children:[(0,l.jsx)(t.p,{children:"As of Chia 2.1, plotting with at least 16 GB of RAM (but less than 128 GB) is still experimental. A few notes: A few notes:"}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The ",(0,l.jsx)(t.code,{children:"--disk-16"})," option has been disabled in the Chia 2.1.0 release. This option has been disabled in the Chia 2.1.0 release. It is currently only available from the ",(0,l.jsx)(t.a,{href:"https://github.com/Chia-Network/bladebit/",children:"standalone version"})," of BladeBit."]}),"\n",(0,l.jsx)(t.li,{children:"Plots created with this option on Linux with direct I/O disabled appear to work, but more testing is still needed."}),"\n",(0,l.jsx)(t.li,{children:"Plots created with this option on Windows are more likely to encounter issues."}),"\n",(0,l.jsx)(t.li,{children:"Be sure to check all plots created with this option, as they could be invalid even if the plotter appeared to succeed."}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsxs)(t.strong,{children:["Use ",(0,l.jsx)(t.code,{children:"--disk-16"})," at your own risk!"]})}),"\n"]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotters bladebit cudaplot -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -n <number of plots> --compress <compression level>\n"})}),"\n",(0,l.jsx)(t.h4,{id:"bladebit-ram",children:"BladeBit RAM"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotters bladebit ramplot -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -n <number of plots> --compress <compression level>\n"})}),"\n",(0,l.jsx)(t.h4,{id:"bladebit-disk",children:"BladeBit Disk"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotters bladebit diskplot -t <temp dir> -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -n <number of plots> --compress 0\n"})}),"\n",(0,l.jsx)(t.h4,{id:"madmax",children:"madMAx"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotters madmax -t <temp dir> -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -k <size> -n <number of plots>\n"})}),"\n",(0,l.jsx)(t.h4,{id:"chiapos",children:"ChiaPoS"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"chia plotters chiapos -t <temp dir> -d <destination dir> -f <farmer key> -p <pool key> -c <contract address> -k <size> -n <number of plots>\n"})}),"\n",(0,l.jsx)(t.p,{children:"Regardless of which plotter you choose, it's a good idea to experiment with the optional parameters in order to optimize the plotting process for your hardware."}),"\n",(0,l.jsx)(t.h2,{id:"\u56fe\u5f62\u7528\u6237\u754c\u9762gui\u751f\u6210\u5730\u5757",children:"\u56fe\u5f62\u7528\u6237\u754c\u9762\uff08GUI\uff09\u751f\u6210\u5730\u5757"}),"\n",(0,l.jsxs)(t.p,{children:["From the Chia application, click the ",(0,l.jsx)(t.code,{children:"Farm"})," icon and click ",(0,l.jsx)(t.code,{children:"ADD A PLOT"}),":"]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/11.png",alt:"Add a plot"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:'Your plot NFT will appear. In this example, it is called "Harlequin Koala". The plots you create will be associated with this NFT. Your plot NFT will appear. In this example, it is called "Harlequin Koala". The plots you create will be associated with this NFT. It is important that you associate all of your plots to the same NFT because it will allow you to farm to a pool, as well as to change pools easily if desired. As long as your plot NFT shows up here, there is no need to change it: As long as your plot NFT shows up here, there is no need to change it:'}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/12.png",alt:"Plot NFT"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(t.p,{children:["Next, you will need to choose a plotter. Next, you will need to choose a plotter. If you are unsure which one to use, see the ",(0,l.jsx)(t.a,{href:"/plotting-software",children:"Plotting Software"})," page for guidance."]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/13.png",alt:"Choose plotter"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(t.p,{children:["For the ",(0,l.jsx)(t.code,{children:"Keys"})," section, you typically won't need to change anything (these are the keys you set up previously)."]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/14.png",alt:"\u5bc6\u94a5"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(t.p,{children:["Next, you will need to choose a ",(0,l.jsx)(t.code,{children:"k"})," value and a compression level. Certain plotters only allow one or the other of these options. Certain plotters only allow one or the other of these options."]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/15.png",alt:"Choose K value"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"Depending on which plotter you chose, you may need to select a temporary storage location."}),"\n",(0,l.jsx)(t.p,{children:"The final directory is where the plot will be copied after it has been created. The final directory is where the plot will be copied after it has been created. Most farmers will choose to use an HDD as the final directory."}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/16.png",alt:"Final directory"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.p,{children:"You will also need to choose how many plots to create."}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/17.png",alt:"Number of plots"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(t.p,{children:["After you have gone through all of these settings, click ",(0,l.jsx)(t.code,{children:"CREATE"}),". You will be taken to a progress panel: You will be taken to a progress panel:"]}),"\n",(0,l.jsx)("div",{style:{textAlign:"left"},children:(0,l.jsx)("img",{src:"/img/how_to_plot/18.png",alt:"Plot creation progress"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"Depending on your chosen plotter, there may be many other options you can experiment with. Depending on your chosen plotter, there may be many other options you can experiment with. Some of these options can greatly streamline (or slow down) your plotting process, so it's good to try a few different settings."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},9365:(e,t,o)=>{o.d(t,{A:()=>a});o(6540);var n=o(4164);const l={tabItem:"tabItem_Ymn6"};var i=o(4848);function a(e){let{children:t,hidden:o,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,a),hidden:o,children:t})}},1470:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(6540),l=o(4164),i=o(3104),a=o(6347),s=o(205),r=o(7485),c=o(1682),d=o(679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:l}}=e;return{value:t,label:o,attributes:n,default:l}}))}(o);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function u(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:o}=e;const l=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,r.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function m(e){const{defaultValue:t,queryString:o=!1,groupId:l}=e,i=p(e),[a,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=f({queryString:o,groupId:l}),[m,g]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,i]=(0,d.Dv)(o);return[l,(0,n.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:l}),x=(()=>{const e=c??m;return u({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&r(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=o(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=o(4848);function w(e){let{className:t,block:o,selectedValue:n,selectValue:a,tabValues:s}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,o=r.indexOf(t),l=s[o].value;l!==n&&(c(t),a(l))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=r.indexOf(e.currentTarget)+1;t=r[o]??r[0];break}case"ArrowLeft":{const o=r.indexOf(e.currentTarget)-1;t=r[o]??r[r.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":o},t),children:s.map((e=>{let{value:t,label:o,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>r.push(e),onKeyDown:h,onClick:d,...i,className:(0,l.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function y(e){let{lazy:t,children:o,selectedValue:i}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,b.jsx)(w,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,b.jsx)(j,{...e,children:h(e.children)},String(t))}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(6540);const l={},i=n.createContext(l);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);