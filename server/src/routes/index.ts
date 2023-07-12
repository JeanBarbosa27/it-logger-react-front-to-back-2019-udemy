import { Router } from 'express';

import LogsRoutes from './LogsRoutes.js';
import TechsRoutes from './TechsRoutes.js';

export default class AppRoutes {
  router: Router;
  logsRoutes: LogsRoutes;
  techsRoutes: TechsRoutes;

  constructor(router: Router) {
    this.router = router;
    this.logsRoutes = new LogsRoutes(router);
    this.techsRoutes = new TechsRoutes(router);
  }

  public getRoutes = () => {
    this.router.use('/logs', this.logsRoutes.getRoutes());
    this.router.use('/techs', this.techsRoutes.getRoutes());

    return this.router;
  }
}
