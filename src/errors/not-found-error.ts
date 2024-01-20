import { ApplicationError } from '@/protocols';

export function notFoundType(message: string): ApplicationError {
  return {
    name: 'NotFoundError',
    message: message,
  };
};
