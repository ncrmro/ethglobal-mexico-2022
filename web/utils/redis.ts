import { createClient } from "redis";
import RedisClient from "@redis/client/dist/lib/client";

const redisClient = createClient({
  url: "rediss://default:AVNS_2Nk0wcxrgMtvKp1cm1z@db-redis-nyc3-59824-do-user-1570434-0.b.db.ondigitalocean.com:25061",
});
redisClient.on("error", (err) => console.log("Redis Client Error", err));

export async function getRedisClient() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
  return redisClient;
}
