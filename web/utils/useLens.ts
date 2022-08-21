import { apolloClient, fetchGraphQL } from "./apollo";
import { gql } from "@apollo/client";
import config from "./config";

const GET_PROFILE = `
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

export const useLensGetProfile = async (profileId: string) => {
  const res = await fetchGraphQL(GET_PROFILE, {
    request: {
      profileId,
    },
  });
  const { data } = await res.json();
  return data.profile;
};
