export const schema = gql`
  type User {
    id: Int!
    group: String!
    createdAt: DateTime!
    submittedAt: DateTime!
    imageSurvey: [ImageSurvey]!
    customerSatisfactionSurvey: [CustomerSatisfactionSurvey]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    hashedPassword: String!
    salt: String!
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
