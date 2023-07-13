import { Request, Response } from 'express';

import ICotronller from './IController';

export default class LogsController implements ICotronller {
  public get = async (request: Request, response: Response) => {
    // TODO: implement logic
    return response.send({})
  }

  public post = async (request: Request, response: Response) => {
    // TODO: implement logic
    return response.send({})
  }

  public put = async (request: Request, response: Response) => {
    // TODO: implement logic
    return response.send({})
  }

  public delete = async (request: Request, response: Response) => {
    // TODO: implement logic
    return response.send({})
  }
}
