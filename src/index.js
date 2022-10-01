import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import compareSlice from './redux/compareSlice';
import { Provider } from 'react-redux';
import { products } from './constants';

const store = configureStore({
  reducer: {
    vehicles: products,
    compare: compareSlice,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
