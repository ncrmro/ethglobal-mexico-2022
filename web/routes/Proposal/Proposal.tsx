import React from "react";
import styles from "./Proposal.module.css";
import { proposal } from "./mocks";

const Comments: React.FC<{ comments: typeof proposal["comments"] }> = (
  props
) => (
  <div className={styles.comments}>
    {props.comments.map((comment) => (
      <div key={comment.id}>{comment.message}</div>
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
