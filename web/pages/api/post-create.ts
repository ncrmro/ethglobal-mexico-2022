// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";
import { Post } from "../../routes/CreatePost/createPostAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await getRedisClient();
  const transaction = `fake-hash-${new Date().getMilliseconds()}`;
  const key = `post:${transaction}`;
  await client.set(key, req.body);
  res.status(200);
}
