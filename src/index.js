import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './routes/App';
import Mustard from "./routes/Mustard";
import Addog from "./routes/Addog";
import Knm from "./routes/Knm";
import Relish from "./routes/Relish";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="mustard" element={<Mustard />} />
        <Route path="addog" element={<Addog />} />
        <Route path="knm" element={<Knm />} />
        <Route path="relish" element={<Relish />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
