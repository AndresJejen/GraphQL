const { buildSchema } = require('graphql');           //COnstructor de schema GraphQL

module.exports = buildSchema(`
         
type Consulted{
    doc: Doc!
    user: User!
    CreatedAt: String!
    UpdatedAt: String!
}

type Doc{
    _id : ID!
    titulo : String!
    name: String!
    author: String!
    mlanguage: String!
    typedoc: String!
    wlanguage: String!
    ilevel: String!
    flevel: String!
    date: String!
    link: String!
    helper:  User!

}

type User{
    _id : ID!
    name : String!
    email : String!
    password: String
    level: String!
    documentsadded : [Doc!]
}

input InputDoc{
    name: String!
    titulo : String!
    author: String!
    mlanguage: String!
    typedoc: String!
    wlanguage: String!
    ilevel: String!
    flevel: String!
    date: String!
    link: String!
}

input InputUser{
    name : String!
    email : String!
    password: String!
    level: String!
}

type RootQuery{
    docs: [Doc!]!
    docconsulted: [Consulted!]!
}

type RootMutation{
    createDoc(docInput: InputDoc) : Doc
    createUser(userInput: InputUser) : User
    docconsult(DocId: ID!): Consulted
    desdocconsult(consultedId: ID!): Doc! 
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);