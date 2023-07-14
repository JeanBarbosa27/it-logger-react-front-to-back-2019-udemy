import { useState } from "react";
import materialize from 'materialize-css/dist/js/materialize.min.js';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addLog } from '../../store/reducers/systemLogReducer';
import { getTechs } from "../../store/reducers/techReducers";

const SystemLogAddModal = () => {
  const techs = useAppSelector(getTechs);
  const [attention, setAttention] = useState(false);
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");

  const dispatch = useAppDispatch()

  const onSubmit = async () => {
    if (!message || !tech) {
      materialize.toast({ html: "Please fill in the message and the technician" })
    } else {
      console.log(`Sending a new log with message: "${message}", tech: "${tech}" and if it needs attention: "${attention}"`);

      await dispatch(addLog({ attention, date: new Date().toISOString(), message, tech }));
      materialize.toast({ html: `Log added by ${tech}` });

      setAttention(false);
      setMessage("");
      setTech("");
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add System Log</h4>

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
          <a href="#!" className="modal-close waves-effect waves-light btn blue" onClick={onSubmit}>Add</a>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default SystemLogAddModal
