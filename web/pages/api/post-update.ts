// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let post = JSON.parse(req.body);
  const client = await getRedisClient();
  const key = `post:${post.id}`;
  post = await client.get(key);
  await client.set(key, JSON.stringify(post));
  res.status(200).json(post);
}
