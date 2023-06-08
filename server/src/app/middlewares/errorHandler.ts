/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  res.sendStatus(500);
}
