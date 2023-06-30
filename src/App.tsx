import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import materialize from 'materialize-css/dist/js/materialize.min.js';

import './App.css'

import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import LogsList from './components/systemLogs/SystemLogsList';
import SystemLogAddModal from './components/systemLogs/SystemLogAddModal';

const App = () => {
  useEffect(() => {
    // Initialize all instances of materialize to be used in script files
    materialize.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddButton />
        <SystemLogAddModal />
        <LogsList />
      </div>
    </>
  )
}

export default App
