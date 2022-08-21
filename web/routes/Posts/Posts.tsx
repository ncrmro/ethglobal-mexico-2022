import React from "react";
import styles from "./Proposal.module.css";
import fetchProposal, { ProposalApiRes } from "./fetchProposals";

const Comments: React.FC<{ comments: ProposalApiRes["comments"] }> = (
  props
) => (
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
          {comment.author.username}
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

export const Proposal = () => {
  const post = fetchProposal();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Proposal: {post.title}</div>
        <div>State: {post.status}</div>
      </div>
      <Comments comments={post.comments} />
    </div>
  );
};
