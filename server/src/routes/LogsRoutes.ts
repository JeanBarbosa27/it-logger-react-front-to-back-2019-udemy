import { Router } from 'express';

import IRoutes from './IRoutes.js';
import LogsController from '../controllers/LogsController.js';
import logModel from '../models/LogModel.js';

export default class LogsRoutes implements IRoutes {
  private router = Router();
  private controller: LogsController;

  constructor() {
    this.controller = new LogsController(logModel);
  }

  public getRoutes = () => {
    this.router.get('/', this.controller.get);
    this.router.post('/', this.controller.post);
    this.router.put('/:id', this.controller.put);
    this.router.delete('/:id', this.controller.delete);

    return this.router;
  }
}
