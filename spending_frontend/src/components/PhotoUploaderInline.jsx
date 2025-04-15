import React, { useState } from 'react';
import axios from 'axios';

const PhotoUploaderInline = ({ chambreId, onUploaded, urlServer }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    for (const file of files) {
      const formData = new FormData();
      formData.append('chambre', chambreId);
      formData.append('image', file);

      try {
        await axios.post(`${urlServer}/api/photos/upload/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (err) {
        console.error('Erreur upload :', err);
      }
    }

    setFiles([]);
    onUploaded(); // callback facultatif
  };

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <input type="file" multiple onChange={handleChange} />
      <button className="btn-primary" onClick={handleUpload}>📤 Uploader</button>
    </div>
  );
};

export default PhotoUploaderInline;
