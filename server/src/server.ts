import express, { Express, Response } from 'express';
import dotenv from 'dotenv';

import AppRoutes from './routes/index.js';

dotenv.config();

const app: Express = express();
const environment = process.env.ENVIRONMENT
const port = process.env.PORT;
const router = express.Router();

const { getRoutes } = new AppRoutes(router);

app.use(express.json());

app.get('/health-check', (_, response: Response) => {
  response.send('Ok');
});

router.use(getRoutes());

app.listen(port, () => {
  console.log(`Server running on port ${environment === 'development' ? 'http://localhost:' + port : port}`);

  if (environment === 'development') {
    console.log(`You can check http://localhost:${port}/health-check to test server response`);
  }
});
