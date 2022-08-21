import {
  accounts,
  comments,
  Post,
  post as mockedData,
  User,
} from "../../utils/mocks";

export interface PostApiRes extends Omit<Post, "authorAddress"> {
  author: User;
}

export default function fetchPost() {
  const { authorAddress, ...mockedPost } = mockedData;
  const post: PostApiRes = {
    ...mockedPost,
    author: accounts.find((a) => a.address === authorAddress)!,
    comments,
  };
  return post;
}
