import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

import { useAuthState } from "./context/Auth";

const PrivateRoutes = (props) => {
  const { user } = useAuthState();

  // if (props.authenticated && !user) {
  //   return <Redirect to="/login" />;
  // } else if (props.guest && user) {
  //   return <Redirect to="/" />;
  // } else {
  //   return <Route component={props.component} {...props} />;
  // }
  return (
    props.guest && user ? <Navigate to="/login" /> : <Outlet/> 
  )  
};
export default PrivateRoutes;
