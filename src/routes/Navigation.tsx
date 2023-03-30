import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';

import logo from '../logo.svg';
import { FormikAbstract } from '../03-forms/pages/FormikAbstract';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
            </li>
            <li>
              <NavLink to="/fornik-basic" activeClassName="nav-active" exact>Fornik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/fornik-yup" activeClassName="nav-active" exact>Fornik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/fornik-components" activeClassName="nav-active" exact>Fornik Components</NavLink>
            </li>
            <li>
              <NavLink to="/fornik-abstract" activeClassName="nav-active" exact>Fornik Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/fornik-register" activeClassName="nav-active" exact>Fornik Register</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/fornik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/fornik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/fornik-components">
            <FormikComponents />
          </Route>
          <Route path="/fornik-abstract">
            <FormikAbstract />
          </Route>
          <Route path="/fornik-register">
            <RegisterFormikPage />
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}