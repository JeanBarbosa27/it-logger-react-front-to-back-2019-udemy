import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

import ConnectMongoDB from './db/ConnectMongoDB.js';
import AppRoutes from './routes/index.js';

dotenv.config();

if (!process.env.MONGO_DB_URI) {
  throw new Error("Couldn't connect to MongoDB due to missing URI");
}

const app: Express = express();
const environment = process.env.ENVIRONMENT
const port = process.env.PORT;

const { getRoutes, getAvailableRoutes } = new AppRoutes();
const connectMongoDB = new ConnectMongoDB(process.env.MONGO_DB_URI);
connectMongoDB.connect();

app.use(express.json());

app.get('/health-check', (_, response: Response) => {
  response.send('Ok');
});

app.use(getRoutes());

app.use((request: Request, response: Response, next: NextFunction) => {
  const availableRoutes = getAvailableRoutes().map(({ route }) => route);
  response.status(404).json({ errors: [`Endpoint not found, available endpoints are ${availableRoutes.join(', ')}`] });
});

app.listen(port, () => {
  console.log(`Server running on port ${environment === 'development' ? 'http://localhost:' + port : port}`);

  if (environment === 'development') {
    console.log(`You can check http://localhost:${port}/health-check to test server response`);
  }
});
