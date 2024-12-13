import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { Button, Modal, Form } from "react-bootstrap";

export default function PlayersDeck() {
  const numberOfPlayers = 7;
  const [showGenerateRoleModal, setShowGenerateRoleModal] = useState(false);
  const [showRoleModal, setShowRoleModel] = useState(false);
  const [killers, setKillers] = useState(0);
  const [doctors, setDoctors] = useState(0);

  const handleShowGenerateRolesModal = () => setShowGenerateRoleModal(true);
  const handleCloseGenerateRolesModal = () => setShowGenerateRoleModal(false);

  const handleShowRoleModal = () => setShowRoleModel(true);
  const handleCloseRoleModal = () => setShowRoleModel(false);

  const handleSetKillersAndDoctors = () => {}

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
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

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to the Game!</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {Array.from({ length: numberOfPlayers }).map((_, index) => (
            <PlayerCard key={index} playerId={index + 1} playerName={`Player ${index + 1}`} />
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

      <Modal show={showGenerateRoleModal} onHide={handleCloseGenerateRolesModal}>
        <Modal.Header closeButton>
          <Modal.Title>Generated Roles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSetKillersAndDoctors}>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Control
                type="text"
                placeholder="Number of Killers"
                value={killers}
                onChange={(e) => setKillers(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Number of Doctors"
                value={doctors}
                onChange={(e) => setDoctors(e.target.value)}
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGenerateRolesModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRoleModal} onHide={handleCloseRoleModal}>
        <Modal.Header closeButton>
          <Modal.Title>You are....</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Some Role</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}