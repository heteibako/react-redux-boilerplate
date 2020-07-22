import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { store, persistor } from './store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';
import Landing from './components/Landing';

const hist = createBrowserHistory();
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
