import { Request, Response } from 'express';

import ICotronller from './IController';
import { TLogModel } from '../models/LogModel';

export default class LogsController implements ICotronller {
  private model: TLogModel;

  constructor(model: TLogModel) {
    this.model = model;
  }

  public index = async (request: Request, response: Response) => {
    const allLogs = await this.model.find();

    return response.send(allLogs);
  }

  public get = async (request: Request, response: Response) => {
    return response.send({});
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
