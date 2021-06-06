import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import './styles/index.css';
import firebase from 'firebase';
import { auth, db} from './services/firebase'

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Context.Provider value={{
          firebase, 
          auth,
          db
          }}>
          <App />
        </Context.Provider>,
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);