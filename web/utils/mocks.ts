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
