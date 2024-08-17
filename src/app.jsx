import { Component } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import './app.less'


function App({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}



export default App
