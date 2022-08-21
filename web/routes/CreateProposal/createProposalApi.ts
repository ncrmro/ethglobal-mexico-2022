export type Post = {
  userAddress: string;
  title: string;
  content: string;
};

export async function createProposalAPI(post: Post) {
  if (typeof window !== "undefined") {
    const res = await fetch(`${window.location.origin}/api/post-create`, {
      method: "POST",
      body: JSON.stringify(post),
    });
    if (res.ok) {
      return await res.json();
    }
  }
}
