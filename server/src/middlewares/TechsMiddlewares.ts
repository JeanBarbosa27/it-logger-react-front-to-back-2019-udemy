import { Request, Response, NextFunction } from 'express';

export default class TechsMiddlewares {
  private static readonly requiredBody = { firstName: "tech first name", lastName: "tech last name" };

  private static getFieldMustNotBeEmptyMessage = (field: string) => {
    return `Invalid value for ${field} field, it must not be empty.`
  }

  public static validateTechCreation = (request: Request, response: Response, next: NextFunction) => {
    if (!request.body || typeof request.body != 'object') {
      return response.status(400).send({
        errors: [`Invalid body, it must be sent with this structure ${JSON.stringify(this.requiredBody)}`]
      });
    }

    const { firstName, lastName } = request.body;
    const errors = [];

    if (firstName === '') {
      errors.push(this.getFieldMustNotBeEmptyMessage('firstName'));
    }

    if (lastName === '') {
      errors.push(this.getFieldMustNotBeEmptyMessage('lastName'));
    }

    if (errors.length) {
      return response.status(400).send({ errors });
    }

    next();
  }
}
