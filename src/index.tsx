import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';

import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
