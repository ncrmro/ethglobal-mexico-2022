import { useState } from "react";
import { useViewer } from "../../context/Viewer";

export const CreateProposalForm = () => {
  const viewer = useViewer();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  console.log("VIEWER", viewer);

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
