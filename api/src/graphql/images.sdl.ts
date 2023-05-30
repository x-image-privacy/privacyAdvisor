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
`
