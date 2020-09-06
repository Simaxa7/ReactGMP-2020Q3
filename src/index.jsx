import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import ErrorBoundary from './components/ErrorBoundary';

const BoundaryApp = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

ReactDOM.render(<BoundaryApp />, document.getElementById('root'));
