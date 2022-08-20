import { useState } from "react";

export const CreateProposalForm = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
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
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          // @ts-ignore
          onChange={(event) => setTitle(event.type.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={body}
          // @ts-ignore
          onChange={(event) => setBody(event.type.value)}
        />
      </form>
      <button type="submit" form="create-post" style={{ float: "right" }}>
        Submit
      </button>
    </div>
  );
};
