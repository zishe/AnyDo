import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ServerApp from './app';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { StaticAdapter } from 'mobx-state-router';
import { RootStore } from './shared/stores/RootStore';
import { createLocation } from 'history';

export const App = {
  getHTML: async location => {
    const rootStore = new RootStore();
    console.log('root store created');

    const staticAdapter = new StaticAdapter(rootStore.routerStore);
    await staticAdapter.goToLocation(createLocation(location));
    const sheets = new SheetsRegistry();
    const reactContent = ReactDOMServer.renderToString(
      <JssProvider registry={sheets}>
        <ServerApp store={rootStore} />
      </JssProvider>
    );

    const html = (
      <Html
        content={reactContent}
        initialState={rootStore.extractInitialState()}
        sheets={sheets.toString()}
      />
    );

    return {
      html: `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`
    };
  }
};

function Html({ content, initialState, sheets }) {
  return (
    <html>
      <head>
        <style type="text/css">{sheets}</style>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__MOBX_INITIAL_STATE__=${JSON.stringify(initialState)};`
          }}
        />
        <script src="/app.js" />
        <script>window.main();</script>
      </body>
    </html>
  );
}
