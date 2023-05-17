export const schema = gql`
  type NetPromoterScore {
    id: Int!
    rank: Int!
    justification: String!
    CustomerSatisfactionSurvey: [CustomerSatisfactionSurvey]!
  }

  type Query {
    netPromoterScores: [NetPromoterScore!]! @requireAuth
    netPromoterScore(id: Int!): NetPromoterScore @requireAuth
  }

  input CreateNetPromoterScoreInput {
    rank: Int!
    justification: String!
  }

  input UpdateNetPromoterScoreInput {
    rank: Int
    justification: String
  }

  type Mutation {
    createNetPromoterScore(
      input: CreateNetPromoterScoreInput!
    ): NetPromoterScore! @requireAuth
    updateNetPromoterScore(
      id: Int!
      input: UpdateNetPromoterScoreInput!
    ): NetPromoterScore! @requireAuth
    deleteNetPromoterScore(id: Int!): NetPromoterScore! @requireAuth
  }
`
