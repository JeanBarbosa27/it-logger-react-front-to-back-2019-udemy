import { Router } from 'express';

import LogsController from '../controllers/LogsController.js';

export default class LogsRoutes {
  router: Router;
  controller: LogsController;

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
