import { useEffect } from 'react';

import TechsItem from './TechsItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTechs, getTechs } from '../../store/reducers/techReducers';

const TechsListModal = () => {
  const dispatch = useAppDispatch();
  const techs = useAppSelector(getTechs);

  useEffect(() => {
    dispatch(fetchTechs())
    //eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {
            techs !== null && techs.length === 0
              ? (<li>There is no technicians added yet...</li>)
              : techs?.map((tech) => (
                <li className="collection-item" key={tech.id.toString()}><TechsItem tech={tech} /></li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TechsListModal
