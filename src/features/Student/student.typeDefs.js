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

union StudentResponse = Student | ValidationError | BadRequestError | NotFoundError | InternalServerError

input CreateStudentInput {
  name: String!
  email: String!
  age: Int!
  course: String!
  department: String!
  year: String!
  cgpa: Float!
}
  
input UpdateStudentInput {
  name: String
  email: String
  age: Int
  course: String
  department: String
  year: String
  cgpa: Float
}

type Query {
    students: [Student]
    getSingleUser(id:ID!):StudentResponse
    searchStudent(name:String!):[Student]
    studentsByDepartment(department:String!):[Student]
    topStudents(cgpa:Float!):[Student]
}

type Mutation {
    
createStudent(input:CreateStudentInput!): StudentResponse

updateStudent(id:ID!,input:UpdateStudentInput!): StudentResponse

DeleteStudent(id: ID!): StudentResponse



}
`;