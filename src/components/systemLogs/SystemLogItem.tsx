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

  return (
    <>
      <span>{log.message}</span>
      <span>by {log.tech}</span>
      <span>in {formatDate(log.date)}</span>
    </>
  )
}

export default SystemLogItem
