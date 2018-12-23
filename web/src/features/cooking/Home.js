import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { isNullOrUndefined } from 'util';
import styled from 'styled-components';

import Categories from '../../shared/components/cooking-home/Categories';
import Products from '../../shared/components/cooking-home/Popular';
import ProductModification from '../../shared/components/modification/ProductModification';
import Header from '../../shared/components/Header';

const Container = styled.div`
  && input,
  select {
    font-family: 'Roboto';
  }
  && {
    max-width: 1800px;
    margin: 0 auto;
  }
`;

@inject('store')
@observer
class HomePageBase extends Component {
  render() {
    const { store } = this.props;

    return (
      <Container>
        <Header />
        <Categories />
        <Products />
        {!isNullOrUndefined(store.productStore.modifyingProduct) && (
          <ProductModification product={store.productStore.modifyingProduct} />
        )}
      </Container>
    );
  }
}

export const CookingPage = HomePageBase;
