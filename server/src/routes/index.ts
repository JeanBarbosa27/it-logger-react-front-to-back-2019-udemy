import { Router } from 'express';

import IRoutes from './IRoutes.js';
import LogsRoutes from './LogsRoutes.js';
import TechsRoutes from './TechsRoutes.js';

export default class AppRoutes implements IRoutes {
  private router: Router;
  private logsRoutes: LogsRoutes;
  private techsRoutes: TechsRoutes;

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
