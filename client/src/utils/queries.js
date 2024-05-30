import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      username
      posts {
        _id
        title
        content
        date
        rawrs
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      posts {
        _id
        title
        content
        date
        rawrs
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      posts {
        _id
        title
        content
        date
        rawrs
      }
    }
  }
`;

/* TODO: Write QUERY_POSTS */

/* TODO: Write QUERY_SINGLE_POST */

/* TODO: Write QUERY_COMMENTS */

/* TODO: Write QUERY_SINGLE_COMMENT */