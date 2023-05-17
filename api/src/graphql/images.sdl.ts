export const schema = gql`
  type Image {
    id: Int!
    imageLocation: String!
    dataLocation: String!
    answer: [Answer]!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    imageLocation: String!
    dataLocation: String!
  }

  input UpdateImageInput {
    imageLocation: String
    dataLocation: String
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
