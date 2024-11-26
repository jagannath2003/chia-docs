"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[331],{3972:(e,X,t)=>{t.r(X),t.d(X,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"rpc-reference/rpc","title":"RPC Overview","description":"The Chia node and services come with a JSON RPC API server that allows you to access information and control the services.","source":"@site/docs/rpc-reference/rpc.md","sourceDirName":"rpc-reference","slug":"/rpc","permalink":"/rpc","draft":false,"unlisted":false,"editUrl":"https://github.com/Chia-Network/chia-docs/blob/main/docs/rpc-reference/rpc.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Overview","title":"RPC Overview","slug":"/rpc"},"sidebar":"tutorialSidebar","previous":{"title":"Coin Selection","permalink":"/coin-selection"},"next":{"title":"DAOs","permalink":"/dao-rpc"}}');var n=t(4848),a=t(8453);const s={sidebar_label:"Overview",title:"RPC Overview",slug:"/rpc"},r=void 0,c={},o=[{value:"Default Ports:",id:"default-ports",level:3},{value:"HTTP/JSON",id:"httpjson",level:3},{value:"WebSockets",id:"websockets",level:3},{value:"WebSockets Example (courtesy of baerrs)",id:"websockets-example-courtesy-of-baerrs",level:4},{value:"WebSockets Example Output",id:"websockets-example-output",level:4},{value:"Python",id:"python",level:3},{value:"Python Example (courtesy of baerrs)",id:"python-example-courtesy-of-baerrs",level:4},{value:"Javascript",id:"javascript",level:3},{value:"C# Example (courtesy of Kryptomine)",id:"c-example-courtesy-of-kryptomine",level:4},{value:"Services",id:"services",level:2}];function l(e){const X={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(X.p,{children:["The Chia node and services come with a JSON RPC API server that allows you to access information and control the services.\nThese are accessible via HTTP, WebSockets, or via client SDKs.\nThe ports can be configured in ",(0,n.jsx)(X.code,{children:"~/.chia/mainnet/config/config.yaml"}),".\nThe RPC ports should not be exposed to the internet.\nTLS certificates are used to secure the communication."]}),"\n",(0,n.jsx)(X.h3,{id:"default-ports",children:"Default Ports:"}),"\n",(0,n.jsxs)(X.ul,{children:["\n",(0,n.jsx)(X.li,{children:"Daemon: 55400"}),"\n",(0,n.jsx)(X.li,{children:"Full Node: 8555"}),"\n",(0,n.jsx)(X.li,{children:"Farmer: 8559"}),"\n",(0,n.jsx)(X.li,{children:"Harvester: 8560"}),"\n",(0,n.jsx)(X.li,{children:"Wallet: 9256"}),"\n",(0,n.jsx)(X.li,{children:"DataLayer: 8562"}),"\n"]}),"\n",(0,n.jsx)(X.h3,{id:"httpjson",children:"HTTP/JSON"}),"\n",(0,n.jsx)(X.p,{children:"The certificates must be used when calling the RPCs from the command line, make sure to use the correct certificates for the services you are calling.\nAll endpoints are made with POST with JSON data. The response is a JSON dictionary with a success field, which can be true or false."}),"\n",(0,n.jsx)(X.h3,{id:"websockets",children:"WebSockets"}),"\n",(0,n.jsxs)(X.p,{children:["If you are using the Websockets API, you can go directly through the daemon, which routes requests. Each WebSocket message contains the following fields:\nSome examples can be found here: ",(0,n.jsx)(X.a,{href:"https://github.com/Chia-Mine/chia-agent",children:"https://github.com/Chia-Mine/chia-agent"}),"."]}),"\n",(0,n.jsx)(X.pre,{children:(0,n.jsx)(X.code,{className:"language-json",children:'{\n  "command": "get_blockchain_state",\n  "ack": false,\n  "data": {},\n  "request_id": "123456",\n  "destination": "wallet",\n  "origin": "ui"\n}\n'})}),"\n",(0,n.jsxs)(X.h4,{id:"websockets-example-courtesy-of-baerrs",children:["WebSockets Example (courtesy of ",(0,n.jsx)(X.a,{href:"https://github.com/baerrs",children:"baerrs"}),")"]}),"\n",(0,n.jsx)(X.pre,{children:(0,n.jsx)(X.code,{className:"language-json",children:'import json\nfrom datetime import datetime\nimport websocket\nimport ssl\n\n\n# websocket.enableTrace(True)\ndef on_message(ws, message):\n    print(\'{0}: Got message: {1}\'.format(datetime.now(), message))\n\n\ndef on_error(self, error):\n    print(\'Error in websocket: {0}\'.format(error))\n\n\ndef on_close(self, ws, e):\n    print("{0]: Websocket closed: {1}".format(datetime.now(), e))\n\n\ndef on_open(self):\n    print(\'{0}: Connected to Websocket\'.format(datetime.now()))\n    message = {"destination": "daemon", "command": "register_service", "request_id": "123456ca", "origin": "", "data": { "service": \'chia_agent\'}}\n    on_send_message(self, message)\n    message = {"destination": "daemon", "command": "register_service", "request_id": "123456w", "origin": "", "data": { "service": \'wallet_ui\'}}\n    on_send_message(self, message)\n\ndef on_send_message(ws, message):\n    print(\'{0}: Sent Message: {1}\'.format(datetime.now(), message))\n    wsapp.send(json.dumps(message))\n\n\ndef on_ping(ws, data):\n    print(\'{0}: Got ping: {1}\'.format(datetime.now(), data))\n\n\nprint("Starting Something")\nwsapp = websocket.WebSocketApp("wss://localhost:55400",\n                               on_open=on_open,\n                               on_message=on_message,\n                               on_error=on_error,\n                               on_ping=on_ping)\n\nwsapp.run_forever(sslopt={"cert_reqs": ssl.CERT_NONE, "certfile": "ssl/daemon/private_daemon.crt",\n                          "keyfile": "ssl/daemon/private_daemon.key", "ssl_context.check_hostname": False})\nwsapp.close()\n'})}),"\n",(0,n.jsx)(X.h4,{id:"websockets-example-output",children:"WebSockets Example Output"}),"\n",(0,n.jsxs)(X.p,{children:["(Long strings have been replaced with ",(0,n.jsx)(X.code,{children:"XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}),".)"]}),"\n",(0,n.jsx)(X.pre,{children:(0,n.jsx)(X.code,{className:"language-json",children:'Starting Something\n2022-01-24 21:20:39.782297: Connected to Websocket\n2022-01-24 21:20:39.782297: Sent Message: {\'destination\': \'daemon\', \'command\': \'register_service\', \'request_id\': \'123456ca\', \'origin\': \'\', \'data\': {\'service\': \'chia_agent\'}}\n2022-01-24 21:20:39.782297: Sent Message: {\'destination\': \'daemon\', \'command\': \'register_service\', \'request_id\': \'123456w\', \'origin\': \'\', \'data\': {\'service\': \'wallet_ui\'}}\n2022-01-24 21:20:39.782297: Got message: {"ack": true, "command": "register_service", "data": {"success": true}, "destination": "", "origin": "daemon", "request_id": "123456ca"}\n2022-01-24 21:20:39.782297: Got message: {"ack": true, "command": "register_service", "data": {"success": true}, "destination": "", "origin": "daemon", "request_id": "123456w"}\n2022-01-24 21:20:45.053029: Got message: {"ack": false, "command": "get_connections", "data": {"connections": [{"bytes_read": 3094726, "bytes_written": 1545670, "creation_time": 1642488338.7817655, "last_message_time": 1643077239.4690468, "local_port": 8447, "node_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "peer_host": "127.0.0.1", "peer_port": 3445, "peer_server_port": 8448, "type": 2}, {"bytes_read": 870298, "bytes_written": 51, "creation_time": 1642743064.406306, "last_message_time": 1643077239.4690468, "local_port": 8447, "node_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "peer_host": "127.0.0.1", "peer_port": 8444, "peer_server_port": 8444, "type": 1}], "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:48.417804: Got message: {"ack": false, "command": "new_signage_point", "data": {"proofs": [], "signage_point": {"challenge_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "difficulty": 2672, "reward_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "signage_point_index": 8, "sub_slot_iters": 135266304}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:48.417804: Got message: {"ack": false, "command": "new_farming_info", "data": {"farming_info": {"challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "passed_filter": 0, "proofs": 0, "signage_point": "0x35e9aaf13ebca31660f9720f97cf2c127a01a24440a6a253b5953196da715162", "timestamp": 1643077248, "total_plots": 3}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:57.402740: Got message: {"ack": false, "command": "new_signage_point", "data": {"proofs": [], "signage_point": {"challenge_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "difficulty": 2672, "reward_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "signage_point_index": 9, "sub_slot_iters": 135266304}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:57.402740: Got message: {"ack": false, "command": "new_farming_info", "data": {"farming_info": {"challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "passed_filter": 0, "proofs": 0, "signage_point": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "timestamp": 1643077257, "total_plots": 3}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n'})}),"\n",(0,n.jsx)(X.h3,{id:"python",children:"Python"}),"\n",(0,n.jsxs)(X.p,{children:["Most of the rpc methods are accessible through the different client objects in ",(0,n.jsx)(X.code,{children:"chia-blockchain/chia/rpc"}),".\nFor examples of usage, see the command line implementation (chia wallet, chia show, etc)."]}),"\n",(0,n.jsxs)(X.h4,{id:"python-example-courtesy-of-baerrs",children:["Python Example (courtesy of ",(0,n.jsx)(X.a,{href:"https://github.com/baerrs",children:"baerrs"}),")"]}),"\n",(0,n.jsx)(X.pre,{children:(0,n.jsx)(X.code,{className:"language-python",children:"import requests\nimport urllib3\nimport json\nurllib3.disable_warnings()\n\nheaders = {'Content-Type': 'application/json'}\nurl = \"https://localhost:8555/get_blockchain_state\"\ndata = '{}'\ncert = ('ssl/full_node/private_full_node.crt', 'ssl/full_node/private_full_node.key')\nresponse = json.loads(requests.post(url, data=data, headers=headers, cert=cert, verify=False).text)\nprint(json.dumps(response, indent=4, sort_keys=True))\n"})}),"\n",(0,n.jsx)(X.h3,{id:"javascript",children:"Javascript"}),"\n",(0,n.jsxs)(X.p,{children:["A javascript client can be found here: ",(0,n.jsx)(X.a,{href:"https://github.com/Chia-Mine/chia-agent",children:"https://github.com/Chia-Mine/chia-agent"}),".\nThere is also another client here: ",(0,n.jsx)(X.a,{href:"https://github.com/freddiecoleman/chia-client",children:"https://github.com/freddiecoleman/chia-client"}),"."]}),"\n",(0,n.jsxs)(X.h4,{id:"c-example-courtesy-of-kryptomine",children:["C# Example (courtesy of ",(0,n.jsx)(X.a,{href:"https://www.nuget.org/profiles/Kryptomine.ch",children:"Kryptomine"}),")"]}),"\n",(0,n.jsxs)(X.p,{children:["A C# Client can be found on Nuget/Github: ",(0,n.jsx)(X.a,{href:"https://www.nuget.org/packages/Chia-Client-API",children:"https://www.nuget.org/packages/Chia-Client-API"})]}),"\n",(0,n.jsx)(X.pre,{children:(0,n.jsx)(X.code,{className:"language-C#",children:"using System;\nusing Chia_Client_API.WalletAPI_NS;\nusing CHIA_RPC.General_NS;\nusing CHIA_RPC.Wallet_NS.Wallet_NS;\n\nnamespace ChiaExamples\n{\n    internal class Program\n    {\n        private static Wallet_RPC_Client Wallet = new Wallet_RPC_Client(reportResponseErrors: false);\n\n        public static void Main()\n        {\n            WalletID_RPC walletID_RPC = new WalletID_RPC(1);\n            GetWalletBalance_Response response = Wallet.GetWalletBalance_Sync(walletID_RPC);\n            Console.WriteLine(response.wallet_balance.confirmed_wallet_balance_in_xch);\n            Console.ReadKey();\n        }\n    }\n}\n"})}),"\n",(0,n.jsx)(X.h2,{id:"services",children:"Services"}),"\n",(0,n.jsxs)(X.table,{children:[(0,n.jsx)(X.thead,{children:(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.th,{children:"Service"}),(0,n.jsx)(X.th,{children:"Managed Objects"}),(0,n.jsx)(X.th,{children:"Associated API"}),(0,n.jsx)(X.th,{children:"Associated RPC API"})]})}),(0,n.jsxs)(X.tbody,{children:[(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"FarmerService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/farmer/farmer.py",children:"Farmer"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/farmer/farmer_api.py",children:"FarmerAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/farmer_rpc_api.py",children:"FarmerRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"FullNodeService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/full_node/full_node.py",children:"FullNode"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/full_node/full_node_api.py",children:"FullNodeAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/full_node_rpc_api.py",children:"FullNodeRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"HarvesterService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/harvester/harvester.py",children:"Harvester"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/harvester/harvester_api.py",children:"HarvesterAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/harvester_rpc_api.py",children:"HarvesterRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"IntroducerService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/introducer/introducer.py",children:"Introducer"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/introducer/introducer_api.py",children:"IntroducerAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/full_node_rpc_api.py",children:"FullNodeRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"CrawlerService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/seeder/crawler.py",children:"Crawler"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/seeder/crawler_api.py",children:"CrawlerAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/crawler_rpc_api.py",children:"CrawlerRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"DataLayerService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/data_layer.py",children:"DataLayer"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/data_layer_api.py",children:"DataLayerAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/data_layer_rpc_api.py",children:"DataLayerRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"TimelordService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/timelord/timelord.py",children:"Timelord"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/timelord/timelord_api.py",children:"TimelordAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/timelord_rpc_api.py",children:"TimelordRpcApi"})})]}),(0,n.jsxs)(X.tr,{children:[(0,n.jsx)(X.td,{children:"WalletService"}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/wallet_node.py",children:"WalletNode"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/wallet_node_api.py",children:"WalletNodeAPI"})}),(0,n.jsx)(X.td,{children:(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/rpc/wallet_rpc_api.py",children:"WalletRpcApi"})})]})]})]}),"\n",(0,n.jsxs)(X.p,{children:[(0,n.jsx)(X.strong,{children:"Explanation:"}),"\nEach service is composed of a managed object, an API for control, and an RPC API for remote control. The combination of these into the service is controlled by the ",(0,n.jsx)(X.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/types/aliases.py",children:"service alias"})," types."]}),"\n",(0,n.jsxs)(X.ul,{children:["\n",(0,n.jsxs)(X.li,{children:[(0,n.jsx)(X.strong,{children:"Service"}),": This column lists the different manager services within the Chia system."]}),"\n",(0,n.jsxs)(X.li,{children:[(0,n.jsx)(X.strong,{children:"Managed Objects"}),": This column details the core entities or components that each service oversees."]}),"\n",(0,n.jsxs)(X.li,{children:[(0,n.jsx)(X.strong,{children:"Associated API"}),": This column specifies the API class associated with each service. This API class defines the interface for interacting with the corresponding managed objects."]}),"\n",(0,n.jsxs)(X.li,{children:[(0,n.jsx)(X.strong,{children:"Associated RPC API"}),": This column lists the RPC API class associated with each service. This RPC API class allows for remote control of the managed objects through Remote Procedure Calls (RPC)."]}),"\n"]})]})}function h(e={}){const{wrapper:X}={...(0,a.R)(),...e.components};return X?(0,n.jsx)(X,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,X,t)=>{t.d(X,{R:()=>s,x:()=>r});var i=t(6540);const n={},a=i.createContext(n);function s(e){const X=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(X):{...X,...e}}),[X,e])}function r(e){let X;return X=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:X},e.children)}}}]);