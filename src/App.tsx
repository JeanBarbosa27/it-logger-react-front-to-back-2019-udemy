import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import materialize from 'materialize-css/dist/js/materialize.min.js';

import './App.css'

import SearchBar from './components/layout/SearchBar';
import LogsList from './components/logs/LogsList';

const App = () => {
  useEffect(() => {
    // Initialize all instances of materialize to be used in script files
    materialize.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <LogsList />
    </>
  )
}

export default App
