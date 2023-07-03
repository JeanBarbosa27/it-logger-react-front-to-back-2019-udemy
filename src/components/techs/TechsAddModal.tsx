import { useState } from "react";
import materialize from 'materialize-css/dist/js/materialize.min.js';

const TechsAddModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (!firstName || !lastName) {
      materialize.toast({ html: "Please fill in first and last name" })
    } else {
      console.log(`Adding a new tech with name: "${firstName} ${lastName}"`);
      setFirstName('');
      setLastName('');
    }
  }

  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add new technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
            />
            <label htmlFor="firstName" className="active">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
            />
            <label htmlFor="lastName" className="active">First Name</label>
          </div>
        </div>

        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-light btn blue" onClick={onSubmit}>Add</a>
        </div>
      </div>
    </div>
  )
}

export default TechsAddModal
