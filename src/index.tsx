import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Pass the container element to createRoot
);

root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
