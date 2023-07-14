import { Model, Schema, model } from 'mongoose';

interface ITech {
  firstName: string;
  lastName: string;
};

interface ITechMethods {
  fullName(): string;
};

type ITechModel = Model<ITech, {}, ITechMethods>;

const techSchema = new Schema<ITech, ITechModel, ITechMethods>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

techSchema.method('fullName', function fullName() {
  return `${this.firstName} ${this.lastName}`;
});

const techModel = model<ITech, ITechModel>('Tech', techSchema);

export default techModel
