import React from 'react';
import {Switch, Route} from 'react-router';

import Home from './components/home';
import Links from './components/links';
import FAQ from './components/faq';
import PatientDB from './components/patientdb';
import DeepDive from './components/deepdive';

function Routes(props) {
  return (
    <Switch location={props.location}>
      <Route path="/" exact component={Home} key="1" />
      <Route path="/demographics" exact component={PatientDB} key="2" />
      <Route path="/deepdive" exact component={DeepDive} key="3" />
      <Route path="/about" exact component={Links} key="4" />
      <Route path="/faq" exact component={FAQ} key="5" />
    </Switch>
  );
}

export default Routes;
