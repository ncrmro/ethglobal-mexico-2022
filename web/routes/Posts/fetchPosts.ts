import {
  accounts,
  comments,
  CommentType,
  proposal as mockedData,
  Proposal as ProposalType,
  User,
} from "../../utils/mocks";
import { PostApiRes } from "../Post/fetchPost";

export interface PostsApiRes extends Omit<ProposalType, "authorAddress"> {
  posts: PostApiRes[];
}

export default function fetchProposal() {
  const { authorAddress, ...mockedProposal } = mockedData;
  const post: PostsApiRes = {
    ...mockedProposal,
    author: accounts.find((a) => a.address === authorAddress)!,
    comments,
  };
  return post;
}
