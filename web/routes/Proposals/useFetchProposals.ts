import {
  accounts,
  CommentType,
  Proposal as ProposalType,
  proposals as mockedProposals,
  User,
} from "../../utils/mocks";
import { ProposalApiRes } from "../Proposal/fetchProposal";

export interface ProposalsApiRes {
  proposals: ProposalApiRes[];
}

export default function useFetchProposals(filters?: {
  state?: string;
  doaIds?: string[];
}): ProposalsApiRes {
  let proposals = mockedProposals;
  if (typeof filters?.state !== "undefined" && filters?.state !== "All") {
    proposals = proposals.filter((p) => p.status === filters.state);
  }
  if (filters?.doaIds) {
    proposals = proposals.filter((p) => filters.doaIds?.includes(p.doaId));
  }
  return {
    proposals: proposals.map(({ authorAddress, ...p }) => ({
      ...p,
      author: accounts.find((a) => a.address === authorAddress)!,
      comments: [],
    })),
  };
}
