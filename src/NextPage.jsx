import React from 'react';
import { useLocation } from 'react-router-dom';

function NextPage() {
  const location = useLocation();
  const { data } = location.state || { data: 'No data received' }; // Extracting data passed via state

  return (
    <div>
      <h1>Next Page</h1>
      <p>Data received from loading: {data}</p>
    </div>
  );
}

export default NextPage;
