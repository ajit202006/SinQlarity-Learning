import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextFavourite } from './components/store/contextFavourite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFavourite>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextFavourite>
);
