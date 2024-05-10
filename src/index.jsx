import ReactDOM from "react-dom/client";
import React from 'react';

import App from "./App.jsx";
import "./styles.css";
import { DataProvider } from './data.jsx'; // Import the DataProvider


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>);
