import gql from "graphql-tag";

export const typeDefs = gql`
  type Question {
    id: Int!
    question: String!
    answer: String!
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type ContactMessage {
    id: Int!
    firstName: String!
    lastName: String!
    message: String!
    createdAt: String!
  }

  type Query {
    questions: [Question!]!
    question(id: Int!): Question
  }

  type Mutation {
    addQuestion(question: String!, answer: String!): Question!
    updateQuestion(id: Int!, question: String, answer: String, isActive: Boolean): Question!
    deleteQuestion(id: Int!): Question!
    sendContactMessage(firstName: String!, lastName: String!, message: String!): ContactMessage!
  }
`;
