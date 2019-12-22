import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import styles from './style.css';
import store from './store';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const browserHistory = createBrowserHistory();

const App = () => (
  <main>
    <Provider store={store}>
      <Router history={browserHistory}>
        <div className={styles.app}>
          <Header />
          <Sidebar />
          <Main />
        </div>
      </Router>
    </Provider>
  </main>
);

export default App;
