import { Request, Response } from 'express';

import ICotronller from './IController';
export default class TechsController implements ICotronller {
  public get = async (request: Request, response: Response) => {
    // TODO: Implement logic
    return response.send({});
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
