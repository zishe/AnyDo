import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Typography, CardMedia } from '@material-ui/core';

const ProductTitle = styled(Typography)`
  && {
    text-align: center;
    font-size: 2rem;
    margin: 20px auto 10px;
  }
`;

const ExtCardMedia = styled(CardMedia)`
  && {
    height: 200px;
    cursor: pointer;
  }
`;

@inject('store')
@observer
class Product extends Component {
  render() {
    const { showProduct } = this.props.store.productStore;

    return (
      <Fragment>
        <ProductTitle variant="headline" gutterBottom>
          {showProduct.name}
        </ProductTitle>
        <ExtCardMedia image={showProduct.image} title={showProduct.name} />
      </Fragment>
    );
  }
}

export default Product;
