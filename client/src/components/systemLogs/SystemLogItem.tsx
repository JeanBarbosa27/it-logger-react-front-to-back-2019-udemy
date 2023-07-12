import materialize from 'materialize-css/dist/js/materialize.min.js';

import ISystemLog from '../../interfaces/ISystemLog';
import { formatDate } from '../../utils/strings/dates';
import { useAppDispatch } from '../../store/hooks';
import { deleteLog, setCurrentLog } from '../../store/reducers/systemLogReducer';

interface ISystemLogItemParams {
  log: ISystemLog;
}

const SystemLogItem = ({ log }: ISystemLogItemParams) => {
  const dispatch = useAppDispatch()
  const lastUpdatedOn = formatDate(log.date);

  const onDelete = async () => {
    await dispatch(deleteLog(log.id));

    materialize.toast({ html: `Log ${log.message} deleted!` });
  }

  return (
    <ul>
      <li>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          onClick={() => dispatch(setCurrentLog(log))}
        >{log.message}</a>
      </li>
      <li className="black-text children-space-1">
        <span>ID #{log.id}</span>
        <a href="#2">by {log.tech}</a>
        <span className="grey-text">last updated on {lastUpdatedOn}</span>
        <a href="#!" className="secondary-content grey-text" onClick={onDelete}>
          <i className="material-icons delete-button">delete</i>
        </a>
      </li>
    </ul>
  )
}

export default SystemLogItem
