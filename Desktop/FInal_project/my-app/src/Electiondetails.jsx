// import React from "react";
// import "./Electiondetails.css";

// function ElectionTable() {
//   const [elections, setElections] = React.useState([]);

//   const [electionName, setElectionName] = React.useState("");
//   const [candidates, setCandidates] = React.useState("");
//   const [startDate, setStartDate] = React.useState("");
//   const [endDate, setEndDate] = React.useState("");
//   const [selectedElection, setSelectedElection] = React.useState(null);
//   const [editing, setEditing] = React.useState(false);
//   const [showForm, setShowForm] = React.useState(false);

//   // Function to add a new election to the table
//   function addElection() {
//     setShowForm(true);
//   }

//   // Function to handle form submission
//   function handleSubmit(event) {
//     event.preventDefault();

//     const newElection = {
//       id: elections.length + 1,
//       name: electionName,
//       candidates: candidates.split(",").map(candidate => candidate.trim()),
//       startDate: new Date(startDate),
//       endDate: new Date(endDate)
//     };

//     setElections([...elections, newElection]);
//     setElectionName("");
//     setCandidates("");
//     setStartDate("");
//     setEndDate("");
//     setShowForm(false);
//   }

//   // Function to format a date object as a string
//   function formatDate(date) {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   }

//   // Function to delete an election from the table
//   function deleteElection(id) {
//     const updatedElections = elections.filter(election => election.id !== id);
//     setElections(updatedElections);
//   }

//   // Function to update an election in the table
//   function updateElection(event) {
//     event.preventDefault();

//     const updatedElections = [...elections];
//     const index = updatedElections.findIndex(election => election.id === selectedElection.id);
//     const updatedElection = {
//       ...selectedElection,
//       name: electionName,
//       candidates: candidates.split(",").map(candidate => candidate.trim()),
//       startDate: new Date(startDate),
//       endDate: new Date(endDate)
//     };
//     updatedElections[index] = updatedElection;

//     setElections(updatedElections);
//     setElectionName("");
//     setCandidates("");
//     setStartDate("");
//     setEndDate("");
//     setSelectedElection(null);
//     setEditing(false);
//   }

//   // Function to select an election for editing
//   function selectElectionForEditing(election) {
//     setSelectedElection(election);
//     setElectionName(election.name);
//     setCandidates(election.candidates.join(", "));
//     setStartDate(election.startDate.toISOString().substr(0, 10));
//     setEndDate(election.endDate.toISOString().substr(0, 10));
//     setEditing(true);
//   }

//   return (
//     <div className="container">
//       <div className="button-container">
//         <button className="add" onClick={addElection}>Add Election</button>
//       </div>
//       {showForm && (
//         <div className="form-container">
//           <form onSubmit={editing ? updateElection : handleSubmit}>
//             <h2>{editing ? "Edit Election" : "Add Election"}</h2>
//             <label>
//               Election Name:
//               <input type="text" value={electionName} onChange={(event) => setElectionName(event.target.value)} />
//             </label>
//             <br />
//             <label>
//               Election Area:
//               <input type="text" value={candidates} onChange={(event) => setCandidates(event.target.value)} />
//             </label>
//             <br/><label>
// Start Date:
// <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
// </label>
// <br />
// <label>
// End Date:
// <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
// </label>
// <br />
// <button type="submit">{editing ? "Save" : "Add"}</button>
// <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
// </form>
// </div>
// )}
// <table>
// <thead>
// <tr>
// <th>ID</th>
// <th>Name</th>
// <th>Candidates</th>
// <th>Start Date</th>
// <th>End Date</th>
// <th>Actions</th>
// </tr>
// </thead>
// <tbody>
// {elections.map((election) => (
// <tr key={election.id}>
// <td>{election.id}</td>
// <td>{election.name}</td>
// <td>{election.candidates.join(", ")}</td>
// <td>{formatDate(election.startDate)}</td>
// <td>{formatDate(election.endDate)}</td>
// <td>
// <button className="action-cell" onClick={() => selectElectionForEditing(election)}>Edit</button>
// <button className="action-cell" onClick={() => deleteElection(election.id)}>Delete</button>
// </td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// );
// }

// export default ElectionTable;



