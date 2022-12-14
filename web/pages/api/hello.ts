// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await getRedisClient();
  await client.set("hello", JSON.stringify({ hello: "world" }));
  res.status(200).json({ name: "John Doe" });
}
