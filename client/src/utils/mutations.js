import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String, $profileId: ID!) {
    addPost(title: $title, content: $content, profileId: $profileId) {
      _id
      title
      content
      date_created
      username
      rawrs
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($body: String!, $profileId: ID!, $postId: ID!) {
    addComment(body: $body, profileId: $profileId, postId: $postId) {
      _id
      body
      profile_id
      post_id
    }
  }
`;
