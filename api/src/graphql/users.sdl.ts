export const schema = gql`
  type User {
    id: Int!
    group: String!
    createdAt: DateTime!
    submittedAt: DateTime!
    answer: [Answer]!
    privateRank: [PrivateRank]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    group: String!
    submittedAt: DateTime!
  }

  input UpdateUserInput {
    group: String
    submittedAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
