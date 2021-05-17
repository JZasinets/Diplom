import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Menu } from './components/menu';
import {Home} from './pages/home';
import {Profile} from './pages/profile'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/profile'} exact component={Profile}/>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
