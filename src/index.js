import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import starWarsStore from './store/star_wars_store';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
   <Provider store={starWarsStore}>
    <Router>
        <App />
    </Router>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

