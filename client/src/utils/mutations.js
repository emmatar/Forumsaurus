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
  mutation addPost($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
      _id
      title
      content
      date
      profile{
        _id
        username
      }
      rawrs
    }
  }
`;
export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const EDIT_BIO = gql`
  mutation editBio($bio: String!) {
    editBio(bio: $bio) {
      _id
      bio
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment( $postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
    }
  }
`;
