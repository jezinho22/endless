import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain="jez-johns.uk.auth0.com"
		clientId="O5vFbWkCxKyxRIWGW9rvXFl4c1o11LHE"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
);
