import React, { useState } from 'react';
import axios from 'axios';
import './PhotoUploader.css';

const PhotoUploader = ({ urlServer, chambres }) => {
  const [selectedChambre, setSelectedChambre] = useState('');
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFiles(filesArray);
    setPreview(filesArray.map(file => URL.createObjectURL(file)));
  };

  const handleUpload = async () => {
    if (!selectedChambre || files.length === 0) return alert('Sélectionnez une chambre et des photos');

    for (const file of files) {
      const formData = new FormData();
      formData.append('chambre', selectedChambre);
      formData.append('image', file);

      try {
        await axios.post(`${urlServer}/api/photos/upload/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (err) {
        console.error('Erreur upload image :', err);
      }
    }

    alert('Photos ajoutées avec succès ✅');
    setFiles([]);
    setPreview([]);
  };

  return (
    <div className="photo-uploader">
      <h3>📸 Ajouter des photos à une chambre</h3>
      <select value={selectedChambre} onChange={(e) => setSelectedChambre(e.target.value)}>
        <option value="">-- Sélectionnez une chambre --</option>
        {chambres.map((chambre) => (
          <option key={chambre.id} value={chambre.id}>{chambre.name}</option>
        ))}
      </select>

      <input type="file" multiple accept="image/*" onChange={handleFileChange} />
      
      <div className="preview-container">
        {preview.map((src, i) => (
          <img key={i} src={src} alt={`preview-${i}`} className="preview-img" />
        ))}
      </div>

      <button className="btn-primary" onClick={handleUpload}>📤 Uploader</button>
    </div>
  );
};

export default PhotoUploader;
