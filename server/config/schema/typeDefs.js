const gql = require('appollo-server-express');

// typeDefs 
const typeDefs = gql`
    type Book {
        _id:ID
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: string
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token ID!
        user: User
    }
    inputSavedBookInput {
        authors: [String]
        description
    }`
