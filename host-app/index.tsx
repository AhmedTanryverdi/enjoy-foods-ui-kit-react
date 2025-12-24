import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/app/ui/app";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
