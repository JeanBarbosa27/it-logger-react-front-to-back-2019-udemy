import { useState } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { searchLog } from '../../store/reducers/systemLogReducer';
import useDebounce from '../../utils/hooks/useDebounce';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const debounceSearch = useDebounce(() => {
    dispatch(searchLog(text));
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)

    debounceSearch();
  }

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder='Search logs...'
              value={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar
