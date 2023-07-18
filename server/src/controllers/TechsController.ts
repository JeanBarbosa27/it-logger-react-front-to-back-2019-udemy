import { Request, Response } from 'express';

import ICotronller from './IController';
import { TTechModel } from 'models/TechModel';
export default class TechsController implements ICotronller {
  private model: TTechModel;

  constructor(model: TTechModel) {
    this.model = model;
  }

  public get = async (request: Request, response: Response) => {
    const allTechs = await this.model.find();

    return response.send(allTechs);
  }

  public post = async (request: Request, response: Response) => {
    // TODO: Implement logic
    return response.send({});
  }
  public put = async (request: Request, response: Response) => {
    // TODO: Implement logic
    return response.send({});
  }

  public delete = async (request: Request, response: Response) => {
    // TODO: Implement logic
    return response.send({});
  }
}
