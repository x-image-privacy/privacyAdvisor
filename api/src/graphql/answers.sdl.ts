export const schema = gql`
  type Answer {
    id: Int!
    user: User!
    userId: Int!
    image: Image!
    imageId: Int!
    answer: String!
    createdAt: DateTime!
    submittedAt: DateTime!
  }

  type Query {
    answers: [Answer!]! @requireAuth
    answer(id: Int!): Answer @requireAuth
  }

  input CreateAnswerInput {
    userId: Int!
    imageId: Int!
    answer: String!
    submittedAt: DateTime!
  }

  input UpdateAnswerInput {
    userId: Int
    imageId: Int
    answer: String
    submittedAt: DateTime
  }

  type Mutation {
    createAnswer(input: CreateAnswerInput!): Answer! @requireAuth
    updateAnswer(id: Int!, input: UpdateAnswerInput!): Answer! @requireAuth
    deleteAnswer(id: Int!): Answer! @requireAuth
  }
`
