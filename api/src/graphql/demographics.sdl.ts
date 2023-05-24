export const schema = gql`
  type Demographic {
    id: Int!
    user: User!
    userId: Int!
    age: Int!
    education: Int!
    technology: Int!
    privacy: Int!
  }

  type Query {
    demographics: [Demographic!]! @requireAuth
    demographic(id: Int!): Demographic @requireAuth
    demographicByUser(userId: Int!): Demographic @requireAuth
  }

  input CreateDemographicInput {
    userId: Int!
    age: Int!
    education: Int!
    technology: Int!
    privacy: Int!
  }

  input UpdateDemographicInput {
    userId: Int
    age: Int
    education: Int
    technology: Int
    privacy: Int
  }

  type Mutation {
    createDemographic(input: CreateDemographicInput!): Demographic! @requireAuth
    updateDemographic(id: Int!, input: UpdateDemographicInput!): Demographic!
      @requireAuth
    deleteDemographic(id: Int!): Demographic! @requireAuth
  }
`
