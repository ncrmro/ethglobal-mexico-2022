import React from "react";
import styles from "./Proposal.module.css";
import { proposal } from "./mocks";

const Comments: React.FC<{ comments: typeof proposal["comments"] }> = (
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
          {comment.user.username}
          <div>12T</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{comment.message}</div>
          <div>{comment.votingPower}P</div>
        </div>
      </div>
    ))}
  </div>
);

export const Proposal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Proposal: {proposal.title}</div>
        <div>State: {proposal.state}</div>
      </div>
      <Comments comments={proposal.comments} />
    </div>
  );
};
