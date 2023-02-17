import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ConfirmationPage from "../src/pages/confirmation/confirmation"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path='/' element = {<App />}/>
    <Route path="/PictoBloxPay" element = {<ConfirmationPage />} />
    </Routes>
  </Router>
);

