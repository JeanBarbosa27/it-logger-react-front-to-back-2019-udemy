import { useState, useEffect } from 'react';

import Preloader from '../layout/Preloader';
import ISystemLog from './ISystemLog';
import SystemLogItem from './SystemLogItem';

const SystemLogsList = () => {
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<ISystemLog[]>([]);

  const getLogs = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/logs');
    const data = await response.json();

    // Mocks data being fethed
    setTimeout(() => {
      setLoading(false);
      setLogs(data);
    }, 500);
  }

  useEffect(() => {
    getLogs();
  }, [])

  if (loading) {
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
          : logs.map((log: ISystemLog) => <SystemLogItem log={log} key={log.id.toString()} />)
      }
    </ul>
  )
}

export default SystemLogsList
