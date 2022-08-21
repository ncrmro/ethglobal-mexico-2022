const { createClient } = require("redis");

const redisClient = createClient({
  url: "rediss://default:AVNS_2Nk0wcxrgMtvKp1cm1z@db-redis-nyc3-59824-do-user-1570434-0.b.db.ondigitalocean.com:25061",
});

const accounts = [
  {
    address: "0x4269f41Fa8440CdbD1A919eEd9414bF96BDFB5eE",
    username: "juanforthemoney",
  },
  {
    address: "0x33A5529AF61C24B832C9C82C4f443862380063b7",
    username: "ncrmro",
  },
  {
    address: "0x25A5629AF61C24B832C9C82C4f443862380063b7",
    username: "devin_mathew",
  },
];

const post = {
  id: "1",
  title: "Should the next ETH Global be hosted in South Dakota",
  state: "Drafted",
  authorAddress: accounts[0].address,
  comments: [
    {
      id: "1",
      authorAddress: accounts[2].address,
      message: "Why South Dakota, is this a joke?",
      sentiment: "agree",
      votingPower: 1,
    },
    {
      id: "2",
      authorAddress: accounts[1].address,
      message: "I've drafted a new proposal",
      sentiment: "disagree",
      votingPower: 7,
    },
  ],
};

const posts = [
  post,
  {
    ...post,
    id: "2",
    authorAddress: accounts[0].address,
    title: "Should the next ETH Global be hosted in Australia",
    state: "Published",
  },
];

redisClient.connect().then(async () => {
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
  await redisClient.quit();
});
