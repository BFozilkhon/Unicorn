import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Count from './Context/count';
import './index.css';
import Root  from './Root';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Count>
    <Root />
    </Count>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

