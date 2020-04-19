const { gql } = require('apollo-server')

// Schema
const typeDefs = gql`
    type Query {
        getCourses(input: CourseInput!): [Course]
        getTechs: [Tech]
    }

    type Tech {
      technology: String
    }

    type Course {
      title: String,
    }

    input CourseInput {
        technology: String
    }
`

module.exports = typeDefs
