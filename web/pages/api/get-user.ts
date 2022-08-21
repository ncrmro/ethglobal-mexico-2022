import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";
import { User } from "./../../utils/mocks";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const address = JSON.parse(req.body);
  const client = await getRedisClient();
  const key = `user:${address}`;

  const response = await client.get(key);
  res.status(200).send({ response });
}
