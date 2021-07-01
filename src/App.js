import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Nav } from './components/nav/Nav';
import { Body } from './components/body/Body';
import { Detail } from './components/detail/Detail';
import { Favorite } from './components/favorite/Favorite';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
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
  );
}

export default App;
