import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Nav } from './components/nav/Nav';
import { Body } from './components/body/Body';
import { Detail } from './components/detail/Detail';
import { Favorite } from './components/favorite/Favorite';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav />
        </header>

        <div className="container">
          <Switch>
            <Route exact path="/" component={Body} />
            <Route path="/detail/:imdbID" component={Detail} />
            <Route path="/favorite" component={Favorite} />
            <Route>404 Not Found!</Route>
          </Switch>
        </div>
      </Router >
    </SnackbarProvider>
  );
}

export default App;
