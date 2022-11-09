import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';


ReactDOM.render(
  <React.StrictMode>
    <App counter={0}/>
  </React.StrictMode>,
  document.getElementById('root')
);
