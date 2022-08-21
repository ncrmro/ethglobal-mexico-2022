import { getRedisClient } from "./redis";
import { accounts, posts, daos } from "./mocks";

export const fakeExport = {};

getRedisClient().then(async (redisClient) => {
  await redisClient.flushDb();
  for (const i of accounts) {
    await redisClient.set(`user:${i.address}`, JSON.stringify(i));
  }
  for (const i of posts) {
    await redisClient.set(
      `post:fake-hash-${new Date().getMilliseconds()}`,
      JSON.stringify(i)
    );
  }
  for (const i of daos) {
    await redisClient.set(`dao:${i.contractAddress}`, JSON.stringify(i));
  }
  await redisClient.quit();
});
