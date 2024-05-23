const typeDefs = `
  type Profile {
    _id: ID!
    username: String
    email: String
    bio: String
    avatarImage: Buffer
    posts: [Post]
  }

  type Post {
    _id: ID
    title: String
    content: String
    date: Date
    profile: Profile
    rawrs: Number
    comments: [Comment]
  }

  type Comment {
    _id: ID
    body: String
    profile: Profile
    post: Post
  }
  
  type Auth {

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    posts: [Post]
    comments: [Comment]
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    updateProfile(username: String!, email: String!, password: String!): Auth
    removeProfile: Profile
    login(email: String!, password: String!): Auth

    addPost(postId: ID!): Profile
    removePost(postId: ID!): Profile
    addComment(commentId: ID!): Post
    removeComment(commentId: ID!): Post
  }
`;

module.exports = typeDefs;
