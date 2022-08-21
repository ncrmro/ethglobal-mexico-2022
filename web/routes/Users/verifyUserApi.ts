export async function verifyUserApi(user: any) {
  if (typeof window !== "undefined") {
    const res = await fetch(`${window.location.origin}/api/verify-user`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    if (res.ok) {
      return await res.json();
    }
  }
}
