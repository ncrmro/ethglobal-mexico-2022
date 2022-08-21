import { GetServerSideProps } from "next";
import fetchPost from "../../routes/Post/fetchPost";

export { Post as default } from "../../routes/Post";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const post = await fetchPost();

  return { props: { post } };
};
