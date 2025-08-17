import React from 'react';
import ReactDOM from 'react-dom/client';
import { FilterPanel } from './components/FilterPanel';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <FilterPanel />
  </React.StrictMode>
);
