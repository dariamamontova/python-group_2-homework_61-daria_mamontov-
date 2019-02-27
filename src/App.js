import React, { Component, Fragment} from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import AboutUs from './containers/AboutUs/AboutUs';
import Home from './containers/Home/Home';
import Contacts from './containers/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <Fragment>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/about" component={AboutUs}/>
                      <Route path="/contacts" component={Contacts}/>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
