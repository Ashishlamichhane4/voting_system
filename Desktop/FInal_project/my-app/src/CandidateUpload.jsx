// import React, { useState } from 'react';
// import './candidates.css'

// function CandidateUpload() {
//   const [candidateName, setCandidateName] = useState('');
//   const [candidatePartyName, setCandidatePartyName] = useState('');
//   const [candidateImage, setCandidateImage] = useState('');
//   const [partySymbolImage, setPartySymbolImage] = useState('');
//   const [candidateSpouseName, setCandidateSpouseName] = useState('');
  
  
//   const handleCandidateNameChange = (event) => {
//     setCandidateName(event.target.value);
//   }

//   const handleCandidatePNameChange = (event) => {
//     setCandidatePartyName(event.target.value);
//   }

//   // const handleCandidateSpouseNameChange = (event) => {
//     //   setCandidateSpouseName(event.target.value);
//     // }
    
//     // const handleCandidateImageChange = (event) => {
//       //   setCandidateImage(event.target.files[0]);
//       // }
      
//       // const handlePartySymbolImageChange = (event) => {
//   //   setPartySymbolImage(event.target.files[0]);
//   // }
//   const handleCandidateImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file.type !== 'image/jpeg') {
//       alert('Please upload a JPEG image');
//       return;
//     }
//     setCandidateImage(file);
//   }
  
//   const handlePartySymbolImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file.type !== 'image/jpeg') {
//       alert('Please upload a JPEG image');
//       return;
//     }
//     setPartySymbolImage(file);
//   }
  

//   //connect firebase
//   const handleUpload = async(event) => {
//     // Here you can perform any necessary operations with the uploaded data, such as sending it to a server or storing it in the browser's local storage.
//     event.preventDefault();
//     fetch("https://voting-system-deb07-default-rtdb.firebaseio.com/userDataRecords.json")
//     console.log('Candidate Name:', candidateName);
//     console.log('Candidate Image:', candidateImage);
//     console.log('Party Symbol Image:', partySymbolImage);
//     // console.log('Candidate Spouse Name:', candidateSpouseName);
//   }

//   return (
//     <div className='candidates'>
//       <h2>Upload Candidate Information</h2>
//       <label>
//         Candidate Name:
//         <input className='details' type="text" value={candidateName} method={post} onChange={handleCandidateNameChange} />
//       </label>

//       <label>
//         Candidate Party Name:
//         <input className='details' type="text" value={candidatePartyName} onChange={handleCandidatePNameChange} />
//       </label>

     

//       <br />
//       <label>
//         Candidate Image:
//         <input className='details' type="file" onChange={handleCandidateImageChange} />
//       </label>
//       <br />
//       <label>
//         Party Symbol Image:
//         <input className='details' type="file" onChange={handlePartySymbolImageChange} />
//       </label>
//       <br />
//       <button onClick={handleUpload}>Upload</button>
//       <br />
//       {candidateImage && (
        
//         <div >
//           <h2>Candidate Image:</h2>
//           <img className="photo" src={URL.createObjectURL(candidateImage)} alt="Candidate" width="200" height="200" />
//         </div>
//       )}
//       {partySymbolImage && (
//         <div>
//           <h2>Party Symbol Image:</h2>
//           <img className='photo' src={URL.createObjectURL(partySymbolImage)} alt="Party Symbol" width="200" height="200" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CandidateUpload;


// import React, { useState } from 'react';
// import './candidates.css'

// function CandidateUpload() {
//   // Set up state variables for form input fields
//   const [candidateName, setCandidateName] = useState('');
//   const [candidatePartyName, setCandidatePartyName] = useState('');
//   const [candidateImage, setCandidateImage] = useState('');
//   const [partySymbolImage, setPartySymbolImage] = useState('');

//   // Define functions to handle changes in form input fields
//   const handleCandidateNameChange = (event) => {
//     setCandidateName(event.target.value);
//   }

//   const handleCandidatePNameChange = (event) => {
//     setCandidatePartyName(event.target.value);
//   }
    
//   const handleCandidateImageChange = (event) => {
//     const file = event.target.files[0];
//     // Check that uploaded file is a JPEG image
//     if (file.type !== 'image/jpeg') {
//       alert('Please upload a JPEG image');
//       return;
//     }
//     setCandidateImage(file);
//   }
  
//   const handlePartySymbolImageChange = (event) => {
//     const file = event.target.files[0];
//     // Check that uploaded file is a JPEG image
//     if (file.type !== 'image/jpeg') {
//       alert('Please upload a JPEG image');
//       return;
//     }
//     setPartySymbolImage(file);
//   }

//   // Handle form submission
//   const handleUpload = async(event) => {
//     event.preventDefault();
//     console.log('Candidate Name:', candidateName);
//     console.log('Candidate Image:', candidateImage);
//     console.log('Party Symbol Image:', partySymbolImage);
//     // Post form data to Firebase database
//     fetch("https://voting-system-deb07-default-rtdb.firebaseio.com/userDataRecords.json", {
//       method: 'POST',
//       body: JSON.stringify({
//         candidateName: candidateName,
//         candidatePartyName: candidatePartyName,
//         candidateImage: candidateImage,
//         partySymbolImage: partySymbolImage,
//       })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//   }

//   // Render the form
//   return (
//     <form className='candidates' onSubmit={handleUpload}>
//       <h2>Upload Candidate Information</h2>
//       <label>
//         Candidate Name:
//         <input className='details' type="text" value={candidateName} onChange={handleCandidateNameChange} />
//       </label>

//       <label>
//         Candidate Party Name:
//         <input className='details' type="text" value={candidatePartyName} onChange={handleCandidatePNameChange} />
//       </label>

//       <br />
//       <label>
//         Candidate Image:
//         <input className='details' type="file" onChange={handleCandidateImageChange} />
//       </label>
//       <br />
//       <label>
//         Party Symbol Image:
//         <input className='details' type="file" onChange={handlePartySymbolImageChange} />
//       </label>
//       <br />
//       <input type="submit" value="Upload" />
//     </form>
//   );
// }

// export default CandidateUpload;



import React, { useState } from 'react';
import './candidates.css'

function CandidateUpload() {
  // Set up state variables for form input fields
  const [candidateName, setCandidateName] = useState('');
  const [candidatePartyName, setCandidatePartyName] = useState('');
  const [candidateImage, setCandidateImage] = useState('');
  const [partySymbolImage, setPartySymbolImage] = useState('');

  // Define functions to handle changes in form input fields
  const handleCandidateNameChange = (event) => {
    setCandidateName(event.target.value);
  }

  const handleCandidatePNameChange = (event) => {
    setCandidatePartyName(event.target.value);
  }
    
  const handleCandidateImageChange = (event) => {
    const file = event.target.files[0];
    // Check that uploaded file is a JPEG image
    if (file.type !== 'image/jpeg') {
      alert('Please upload a JPEG image');
      return;
    }
    setCandidateImage(file);
  }
  
  const handlePartySymbolImageChange = (event) => {
    const file = event.target.files[0];
    // Check that uploaded file is a JPEG image
    if (file.type !== 'image/jpeg') {
      alert('Please upload a JPEG image');
      return;
    }
    setPartySymbolImage(file);
  }

  // Handle form submission
  const handleUpload = async(event) => {
    event.preventDefault();
    console.log('Candidate Name:', candidateName);
    console.log('Candidate Image:', candidateImage);
    console.log('Party Symbol Image:', partySymbolImage);

    // Convert image files to base64 string
    const reader = new FileReader();
    reader.readAsDataURL(candidateImage);
    reader.onload = () => {
      const candidateImageBase64 = reader.result.split(',')[1];
      const partySymbolImageBase64 = reader.result.split(',')[1];

      // Post form data to Firebase database
      fetch("https://voting-system-deb07-default-rtdb.firebaseio.com/candidateDataRecords.json", {
        method: 'POST',
        body: JSON.stringify({
          candidateName: candidateName,
          candidatePartyName: candidatePartyName,
          candidateImage: candidateImageBase64,
          partySymbolImage: partySymbolImageBase64,
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    };
  }

  // Render the form
  return (
    <form className='candidates' onSubmit={handleUpload}>
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
      <input type="submit" value="Upload" />
    </form>
  );
}

export default CandidateUpload;
