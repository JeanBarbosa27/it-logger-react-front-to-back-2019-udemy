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

  public getRoutes = () => {
    const logsRoutes = this.logsRoutes.getRoutes();
    const techsRoutes = this.techsRoutes.getRoutes();
    this.router.use('/logs', logsRoutes);
    this.router.use('/techs', techsRoutes);

    return this.router;
  }
}
