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

export const accounts = [
  {
    address: "0x4269f41Fa8440CdbD1A919eEd9414bF96BDFB5eE",
    username: "juanforthemoney",
  },
  {
    address: "0x33A5529AF61C24B832C9C82C4f443862380063b7",
    username: "ncrmro",
  },
  {
    address: "0x25A5629AF61C24B832C9C82C4f443862380063b7",
    username: "devin_mathew",
  },
];

export const mockUsers = {
  address1: {
    username: "Dr Who",
  },
  address2: {
    username: "Batman",
  },
  address3: {
    username: "Iron Man",
  },
};

export const proposalState = [
  "Draft",
  "Published",
  "Passed",
  "Failed",
] as const;

export type ProposalState = typeof proposalState[number];

interface Comment {
  id: string;
  authorAddress: string;
  message: string;
  sentiment: "agree" | "disagree" | "numeral";
  votingPower: number;
}

interface Post {
  id: string;
  authorAddress: string;
  title: string;
  state: ProposalState;
  comments: Comment[];
}

interface DAO {
  id: string;
  title: string;
  contractAddress: string;
  tokenAddress: string;
  description: String;
}

interface Proposal {
  id: string;
  contractAddress: string;
  status: string;
  postID: string;
}

export const post: Post = {
  id: "1",
  title: "Should the next ETH Global be hosted in South Dakota",
  state: "Draft",
  authorAddress: accounts[0].address,
  comments: [
    {
      id: "1",
      authorAddress: accounts[2].address,
      message: "Why South Dakota, is this a joke?",
      sentiment: "agree",
      votingPower: 1,
    },
    {
      id: "2",
      authorAddress: accounts[1].address,
      message: "I've drafted a new proposal",
      sentiment: "disagree",
      votingPower: 7,
    },
  ],
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
  contractAddress: "0x408ED6354d4973f66138C91495F2f2FCbd8724C3",
  status: "ACTIVE",
  postID: "1",
};
