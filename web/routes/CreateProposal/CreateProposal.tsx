import { useState } from "react";
import { useViewer } from "../../context/Viewer";
import { createProposalAPI } from "./createProposalApi";

export const CreateProposalForm = () => {
  const viewer = useViewer();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!viewer?.account) {
    return (
      <div>
        Please connect you're wallet before attempting to create a new post
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
          await createProposalAPI({
            userAddress: viewer.account,
            title,
            content,
          });
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
