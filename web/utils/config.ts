import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

interface Config {
  production: boolean;
  isClient: boolean;
  graphqlUri: string;
}

const isClient = typeof window !== "undefined";

/**
 * Because E2E tests are running on the same built client that
 * is deployed, we need to dynamically change the GraphQL
 * client URL.
 */
function getGraphQLURI() {
  if (isClient) {
    const isLocalhostClient = window.location.href.includes("localhost");
    if (isLocalhostClient) {
      return publicRuntimeConfig.GRAPHQL_URL;
    }
    return "/graphql";
  }
  return serverRuntimeConfig.GRAPHQL_URL;
}

const config: Config = {
  production: false,
  isClient,
  graphqlUri: getGraphQLURI(),
};

export default config;
