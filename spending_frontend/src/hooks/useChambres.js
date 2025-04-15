import { useState, useEffect } from 'react';
import axios from 'axios';

const useChambres = (urlServer) => {
  // 🔄 newRoom a maintenant aussi loyer & description
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    name: '',
    type: '',
    available: true,
    loyer: '',
    description: ''
  });

  // 🔁 Charger les chambres à l'initialisation
  useEffect(() => {
    axios.get(`${urlServer}/api/rooms/`)
      .then(res => setRooms(res.data))
      .catch(err => console.error('Erreur chargement chambres:', err));
  }, [urlServer]);

  // ✏️ Gère tous les champs du formulaire (incluant number et checkbox)
  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setNewRoom(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value
    }));
  };

  // ➕ Création d’une chambre avec tous les champs
  const handleCreate = async () => {
    try {
      await axios.post(`${urlServer}/api/rooms/`, newRoom);
      setNewRoom({
        name: '',
        type: '',
        available: true,
        loyer: '',
        description: ''
      });
      const res = await axios.get(`${urlServer}/api/rooms/`);
      setRooms(res.data);
    } catch (err) {
      console.error('Erreur création chambre :', err);
    }
  };

  // 🗑️ Suppression
  const deleteRoom = async (id) => {
    try {
      await axios.delete(`${urlServer}/api/rooms/${id}/`);
      const res = await axios.get(`${urlServer}/api/rooms/`);
      setRooms(res.data);
    } catch (err) {
      console.error('Erreur suppression chambre :', err);
    }
  };

  // 📝 Mise à jour (utilisé lors de l’édition)
  const updateRoom = async (id, updatedRoom) => {
    try {
      await axios.put(`${urlServer}/api/rooms/${id}/`, updatedRoom);
      const res = await axios.get(`${urlServer}/api/rooms/`);
      setRooms(res.data);
    } catch (err) {
      console.error('Erreur modification chambre :', err);
    }
  };

  return {
    rooms,
    newRoom,
    handleChange,
    handleCreate,
    deleteRoom,
    updateRoom
  };
};

export default useChambres;
