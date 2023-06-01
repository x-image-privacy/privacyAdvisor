export const schema = gql`
  type UserExperienceQuestionaireScore {
    id: Int!
    support: Int!
    complexity: Int!
    efficiency: Int!
    clarity: Int!
    motivation: Int!
    interest: Int!
    norm: Int!
    originality: Int!
    CustomerSatisfactionSurvey: [CustomerSatisfactionSurvey]!
  }

  type Query {
    userExperienceQuestionaireScores: [UserExperienceQuestionaireScore!]!
      @requireAuth
    userExperienceQuestionaireScore(id: Int!): UserExperienceQuestionaireScore
      @requireAuth
  }

  input CreateUserExperienceQuestionaireScoreInput {
    support: Int!
    complexity: Int!
    efficiency: Int!
    clarity: Int!
    motivation: Int!
    interest: Int!
    norm: Int!
    originality: Int!
  }

  input UpdateUserExperienceQuestionaireScoreInput {
    support: Int
    complexity: Int
    efficiency: Int
    clarity: Int
    motivation: Int
    interest: Int
    norm: Int
    originality: Int
  }

  type Mutation {
    createUserExperienceQuestionaireScore(
      input: CreateUserExperienceQuestionaireScoreInput!
    ): UserExperienceQuestionaireScore! @requireAuth
    updateUserExperienceQuestionaireScore(
      id: Int!
      input: UpdateUserExperienceQuestionaireScoreInput!
    ): UserExperienceQuestionaireScore! @requireAuth
  }
`
