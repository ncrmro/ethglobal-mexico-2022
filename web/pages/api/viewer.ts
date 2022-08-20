// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";

type Viewer = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Viewer | string>
) {
  const account = JSON.parse(req.body)?.account;

  const key = `user:${account}`;
  if (account) {
    const client = await getRedisClient();
    const results = await client.get(key);
    const viewer: Viewer = (results && JSON.parse(results)) || {
      username: undefined,
      account,
    };
    if (!results) {
      await client.set(key, JSON.stringify(viewer));
    }
    res.status(200).json(viewer);
  } else {
    res.status(403).send("You must specific an account");
  }
}
