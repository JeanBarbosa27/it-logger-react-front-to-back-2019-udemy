import { useState, useEffect } from "react";
import materialize from 'materialize-css/dist/js/materialize.min.js';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getCurrentLog, updateLog } from "../../store/reducers/systemLogReducer";
import { getTechs } from "../../store/reducers/techReducers";

const SystemLogEditModal = () => {
  const techs = useAppSelector(getTechs);
  const currentLog = useAppSelector(getCurrentLog);
  const dispatch = useAppDispatch();

  const [attention, setAttention] = useState(false);
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (currentLog) {
      setAttention(currentLog.attention);
      setMessage(currentLog.message);
      setTech(currentLog.tech);
    }
  }, [currentLog])

  const onSubmit = async () => {
    if (!currentLog) return;

    if (!message || !tech) {
      return materialize.toast({ html: "Please fill in the message and the technician" })
    }

    const logToUpdate = {
      id: currentLog.id,
      message,
      tech,
      attention,
      date: new Date().toISOString(),
    }

    await dispatch(updateLog(logToUpdate));

    setAttention(false);
    setMessage("");
    setTech("");
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
            />
            <label htmlFor="message" className="active">Log message</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setTech(event.target.value)}
            >
              <option value="" disabled>Select technician</option>
              {techs && techs.map(tech => {
                const techFullName = `${tech.firstName} ${tech.lastName}`;
                return (<option value={techFullName} key={tech.id}>{techFullName}</option>)
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in blue"
                  checked={attention}
                  onChange={(_) => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-light btn blue" onClick={onSubmit}>Edit</a>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default SystemLogEditModal
