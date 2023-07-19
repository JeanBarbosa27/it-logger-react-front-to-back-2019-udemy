import { Request, Response } from 'express';

export default interface ICotronller {
  index(request: Request, response: Response): Promise<Response>
  get(request: Request, response: Response): Promise<Response>
  post(request: Request, response: Response): Promise<Response>
  put(request: Request, response: Response): Promise<Response>
  delete(request: Request, response: Response): Promise<Response>
}
