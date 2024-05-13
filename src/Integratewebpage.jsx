import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function Integratewebpage() {
  const [socket, setSocket] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState('Connecting...');

  useEffect(() => {
    // Initialize the socket connection
    const newSocket = io('http://localhost:5000/');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      // Send data right after socket is connected
      newSocket.emit('submit_data', {
        questions: {
          "1": sessionStorage.getItem('question1'),
          "2": sessionStorage.getItem('question2'),
          "3": sessionStorage.getItem('question3'),
          "4": sessionStorage.getItem('question4'),
          "5": sessionStorage.getItem('question5'),
          "6": sessionStorage.getItem('question6'),
          "7": sessionStorage.getItem('question7'),
          "8": sessionStorage.getItem('question8'),
          "9": sessionStorage.getItem('question9'),
          "10": sessionStorage.getItem('question10'),
          "11": sessionStorage.getItem('question11'),
          "12": sessionStorage.getItem('question12')
        }
      });
      setLoadingStatus('Data submitted, waiting for response...');
    });

    newSocket.on('loading_status', (data) => {
      setLoadingStatus(data.status);
    });

    newSocket.on('complete', () => {
      setLoadingStatus('Process Complete!');
      // Optionally keep the socket connection open or disconnect
      // newSocket.disconnect();
    });

    // Clean up the socket when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Review Your Answers</h1>
      <h1>{loadingStatus}</h1>
    </div>
  );
}

export default Integratewebpage;
