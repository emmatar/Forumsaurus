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
      bio
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
      bio
      posts {
        _id
        title
        content
        date
        rawrs
        comments {
          commentBody
          _id
          profile {
            username
          }
        }
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query Posts {
    posts {
      _id
      profile {
       _id
       username
      }
      title
      content
      comments {
        commentBody
        profile {
          username
        }
      }
    }
  }
`;
