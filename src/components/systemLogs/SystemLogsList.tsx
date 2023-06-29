import { useState, useEffect } from 'react';

import ISystemLog from './ISystemLog';
import SystemLogItem from './SystemLogItem';

const SystemLogsList = () => {
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<ISystemLog[]>([]);

  const getLogs = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/logs');
    const data = await response.json();

    setLoading(false);
    setLogs(data);
  }

  useEffect(() => {
    getLogs();
  }, [])

  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {
        !loading && logs.length === 0
          ? (<li>There is no logs yet...</li>)
          : logs.map((log: ISystemLog) => (
            <li key={log.id.toString()}>
              <SystemLogItem log={log} />
            </li>
          ))
      }
    </ul>
  )
}

export default SystemLogsList
