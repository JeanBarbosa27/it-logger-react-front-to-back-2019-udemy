import ITech from '../../interfaces/ITech';

interface ITechItemProps {
  tech: ITech;
}

// TODO: Should be interesting be able to edit the technician just click on its name, right on the item, without close this and opening a new modal. It should change between two inputs and the full name text

const TechsItem = ({ tech }: ITechItemProps) => {
  return (
    <div>
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content grey-text">
        <i className="material-icons delete-button">delete</i>
      </a>
    </div>
  )
}

export default TechsItem
