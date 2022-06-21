import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import App from './App';

// do we need to have this? this will need to have higher specificity because no other h1 can be styled due to this affecting all of them ***update: commented out- THANKS VIDA!!! -Tanesha Brester
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
