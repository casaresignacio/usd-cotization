import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { MenuBar } from './components/MenuBar';
import { BoxValue } from './components/BoxValue';
import { CardValue } from './components/CardValue';
import './main.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxValue />
   </React.StrictMode>,
)
