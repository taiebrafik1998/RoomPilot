import React, { useState } from 'react';
import useChambres from '../hooks/useChambres';
import './Chambres.css';

const Chambres = ({ urlServer }) => {
  const { rooms, newRoom, handleChange, handleCreate, deleteRoom, updateRoom } = useChambres(urlServer);
  const [editing, setEditing] = useState(null);

  const [editData, setEditData] = useState({ name: '', type: '', available: true });

  const startEdit = (room) => {
    setEditing(room.id);
    setEditData(room);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const submitEdit = () => {
    updateRoom(editing, editData);
    setEditing(null);
  };

  return (
    <section className="section">
      <h2 className="section-title">🏠 Gestion des chambres</h2>

      <div className="card">
        <h3 className="card-title">Ajouter une chambre</h3>
        <div className="form-grid">
          <input type="text" name="name" placeholder="Nom" value={newRoom.name} onChange={handleChange} />
          <select name="type" value={newRoom.type} onChange={handleChange}>
            <option value="">-- Type --</option>
            <option value="chambre">Chambre</option>
            <option value="studio">Studio</option>
            <option value="appartement">Appartement</option>
          </select>
          <label>
            Disponible
            <input type="checkbox" name="available" checked={newRoom.available} onChange={handleChange} />
          </label>
        </div>
        <button className="btn-primary" onClick={handleCreate}>➕ Ajouter</button>
      </div>

      <table className="modern-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Disponible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              {editing === room.id ? (
                <>
                  <td><input value={editData.name} name="name" onChange={handleEditChange} /></td>
                  <td>
                    <select name="type" value={editData.type} onChange={handleEditChange}>
                      <option value="chambre">Chambre</option>
                      <option value="studio">Studio</option>
                      <option value="appartement">Appartement</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="available" checked={editData.available} onChange={handleEditChange} />
                  </td>
                  <td>
                    <button onClick={submitEdit}>💾</button>
                    <button onClick={() => setEditing(null)}>❌</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{room.name}</td>
                  <td>{room.type}</td>
                  <td>{room.available ? 'Oui' : 'Non'}</td>
                  <td>
                    <button onClick={() => startEdit(room)}>✏️</button>
                    <button onClick={() => deleteRoom(room.id)}>🗑️</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Chambres;
