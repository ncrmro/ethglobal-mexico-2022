import { posts, Proposal as ProposalType } from "../../utils/mocks";
import { PostApiRes } from "../Post/fetchPost";

export interface PostsApiRes extends Omit<ProposalType, "authorAddress"> {
  posts: PostApiRes[];
}

export default function fetchPosts() {
  return { posts };
}
