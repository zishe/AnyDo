import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { RootStore } from './shared/stores/RootStore';
import { createBrowserHistory } from 'history';
import { HistoryAdapter } from 'mobx-state-router';

window.main = () => {
  const history = createBrowserHistory();
  const rootStore = new RootStore(window.__MOBX_INITIAL_STATE__);
  const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
  historyAdapter.observeRouterStateChanges();
  ReactDOM.hydrate(<App store={rootStore} />, document.getElementById('root'));
};
