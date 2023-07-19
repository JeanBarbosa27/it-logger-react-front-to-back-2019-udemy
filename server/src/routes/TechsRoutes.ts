import { Router } from 'express';

import IRoutes from './IRoutes.js';
import TechsController from '../controllers/TechsController.js';
import TechsMiddlewares from '../middlewares/TechsMiddlewares.js';
import techModel from '../models/TechModel.js';

export default class TechsRoutes implements IRoutes {
  private router = Router();
  private controller: TechsController;

  constructor() {
    this.controller = new TechsController(techModel);
  }

  public getRoutes = () => {
    this.router.get('/', this.controller.index);
    this.router.get('/:id', this.controller.get);
    this.router.post('/', TechsMiddlewares.validateTechCreation, this.controller.post);
    this.router.put('/:id', this.controller.put);
    this.router.delete('/:id', this.controller.delete);

    return this.router;
  }
}
