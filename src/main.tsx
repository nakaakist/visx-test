import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { theme } from './theme.css';

ReactDOM.render(
  <StrictMode>
    <div className={theme}>
      <App />
    </div>
  </StrictMode>,
  document.getElementById('root')
);
