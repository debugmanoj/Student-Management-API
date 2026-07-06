# EduDash GraphQL API Backend 🚀

EduDash Backend is a robust, scalable, and fully-featured GraphQL API built with Node.js, Express, Apollo Server, and MongoDB. It serves as the data layer for the EduDash student management system, ensuring strict data validation and efficient querying.

## Project Overview

This project provides a complete CRUD interface for managing student records via a GraphQL endpoint. It utilizes a modular folder structure to separate concerns between GraphQL schemas, resolvers, database models, and business logic controllers.

## Features

- **GraphQL API**: Single endpoint (`/graphql`) for all queries and mutations.
- **Strict Data Validation**: Zod schema validation ensures data integrity before it hits the database.
- **Advanced Querying**: Supports filtering by department, searching by name, and fetching top-performing students.
- **Modular Architecture**: Feature-based directory structure (e.g., `features/Student/`) for high scalability.
- **MongoDB Integration**: Native integration with MongoDB via Mongoose.

## Technologies Used

- **Runtime**: Node.js
- **Server**: Express.js
- **GraphQL**: Apollo Server v4 (`@apollo/server`)
- **Database**: MongoDB with Mongoose
- **Validation**: Zod
- **Environment**: dotenv

## Folder Structure

```
src/
├── config/              # Database connection and environment config (db.js)
├── features/            # Feature-based domains
│   └── Student/         # Student domain logic
│       ├── student.controller.js  # Business logic & DB operations
│       ├── student.model.js       # Mongoose schema
│       ├── student.resolvers.js   # GraphQL resolvers mapped to controllers
│       ├── student.typeDefs.js    # GraphQL Type Definitions
│       └── student.validation.js  # Zod validation schemas
├── graphql/             # Global GraphQL aggregation
│   ├── resolvers.js     # Merges all feature resolvers
│   └── schema.js        # Merges all feature type definitions
└── index.js             # Application entry point and Apollo Server setup
```

## GraphQL Architecture

The architecture follows a modular approach. Instead of a monolithic schema, each feature (e.g., `Student`) defines its own `typeDefs` and `resolvers`. These are then exported and aggregated in `src/graphql/schema.js` and `src/graphql/resolvers.js`.

The resolvers act merely as routers, immediately handing off execution to the controllers (`student.controller.js`) which contain the actual business logic and database calls.

## API Overview

The API is accessible at `http://localhost:<PORT>/graphql`. 
It exposes a GraphQL playground (Apollo Studio Sandbox) in development mode for easy testing.

### Available Queries

- `students`: Fetches all students.
- `getSingleUser(id: ID!)`: Fetches a student by ID.
- `searchStudent(name: String!)`: Returns students matching the provided name.
- `studentsByDepartment(department: String!)`: Returns students in a specific department.
- `topStudents(cgpa: Float!)`: Returns students with a CGPA greater than 8.0.

### Available Mutations

- `createStudent(input: StudentInput!)`: Creates a new student record.
- `updateStudent(id: ID!, input: UpdateStudentInput!)`: Updates an existing student.
- `DeleteStudent(id: ID!)`: Deletes a student record.

## Installation

1. Clone the repository.
2. Navigate to the backend directory: `cd Graphql_Basic`
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Copy the provided example file to set up your environment:

```bash
cp .env.example .env
```

Your `.env` should include:
```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/graphql_students
```

## Running the Project

**Development Mode** (with Nodemon):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

## Example GraphQL Requests

**Query: Fetch All Students**
```graphql
query {
  students {
    id
    name
    email
    department
    cgpa
  }
}
```

**Mutation: Create a Student**
```graphql
mutation {
  createStudent(input: {
    name: "Jane Doe",
    email: "jane@example.com",
    age: 21,
    course: "Computer Science",
    department: "Engineering",
    year: "3rd",
    cgpa: 9.2
  }) {
    id
    name
  }
}
```

## Validation

All incoming mutation data is validated using **Zod** in `student.validation.js`.
- Emails must be valid format.
- Ages must be integers between 16 and 100.
- CGPA must be between 0 and 10.
- The `year` enum must strictly be "1st", "2nd", "3rd", or "4th".
If validation fails, a detailed error message is returned to the client.

## Error Handling

Errors thrown by Zod or Mongoose are caught in the controller layer and passed back through the GraphQL resolver. Apollo Server formats these errors and returns them in the standard GraphQL `errors` array, which the frontend client safely parses and displays via Toast notifications.

## Future Improvements

- Implement authentication and authorization (JWT) to secure mutations.
- Add pagination (Cursor or Offset) to the `students` query.
- Implement dataloaders to prevent N+1 query problems as relations grow.
- Add comprehensive backend testing using Jest or Mocha/Chai.

## Screenshots

*(Placeholder for Backend GraphQL Playground/Apollo Studio Screenshots)*

## License

ISC License
