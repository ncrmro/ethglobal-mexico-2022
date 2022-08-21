import React from "react";
import fetchPosts from "./fetchPosts";
import Link from "next/link";

export const PostsRoute = () => {
  const { posts } = fetchPosts();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {posts.map((posts) => (
        <div key={posts.id} style={{ display: "flex" }}>
          <Link href={`/posts/${posts.id}`}>{posts.title}</Link>
          <div>
            <div style={{ textAlign: "right" }}>{posts.doaId}</div>
            <div style={{ display: "flex", gap: ".2em" }}>
              <div>4</div>
              <div>2</div>
              <div>3</div>
              <div>{posts.state}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
