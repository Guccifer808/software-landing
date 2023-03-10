import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SelectedPage } from "./shared/types";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App setSelectedPage={(value: SelectedPage) => {}} />
  </React.StrictMode>
);
