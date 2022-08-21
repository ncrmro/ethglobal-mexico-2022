import {
  accounts,
  comments,
  Post,
  post as mockedData,
  proposal,
  Proposal,
  User,
} from "../../utils/mocks";

export interface PostApiRes extends Omit<Post, "authorAddress" | "proposalId"> {
  author: User;
  proposal: Proposal;
}

export default function fetchPost() {
  const { authorAddress, ...mockedPost } = mockedData;
  const post: PostApiRes = {
    ...mockedPost,
    author: accounts.find((a) => a.address === authorAddress)!,
    proposal,
    comments,
  };
  return post;
}
