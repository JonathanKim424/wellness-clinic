import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./fonts/MarcellusSC-Regular.ttf";
import reportWebVitals from './reportWebVitals';

var book_url = 'https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=cjlTVUV5TkU2NXhjS0V6LzZyb2ozQT09&lid=R2I3NHdQMEZoTmhMNGIxQkJKcVdCQT09';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { book_url };