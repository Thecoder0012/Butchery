import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";


const root = createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>,

);
