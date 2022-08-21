import { useMemo } from "react";
import {
  ApolloCache,
  ApolloClient,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";
import config from "./config";

export { ApolloProvider } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";

export type Client = ApolloClient<ApolloCache<InMemoryCache>>;
let apolloClient: Client;

export const cache = new InMemoryCache({});

function createApolloClient() {
  return new ApolloClient({
    connectToDevTools: !config.production,
    ssrMode: !config.isClient,
    link: ApolloLink.from([
      new BatchHttpLink({
        uri: config.graphqlUri,
        // credentials: "include",
      }),
    ]),
    cache,
  });
}

export function initializeApollo(initialState?: any): Client {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (!config.isClient) return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: unknown): Client {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}

export function fetchGraphQL(query: string, variables: Record<string, any>) {
  return fetch(config.graphqlUri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
}

export { apolloClient };
