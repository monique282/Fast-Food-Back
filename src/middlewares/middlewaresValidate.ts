import { NextFunction, Request, Response } from 'express';

export function validateJoiForAll(joi) {
  return (req: Request, res: Response, next: NextFunction) =>  {

    const validateSeTaRight = joi.validate(req.body, { abortEarly: false });

    if(validateSeTaRight.error) {
    const specificRrror = validateSeTaRight.error.details.map(qual => qual.message);
    return res.status(422).send(specificRrror);
  };
  next();
};
}
