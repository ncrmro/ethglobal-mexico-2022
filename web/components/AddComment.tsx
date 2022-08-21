import Link from "next/link";
import { User } from "../utils/mocks";
import { useViewer } from "../context/Viewer";
import { getUserApi } from "../routes/Users/getUserApi";
import { useState } from "react";

const AddComment = () => {
  const [isVisible, setVisibility] = useState(false);
  const viewer = useViewer();
  return (
    <div
      style={{
        paddingBlockStart: "4rem",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {isVisible && (
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
            // await createPostAPI({
            //   userAddress: viewer?.address,
            //   title,
            //   content,
            // });
          }}
        >
          <label htmlFor="title">Title</label>
          <input id="title" value="" />
          <label htmlFor="content">Content</label>
          <textarea id="content" value="" />
        </form>
      )}
      <button
        style={{
          marginBlockStart: "2rem",
        }}
        onClick={() => setVisibility(!isVisible)}
      >
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;
