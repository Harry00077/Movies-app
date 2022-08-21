import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActiveGenreContextProvider } from './genrecontextprovider/activeGenreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveGenreContextProvider>
    <App />
    </ActiveGenreContextProvider>
  </React.StrictMode>
);


