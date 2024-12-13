import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import PlayersDeck from './PlayersDeck';

export default function CenteredCard() {
  const [gameCode, setGameCode] = useState('');
  const [isGameCodeValid, setIsGameCodeValid] = useState(false);

  const validateCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-k8u2.onrender.com/api/verify-code', {
        accessCode: gameCode
      });
      if (response.data.success) {
        console.log('Code is valid!');
        setIsGameCodeValid(true);
      } else {
        console.log('Invalid code!');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
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
        <PlayersDeck />
      ) : (
        <Card
          style={{
            width: '18rem',
            textAlign: 'center',
            transform: 'translateY(-50px)',
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
                  onChange={(e) => setGameCode(e.target.value)}
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
