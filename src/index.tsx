import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PageStore } from "./contexts/Page";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PageStore>
      <App />
    </PageStore>
  </React.StrictMode>,
  document.getElementById("root")
);
