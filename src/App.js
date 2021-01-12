import React, { Component } from 'react';
import './App.css';
import Subscribers from './components/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Subscribers />
        </div>
      </Provider>
    );
  }
}

export default App;
