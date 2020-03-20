import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';
import SecondTodoList from './SecondTodoList';

const App = (
  <Provider store={store}>
    <SecondTodoList/>
  </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

