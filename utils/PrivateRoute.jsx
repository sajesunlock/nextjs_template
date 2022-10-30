import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

export default function PrivateRoute() {
  // call redux to verify in the state of user
  const auth = useSelector((state) => state.user.isLoggedIn);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
