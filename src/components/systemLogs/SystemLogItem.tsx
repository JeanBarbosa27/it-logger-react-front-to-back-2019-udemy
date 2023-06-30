import ISystemLog from './ISystemLog';

interface ISystemLogItemParams {
  log: ISystemLog;
}

const SystemLogItem = ({ log }: ISystemLogItemParams) => {
  const formatDate = (date: string): String => {
    // TODO: Turn it into a utils
    const time = Date.parse(date);

    return new Intl.DateTimeFormat(
      'en-GB',
      { dateStyle: 'medium', timeStyle: 'medium', timeZone: 'Europe/London' }
    ).format(time);
  }
  const lastUpdatedOn = formatDate(log.date);

  return (
    <li>
      <ul>
        <li>
          <a
            href="#edit-log-model"
            className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          >{log.message}</a>
        </li>
        <li className="black-text children-space-1">
          <span>ID #{log.id}</span>
          <a href="#2">by {log.tech}</a>
          <span className="grey-text">last updated on {lastUpdatedOn}</span>
          <a href="#!" className="secondary-content grey-text">
            <i className="material-icons delete-button">delete</i>
          </a>
        </li>
      </ul>
    </li>
  )
}

export default SystemLogItem
