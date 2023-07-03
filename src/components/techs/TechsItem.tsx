import ITech from './ITech';

interface ITechItemProps {
  tech: ITech;
}

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
