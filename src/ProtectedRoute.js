import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const userId = sessionStorage.getItem('userId');
  const userRole = sessionStorage.getItem('userRole');

  if (userId && allowedRoles.includes(userRole)) {
    return <Component />;
  } else {
    if (!allowedRoles.includes(userRole)) {
      alert("You are not authorized!!");
    }
    else {
      alert("Please login to continue.");
    }
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;