import ISystemLog from "./ISystemLog";

interface ISystemLogState {
  loading: boolean;
  logs: Array<ISystemLog>;
}

export default ISystemLogState;
