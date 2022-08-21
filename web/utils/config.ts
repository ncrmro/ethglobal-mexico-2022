import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

interface Config {
  production: boolean;
  isClient: boolean;
  graphqlUri: string;
}

const isClient = typeof window !== "undefined";

const config: Config = {
  production: false,
  isClient,
  graphqlUri: publicRuntimeConfig.GRAPHQL_URL,
};

console.log("config", config);

export default config;
