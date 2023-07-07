export interface ISystemLogDTO {
  attention: boolean;
  date: string;
  message: string;
  tech: string;
}

interface ISystemLog extends ISystemLogDTO {
  id: number;
}

export default ISystemLog;
