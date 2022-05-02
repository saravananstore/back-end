import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './service';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PROJECT_NAME} server is running on the Port ${process.env.PORT}`);
});

dbConnection() 