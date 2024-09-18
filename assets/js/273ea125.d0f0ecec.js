"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8767],{5607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(4848),s=n(8453);const r={title:"Networking Protocol",slug:"/networking-protocol"},i=void 0,a={id:"protocol/networking-protocol",title:"Networking Protocol",description:"Shared networking protocol source",source:"@site/docs/protocol/networking-protocol.md",sourceDirName:"protocol",slug:"/networking-protocol",permalink:"/networking-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/networking-protocol.md",tags:[],version:"current",frontMatter:{title:"Networking Protocol",slug:"/networking-protocol"},sidebar:"tutorialSidebar",previous:{title:"Chia Protocol",permalink:"/chia-protocol"},next:{title:"Serialization Protocol",permalink:"/serialization-protocol"}},c={},d=[{value:"Handshake",id:"handshake",level:2},{value:"Heartbeat",id:"heartbeat",level:2},{value:"Introducer",id:"introducer",level:2},{value:"RPC",id:"rpc",level:2},{value:"Incoming and Outgoing Connections",id:"incoming-and-outgoing-connections",level:2},{value:"Bans",id:"bans",level:2},{value:"Certificates",id:"certificates",level:2},{value:"Peer gossiping",id:"peer-gossiping",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/shared_protocol.py",children:"Shared networking protocol source"})}),"\n",(0,o.jsx)(t.p,{children:"The Chia protocol is asynchronous and peer-to-peer. It runs on top of WebSockets on port 8444 (or other ports for farmers and timelords). All nodes act as both clients and servers, and can maintain long-term connections with other peers."}),"\n",(0,o.jsx)(t.p,{children:"Every message in the Chia protocol is composed of bytes, using the Streamable format, and sent as a WebSocket message. Each message is composed of three parts:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"A field spanning 1 byte, representing the type of message being transmitted, and how to decode the data."}),"\n",(0,o.jsx)(t.li,{children:"Second, an optional 2-byte ID, which is used per connection to keep track of requests and responses."}),"\n",(0,o.jsx)(t.li,{children:"The data, which is a Streamable encoded representation of one of the protocol messages."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Message(Streamable):\n    # one of ProtocolMessageTypes\n    type: uint8\n    # message id\n    id: Optional[uint16]\n    # Message data for that type\n    data: bytes\n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Chia protocol messages have a max length of ",(0,o.jsx)(t.code,{children:"(4 + 2^32 - 1) = 4294967299"})," bytes, or around 4 GB."]}),"\n",(0,o.jsx)(t.h2,{id:"handshake",children:"Handshake"}),"\n",(0,o.jsxs)(t.p,{children:["All peers in the Chia protocol (whether they are farmers, full nodes, timelords, etc.) act as both servers and clients (peers). As soon as a connection is initiated between two peers, both peers send a Handshake message, and a HandshakeAck message to complete the handshake. A peer's node_id is the SHA-256 hash of their ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/X.509",children:"x.509"})," ",(0,o.jsx)(t.a,{href:"https://wiki.openssl.org/index.php/DER",children:"DER"})," certificate."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Handshake(Streamable):\n    network_id: str                         # Network id, usually the genesis challenge of the blockchain\n    protocol_version: str                   # Protocol version to determine which messages the peer supports\n    software_version: str                   # Version of the software, to debug and determine feature support\n    server_port: uint16                     # Which port the server is listening on\n    node_type: uint8                        # NodeType (full node, wallet, farmer, etc.)\n    capabilities: List[Tuple[uint16, str]]  # Key value dict to signal support for additional capabilities/features\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"After the handshake is completed, both peers can send Chia protocol messages, and disconnect at any time by closing the WebSocket."}),"\n",(0,o.jsx)(t.h2,{id:"heartbeat",children:"Heartbeat"}),"\n",(0,o.jsx)(t.p,{children:"Heartbeat messages are sent periodically by the WebSocket libraries. Peers that are unresponsive will therefore be disconnected."}),"\n",(0,o.jsx)(t.p,{children:"If a node does not receive any message from a peer for a certain period of time, even if heartbeats are being received, then the node will disconnect and remove the peer from the active peer list."}),"\n",(0,o.jsx)(t.h2,{id:"introducer",children:"Introducer"}),"\n",(0,o.jsxs)(t.p,{children:["Please refer to the ",(0,o.jsx)(t.a,{href:"https://docs.chia.net/guides/seeder-user-guide/",children:"chia seeder documentation"})," for more information on setting up you own chia seeder / introducer and how to have it included in the default chia config.yaml."]}),"\n",(0,o.jsx)(t.p,{children:"When a new node joins the network, it randomly connects to existing nodes on the network."}),"\n",(0,o.jsx)(t.p,{children:"To facilitate this process, a number of introducer nodes will temporarily be run by Chia and other users, which will crawl the network and support one protocol message: get_peers_introducer. The introducer will then return a random subset of known recent peers that the calling node will attempt to connect to."}),"\n",(0,o.jsx)(t.p,{children:"DNS introducers are also available at different names, which return random reliable peers to connect to."}),"\n",(0,o.jsxs)(t.p,{children:["For example: ",(0,o.jsx)(t.code,{children:"dig dns-introducer.chia.net"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["More DNS introducers will be recruited in the future; check the ",(0,o.jsx)(t.a,{href:"https://github.com/Chia-Network/chia-blockchain",children:"chia-blockchain repository"})," for updates. The introducer is only contacted at initial launch of the application, or if the peer database has no good peers."]}),"\n",(0,o.jsx)(t.h2,{id:"rpc",children:"RPC"}),"\n",(0,o.jsx)(t.p,{children:"Aside from the Chia protocols described in the next page, there is also a local RPC protocol to allow simple control over a node or wallet through HTTPS. All requests and responses for the RPC protocol are in JSON, to simplify the interface. This allows doing things like getting the tips of the chain, getting a specific block, adding connections, stopping the node, etc. The full node UI connects to the full node using the RPC."}),"\n",(0,o.jsx)(t.p,{children:"The RPC APIs are provided in both WebSocket and HTTPS format."}),"\n",(0,o.jsx)(t.h2,{id:"incoming-and-outgoing-connections",children:"Incoming and Outgoing Connections"}),"\n",(0,o.jsx)(t.p,{children:"The Chia software has multiple rules and checks to make sure a node is connected to several good peers."}),"\n",(0,o.jsx)(t.p,{children:"For example, outgoing connections (connections which our node makes to external nodes) are ranked higher than incoming ones. This is because we cannot verify whether incoming peers are part of an attack or not."}),"\n",(0,o.jsx)(t.p,{children:"Each node will try to connect to 8 (implementation-dependent) external peers. As long as a node is connected to at least one fast and non-malicious peer, the node should be able to keep up with, and maintain, consensus with the heaviest blockchain."}),"\n",(0,o.jsx)(t.h2,{id:"bans",children:"Bans"}),"\n",(0,o.jsx)(t.p,{children:"If a peer appears to be acting dishonestly, it can be disconnected and temporarily banned from reconnecting. Reasons for banning include (but are not limited to) exceeding the limits provided for each type of protocol message, sending invalid information, and making the node throw an exception when handling a message."}),"\n",(0,o.jsx)(t.p,{children:"The duration of the ban depends on the severity of the issue. Care should be taken to not ban honest peers by accident. Different implementations might have larger or different rate limits as well."}),"\n",(0,o.jsx)(t.h2,{id:"certificates",children:"Certificates"}),"\n",(0,o.jsx)(t.p,{children:"All connections between nodes are encrypted and signed with X.509 signed certificates. Each node generates an X.509 certificate and signs it with the Chia CA (Valid To: January 21, 2031, Serial Number: 5c8a71239328650eb9fef85cec32bf779ca6a0c5) for node connections on port 8444. Node IDs are derived by hashing the public key of the certificate, so each node can have a consistent node ID to use for authentication. Each node will also generate and have its own private CA and self-sign certificates for local connections to services like farmer and harvester."}),"\n",(0,o.jsx)(t.h2,{id:"peer-gossiping",children:"Peer gossiping"}),"\n",(0,o.jsxs)(t.p,{children:["Peers are broadcasted within the network with ",(0,o.jsx)(t.code,{children:"request_peers"})," and ",(0,o.jsx)(t.code,{children:"respond_peers"})," messages. The ",(0,o.jsx)(t.code,{children:"respond_peers"})," message contains up to 1000 peers, each having its IP address, its port and an estimate of its last active timestamp."]}),"\n",(0,o.jsxs)(t.p,{children:["Data received from ",(0,o.jsx)(t.code,{children:"respond_peers"})," messages or from the introducers are stored in peer tables, similar to Bitcoin's. The tables will be used to randomly select peers in order to establish the outgoing connections. If we've successfully connected with the peer at least once, it is stored in the \"tried\" table. Otherwise, it is stored in the \"new\" table. The tried table protects the node from attacks (i.e. eclipse attacks), as an attacker won't be able to easily alter it (all peers initially go into the new table). Periodically, feeler connections are made in order to increase the number of entries in the tried table: we select a peer from the new table and if it's reachable, we move it to the tried table and then we disconnect it. Additionally, peer tables are stored on disk (in the ",(0,o.jsx)(t.code,{children:"peers.dat"})," file) every 15 to 30 minutes, and then loaded every time the node restarts."]}),"\n",(0,o.jsx)(t.p,{children:"Both new and tried tables optimize for the network groups of the entries to be as diverse as possible (/8 for ipv4 and /16 for ipv6). The rules of storing the bucket and the bucket position for a given peer depend on hashing the peer's network group, peer's port, sender's network group (peer that sent the \"respond_peers\" message containing our current peer), and a secret 32 byte key. This way, an attacker won't be able to predict the bucket and the bucket position where a peer will be stored, and only one entry will be stored within the similar network groups (as the bucket and the bucket position calculations will be identical for similar network group peers)."}),"\n",(0,o.jsxs)(t.p,{children:["When a new inbound peer connects to us, we relay its address to one peer we're connected to by sending a ",(0,o.jsx)(t.code,{children:"respond_peers"})," message. Similarly, when we receive a ",(0,o.jsx)(t.code,{children:"respond_peers"})," message containing only one peer, we relay its address to two peers we're connected to. This ensures when a new peer connects to the network, its address will be eventually known by everyone else. The relay peers are chosen deterministically by our key, the current day and their IP and port, by choosing the smallest value after hashing those values (while being deterministic, they also change every day). Additionally, our node sends its address once every 24 hours to all the peers it is connected to, to point that we're still online."]}),"\n",(0,o.jsx)(t.p,{children:"All the above update the timestamps of the peers. Additionally, we update the timestamp of our outbound connections, at most once every 20 minutes, after they send us a message."}),"\n",(0,o.jsxs)(t.p,{children:["Beside picking our outgoing connections, the peer tables are also used to respond to ",(0,o.jsx)(t.code,{children:"request_peers"})," messages. We pick random peers from both new and the tried table, assuming their timestamp is not too old and we don't have too many failed connections with them. Every time peer A connects to peer B, peer A will send peer B a ",(0,o.jsx)(t.code,{children:"request_peers"})," message. The answer will be a ",(0,o.jsx)(t.code,{children:"respond_peers"})," message that will help peer A bootstrap further."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);