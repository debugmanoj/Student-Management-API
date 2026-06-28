export default `#graphql

type Student {
    id: ID!
    name: String!
    email: String!
    age:String!
    course:String!
    department:String!
    Year:String!
    cgpa:String!
}

type Query {
    students: [Student]
    getSingleUser(id:ID!):Student
    searchStudent(name:String!):Student
}

type Mutation {
    
createStudent(name: String!, email: String!, age: String!, course: String!, department: String!, year: String!, cgpa: String!): Student

updateStudent(id: ID!, name: String, email: String, age: String, course: String, department: String, year: String, cgpa: String): Student

DeleteStudent(id: ID!): Student



}
`;