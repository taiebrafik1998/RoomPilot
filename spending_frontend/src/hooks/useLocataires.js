import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocataires = (urlServer) => {
  const [locataires, setLocataires] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [newLocataire, setNewLocataire] = useState({ name: '', contact: '', room: '' });

  useEffect(() => {
    axios.get(`${urlServer}/api/tenants/`)
      .then(res => setLocataires(res.data))
      .catch(err => console.error('Error fetching locataires:', err));

    axios.get(`${urlServer}/api/rooms/`)
      .then(res => setRooms(res.data.filter(room => room.available)))
      .catch(err => console.error('Error fetching rooms:', err));
  }, [urlServer]);

  const handleChange = (e) => {
    setNewLocataire({ ...newLocataire, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await axios.post(`${urlServer}/api/tenants/`, newLocataire);
      setNewLocataire({ name: '', contact: '', room: '' });
      const updated = await axios.get(`${urlServer}/api/tenants/`);
      setLocataires(updated.data);
    } catch (error) {
      console.error('Error creating locataire:', error);
    }
  };

  const deleteLocataire = async (id) => {
    try {
      await axios.delete(`${urlServer}/api/tenants/${id}/`);
      const updated = await axios.get(`${urlServer}/api/tenants/`);
      setLocataires(updated.data);
    } catch (err) {
      console.error('Erreur suppression locataire :', err);
    }
  };
  

  return {
    locataires,
    rooms,
    newLocataire,
    handleChange,
    handleCreate,
    deleteLocataire
  };
};

export default useLocataires;
