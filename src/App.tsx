import { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import materialize from 'materialize-css/dist/js/materialize.min.js';

import './App.css'

import store from './store';

import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import SystemLogsList from './components/systemLogs/SystemLogsList';
import SystemLogAddModal from './components/systemLogs/SystemLogAddModal';
import SystemLogEditModal from './components/systemLogs/SystemLogEditModal';
import TechsAddModal from './components/techs/TechsAddModal';
import TechsListModal from './components/techs/TechsListModal';

const App = () => {
  useEffect(() => {
    // Initialize all instances of materialize to be used in script files
    materialize.AutoInit();
  });
  return (
    <Provider store={store}>
      <SearchBar />
      <div className="container">
        <AddButton />
        <SystemLogAddModal />
        <SystemLogEditModal />
        <TechsAddModal />
        <TechsListModal />
        <SystemLogsList />
      </div>
    </Provider>
  )
}

export default App
