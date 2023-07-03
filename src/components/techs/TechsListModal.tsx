import { useState, useEffect } from 'react';

import ITech from './ITech';
import TechsItem from './TechsItem';

const TechsListModal = () => {
  const [techs, setTechs] = useState<Array<ITech>>([])
  const [loading, setLoading] = useState(false)

  const getTechs = async () => {
    setLoading(true)
    const response = await fetch('http://localhost:5000/techs');
    const data = await response.json()

    setTechs(data);
    setLoading(false);
  }

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {
            !loading && techs.length === 0
              ? (<li>There is no technicians added yet...</li>)
              : techs.map((tech) => (
                <li className="collection-item" key={tech.id.toString()}><TechsItem tech={tech} /></li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TechsListModal
