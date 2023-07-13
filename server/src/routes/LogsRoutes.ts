import { Router } from 'express';

import IRoutes from './IRoutes.js';
import LogsController from '../controllers/LogsController.js';

export default class LogsRoutes implements IRoutes {
  private router: Router;
  private controller: LogsController;

  constructor(router: Router) {
    this.router = router;
    this.controller = new LogsController();
  }

  public getRoutes = () => {
    this.router.get('', this.controller.get);
    this.router.post('', this.controller.post);
    this.router.put('/:id', this.controller.put);
    this.router.delete('/:id', this.controller.delete);

    return this.router;
  }
}
