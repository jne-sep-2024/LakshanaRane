import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetails() {
  const navigate= useNavigate();
  const {id}= useParams();

  const goBackToHome=()=>{
    navigate('/');
  }
 return(
  <div>
    <h3>user details</h3>
    <p> User Id: {id}</p>
    <button onClick={goBackToHome}>Go Back to Home</button>

  </div>
 )
}

export default UserDetails;
