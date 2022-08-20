export const proposalState = [
  "Draft",
  "Published",
  "Passed",
  "Failed",
] as const;

export type ProposalState = typeof proposalState[number];

interface Comment {
  id: string;
  userId: string;
  message: string;
}

interface Proposal {
  id: string;
  title: string;
  state: ProposalState;
  comments: Comment[];
}

export const proposal: Proposal = {
  id: "1",
  title: "Should the next ETH Global be hosted in South Dakota",
  state: "Drafted" as ProposalState,
  comments: [
    { id: "1", userId: "2", message: "Why South Dakota, is this a joke?" },
    { id: "2", userId: "3", message: "I've drafted a new proposal" },
  ],
};

export const proposals: Proposal[] = [
  proposal,
  {
    ...proposal,
    id: "2",
    title: "Should the next ETH Global be hosted in Australia",
    state: "Published",
  },
];
