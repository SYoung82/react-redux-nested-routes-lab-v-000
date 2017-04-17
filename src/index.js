import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import PetsNew from './containers/PetsNew'
import PetsShow from './containers/PetsShow'
import PetsPage from './containers/PetsPage'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path='/pets' component={PetsPage} />
        <Route path='/pets/:id' component={PetsShow} />
        <Route path='/pets/new' component={PetsNew} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'))
