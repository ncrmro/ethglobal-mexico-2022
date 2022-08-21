import {
  accounts,
  comments as mockedComments,
  CommentType,
  Post,
  post as mockedData,
  proposal,
  Proposal,
  User,
} from "../../utils/mocks";
import { useLensGetProfile } from "../../utils/useLens";

export interface PostApiRes extends Omit<Post, "authorAddress" | "proposalId"> {
  author: User;
  proposal: Proposal;
}

export default async function fetchPost() {
  const { authorAddress, ...mockedPost } = mockedData;
  const comments: CommentType[] = [];
  for (const c of mockedComments) {
    const lp = await useLensGetProfile(c.author.lens_id);
    const comment = { ...c, author: { ...c.author, lens_profile: lp } };
    comments.push(comment);
  }
  const post: PostApiRes = {
    ...mockedPost,
    author: accounts.find((a) => a.address === authorAddress)!,
    proposal,
    comments,
  };
  return post;
}
