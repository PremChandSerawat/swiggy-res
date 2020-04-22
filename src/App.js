import React from 'react';
import './App.css';
import AppBar from './component/AppBar'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <AppBar />
    </Provider>
  );
}

export default App;
