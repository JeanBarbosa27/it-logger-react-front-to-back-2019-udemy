import { useEffect } from 'react';

import Preloader from '../layout/Preloader';
import ISystemLog from '../../interfaces/ISystemLog';
import SystemLogItem from './SystemLogItem';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getLogs, isLoading, fetchLogs } from '../../store/reducers/systemLogReducer';

const SystemLogsList = () => {
  const dispatch = useAppDispatch();
  const logs = useAppSelector(getLogs);
  const loading = useAppSelector(isLoading);

  useEffect(() => {
    dispatch(fetchLogs())
  }, [])

  if (loading || logs === null) {
    return <Preloader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {
        !loading && logs.length === 0
          ? (<li>There is no logs yet...</li>)
          : logs.map((log: ISystemLog) => (
            <li className="collection-item" key={log.id.toString()}><SystemLogItem log={log} /></li>
          ))
      }
    </ul>
  )
}

export default SystemLogsList
