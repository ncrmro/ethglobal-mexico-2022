import React, { useState } from "react";
import styles from "./Post.module.css";
import { PostApiRes } from "./fetchPost";
import MakeBoardroomLink from "../../components/makeBoardroomLink";
import { queryProposalState, updatePost } from "./update-proposal-status";
import { useViewer } from "../../context/Viewer";

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
  const viewer = useViewer();
  const [proposalId, setProposalId] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{post.title}</div>
        <div>
          <a
            href={`https://app.uniswap.org/#/vote/2/${post.proposal.id}}?chain=mainnet`}
          >
            Proposal Link
          </a>
        </div>
        <input
          type="number"
          placeholder="Add Proposal ID"
          value={proposalId}
          onChange={(e) => setProposalId(e.target.value)}
        />
        <button
          onClick={async () => {
            const state = await queryProposalState(proposalId);
            const { ...p } = post;
            await updatePost({
              ...p,
              authorAddress: viewer?.address!,
              proposalId,
              state,
            });
          }}
        >
          Submit
        </button>

        <MakeBoardroomLink {...post.author} />
        <div>State: {post.state}</div>
      </div>
      <div style={{ display: "flex" }}>
        <hr />
        Comments
        <hr />
      </div>
      <Comments comments={post.comments} />
    </div>
  );
};
