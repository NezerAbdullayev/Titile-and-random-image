import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from "./context/books";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
