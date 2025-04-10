import React from 'react';
import useLocataires from '../hooks/useLocataires';
import './Locataires.css';

const Locataires = ({ urlServer }) => {
  const {
    locataires,
    rooms,
    newLocataire,
    handleChange,
    handleCreate,
    deleteLocataire
  } = useLocataires(urlServer);

  const handleDelete = (id) => {
    if (window.confirm('Supprimer ce locataire ?')) {
      deleteLocataire(id);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">📋 Liste des locataires</h2>

      <div className="card">
        <h3 className="card-title">Ajouter un nouveau locataire</h3>
        <div className="form-grid">
          <input type="text" name="name" placeholder="Nom" value={newLocataire.name} onChange={handleChange} />
          <input type="text" name="contact" placeholder="Contact" value={newLocataire.contact} onChange={handleChange} />
          <select name="room" value={newLocataire.room} onChange={handleChange}>
            <option value="">-- Choisir une chambre --</option>
            {rooms.map((room, i) => (
              <option key={i} value={room.id}>{room.name} ({room.type})</option>
            ))}
          </select>

        </div>
        <button className="btn-primary" onClick={handleCreate}>➕ Ajouter</button>
      </div>

      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Chambre</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {locataires.map((locataire, index) => (
              <tr key={index}>
                <td>{locataire.name}</td>
                <td>{locataire.room}</td>
                {/* button supprimer */}
                <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {locataire.contact}
                  <button
                    onClick={() => handleDelete(locataire.id)}
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    title="Supprimer"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section >
  );
};

export default Locataires;
