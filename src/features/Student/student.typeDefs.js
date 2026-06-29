export default `#graphql

type Student {
    id: ID!
    name: String
    email: String!
    age:Int!
    course:String!
    department:String!
    Year:String!
    cgpa:Float!
}

input CreateStudentInput {
  name: String!
  email: String!
  age: Int!
  course: String!
  department: String!
  year: String!
  cgpa: Float!
}

type Query {
    students: [Student]
    getSingleUser(id:ID!):Student
    searchStudent(name:String!):[Student]
    studentsByDepartment(department:String!):[Student]
}

type Mutation {
    
createStudent(input:CreateStudentInput!): Student

updateStudent(id: ID!, name: String, email: String, age: String, course: String, department: String, year: String, cgpa: String): Student

DeleteStudent(id: ID!): Student



}
`;