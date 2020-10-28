import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Javascript from './components/Javascript';
import Python from './components/Python';

const Root = () =>
<Router>
  <div>
    <Navbar>
      <Navbar.Brand>
        <Link to="/">NEWSAPP</Link>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          <NavItem>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/javascript" activeClassName="active">Javascript</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/python" activeClassName="active">Python</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>

    <Route exact path="/" component={ App } />
    <Route exact path="/javascript" component={ Javascript } />
    <Route exact path="/python" component={ Python } />
  </div>
</Router>

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
