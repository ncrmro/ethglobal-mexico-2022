import React, { useState } from "react";
import styles from "./Post.module.css";
import { PostApiRes } from "./fetchPost";
import MakeBoardroomLink from "../../components/makeBoardroomLink";
import { queryProposalState, updatePost } from "./update-proposal-status";
import { useViewer } from "../../context/Viewer";
import Link from "next/link";
import AddComment from "../../components/AddComment";

const Comments: React.FC<{ comments: PostApiRes["comments"] }> = (props) => {
  return (
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
            <MakeBoardroomLink {...comment.author!} />
            {/*<Link href={`/users/${viewer?.address}`}>*/}
            {/*  {comment.author.username}*/}
            {/*</Link>*/}
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
};

export const Post = (props: { post: PostApiRes }) => {
  const viewer = useViewer();
  const [post] = useState(props.post);
  const [proposalId, setProposalId] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{post.title}</div>
        {post.proposal.id ? (
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              // href={`https://app.uniswap.org/#/vote/2/${post.proposal.id}?chain=mainnet`}
              href="https://app.uniswap.org/#/vote/2/22?chain=mainnet"
            >
              Proposal Link
            </a>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
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
          </div>
        )}

        <MakeBoardroomLink {...post.author} />
        {/*<Link href={`/users/${post?.author.address}`}>*/}
        {/*    {post.author.username}*/}
        {/*</Link>*/}
        <div>State: {post.state}</div>
      </div>
      <div style={{ display: "flex" }}>
        <hr />
        Comments
        <hr />
      </div>
      <Comments comments={post.comments} />
      <AddComment></AddComment>
    </div>
  );
};
