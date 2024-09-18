"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[921],{9569:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=s(4848),t=s(8453);const r={title:"Peer Protocol",slug:"/peer-protocol"},a=void 0,l={id:"protocol/peer-protocol",title:"Peer Protocol",description:"Peer protocol source",source:"@site/docs/protocol/peer-protocol.md",sourceDirName:"protocol",slug:"/peer-protocol",permalink:"/peer-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/peer-protocol.md",tags:[],version:"current",frontMatter:{title:"Peer Protocol",slug:"/peer-protocol"},sidebar:"tutorialSidebar",previous:{title:"Harvester Protocol",permalink:"/harvester-protocol"},next:{title:"Summary",permalink:"/pool-protocol"}},i={},c=[{value:"new_peak",id:"new_peak",level:2},{value:"new_transaction",id:"new_transaction",level:2},{value:"request_transaction",id:"request_transaction",level:2},{value:"respond_transaction",id:"respond_transaction",level:2},{value:"request_proof_of_weight",id:"request_proof_of_weight",level:2},{value:"respond_proof_of_weight",id:"respond_proof_of_weight",level:2},{value:"request_block",id:"request_block",level:2},{value:"respond_block",id:"respond_block",level:2},{value:"reject_block",id:"reject_block",level:2},{value:"request_blocks",id:"request_blocks",level:2},{value:"respond_blocks",id:"respond_blocks",level:2},{value:"reject_blocks",id:"reject_blocks",level:2},{value:"new_unfinished_block",id:"new_unfinished_block",level:2},{value:"request_unfinished_block",id:"request_unfinished_block",level:2},{value:"respond_unfinished_block",id:"respond_unfinished_block",level:2},{value:"new_signage_point_or_end_of_sub_slot",id:"new_signage_point_or_end_of_sub_slot",level:2},{value:"request_signage_point_or_end_of_sub_slot",id:"request_signage_point_or_end_of_sub_slot",level:2},{value:"respond_signage_point",id:"respond_signage_point",level:2},{value:"respond_end_of_sub_slot",id:"respond_end_of_sub_slot",level:2},{value:"request_mempool_transactions",id:"request_mempool_transactions",level:2},{value:"new_compact_vdf",id:"new_compact_vdf",level:2},{value:"request_compact_vdf",id:"request_compact_vdf",level:2},{value:"respond_compact_vdf",id:"respond_compact_vdf",level:2},{value:"request_peers",id:"request_peers",level:2},{value:"respond_peers",id:"respond_peers",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/full_node_protocol.py",children:"Peer protocol source"})}),"\n",(0,o.jsx)(n.p,{children:"This protocol is a bidirectional protocol for communication between full nodes in the Chia system.\nThe sender is the full node sending the message, and the recipient is the full node that is receiving the message."}),"\n",(0,o.jsx)(n.h2,{id:"new_peak",children:"new_peak"}),"\n",(0,o.jsx)(n.p,{children:"Sent to peers whenever our node's peak weight advances (whenever the blockchain moves forward).\nThe fork point allows peers to detect how deep of a reorg happened, and fetch the correct blocks.\nThe unfinished reward block hash allows the receiving peer to use their cache for unfinished blocks,\nsince they most likely already have the unfinished\nversion of the same block, and therefore don't need to re-request the block transactions generator."}),"\n",(0,o.jsx)(n.p,{children:"Usually, during normal operation, peers will ask for just the latest block, or\nignore this message if they have already received it from another peer. If we are a few blocks behind, blocks are\nfetched one by one in reverse order up to the fork."}),"\n",(0,o.jsx)(n.p,{children:"If we are far behind this peak, we will start a batch sync (download a few tens of blocks in batches) or a long sync,\nwhere we download a weight proof and then download many blocks in batches."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class NewPeak(Streamable):\n    header_hash: bytes32    # header_hash of new block\n    height: uint32          # height of new block\n    weight: uint128         # weight of new block\n    fork_point_with_previous_peak: uint32\n    unfinished_reward_block_hash: bytes32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"new_transaction",children:"new_transaction"}),"\n",(0,o.jsx)(n.p,{children:"Sent to peers when a new spend bundle has been added to the mempool. The receiving peer can then choose to ignore\nit, or request the whole transaction."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class NewTransaction(Streamable):\n    transaction_id: bytes32  # hash of the spend bundle\n    cost: uint64             # cost of the transaction, used to see if fees are sufficient for mempool inclusion\n    fees: uint64             # fees in mojo of transaction, used to see if fees are sufficient for mempool inclusion\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_transaction",children:"request_transaction"}),"\n",(0,o.jsx)(n.p,{children:"Request for a full transaction (spend bundle) from a peer by its id. If a peer does not respond, other peers are contacted\nfor the same transaction."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestTransaction(Streamable):\n    transaction_id: bytes32  # hash of the spendbundle\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_transaction",children:"respond_transaction"}),"\n",(0,o.jsxs)(n.p,{children:["Response for a ",(0,o.jsx)(n.code,{children:"request_transaction"})," message. Sends a spend bundle to a peer. To see the contents of a ",(0,o.jsx)(n.code,{children:"SpendBundle"}),", see the ",(0,o.jsx)(n.a,{href:"/spend-bundles",children:"Spend Bundles page"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondTransaction(Streamable):\n    transaction: SpendBundle\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_proof_of_weight",children:"request_proof_of_weight"}),"\n",(0,o.jsxs)(n.p,{children:["Request a weight proof from a peer. This is done right before starting a long sync. The weight proof allows our\nnode to validate whether a ",(0,o.jsx)(n.code,{children:"new_peak"}),' that we received from a peer corresponds to an actual valid blockchain. It is\nproof that a certain amount of "weight", or space and time, has been used on that blockchain.']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestProofOfWeight(Streamable):\n    total_number_of_blocks: uint32  # Height of the peak block\n    tip: bytes32                    # The header_hash of the peak block\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_proof_of_weight",children:"respond_proof_of_weight"}),"\n",(0,o.jsxs)(n.p,{children:["Response to a ",(0,o.jsx)(n.code,{children:"request_proof_of_weight"})," message. Note that weight proofs can be quite large, in the tens of MB range.\nIf the chain VDFs are compressed (aka blueboxed), then they weight proofs will be smaller.\nThis is the V1 version of weight proofs, more efficient versions might be added in the future."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondProofOfWeight(Streamable):\n    wp: WeightProof\n    tip: bytes32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_block",children:"request_block"}),"\n",(0,o.jsxs)(n.p,{children:["Request for a block at a certain height from a peer. Called after receiving a ",(0,o.jsx)(n.code,{children:"new_peak"})," message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestBlock(Streamable):\n    height: uint32                   # Height of the block to request\n    include_transaction_block: bool  # Whether to include transaction data\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_block",children:"respond_block"}),"\n",(0,o.jsxs)(n.p,{children:["Response to a ",(0,o.jsx)(n.code,{children:"request_block"})," message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondBlock(Streamable):\n    block: FullBlock\n"})}),"\n",(0,o.jsx)(n.h2,{id:"reject_block",children:"reject_block"}),"\n",(0,o.jsxs)(n.p,{children:["Rejection to a ",(0,o.jsx)(n.code,{children:"request_block"})," message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RejectBlock(Streamable):\n    height: uint32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_blocks",children:"request_blocks"}),"\n",(0,o.jsx)(n.p,{children:"Request multiple blocks at once from a peer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32               # Inclusive\n    include_transaction_block: bool  # Whether to include transaction data\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_blocks",children:"respond_blocks"}),"\n",(0,o.jsxs)(n.p,{children:["Response to a ",(0,o.jsx)(n.code,{children:"request_blocks"})," message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n    blocks: List[FullBlock]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"reject_blocks",children:"reject_blocks"}),"\n",(0,o.jsxs)(n.p,{children:["Rejection to a ",(0,o.jsx)(n.code,{children:"request_blocks"})," message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RejectBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"new_unfinished_block",children:"new_unfinished_block"}),"\n",(0,o.jsx)(n.p,{children:'Notification to another peer that a new unfinished block was added to the cache. These unfinished blocks are kept\naround temporarily, until the infusion point VDF is released, and the block can be "finished" and added to the blockchain.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class NewUnfinishedBlock(Streamable):\n    unfinished_reward_hash: bytes32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_unfinished_block",children:"request_unfinished_block"}),"\n",(0,o.jsx)(n.p,{children:"Request for an unfinished block from a peer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestUnfinishedBlock(Streamable):\n    unfinished_reward_hash: bytes32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_unfinished_block",children:"respond_unfinished_block"}),"\n",(0,o.jsxs)(n.p,{children:["Response to a ",(0,o.jsx)(n.code,{children:"request_unfinished_block"})," message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondUnfinishedBlock(Streamable):\n    unfinished_block: UnfinishedBlock\n"})}),"\n",(0,o.jsx)(n.h2,{id:"new_signage_point_or_end_of_sub_slot",children:"new_signage_point_or_end_of_sub_slot"}),"\n",(0,o.jsx)(n.p,{children:"Sent when the node adds a new signage point or a new end of sub slot to the full node store. The receiver can choose\nto request the object, or potentially request the previous sub slot, if they are far behind. For example, recently\nsynced up to the peak of the blockchain."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class NewSignagePointOrEndOfSubSlot(Streamable):\n    prev_challenge_hash: Optional[bytes32]  # Challenge hash at the start of the previous sub slot, if present\n    challenge_hash: bytes32                 # Challenge hash at the start of the sub slot\n    index_from_challenge: uint8             # Index from the start, 0 for end of sub slot\n    last_rc_infusion: bytes32               # Last reward chain infusion hash\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_signage_point_or_end_of_sub_slot",children:"request_signage_point_or_end_of_sub_slot"}),"\n",(0,o.jsx)(n.p,{children:"Request for a signage point or end of slot."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestSignagePointOrEndOfSubSlot(Streamable):\n    challenge_hash: bytes32\n    index_from_challenge: uint8\n    last_rc_infusion: bytes32\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_signage_point",children:"respond_signage_point"}),"\n",(0,o.jsxs)(n.p,{children:["Response for ",(0,o.jsx)(n.code,{children:"request_signage_point_or_end_of_sub_slot"}),". After receiving this message, the recipient will check that\nall VDFs are correct, and forward it to other full nodes and potentially farmers."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondSignagePoint(Streamable):\n    index_from_challenge: uint8       # Which index out of the 64 signage points, cannot be 0 since that is the EOS\n    challenge_chain_vdf: VDFInfo\n    challenge_chain_proof: VDFProof\n    reward_chain_vdf: VDFInfo\n    reward_chain_proof: VDFProof\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_end_of_sub_slot",children:"respond_end_of_sub_slot"}),"\n",(0,o.jsxs)(n.p,{children:["Another response for ",(0,o.jsx)(n.code,{children:"request_signage_point_or_end_of_sub_slot"})," in the case where ",(0,o.jsx)(n.code,{children:"index_from_challenge"})," is zero.\nThis is also verified and forwarded by the full node, similar to signage points."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondEndOfSubSlot(Streamable):\n    end_of_slot_bundle: EndOfSubSlotBundle\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_mempool_transactions",children:"request_mempool_transactions"}),"\n",(0,o.jsxs)(n.p,{children:["This is a request for transactions in the mempool. The filter corresponds to a BIP158 Compact Block Filter, which\nallows the recipient to see what transactions the sender already has (with some small chance for false positives),\nwithout sending all transaction IDs. The recipient can then respond using ",(0,o.jsx)(n.code,{children:"respond_transaction"})," directly, but should\nnot send a very large number of transactions, to not overwhelm the original sending peer."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestMempoolTransactions(Streamable):\n    filter: bytes\n"})}),"\n",(0,o.jsx)(n.h2,{id:"new_compact_vdf",children:"new_compact_vdf"}),"\n",(0,o.jsx)(n.p,{children:"A notification to a peer that a new compact VDF has been added to the blockchain. Compact VDFs\nare smaller versions of VDF proofs present in blocks. They do not change the block itself, they just\ncompress the block data to keep the DB smaller and sync time lower. The actual proof"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class NewCompactVDF(Streamable):\n    height: uint32           # Height of the block which has a new VDF\n    header_hash: bytes32     # Header hash of that block\n    field_vdf: uint8         # Which VDF in that block was updated (blocks have multiple VDFs)\n    vdf_info: VDFInfo        # Info of the VDF that was updated\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_compact_vdf",children:"request_compact_vdf"}),"\n",(0,o.jsx)(n.p,{children:"A request to a peer for a compact VDf."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RequestCompactVDF(Streamable):\n    height: uint32\n    header_hash: bytes32\n    field_vdf: uint8\n    vdf_info: VDFInfo\n"})}),"\n",(0,o.jsx)(n.h2,{id:"respond_compact_vdf",children:"respond_compact_vdf"}),"\n",(0,o.jsx)(n.p,{children:"A response to a peer that requested a compact VDF."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondCompactVDF(Streamable):\n    height: uint32\n    header_hash: bytes32\n    field_vdf: uint8\n    vdf_info: VDFInfo\n    vdf_proof: VDFProof\n"})}),"\n",(0,o.jsx)(n.h2,{id:"request_peers",children:"request_peers"}),"\n",(0,o.jsx)(n.p,{children:"Request a list of peers. There is no body in this message. This is usually sent when connecting\nto a peer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class RequestPeers(Streamable):\n    """\n    Return full list of peers\n    """\n'})}),"\n",(0,o.jsx)(n.h2,{id:"respond_peers",children:"respond_peers"}),"\n",(0,o.jsxs)(n.p,{children:["A response to ",(0,o.jsx)(n.code,{children:"request_peers"}),", containing a list of ip and port for each peer. Must be no larger than 1000.\nThe timestamp corresponds to the last time this peer's record was updated, based on the peer DB update rules."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class RespondPeers(Streamable):\n    peer_list: List[TimestampedPeerInfo]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var o=s(6540);const t={},r=o.createContext(t);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);