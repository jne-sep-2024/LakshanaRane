import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    //  navigate to About page
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Go to About Page</button>
    </div>
  );
}

export default Home;
