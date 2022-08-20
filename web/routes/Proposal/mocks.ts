/**
 *
 */
export const proposal = {
  id: "1",
  title: "Should the next ETH Global be hosted in South Dakota",
  state: "Drafted" as "Drafted" | "Published" | "Passed" | "Failed",
  comments: [
    { id: "1", userId: "2", message: "Why South Dakota, is this a joke?" },
    { id: "2", userId: "3", message: "I've drafted a new proposal" },
  ],
};

export const proposals = [
  proposal,
  {
    ...proposal,
    id: "2",
    title: "Should the next ETH Global be hosted in Australia",
    state: "Published",
  },
];
