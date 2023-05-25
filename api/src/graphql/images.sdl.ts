export const schema = gql`
  type Image {
    id: Int!
    imageNumber: Int!
    imageLocation: String!
    dataLocation: String!
    ImageSurvey: [ImageSurvey]!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
    imageByImageNumber(imageNumber: Int!): Image @requireAuth
  }

  input CreateImageInput {
    imageNumber: Int!
    imageLocation: String!
    dataLocation: String!
  }

  input UpdateImageInput {
    imageNumber: Int
    imageLocation: String
    dataLocation: String
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
