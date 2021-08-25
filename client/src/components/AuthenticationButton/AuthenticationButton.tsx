import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0(); //use hook to determine whether or not the user is loggeed 
  console.log(isAuthenticated,"auth....")
  return isAuthenticated ? <LogoutButton /> :<LoginButton />;
};

export default AuthenticationButton;