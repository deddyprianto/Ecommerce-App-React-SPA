import React from "react";
import { Navigate } from "react-router-dom";
import { createTrackedSelector } from "react-tracked";
import { useSelector } from "react-redux";
const useTrackedSelector = createTrackedSelector(useSelector);

const ProtectedRoutePages = ({ children }) => {
  const state = useTrackedSelector();
  const { access_token } = state.login.login;
  if (!access_token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoutePages;
