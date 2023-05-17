export const schema = gql`
  type CustomerSatisfactionScore {
    id: Int!
    rank: Int!
    justification: String!
    CustomerSatisfactionSurvey: [CustomerSatisfactionSurvey]!
  }

  type Query {
    customerSatisfactionScores: [CustomerSatisfactionScore!]! @requireAuth
    customerSatisfactionScore(id: Int!): CustomerSatisfactionScore @requireAuth
  }

  input CreateCustomerSatisfactionScoreInput {
    rank: Int!
    justification: String!
  }

  input UpdateCustomerSatisfactionScoreInput {
    rank: Int
    justification: String
  }

  type Mutation {
    createCustomerSatisfactionScore(
      input: CreateCustomerSatisfactionScoreInput!
    ): CustomerSatisfactionScore! @requireAuth
    updateCustomerSatisfactionScore(
      id: Int!
      input: UpdateCustomerSatisfactionScoreInput!
    ): CustomerSatisfactionScore! @requireAuth
    deleteCustomerSatisfactionScore(id: Int!): CustomerSatisfactionScore!
      @requireAuth
  }
`
