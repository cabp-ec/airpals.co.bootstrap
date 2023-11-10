import React from 'react';
import ReactDOM from 'react-dom/client';
import PlacesSearch from './app/maps/places.search';
import PlacesSearchContext from './app/context/places.search.context';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlacesSearchContext.Provider value={ PlacesSearch }>
      <App/>
    </PlacesSearchContext.Provider>
  </React.StrictMode>
);
