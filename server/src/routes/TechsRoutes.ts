import { Router } from 'express';

import TechsController from '../controllers/TechsController.js';

export default class TechsRoutes {
  router: Router;
  controller: TechsController;

  constructor(router: Router) {
    this.router = router;
    this.controller = new TechsController();
  }

  public getRoutes = () => {
    this.router.get('', this.controller.get);
    this.router.post('', this.controller.post);
    this.router.put('/:id', this.controller.put);
    this.router.delete('/:id', this.controller.delete);

    return this.router;
  }
}
