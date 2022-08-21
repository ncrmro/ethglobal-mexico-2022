// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRedisClient } from "../../utils/redis";
import { User } from "./../../utils/mocks";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = JSON.parse(req.body);
  const client = await getRedisClient();
  const key = `user:${user.address}`;
  const newUser: User = {
    address: user.address,
    username: user.username,
    daos: user.daos,
    lens_profile: user.lens_profile,
    lens_id: user.lens_id,
    worldcoin_verified: true,
  };

  await client.set(key, JSON.stringify(newUser));
  res.status(200).send({});
}
