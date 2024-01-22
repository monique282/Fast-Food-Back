import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function handleApplicationErrors(
  err:  ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if ( err.name === 'BadRequestError') {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  };
  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  };

  if (err.name === 'ConflictError') {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }
  next(err)

};


