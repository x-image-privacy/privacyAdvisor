export const schema = gql`
  type PrivateRank {
    id: Int!
    user: User!
    userId: Int!
    rank: Int!
  }

  type Query {
    privateRanks: [PrivateRank!]! @requireAuth
    privateRank(id: Int!): PrivateRank @requireAuth
  }

  input CreatePrivateRankInput {
    userId: Int!
    rank: Int!
  }

  input UpdatePrivateRankInput {
    userId: Int
    rank: Int
  }

  type Mutation {
    createPrivateRank(input: CreatePrivateRankInput!): PrivateRank! @requireAuth
    updatePrivateRank(id: Int!, input: UpdatePrivateRankInput!): PrivateRank!
      @requireAuth
    deletePrivateRank(id: Int!): PrivateRank! @requireAuth
  }
`
