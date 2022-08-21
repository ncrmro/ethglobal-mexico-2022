export async function getUserApi(address: any) {
  if (typeof window !== "undefined") {
    const res = await fetch(`${window.location.origin}/api/get-user`, {
      method: "POST",
      body: JSON.stringify(address),
    });
    if (res.ok) {
      return await res.json();
    }
  }
}
