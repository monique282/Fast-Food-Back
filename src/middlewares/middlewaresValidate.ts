import { badRequestError } from '../errors/badRequest-erro';
import { NextFunction, Request, Response } from 'express';
import { ObjectSchema, ArraySchema } from 'joi';

export function validateJoiForAll<T>(schema: ObjectSchema<T> | ArraySchema<T>): ValidationMiddleware<T> {
  return validate(schema, 'body');
}

function validate<T>(schema: ObjectSchema<T> | ArraySchema<T>, type: 'body' | 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });
    if (!error) {
      next();
    } else {
      let errorMessage = '';
      error.details.forEach((d) => (errorMessage += d.message + ' '));
      throw badRequestError(errorMessage);
    }
  };
}

type ValidationMiddleware<T> = (req: Request, res: Response, next: NextFunction) => void;
