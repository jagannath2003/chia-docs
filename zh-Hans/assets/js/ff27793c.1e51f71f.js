"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4348],{7555:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"troubleshooting/locating-keys","title":"Locating Keys","description":"This doc assumes you have chia installed and will overview both the CLI and GUI methods of identifying various keys.\\\\","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/troubleshooting/locating-keys.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/locating-keys","permalink":"/zh-Hans/troubleshooting/locating-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/troubleshooting/locating-keys.md","tags":[],"version":"current","frontMatter":{"title":"Locating Keys","slug":"/troubleshooting/locating-keys"},"sidebar":"tutorialSidebar","previous":{"title":"Logging Reference","permalink":"/zh-Hans/troubleshooting/logging-reference"},"next":{"title":"Timelords","permalink":"/zh-Hans/troubleshooting/timelords"}}');var i=s(4848),o=s(8453),a=s(5413);const r=s.p+"assets/images/wallet_keys_overview-ac2b9fd94a85403c63ada39fe4c7fe1b.png";var l=s(805);const c={title:"Locating Keys",slug:"/troubleshooting/locating-keys"},d=void 0,h={},u=[{value:"Keys Overview",id:"keys-overview",level:2},{value:"GUI",id:"gui",level:2},{value:"Locating Keys in the GUI",id:"locating-keys-in-the-gui",level:3},{value:"CLI",id:"cli",level:2},{value:"Locating Keys in the CLI",id:"locating-keys-in-the-cli",level:3}];function y(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This doc assumes you have chia installed and will overview both the CLI and GUI methods of identifying various keys.",(0,i.jsx)(n.br,{}),"\n","Please refer to the ",(0,i.jsx)(n.a,{href:"/installation",children:"Installation page"})," if you do not have chia installed."]}),"\n",(0,i.jsx)(n.h2,{id:"keys-overview",children:"Keys Overview"}),"\n",(0,i.jsx)(n.p,{children:"The main keys utilized in chia are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Public Key"})," - also known as the master public key, this key is used with the ",(0,i.jsx)(n.a,{href:"https://faucet.chia.net/",children:"Chia faucet"})," and as an observer only view for funds in the wallet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Farmer Public Key"})," - this key is used to generate plots and is a public key. If using a plotting service they will request this key and also a pool contract address which is listed on the pool tab of the gui, detailed instructions can be found ",(0,i.jsx)(n.a,{href:"/plotting-how-to#pool-contract-address",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pool Public Key"})," - this is the key that was used for OG plots which cannot connect to pools. It is recommended to create plotNFT plots (portable plots) and use the pool contract address as outlined ",(0,i.jsx)(n.a,{href:"/plotting-how-to#pool-contract-address",children:"here"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Secret Key"})," - also known as the master private key, this key should ",(0,i.jsx)(n.strong,{children:"NEVER"})," be shared with anyone as it can give access to spend funds from your wallet. Always be mindful when clicking the reveal button and recognize that this keyset is generally not needed for any manual entry."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Seed Phrase"})," - also known as the mnemonic phrase, this key should ",(0,i.jsx)(n.strong,{children:"NEVER"})," be shared with anyone as it gives full access to your wallet. This should be backed up in a safe location and never entered into any manual entry field unless you are importing your keys to a new wallet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Farmer Private Key"})," - this key should ",(0,i.jsx)(n.strong,{children:"NEVER"})," be shared with anyone as it is used to sign farmed blocks. Always be mindful when clicking the reveal button and recognize that this keyset is generally not needed for any manual entry."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gui",children:"GUI"}),"\n",(0,i.jsx)(n.p,{children:"There are a series of different keys that your chia client uses, follow the below steps to view all of these keys but always be mindful with whom you share them."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Never share your private / secret keys or mnemonics with anyone. These give access to spend funds from your wallet."})}),"\n",(0,i.jsx)(n.h3,{id:"locating-keys-in-the-gui",children:"Locating Keys in the GUI"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"In the top right corner select logout:"}),"\n"]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:l.A,alt:"Logout of the Chia wallet"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Using the desired keys menu, select details:"}),"\n"]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:a.A,alt:"Select Details for a Chia keyset"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"View and copy the needed keyset:"}),"\n"]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:r,alt:"Chia keys detail screen"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For more security best practices please review the ",(0,i.jsx)(n.a,{href:"https://www.chia.net/2021/05/28/securing-your-chia-how-to-be-a-hard-target/",children:"Securing Your Chia \u2013 How to Be a Hard Target"})," blog article."]})}),"\n",(0,i.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(n.p,{children:"There are a series of different keys that your chia client uses, follow the below steps to view all of these keys but always be mindful with whom you share them."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NEVER"})," share your private / secret keys or mnemonics with anyone. These give access to spend funds from your wallet."]})}),"\n",(0,i.jsx)(n.h3,{id:"locating-keys-in-the-cli",children:"Locating Keys in the CLI"}),"\n",(0,i.jsxs)(n.p,{children:["In order to view your keys from the cli, run ",(0,i.jsx)(n.code,{children:"chia keys show"}),", optionally including the ",(0,i.jsx)(n.code,{children:"-f <fingerprint>"})," flag to show only the info for the key you just generated:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["From terminal (mac/linux) or powershell (windows) run ",(0,i.jsx)(n.code,{children:"chia keys show"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chia keys show\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"chia keys show --show-mnemonic-seed"}),(0,i.jsx)(n.br,{}),"\n","displays the ",(0,i.jsx)(n.em,{children:"Master Private Key, Farmer Private Key, and Seed Phrase / Mnemonic"})," ",(0,i.jsx)(n.strong,{children:"NEVER"})," share these with anyone."]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"View and copy the needed keyset:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Showing all public keys derived from your master seed and private key:\n\nLabel: Demo Wallet\nFingerprint: 2281896037\nMaster public key (m): 96ce91d974daa0990e6681ac2de3e3f49142f6b655a081817832265c143e658a6e60a5dec856f292f45fe2d04c7856f6\nFarmer public key (m/12381/8444/0/0): a9e366b26f155491af9a903c0ed9717bfd09a71cbe283eeda825128fd7c6b9ac60e1608f9f008adcfbf66e233d5b4ce8\nPool public key (m/12381/8444/1/0): 9566fa434f342dd5f9380a6bfc59dd7d1abd22869a425a8ca09cf27200eaa6aad5bc8fc00db90af832eb8028b0c6e3f0\nFirst wallet address: xch1kr3zf7dqw5q953ex6zt33lndj90q0zlh68404tsntnljthnwqs2qvjmwrg\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you run into any issues or have followup questions please join our ",(0,i.jsx)(n.a,{href:"https://discord.gg/chia",children:"discord server"})," and ask in the #support channel."]})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}},5413:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/wallet_key_details-94143237a87053ddd1f1fd07b89b1dd5.png"},805:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/wallet_logout-51617c5b2795db04ce07be26a7d0168f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);