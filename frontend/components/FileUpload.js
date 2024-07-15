import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const contents = event.target.result;
      try {
        const jsonData = JSON.parse(contents);
        onFileUpload(jsonData); // Pass parsed JSON data to parent component
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>Drag & drop a JSON file here, or click to select</p>
    </div>
  );
};

export default FileUpload;