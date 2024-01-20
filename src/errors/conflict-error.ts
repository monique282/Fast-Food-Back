export function ConflictError(message: string): Error {
  const error = new Error(message);
  error.name = 'ConflictError';
  return error;
}
