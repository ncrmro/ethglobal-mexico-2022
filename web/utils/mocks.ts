// enum ProposalState {
//   Pending,
//   Active,
//   Canceled,
//   Defeated,
//   Succeeded,
//   Queued,
//   Expired,
//   Executed
// }

export interface User {
  address: string;
  username: string;
  daos: Record<string, { tokenCount: number; votingPower: number }>;
}

const testDAO: User["daos"][string] = { tokenCount: 12, votingPower: 1 };

export const accounts: User[] = [
  {
    address: "0x4269f41Fa8440CdbD1A919eEd9414bF96BDFB5eE",
    username: "juanforthemoney",
    daos: {
      testDAO,
    },
  },
  {
    address: "0x33A5529AF61C24B832C9C82C4f443862380063b7",
    username: "ncrmro",
    daos: {
      testDAO,
    },
  },
  {
    address: "0x25A5629AF61C24B832C9C82C4f443862380063b7",
    username: "devin_mathew",
    daos: {
      testDAO,
    },
  },
];

export const proposalState = [
  "Draft",
  "Published",
  "Passed",
  "Failed",
] as const;

export type ProposalState = typeof proposalState[number];

export interface CommentType {
  id: string;
  author: User;
  message: string;
  sentiment: "agree" | "disagree" | "numeral";
}

export interface Post {
  id: string;
  authorAddress: string;
  doaId: string;
  proposalId?: string;
  title: string;
  state: ProposalState;
  comments: CommentType[];
}

export interface DAO {
  id: string;
  title: string;
  contractAddress: string;
  tokenAddress: string;
  description: String;
}

export interface Proposal {
  id: string;
  doaId: string;
  authorAddress: string;
  contractAddress: string;
  title: string;
  status: string;
  postID: string;
}

export const comments: CommentType[] = [
  {
    id: "1",
    author: accounts[2],
    message: "Why South Dakota, is this a joke?",
    sentiment: "agree",
  },
  {
    id: "2",
    author: accounts[1],
    message: "I've drafted a new proposal",
    sentiment: "disagree",
  },
];
export const post: Post = {
  id: "1",
  doaId: "",
  title: "Should the next ETH Global be hosted in South Dakota",
  state: "Draft",
  authorAddress: accounts[0].address,
  comments,
};

export const posts: Post[] = [
  post,
  {
    ...post,
    id: "2",
    title: "Should the next ETH Global be hosted in Australia",
    state: "Published",
  },
];

export const dao: DAO = {
  id: "UNI",
  title: "UNISWAP",
  contractAddress: "0x408ED6354d4973f66138C91495F2f2FCbd8724C3",
  tokenAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  description:
    "The Uniswap protocol is a peer-to-peer1 system designed for exchanging cryptocurrencies (ERC-20 Tokens) on the Ethereum blockchain. The protocol is implemented as a set of persistent, non-upgradable smart contracts; designed to prioritize censorship resistance, security, self-custody, and to function without any trusted intermediaries who may selectively restrict access.",
};

export const daos: DAO[] = [
  dao,
  {
    ...dao,
    id: "DAO",
    title: "DUMBDAO",
    contractAddress: "0x0000000000",
    tokenAddress: "0x000000000",
    description: "Some dummmy info about a dao that is super cool",
  },
];

export const proposal: Proposal = {
  id: "1",
  title: "Should the next ETH Global be hosted in South Dakota",
  doaId: dao.id,
  authorAddress: accounts[1].address,
  contractAddress: "0x408ED6354d4973f66138C91495F2f2FCbd8724C3",
  status: "ACTIVE",
  postID: "1",
};

export const proposals: Proposal[] = [
  proposal,
  {
    ...proposal,
    title: "Should the next ETH Global be hosted in Australia",
    id: "2",
    contractAddress: "0x0000000000000000",
    status: "EXPIRED",
    postID: "2",
  },
];
