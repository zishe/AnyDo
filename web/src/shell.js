import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import {
  HomePage,
  NewTaskPage,
  FindTaskPage,
  ProductPage,
  NotFoundPage,
  CookingPage
} from './features';

const viewMap = {
  cooking: <CookingPage />,
  product: <ProductPage />,
  home: <HomePage />,
  newTask: <NewTaskPage />,
  findTask: <FindTaskPage />,
  notFound: <NotFoundPage />
};

@inject('store')
class Shell extends React.Component {
  render() {
    const { store: { routerStore } } = this.props;

    return (
      <div>
        <RouterView routerStore={routerStore} viewMap={viewMap} />
      </div>
    );
  }
}

export default Shell;
