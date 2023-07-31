"use client"
import { useState } from 'react';
import axios from 'axios';
import ProgressBar from 'nextjs-progressbar';
import { Bar } from 'react-chartjs-2';


const API_ENDPOINT = 'http://localhost:8000';

export default function ImageClassifier() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [predictions, setPredictions] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      return;
    }
	
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(API_ENDPOINT+"/image", formData, {
        onUploadProgress: (progressEvent) => {
          setUploadProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      });

      setPredictions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadProgress > 0 && <ProgressBar percent={uploadProgress} />}
      
    </div>
  );
}
