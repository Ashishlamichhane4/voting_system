import React, { useState } from 'react';
import './candidates.css'

function CandidateUpload() {
  const [candidateName, setCandidateName] = useState('');
  const [candidatePartyName, setCandidatePartyName] = useState('');
  const [candidateImage, setCandidateImage] = useState('');
  const [partySymbolImage, setPartySymbolImage] = useState('');
  const [candidateSpouseName, setCandidateSpouseName] = useState('');

  const handleCandidateNameChange = (event) => {
    setCandidateName(event.target.value);
  }

  const handleCandidatePNameChange = (event) => {
    setCandidatePartyName(event.target.value);
  }

  // const handleCandidateSpouseNameChange = (event) => {
  //   setCandidateSpouseName(event.target.value);
  // }

  // const handleCandidateImageChange = (event) => {
  //   setCandidateImage(event.target.files[0]);
  // }

  // const handlePartySymbolImageChange = (event) => {
  //   setPartySymbolImage(event.target.files[0]);
  // }
  const handleCandidateImageChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== 'image/jpeg') {
      alert('Please upload a JPEG image');
      return;
    }
    setCandidateImage(file);
  }
  
  const handlePartySymbolImageChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== 'image/jpeg') {
      alert('Please upload a JPEG image');
      return;
    }
    setPartySymbolImage(file);
  }
  

  const handleUpload = () => {
    // Here you can perform any necessary operations with the uploaded data, such as sending it to a server or storing it in the browser's local storage.

    console.log('Candidate Name:', candidateName);
    console.log('Candidate Image:', candidateImage);
    console.log('Party Symbol Image:', partySymbolImage);
    // console.log('Candidate Spouse Name:', candidateSpouseName);
  }

  return (
    <div className='candidates'>
      <h2>Upload Candidate Information</h2>
      <label>
        Candidate Name:
        <input className='details' type="text" value={candidateName} onChange={handleCandidateNameChange} />
      </label>

      <label>
        Candidate Party Name:
        <input className='details' type="text" value={candidatePartyName} onChange={handleCandidatePNameChange} />
      </label>

     

      <br />
      <label>
        Candidate Image:
        <input className='details' type="file" onChange={handleCandidateImageChange} />
      </label>
      <br />
      <label>
        Party Symbol Image:
        <input className='details' type="file" onChange={handlePartySymbolImageChange} />
      </label>
      <br />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {candidateImage && (
        
        <div >
          <h2>Candidate Image:</h2>
          <img className="photo" src={URL.createObjectURL(candidateImage)} alt="Candidate" width="200" height="200" />
        </div>
      )}
      {partySymbolImage && (
        <div>
          <h2>Party Symbol Image:</h2>
          <img className='photo' src={URL.createObjectURL(partySymbolImage)} alt="Party Symbol" width="200" height="200" />
        </div>
      )}
    </div>
  );
}

export default CandidateUpload;


