import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Home from '../../shared/components/Home';

@inject('store')
@observer
class HomePageBase extends Component {
  render() {
    const { store } = this.props;

    return (
      <Home>
        <Home.Link routeName="newTask" rootStore={store}>
          <Home.Button variant="contained" size="large" color="primary">
            Заказать услугу
          </Home.Button>
        </Home.Link>

        <Home.Link routeName="findTask" rootStore={store}>
          <Home.Button variant="contained" size="large" color="secondary">
            Стать исполнителем
          </Home.Button>
        </Home.Link>
      </Home>
    );
  }
}

export const HomePage = HomePageBase;
