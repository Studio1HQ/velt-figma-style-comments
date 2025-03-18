import {
  VeltComments,
  VeltCommentsSidebar,
  VeltProvider,
} from "@veltdev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <VeltProvider apiKey={process.env.REACT_APP_VELT_API_KEY}>
    <VeltComments darkMode={true} />
    <VeltCommentsSidebar darkMode={true} />
    <App />
  </VeltProvider>
);
