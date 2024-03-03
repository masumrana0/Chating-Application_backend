import { ErrorRequestHandler, Request, Response } from 'express';
import config from '../../config';
import handleValidationError from '../../errors/handleValidationError';
import { IErrorMessages } from '../../inerfaces/error';
import ApiError from '../../errors/ApiError';
const GlobalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
) => {
  if (config.env == 'development') {
    console.log('I am from Global Handler', error);
  }

  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessages: IErrorMessages[] = [];

  if (error?.name == 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
};

export default GlobalErrorHandler;
