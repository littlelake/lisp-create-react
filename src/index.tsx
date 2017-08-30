import * as React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './app';

render(
  <Router>
    <Route exact path="/" component={App} />
  </Router>,
  document.getElementById('app')
);