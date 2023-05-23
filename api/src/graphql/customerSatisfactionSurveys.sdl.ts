export const schema = gql`
  type CustomerSatisfactionSurvey {
    id: Int!
    user: User!
    userId: Int!
    csat: CustomerSatisfactionScore
    csatId: Int
    nps: NetPromoterScore
    npsId: Int
    ueq: UserExperienceQuestionaireScore
    ueqId: Int
  }

  type Query {
    customerSatisfactionSurveys: [CustomerSatisfactionSurvey!]! @requireAuth
    customerSatisfactionSurvey(id: Int!): CustomerSatisfactionSurvey
      @requireAuth
    customerSatisfactionSurveyByUser(userId: Int!): CustomerSatisfactionSurvey
      @requireAuth
  }

  input CreateCustomerSatisfactionSurveyInput {
    userId: Int!
    csatId: Int
    npsId: Int
    ueqId: Int
  }

  input UpdateCustomerSatisfactionSurveyInput {
    userId: Int
    csatId: Int
    npsId: Int
    ueqId: Int
  }

  type Mutation {
    createCustomerSatisfactionSurvey(
      input: CreateCustomerSatisfactionSurveyInput!
    ): CustomerSatisfactionSurvey! @requireAuth
    updateCustomerSatisfactionSurvey(
      id: Int!
      input: UpdateCustomerSatisfactionSurveyInput!
    ): CustomerSatisfactionSurvey! @requireAuth
    deleteCustomerSatisfactionSurvey(id: Int!): CustomerSatisfactionSurvey!
      @requireAuth
  }
`
