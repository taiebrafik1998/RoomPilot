// App.jsx
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Locataires from './components/Locataires';
import Chambres from './components/Chambres';

const App = ({ urlServer }) => {
  const [view, setView] = useState('locataires');

  return (
    <div className="layout">
      <Sidebar setView={setView} />
      <main className="main-content">
        {view === 'locataires' && <Locataires urlServer={urlServer} />}
        {view === 'rooms' && <Chambres urlServer={urlServer} />}
      </main>
    </div>
  );
};

export default App;