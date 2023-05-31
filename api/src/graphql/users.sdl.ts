export const schema = gql`
  type User {
    id: Int!
    username: String!
    createdAt: DateTime!
    group: String
    email: String
    milestone: String!
    submittedAt: DateTime
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
    username: String
    hashedPassword: String
    salt: String
    email: String
    group: String
    submittedAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
  }
`
