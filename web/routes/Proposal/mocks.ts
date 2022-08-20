import { mockUsers } from "../../utils/useWalletViewer";

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

export const proposals: Proposal[] = [
  proposal,
  {
    ...proposal,
    id: "2",
    title: "Should the next ETH Global be hosted in Australia",
    state: "Published",
  },
];
