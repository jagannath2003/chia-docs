"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6471],{5354:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"troubleshooting/check-if-things-are-working","title":"Check if Things are Working","description":"This doc assumes you know how to use the CLI. Using the CLI is the best way to troubleshoot (and to do everything Chia too). The Installation page and the CLI Commands Reference page have useful info to get you familiar with the CLI.","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/troubleshooting/check-if-things-are-working.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/check-if-things-are-working","permalink":"/zh-Hans/troubleshooting/check-if-things-are-working","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/troubleshooting/check-if-things-are-working.md","tags":[],"version":"current","frontMatter":{"title":"Check if Things are Working","slug":"/troubleshooting/check-if-things-are-working"},"sidebar":"tutorialSidebar","previous":{"title":"Offers","permalink":"/zh-Hans/walletconnect-offers"},"next":{"title":"Checking Farm Health","permalink":"/zh-Hans/checking-farm-health"}}');var l=i(4848),s=i(8453);const t={title:"Check if Things are Working",slug:"/troubleshooting/check-if-things-are-working"},r=void 0,c={},h=[{value:"Where to Find Things",id:"where-to-find-things",level:2},{value:"Linux &amp; macOS",id:"linux--macos",level:3},{value:"Windows",id:"windows",level:3},{value:"CLI",id:"cli",level:2},{value:"Config File",id:"config-file",level:2},{value:"Harvester",id:"harvester",level:2},{value:"Plotting",id:"plotting",level:2},{value:"Full Node",id:"full-node",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["This doc assumes you know how to use the CLI. Using the CLI is the best way to troubleshoot (and to do everything Chia too). The ",(0,l.jsx)(n.a,{href:"/installation",children:"Installation page"})," and the ",(0,l.jsx)(n.a,{href:"/cli",children:"CLI Commands Reference page"})," have useful info to get you familiar with the CLI."]}),"\n",(0,l.jsx)(n.h2,{id:"where-to-find-things",children:"Where to Find Things"}),"\n",(0,l.jsx)(n.p,{children:"The file structure for Linux, macOS, and Windows versions of Chia are similar."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"/home/user\n\u251c\u2500 .chia/\n\u2502   \u2514\u2500\u2500 mainnet/\n\u2502      \u251c\u2500 config/\n\u2502      \u2502      \u251c\u2500 config.yaml\n\u2502      \u2502      \u2514\u2500 ssl/\n\u2502      \u2502            \u2514\u2500 (and more...)\n\u2502      \u251c\u2500 db/\n\u2502      \u251c\u2500 log/\n\u2502      \u2502      \u2514\u2500 debug.log\n\u2502      \u251c\u2500 run/\n\u2502      \u2502      \u2514\u2500 (and more...)\n\u2502      \u2514\u2500 wallet/\n\u2502             \u2514\u2500 (and more...)\n\u2514\u2500\u2500 /chia-blockchain\n       \u2514\u2500 (and more...)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"linux--macos",children:"Linux & macOS"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Chia config: ",(0,l.jsx)(n.code,{children:"~/.chia/mainnet/config/config.yaml"})]}),"\n",(0,l.jsxs)(n.li,{children:["Chia logs: ",(0,l.jsx)(n.code,{children:"~/.chia/mainnet/log/"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Chia config: ",(0,l.jsx)(n.code,{children:"C:\\Users\\%USERNAME%\\.chia\\mainnet\\config\\config.yaml"})]}),"\n",(0,l.jsxs)(n.li,{children:["Chia logs: ",(0,l.jsx)(n.code,{children:"C:\\Users\\%USERNAME%\\.chia\\mainnet\\log\\"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"logs",children:"Logs"}),"\n",(0,l.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,l.jsxs)(n.p,{children:["You can use the CLI command ",(0,l.jsx)(n.code,{children:"chia configure --set-log-level INFO"})," to set your log level to the useful INFO setting. Be sure to restart Chia after making settings changes."]}),"\n",(0,l.jsx)(n.h2,{id:"config-file",children:"Config File"}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.code,{children:"config.yaml"})," you can set the level of detail for your logs."]}),"\n",(0,l.jsxs)(n.p,{children:["Look for this section in ",(0,l.jsx)(n.code,{children:"config.yaml"}),". It's useful to change the logger setting ",(0,l.jsx)(n.code,{children:"log_level"})," from ",(0,l.jsx)(n.code,{children:"WARNING"})," to ",(0,l.jsx)(n.code,{children:"INFO"})," to get the detail needed to troubleshoot."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"logging: &id001\n  log_filename: log/debug.log\n  log_level: INFO\n  log_stdout: false\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can run ",(0,l.jsx)(n.code,{children:"grep"})," (",(0,l.jsx)(n.a,{href:"https://man7.org/linux/man-pages/man1/grep.1.html",children:"Linux"}),", ",(0,l.jsx)(n.a,{href:"https://ss64.com/osx/grep.html",children:"macOS"}),") or ",(0,l.jsx)(n.code,{children:"Select-String"})," (",(0,l.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string?view=powershell-7.1",children:"Windows"}),") to search through your logs for relevant information."]}),"\n",(0,l.jsx)(n.h1,{id:"is-it-working",children:"Is It Working?"}),"\n",(0,l.jsx)(n.p,{children:"If you want to quickly find errors, run this:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Linux/macOS: ",(0,l.jsx)(n.code,{children:"cat ~/.chia/mainnet/log/debug.log | grep -i 'error'"})]}),"\n",(0,l.jsxs)(n.li,{children:["Windows: ",(0,l.jsx)(n.code,{children:'Get-Content -Path "~\\.chia\\mainnet\\log\\debug.log" | Select-String -Pattern "error"'})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"harvester",children:"Harvester"}),"\n",(0,l.jsx)(n.p,{children:"The time it takes to do a proof challenge should be below 30 seconds. If you see higher times, something is wrong with your setup."}),"\n",(0,l.jsxs)(n.p,{children:["Here are some commands you can use to examine ",(0,l.jsx)(n.code,{children:"debug.log"})," for problems."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Linux/macOS:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"tail ~/.chia/mainnet/log/debug.log | grep eligible"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Windows:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "eligible"'})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "Found [^0] proof"'})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "Farmed unfinished_block"'})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'Get-Content -Path "~\\.chia\\mainnet\\log\\debug.log" -Wait | Select-String -Pattern "found"'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"plotting",children:"Plotting"}),"\n",(0,l.jsxs)(n.p,{children:["You can find the documentation for the ",(0,l.jsx)(n.code,{children:"check"})," command on the ",(0,l.jsx)(n.a,{href:"/cli#plots-check",children:"CLI Commands Reference page"})," page"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["To check all your plots, run ",(0,l.jsx)(n.code,{children:"chia plots check"}),". This will check all directories you have listed in your ",(0,l.jsx)(n.code,{children:"config.yaml"})," to contain plots."]}),"\n",(0,l.jsxs)(n.li,{children:["Use ",(0,l.jsx)(n.code,{children:"chia plots check -h"})," to see the options for this command."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"full-node",children:"Full Node"}),"\n",(0,l.jsx)(n.p,{children:"Block Validation Time"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Linux/macOS:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'grep -o "Block validation time: .* seconds" .chia/mainnet/log/debug.log |sort -rV | head -n 10'})}),"\n",(0,l.jsxs)(n.li,{children:["For a fancy grep ",(0,l.jsx)(n.code,{children:"apt install st-console"})," then run:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"grep \"Block validation time:\" ~/.chia/mainnet/log/debug.log* | awk '{print $8}' | st-console --summary -N"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Windows:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'Select-String -Path "~\\.chia\\mainnet\\log\\debug*" -Pattern "Block validation time:"'})}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var o=i(6540);const l={},s=o.createContext(l);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);