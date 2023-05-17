export const schema = gql`
  type PlainImageSurvey {
    id: Int!
    user: User!
    userId: Int!
    privateRank: Int!
    publicElem: String!
    privateElem: String!
  }

  type Query {
    plainImageSurveys: [PlainImageSurvey!]! @requireAuth
    plainImageSurvey(id: Int!): PlainImageSurvey @requireAuth
  }

  input CreatePlainImageSurveyInput {
    userId: Int!
    privateRank: Int!
    publicElem: String!
    privateElem: String!
  }

  input UpdatePlainImageSurveyInput {
    userId: Int
    privateRank: Int
    publicElem: String
    privateElem: String
  }

  type Mutation {
    createPlainImageSurvey(
      input: CreatePlainImageSurveyInput!
    ): PlainImageSurvey! @requireAuth
    updatePlainImageSurvey(
      id: Int!
      input: UpdatePlainImageSurveyInput!
    ): PlainImageSurvey! @requireAuth
    deletePlainImageSurvey(id: Int!): PlainImageSurvey! @requireAuth
  }
`
