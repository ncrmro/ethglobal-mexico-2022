import {
  accounts,
  comments,
  CommentType,
  proposal as mockedData,
  Proposal as ProposalType,
  User,
} from "../../utils/mocks";

export interface ProposalApiRes extends Omit<ProposalType, "authorAddress"> {
  author: User;
  comments: CommentType[];
}

export default function fetchProposal() {
  const { authorAddress, ...mockedProposal } = mockedData;
  const post: ProposalApiRes = {
    ...mockedProposal,
    author: accounts.find((a) => a.address === authorAddress)!,
    comments,
  };
  return post;
}
