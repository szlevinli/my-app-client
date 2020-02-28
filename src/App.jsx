import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RedirectAuth from './redirect-auth';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/redirect-auth'>RedirectAuth</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
      {/** */}
      <Switch>
        <Route path='/redirect-auth'>
          <RedirectAuth />
        </Route>
        <Route path='/users'>
          <Users></Users>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const Users = () => <h2>Users</h2>;

export default App;
