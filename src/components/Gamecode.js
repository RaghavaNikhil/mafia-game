import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import PlayersDeck from './PlayersDeck';

export default function CenteredCard() {
  const [gameCode, setGameCode] = useState('');
  const [isGameCodeValid, setIsGameCodeValid] = useState(false); // Tracks if the game code is valid

  const validateCode = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (gameCode === '1234') {
      console.log('Code is valid!');
      setIsGameCodeValid(true); // Show the PlayersDeck component
    } else {
      console.log('Invalid code!');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      {isGameCodeValid ? (
        // Render PlayersDeck if the code is valid
        <PlayersDeck />
      ) : (
        // Render the card to enter the game code if the code is not valid
        <Card
          style={{
            width: '18rem',
            textAlign: 'center',
            transform: 'translateY(-50px)', // Moves card slightly up
          }}
        >
          <Card.Title>Enter a game</Card.Title>
          <Card.Body>
            <Form onSubmit={validateCode}>
              <Form.Group className="mb-3" controlId="gameCodeInput">
                <Form.Control
                  type="text"
                  placeholder="Enter game code"
                  value={gameCode}
                  onChange={(e) => setGameCode(e.target.value)} // Update gameCode state
                  style={{ textAlign: 'center' }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
