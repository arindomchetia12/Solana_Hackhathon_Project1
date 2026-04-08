import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import WalletContext from "./WalletContext";

<WalletContext>
  <App />
</WalletContext>

ReactDOM.createRoot(document.getElementById("root")).render(<App />);