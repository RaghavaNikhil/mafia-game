// import React from 'react';
// import PlayerCard from './PlayerCard';

// export default function PlayersDeck() {
//   const numberOfPlayers = 7; // Set the number of players

//   return (
//     <div>
//       <h1>Welcome to the Game!</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//         {Array.from({ length: numberOfPlayers }).map((_, index) => (
//           <PlayerCard key={index} playerName={`Player ${index + 1}`} />
//         ))}
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '10px'}}>
//         <button className='btn btn-primary'>Generate Roles</button>
//         <button className='btn btn-danger'>Clear Roles</button>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import PlayerCard from "./PlayerCard";
// import { Button, Modal } from "react-bootstrap";

// export default function PlayersDeck() {
//   const numberOfPlayers = 7; // Number of players
//   const [showGenerateRoleModal, setShowGenerateRoleModal] = useState(false); // Modal visibility state

//   const handleShowGenerateRolesModal = () => setShowGenerateRoleModal(true);
//   const handleCloseGenerateRolesModal = () => setShowGenerateRoleModal(false);

//   return (
//     <>
//       <div>
//         <Button>What am I?</Button>
//       </div>
//       <div>
//         <h1>Welcome to the Game!</h1>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//           {Array.from({ length: numberOfPlayers }).map((_, index) => (
//             <PlayerCard key={index} playerName={`Player ${index + 1}`} />
//           ))}
//         </div>
//         <div
//           style={{
//             margin: "20px",
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "10px",
//           }}
//         >
//           <Button variant="primary" onClick={handleShowGenerateRolesModal}>
//             Generate Roles
//           </Button>
//           <Button variant="danger">Clear Roles</Button>
//         </div>

//         {/* Modal */}
//         <Modal show={showGenerateRoleModal} onHide={handleCloseGenerateRolesModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Generated Roles</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>Roles for the players have been generated successfully!</p>
//             {/* Add additional details or role assignments here */}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseGenerateRolesModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { Button, Modal } from "react-bootstrap";

export default function PlayersDeck() {
  const numberOfPlayers = 7; // Number of players
  const [showGenerateRoleModal, setShowGenerateRoleModal] = useState(false);
  const [showRoleModal, setShowRoleModel] = useState(false);

  const handleShowGenerateRolesModal = () => setShowGenerateRoleModal(true);
  const handleCloseGenerateRolesModal = () => setShowGenerateRoleModal(false);

  const handleShowRoleModal = () => setShowRoleModel(true);
  const handleCloseRoleModal = () => setShowRoleModel(false);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Button variant="info" onClick={handleShowRoleModal}>What am I?</Button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to the Game!</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {Array.from({ length: numberOfPlayers }).map((_, index) => (
            <PlayerCard key={index} playerName={`Player ${index + 1}`} />
          ))}
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Button variant="primary" onClick={handleShowGenerateRolesModal}>
            Generate Roles
          </Button>
          <Button variant="danger">Clear Roles</Button>
        </div>
      </div>

      {/* Modal generate roles*/}
      <Modal show={showGenerateRoleModal} onHide={handleCloseGenerateRolesModal}>
        <Modal.Header closeButton>
          <Modal.Title>Generated Roles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Roles for the players have been generated successfully!</p>
          {/* Add additional details or role assignments here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGenerateRolesModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal generate roles*/}
      <Modal show={showRoleModal} onHide={handleCloseRoleModal}>
        <Modal.Header closeButton>
          <Modal.Title>You are....</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Some Role</p>
          {/* Add additional details or role assignments here */}
        </Modal.Body>
      </Modal>
    </div>
  );
}
