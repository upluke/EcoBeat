import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

interface childrenType{
    children:React.ReactNode
}


const Auth0ProviderWithHistory:React.FC<childrenType> = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const history = useHistory();
  console.log(domain, clientId)
  const onRedirectCallback = (appState:any) => {
    console.log("debug in history",appState)
    // history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      // audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;