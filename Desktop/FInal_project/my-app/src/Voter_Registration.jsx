// import React, { useState } from "react";
// import "./Voter_REgistration.css";

// function VoterRegistration() {
//   const [voterId, setVoterId] = useState("");
//   const [name, setName] = useState("");
//   const [electionArea, setElectionArea] = useState("");
//   const [biometrics, setBiometrics] = useState("");
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleVoterIdChange = (event) => {
//     setVoterId(event.target.value);
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleElectionAreaChange = (event) => {
//     setElectionArea(event.target.value);
//   };

//   const handleBiometricsChange = (event) => {
//     setBiometrics(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsRegistered(true);
//   };

//   return (
//     <div className="voter-registration">
//       <h2>Voter Registration</h2>
//       {isRegistered ? (
//         <div>
//           <p>Thank you for registering to vote!</p>
//           <p>Your voter ID is {voterId}</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Voter ID:
//             <input
//               type="text"
//               value={voterId}
//               onChange={handleVoterIdChange}
//               className="voter-registration__input"
//             />
//           </label>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={handleNameChange}
//               className="voter-registration__input"
//             />
//           </label>
//           <label>
//             Election Area:
//             <input
//               type="text"
//               value={electionArea}
//               onChange={handleElectionAreaChange}
//               className="voter-registration__input"
//             />
//           </label>
//           <label>
//             Biometrics:
//             <input
//               type="text"
//               value={biometrics}
//               onChange={handleBiometricsChange}
//               className="voter-registration__input"
//             />
//           </label>
//           <button type="submit" className="voter-registration__button">
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default VoterRegistration;



import React, { useState } from "react";
import "./Voter_REgistration.css";

function VoterRegistration() {
  const [voterId, setVoterId] = useState("");
  const [name, setName] = useState("");
  const [electionArea, setElectionArea] = useState("");
  const [biometrics, setBiometrics] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleVoterIdChange = (event) => {
    setVoterId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleElectionAreaChange = (event) => {
    setElectionArea(event.target.value);
  };

  const handleBiometricsChange = (event) => {
    setBiometrics(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);

    fetch("https://voting-system-deb07-default-rtdb.firebaseio.com/voterDataRecords.json", {
      method: 'POST',
      body: JSON.stringify({
        voterId: voterId,
        name: name,
        electionArea: electionArea,
        biometrics: biometrics,
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  };

  return (
    <div className="voter-registration">
      <h2>Voter Registration</h2>
      {isRegistered ? (
        <div>
          <p>Thank you for registering to vote!</p>
          <p>Your voter ID is {voterId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Voter ID:
            <input
              type="text"
              value={voterId}
              onChange={handleVoterIdChange}
              className="voter-registration__input"
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="voter-registration__input"
            />
          </label>
          <label>
            Election Area:
            <input
              type="text"
              value={electionArea}
              onChange={handleElectionAreaChange}
              className="voter-registration__input"
            />
          </label>
          <label>
            Biometrics:
            <input
              type="text"
              value={biometrics}
              onChange={handleBiometricsChange}
              className="voter-registration__input"
            />
          </label>
          <button type="submit" className="voter-registration__button">
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default VoterRegistration;
