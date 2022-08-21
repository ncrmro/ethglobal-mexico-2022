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
  user: typeof mockUsers["address1"];
  message: string;
  sentiment: "agree" | "disagree" | "numeral";
  votingPower: number;
}

interface Post {
  id: string;
  title: string;
  state: ProposalState;
  comments: Comment[];
}

export const proposal: Post = {
  id: "1",
  title: "Should the next ETH Global be hosted in South Dakota",
  state: "Drafted" as ProposalState,
  comments: [
    {
      id: "1",
      user: mockUsers["address1"],
      message: "Why South Dakota, is this a joke?",
      sentiment: "agree",
      votingPower: 1,
    },
    {
      id: "2",
      user: mockUsers["address2"],
      message: "I've drafted a new proposal",
      sentiment: "disagree",
      votingPower: 7,
    },
  ],
};

export const proposals: Post[] = [
  proposal,
  {
    ...proposal,
    id: "2",
    title: "Should the next ETH Global be hosted in Australia",
    state: "Published",
  },
];
