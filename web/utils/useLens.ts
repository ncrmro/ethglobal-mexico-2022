import { apolloClient } from "./apollo";
import { gql } from "@apollo/client";

const GET_CHALLENGE = `
query ($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
    id
    picture {
      __typename
    
    }
    name
    bio
    metadata
    isFollowing
  }
}
`;

export const useLensGenerateChallenge = (address: string) => {
  return apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
  });
};
