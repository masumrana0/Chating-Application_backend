/**
 * Title: 'Handle Not Found Error'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 24-01-2024
 *
 */

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const handleNotFoundApi = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not Found ',
      },
    ],
  });
  next();
};

export default handleNotFoundApi;
