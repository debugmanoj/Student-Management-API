export const createValidationError = (message) => ({
  __typename: 'ValidationError',
  code: 'VALIDATION_ERROR',
  severity: 'WARNING',
  message
});

export const createBadRequestError = (message) => ({
  __typename: 'BadRequestError',
  code: 'BAD_REQUEST',
  severity: 'WARNING',
  message
});

export const createNotFoundError = (message) => ({
  __typename: 'NotFoundError',
  code: 'NOT_FOUND',
  severity: 'WARNING',
  message
});

export const createInternalServerError = (message) => ({
  __typename: 'InternalServerError',
  code: 'INTERNAL_SERVER_ERROR',
  severity: 'ERROR',
  message
});
