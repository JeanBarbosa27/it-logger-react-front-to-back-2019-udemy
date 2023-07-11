import materialize from 'materialize-css/dist/js/materialize.min.js';

import ITech from '../../interfaces/ITech';
import { useAppDispatch } from '../../store/hooks';
import { deleteTech } from '../../store/reducers/techReducers';

interface ITechItemProps {
  tech: ITech;
}

// TODO: Should be interesting be able to edit the technician just click on its name, right on the item, without close this and opening a new modal. It should change between two inputs and the full name text

const TechsItem = ({ tech }: ITechItemProps) => {
  const dispatch = useAppDispatch();

  const onDelete = async () => {
    await dispatch(deleteTech(tech.id));
    materialize.toast({ html: `Technician ${tech.firstName} ${tech.lastName} deleted!` });
  }
  return (
    <div>
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content grey-text" onClick={onDelete}>
        <i className="material-icons delete-button">delete</i>
      </a>
    </div>
  )
}

export default TechsItem
