import { ApplicationError } from '@/protocols';

export function notFound(message: string): ApplicationError {
  return {
    name: 'NotFoundError',
    message: message,
  };
};
