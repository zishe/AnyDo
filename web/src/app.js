import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { RootStore } from './shared/stores/RootStore';
import { UIStore } from './shared/stores/UIStore';
import { history } from './shared/utils/history';
import Shell from './shell';

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
      }
    }
  },
  typography: {
    // Tell Material-UI what the font-size on the html element is.
  },
  shape: {
    borderRadius: 2
  }
});

const rootStore = new RootStore();
const uiStore = new UIStore();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id || null
  })
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Provider store={rootStore} uiStore={uiStore}>
            <Shell />
          </Provider>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
