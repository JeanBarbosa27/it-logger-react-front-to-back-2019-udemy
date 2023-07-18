import { Model, Schema, model } from 'mongoose';

interface ILog {
  message: string;
  attention: boolean;
  tech: string;
  date: string;
};

interface ILogMethods {
  findByTech(): Array<ILog>
  findByMessage(): Array<ILog>
};

export type TLogModel = Model<ILog, {}, ILogMethods>;

const logSchema = new Schema<ILog, TLogModel, ILogMethods>({
  attention: { type: Boolean, required: true },
  date: { type: String, required: true },
  message: { type: String, required: true },
  tech: { type: String, required: true },
});

logSchema.method('findByTech', function findByTech() {
  // TODO: Implement
});

logSchema.method('findByMessage', function findByMessage() {
  // TODO: Implement
});

const logModel = model<ILog, TLogModel>('Log', logSchema);

export default logModel;
