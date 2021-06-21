import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from '../../store';

import Routes from '../../routes/__Routes';
import persistStore from 'redux-persist/es/persistStore';

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
