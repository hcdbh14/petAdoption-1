import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './components/screens/HomePage';
import AboutPage from './components/screens/AboutPage';
import ContactPage from './components/screens/ContactPage';
import SearchPage from './components/screens/SearchPage';
import * as ROUTES from './components/constants/routes';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

function App() {

  return (
    <Router >
      <Header />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SEARCH} component={SearchPage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.CONTACT} component={ContactPage} />
      <Footer />
    </Router>
  );
}

export default App;
