import { useState } from "react";
import materialize from 'materialize-css/dist/js/materialize.min.js';

const SystemLogAddModal = () => {
  const [attention, setAttention] = useState(false);
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (!message || !tech) {
      materialize.toast({ html: "Please fill in the message and the technician" })
    } else {
      console.log(`Sending a new log with message: "${message}", tech: "${tech}" and if it needs attention: "${attention}"`);

      setAttention(false)
      setMessage("")
      setTech("")
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>

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
              <option value="John Doe">John Doe</option>
              <option value="Jen Williams">Jen Williams</option>
              <option value="Sam Smith">Sam Smith</option>
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
          <a href="#!" className="modal-close waves-effect waves-light btn blue" onClick={onSubmit}>Enter</a>
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
