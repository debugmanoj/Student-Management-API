export const typeDefs = `#graphql
  interface BaseError {
    code: String!
    message: String!
    severity: String!
  }

  type ValidationError implements BaseError {
    code: String!
    message: String!
    severity: String!
  }

  type BadRequestError implements BaseError {
    code: String!
    message: String!
    severity: String!
  }

  type NotFoundError implements BaseError {
    code: String!
    message: String!
    severity: String!
  }

  type InternalServerError implements BaseError {
    code: String!
    message: String!
    severity: String!
  }
`;
