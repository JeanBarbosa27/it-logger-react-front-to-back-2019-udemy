import { Request, Response } from 'express';

import ICotronller from './IController';
import { TTechModel } from 'models/TechModel';
export default class TechsController implements ICotronller {
  private model: TTechModel;

  constructor(model: TTechModel) {
    this.model = model;
  }

  public index = async (request: Request, response: Response) => {
    try {
      const allTechs = await this.model.find();

      return response.send(allTechs);
    } catch (error) {
      return response.status(502).send({
        errors: [{ message: 'Could not retrieve technicians list.', details: error },]
      });
    }
  }

  public get = async (request: Request, response: Response) => {
    const techId = request.params.id;

    try {
      const tech = await this.model.findById(techId);

      if (!tech) {
        return response.status(404).send({
          errors: [{ message: `Technician with id ${techId} not found`, details: '' }]
        });
      }

      return response.send(tech);
    } catch (error) {
      return response.status(502).send({
        errors: [{ message: `Could not retrieve technician with id ${techId}.`, details: error, }]
      });
    }
  }

  public post = async (request: Request, response: Response) => {

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
