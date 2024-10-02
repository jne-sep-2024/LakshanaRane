import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard'  element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>

        }/>
      </Routes>
    </Router>
  );
};

export default App;
