import React from "react";
import styles from "./Post.module.css";
import fetchPost, { PostApiRes } from "./fetchPost";
import MakeBoardroomLink from "../../components/makeBoardroomLink";

const Comments: React.FC<{ comments: PostApiRes["comments"] }> = (props) => (
  <div className={styles.comments}>
    {props.comments.map((comment) => (
      <div key={comment.id}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "0.25em",
          }}
        >
          <MakeBoardroomLink {...comment.author} />
          <div>{comment.author.daos["testDAO"].tokenCount}T</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{comment.message}</div>
          <div>{comment.author.daos["testDAO"].votingPower}P</div>
        </div>
      </div>
    ))}
  </div>
);

export const Post = () => {
  const post = fetchPost();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{post.title}</div>
        <div>{post.proposal.title}</div>
        <MakeBoardroomLink {...post.author} />
        <div>State: {post.state}</div>
      </div>
      <Comments comments={post.comments} />
    </div>
  );
};
