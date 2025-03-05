import { Request,Response,NextFunction } from "express";
import {matchedData, validationResult} from "express-validator";
import { Validation } from "../../errors/Validation"; 
export const withValidationHandler = (handler: any) => async (req:Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  try {
    result.throw()
  } catch (e) {
    return next(new Validation(e))
  }

  req.body = {
    ...matchedData(req)
  }
  return await handler(req, res, next)?.catch(next);
}