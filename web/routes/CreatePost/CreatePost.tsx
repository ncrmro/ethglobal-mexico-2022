import { useState } from "react";
import { useViewer } from "../../context/Viewer";
import { createPostAPI, Post } from "./createPostAPI";
import { useWeb3 } from "../../context/Web3Context";

export const CreatePostForm = () => {
  const viewer = useViewer();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const contextualUser = useWeb3().account;
  if (!viewer?.address || !contextualUser) {
    return (
      <div>
        Please connect your wallet before attempting to create a new post
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1em",
      }}
    >
      <form
        id="create-post"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          width: "100%",
          gap: "1em",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          await createPostAPI({ userAddress: viewer.address, title, content });
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </form>
      <button type="submit" form="create-post" style={{ float: "right" }}>
        Submit
      </button>
    </div>
  );
};
