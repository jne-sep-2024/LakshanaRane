import React from "react";
import { Navigate } from "react-router-dom";

//function to check authentication

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

const ProtectedRoute = ({ dashboardComponent }) => {
  return isAuthenticated ? dashboardComponent : <Navigate to="/login" />;
};

export default ProtectedRoute;
