import 'reflect-metadata';
import 'dotenv';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import AppErrors from '../../errors/AppError';
import '../typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppErrors) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.error(err);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);
app.listen(3333);