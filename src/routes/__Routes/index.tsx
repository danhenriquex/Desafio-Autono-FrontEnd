import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FavoritePage from '../../containers/FavoritePage';
import SearchPage from '../../containers/SearchPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/favorites" component={FavoritePage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
