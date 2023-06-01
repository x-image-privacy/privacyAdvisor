export const schema = gql`
  type ImageSurvey {
    id: Int!
    user: User!
    userId: Int!
    image: Image!
    imageId: Int!
    hasInterface: Boolean!
    privateRank: Int!
    publicElem: String!
    privateElem: String!
    satisfactionRank: Int
    satisfactionElem: String
  }

  type Query {
    imageSurveys: [ImageSurvey!]! @requireAuth
    imageSurvey(id: Int!): ImageSurvey @requireAuth
    imageSurveyByUserAndImage(userId: Int!, imageId: Int!): ImageSurvey
      @requireAuth
    imageSurveyByUserImageAndHasInterface(
      userId: Int!
      imageId: Int!
      hasInterface: Boolean!
    ): ImageSurvey @requireAuth
  }

  input CreateImageSurveyInput {
    userId: Int!
    imageId: Int!
    hasInterface: Boolean!
    privateRank: Int!
    publicElem: String!
    privateElem: String!
    satisfactionRank: Int
    satisfactionElem: String
  }

  input UpdateImageSurveyInput {
    userId: Int
    imageId: Int
    hasInterface: Boolean
    privateRank: Int
    publicElem: String
    privateElem: String
    satisfactionRank: Int
    satisfactionElem: String
  }

  type Mutation {
    createImageSurvey(input: CreateImageSurveyInput!): ImageSurvey! @requireAuth
    updateImageSurvey(id: Int!, input: UpdateImageSurveyInput!): ImageSurvey!
      @requireAuth
  }
`
