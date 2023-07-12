import { useState } from "react";
import materialize from 'materialize-css/dist/js/materialize.min.js';

import { useAppDispatch } from "../../store/hooks";
import { addTech } from "../../store/reducers/techReducers";

const TechsAddModal = () => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = async () => {
    if (!firstName || !lastName) {
      materialize.toast({ html: "Please fill in first and last name" })
    } else {
      await dispatch(addTech({ firstName, lastName }));
      materialize.toast({ html: `Technician ${firstName} ${lastName} added!` })

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
            <label htmlFor="lastName" className="active">Last Name</label>
          </div>
        </div>

        {/* TODO: Should be interesting having two buttons, one for add and close and other to add and keep adding */}
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-light btn blue" onClick={onSubmit}>Add</a>
        </div>
      </div>
    </div>
  )
}

export default TechsAddModal
