// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.body;
  const client = await getRedisClient();
  const key = `user:${JSON.stringify(user.address)}`;

  await client.set(key, { ...user, worldCoin_verified: true });
  res.status(200);
}
