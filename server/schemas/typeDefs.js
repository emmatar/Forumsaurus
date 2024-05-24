const typeDefs = `
  type Profile {
    _id: ID!
    username: String
    email: String
    bio: String
    avatarImage: String
    posts: [Post]
  }

  scalar Date

  type Post {
    _id: ID!
    title: String!
    content: String!
    date: Date
    profile: Profile!
    rawrs: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    commentBody: String!
    profile: Profile!
    post: Post
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    posts: [Post]
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    removeProfile: Profile
    login(email: String!, password: String!): Auth

    addPost(title: String!, content: String!): Post
    removePost(postId: ID!): Post
    addComment(postId: ID!, commentBody: String!): Post
    removeComment(postId: ID!, commentId: ID!): Post

  }
`;

module.exports = typeDefs;
