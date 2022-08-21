import React, { useState } from "react";
import styles from "./Post.module.css";
import { PostApiRes } from "./fetchPost";
import MakeBoardroomLink from "../../components/makeBoardroomLink";
import { queryProposalState } from "./update-proposal-status";

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

export const Post = ({ post }: { post: PostApiRes }) => {
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{post.title}</div>
        <div>{post.proposal.title}</div>
        <input
          placeholder="Add Proposal ID"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => queryProposalState(text)}>Submit</button>

        <MakeBoardroomLink {...post.author} />
        <div>State: {post.state}</div>
      </div>
      <hr />
      <Comments comments={post.comments} />
    </div>
  );
};
