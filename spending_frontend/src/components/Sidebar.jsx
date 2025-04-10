import React from 'react';

const Sidebar = ({ setView }) => (
  <aside className="sidebar">
    <h2>Menu</h2>
    <ul>
      <li onClick={() => setView('locataires')}>Locataires</li>
      <li onClick={() => setView('rooms')}>Chambres</li>
      <li>Paramètres</li>
      <li>Gestion des Loyers $</li>
    </ul>
  </aside>
);

export default Sidebar;
