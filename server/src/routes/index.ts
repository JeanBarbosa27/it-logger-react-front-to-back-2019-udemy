import { Router } from 'express';

import IRoutes from './IRoutes.js';
import LogsRoutes from './LogsRoutes.js';
import TechsRoutes from './TechsRoutes.js';

export default class AppRoutes implements IRoutes {
  private router = Router();
  private logsRoutes: LogsRoutes;
  private techsRoutes: TechsRoutes;

  constructor() {
    this.logsRoutes = new LogsRoutes();
    this.techsRoutes = new TechsRoutes();
  }

  public getAvailableRoutes = () => {
    return [
      {
        route: '/logs',
        handlers: this.logsRoutes.getRoutes(),
      },
      {
        route: '/techs',
        handlers: this.techsRoutes.getRoutes(),
      },
    ];
  }

  public getRoutes = () => {
    this.getAvailableRoutes().forEach(({ route, handlers }) => this.router.use(route, handlers));

    return this.router;
  }
}
