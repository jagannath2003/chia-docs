"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(7462),l=n(7294),i=n(6010),r=n(2466),o=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,l.useEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var k=n(2389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},r,{className:(0,i.Z)("tabs__item",f,r?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",b)},l.createElement(v,(0,a.Z)({},e,t)),l.createElement(y,(0,a.Z)({},e,t)))}function I(e){const t=(0,k.Z)();return l.createElement(w,(0,a.Z)({key:String(t)},e))}},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),i=n(4866),r=n(5162);const o={title:"Installation",slug:"/installation"},s=void 0,u={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"There are various ways to install Chia. The best method depends on what you intend to do.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/installation",permalink:"/zh/installation",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{title:"Installation",slug:"/installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zh/introduction"},next:{title:"Using the GUI",permalink:"/zh/using-the-gui"}},c={},p=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Drive Format",id:"drive-format",level:3},{value:"Install",id:"install",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"From Source",id:"from-source",level:3},{value:"Directory Structure",id:"directory-structure",level:2},{value:"CLI Setup",id:"cli-setup",level:2},{value:"Install GUI",id:"install-gui",level:3},{value:"Initial Startup",id:"initial-startup",level:3}],h={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are various ways to install Chia. The best method depends on what you intend to do."),(0,l.kt)("p",null,"If you plan to use Chia as a wallet or to run a farm on a personal computer, we recommend installing the GUI from our ",(0,l.kt)("a",{parentName:"p",href:"https://www.chia.net/downloads"},"official downloads page"),". The best way to install the GUI on Linux is the command line, ",(0,l.kt)("a",{parentName:"p",href:"#using-the-cli"},"as described below"),". The GUI is the simplest way to interact with the Chia client."),(0,l.kt)("p",null,"However, if you intend to run a Chia full node on a server and connect to it programatically using the ",(0,l.kt)("a",{parentName:"p",href:"/rpc"},"RPC interface"),", the best method would be to install and run Chia on the command line."),(0,l.kt)("p",null,"Finally, if you plan on making contributions to the source code or doing ",(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com"},"Chialisp")," development, we recommend installing Chia from source. This gives the highest level of flexibility."),(0,l.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,l.kt)("p",null,"The minimum supported specs are that of the Raspberry Pi 4, 4GB model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quad core 1.5Ghz CPU (must be 64 bit)"),(0,l.kt)("li",{parentName:"ul"},"4 GB RAM"),(0,l.kt)("li",{parentName:"ul"},"Python versions between 3.7 and 3.10 are supported")),(0,l.kt)("h3",{id:"drive-format"},"Drive Format"),(0,l.kt)("p",null,"Chia plot files are at least 108GB in size (for K32). To plot successfully requires drives formatted to support large files. Formats that will work include NTFS, APFS, exFAT, and ext4. Do not use drives with FAT formatting (for example FAT12, FAT16, and FAT32), or else plotting will fail. Future versions of Chia will check for unsupported drives, but for now it's up to each user to check their drive format."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("h3",{id:"using-the-cli"},"Using the CLI"),(0,l.kt)(i.Z,{defaultValue:"apt",groupId:"install",values:[{label:"APT",value:"apt"},{label:"YUM",value:"yum"},{label:"DNF",value:"dnf"},{label:"PIP",value:"pip"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"apt",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Install packages\nsudo apt-get update\nsudo apt-get install ca-certificates curl gnupg\n\n# Add GPG key\ncurl -sL https://repo.chia.net/FD39E6D3.pubkey.asc | sudo gpg --dearmor -o /usr/share/keyrings/chia.gpg\n\n# Set up repository\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/chia.gpg] https://repo.chia.net/debian/ stable main" | sudo tee /etc/apt/sources.list.d/chia.list > /dev/null\nsudo apt-get update\n\n# Install chia-blockchain\nsudo apt-get install chia-blockchain\n\n# Use chia-blockchain-cli instead for CLI only\n'))),(0,l.kt)(r.Z,{value:"yum",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install packages\nsudo yum install -y yum-utils\nsudo yum-config-manager --add-repo https://repo.chia.net/rhel/chia-blockchain.repo\n\n# Install chia-blockchain\nsudo yum install chia-blockchain\n\n# Use chia-blockchain-cli for CLI only\n"))),(0,l.kt)(r.Z,{value:"dnf",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install packages\nsudo dnf install 'dnf-command(config-manager)'\nsudo dnf config-manager --add-repo https://repo.chia.net/rhel/chia-blockchain.repo\n\n# Install chia-blockchain\nsudo dnf install chia-blockchain\n\n# Use chia-blockchain-cli for CLI only\n"))),(0,l.kt)(r.Z,{value:"pip",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,l.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-3109"},"Python 3.10")," and ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")," installed.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Create virtual environment\npython -m venv venv\n\n# Activate virtual environment\n. ./venv/bin/activate # MacOS / Linux\n./venv/Scripts/Activate.ps1 # Windows\n\n# Update pip\npip install --upgrade pip\n\n# Install chia-blockchain\npip install --extra-index-url https://pypi.chia.net/simple chia-blockchain miniupnpc\n")),(0,l.kt)("p",null,"Chia strives to provide ",(0,l.kt)("a",{parentName:"p",href:"https://pythonwheels.com"},"binary wheels")," for modern systems. If your system does not have binary wheels, you may need to install development tools to build some Python extensions from source. If you're attempting to install from source, setting the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"BUILD_VDF_CLIENT")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," will skip trying to build Timelord components that aren't very cross platform, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"export BUILD_VDF_CLIENT=N"),"."))),(0,l.kt)("h3",{id:"from-source"},"From Source"),(0,l.kt)(i.Z,{defaultValue:"linux-macos",groupId:"source",values:[{label:"Linux/MacOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"linux-macos",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,l.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-3109"},"Python 3.10")," and ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")," installed.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Download chia-blockchain\ngit clone https://github.com/Chia-Network/chia-blockchain -b latest --recurse-submodules\n\n# Change directory\ncd chia-blockchain\n\n# Install dependencies\nsh install.sh\n\n# Activate virtual environment\n. ./activate\n\n# Initialize\nchia init\n")),(0,l.kt)("p",null,"The following is how you update to the latest version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Change directory\ncd chia-blockchain\n\n# Activate the virtual environment\n. ./activate\n\n# Stop running services\nchia stop -d all\n\n# Deactivate the virtual environment\ndeactivate\n\n# Pull the latest version\ngit fetch\ngit checkout latest\ngit reset --hard FETCH_HEAD --recurse-submodules\n\n# If you get RELEASE.dev0 then delete the package-lock.json in chia-blockchain-gui and install.sh again\n\n# This should say "nothing to commit, working tree clean"\n# if you have uncommitted changes, RELEASE.dev0 will be reported\ngit status\n\n# Install the new version\nsh install.sh\n\n# Activate the virtual environment\n. ./activate\n\n# Initialize the new version\nchia init\n'))),(0,l.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,l.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-3109"},"Python 3.10")," and ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git")," installed.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Download chia-blockchain\ngit clone https://github.com/Chia-Network/chia-blockchain -b latest --recurse-submodules\n\n# Change directory\ncd chia-blockchain\n\n# Install dependencies\n./Install.ps1\n\n# Activate virtual environment\n. ./venv/Scripts/Activate.ps1\n\n# Initialize\nchia init\n")),(0,l.kt)("p",null,"The following is how you update to the latest version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Change directory\ncd chia-blockchain\n\n# Activate the virtual environment\n. ./venv/Scripts/Activate.ps1\n\n# Stop running services\nchia stop -d all\n\n# Deactivate the virtual environment\ndeactivate\n\n# Pull the latest version\ngit fetch\ngit checkout latest\ngit reset --hard FETCH_HEAD --recurse-submodules\n\n# If you get RELEASE.dev0 then delete the package-lock.json in chia-blockchain-gui and install.sh again\n\n# This should say "nothing to commit, working tree clean"\n# if you have uncommitted changes, RELEASE.dev0 will be reported\ngit status\n\n# Install the new version\n./Install.ps1\n\n# Activate the virtual environment\n. ./venv/Scripts/Activate.ps1\n\n# Initialize the new version\nchia init\n'))),(0,l.kt)(r.Z,{value:"windows",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,l.kt)("p",null,"All data used by the Chia blockchain is stored at the location set with the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHIA_ROOT")," environment variable, which defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet")," if unset."),(0,l.kt)("p",null,"The blockchain database is stored under the ",(0,l.kt)("inlineCode",{parentName:"p"},"db")," subdirectory. It is possible to copy the database file to use as a backup or put on another machine. To resync the full node from the start, delete the database file and restart the node."),(0,l.kt)("p",null,"The config file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," subdirectory. Its name is ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml"),", and it can be used to find the root cause of problems."),(0,l.kt)("p",null,"It is possible to configure the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHIA_ROOT")," environment variable to another location. A common use for this would be to switch it to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.chia/testnet")," to have a separate config for the testnet."),(0,l.kt)("h2",{id:"cli-setup"},"CLI Setup"),(0,l.kt)("p",null,"Using the CLI gives greater and more precise control over the various Chia services such as the full node. For a more details on the commands, read the ",(0,l.kt)("a",{parentName:"p",href:"/cli"},"CLI Reference"),"."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"MacOS",label:"MacOS",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"The CLI commands are stored in the following location:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon\n")),(0,l.kt)("p",null,"To be able to use these commands without going to that directory in the terminal, add it to the path."),(0,l.kt)("p",null,"This can be done by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon:$PATH\n")),(0,l.kt)("p",null,"To load this on startup, add it to the ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".bash_profile"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file depending on which is used by the shell.")),(0,l.kt)(r.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"The CLI commands are stored in the following location:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"~\\AppData\\Local\\Programs\\Chia\\resources\\app.asar.unpacked\\daemon\n")),(0,l.kt)("p",null,"To be able to use these commands without going to that directory in the terminal, add it to the path."),(0,l.kt)("p",null,"This can be done by doing the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Right-click on the Start menu"),(0,l.kt)("li",{parentName:"ul"},'Click on "System"'),(0,l.kt)("li",{parentName:"ul"},'Click "Advanced system settings"'),(0,l.kt)("li",{parentName:"ul"},'Click "Environment variables"'),(0,l.kt)("li",{parentName:"ul"},'Double-click "Path"'),(0,l.kt)("li",{parentName:"ul"},'Click "Add"'),(0,l.kt)("li",{parentName:"ul"},"Enter the path shown above"))),(0,l.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you installed Chia from source, the CLI will not require any further setup.")),(0,l.kt)("p",null,"If you installed Chia with the Linux installer files, the CLI commands are stored in one of the following locations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia\n/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia\n")),(0,l.kt)("p",null,"To be able to use these commands without going to that directory in the terminal, add it to the path."),(0,l.kt)("p",null,"This can be done by running either of the following commands, depending on which path is used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/usr/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia:$PATH\nexport PATH=/lib/chia-blockchain/resources/app.asar.unpacked/daemon/chia:$PATH\n")),(0,l.kt)("p",null,"To load this on startup, add it to the ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".bash_profile"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file depending on which is used by the shell."))),(0,l.kt)("h3",{id:"install-gui"},"Install GUI"),(0,l.kt)("p",null,"The GUI is a simpler method of interacting with Chia, and it can be installed manually from the CLI."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"MacOS / Linux",label:"MacOS / Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the GUI\n. ./install-gui.sh\n\n# Start the GUI\nsh start-gui.sh\n")),(0,l.kt)("p",null,"The following is how you update to the latest version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Change directory into the GUI\ncd chia-blockchain-gui\n\n# Pull the latest version\ngit fetch\n\n# Change directory\ncd ..\n\n# Change permissions on install script\nchmod +x ./install-gui.sh\n\n# Install the new version of the GUI\n./install-gui.sh\n\n# Start the GUI\nbash start-gui.sh\n"))),(0,l.kt)(r.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the GUI\n. .\\Install-gui.ps1\n\n# Change directory\ncd chia-blockchain-gui\n\n# Start the GUI\nStart-Process -NoNewWindow npm run electron\n")),(0,l.kt)("p",null,"The following is how you update to the latest version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Change directory\ncd chia-blockchain-gui\n\n# Pull the latest version\ngit fetch\n\n# Change directory\ncd ..\n\n# Install the new version of the GUI\n./Install-gui.ps1\n\n# Change directory\ncd chia-blockchain-gui\n\n# Start the GUI\nStart-Process -NoNewWindow npm run electron\n")))),(0,l.kt)("h3",{id:"initial-startup"},"Initial Startup"),(0,l.kt)("p",null,"Whereas the GUI will set everything up automatically, the setup needs to be done manually on the CLI."),(0,l.kt)("p",null,"First, initialize the Chia configuration files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia init\n")),(0,l.kt)("p",null,"Then, generate your keys:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys generate\n")),(0,l.kt)("p",null,"Finally, start the farmer and its full node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia start farmer\n")))}d.isMDXComponent=!0}}]);