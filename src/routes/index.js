import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import AddItem from '../pages/AddItem';
import EditItem from '../pages/EditItem';
import About from '../pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add-item" component={AddItem} />
      <Route exact path="/edit-item/:id" component={EditItem} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
