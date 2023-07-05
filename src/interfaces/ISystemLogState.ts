import ISystemLog from "./ISystemLog";

interface ISystemLogState {
  error: string | null;
  current: ISystemLog | null;
  firstLoad: boolean;
  loading: boolean;
  logs: Array<ISystemLog> | null;
}

export default ISystemLogState;
