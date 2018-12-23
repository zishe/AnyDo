import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Typography } from '@material-ui/core';
import Products from './popularProducts';

@inject('store')
// @inject('uiStore')
@observer
class ProductList extends Component {
  inCart = product => {
    // console.log(this.props.store.shoppingCartStore.products);

    const count = this.props.store.shoppingCartStore.products
      ?.map(obj => obj.product)
      ?.filter(item => item.id === product?.id)?.length;
    if (count > 0) {
      return `${count} в Конзине`;
    }
  };

  handleClick = product => {
    const { store: { routerStore } } = this.props;
    routerStore.goTo('product', { id: product.id });
  };

  handleAddToCart = (e, product) => {
    this.props.store.shoppingCartStore.addProduct(product);
    e.preventDefault();
  };

  render() {
    const { products } = this.props;

    return (
      <Products>
        {products.map(product => (
          // <Link key={product.name} to={`/product/${product.id}`}>
          <Products.Card key={product.name}>
            <Products.CardMedia
              image={product.image}
              title={product.name}
              onClick={() => {
                this.handleClick(product);
              }}
            />
            <Products.Content>
              <Typography
                gutterBottom
                variant="headline"
                component="h3"
                style={{ paddingBottom: 10, fontSize: 21 }}
              >
                {product.name}
              </Typography>
              <Products.Info>
                <Typography variant="subheading" component="span" style={{ fontSize: 16 }}>
                  {product.servingWeight} гр.
                </Typography>
              </Products.Info>
              <Typography component="p">{product.description}</Typography>
            </Products.Content>
            <Products.CardActions disableactionspacing>
              <Products.AddButton
                aria-label="Добавить в корзину"
                align="left"
                onClick={e => {
                  return this.handleAddToCart(e, product);
                }}
              >
                <Products.AddToShoppingCart color="primary" />
              </Products.AddButton>
              <Typography variant="body1" gutterBottom align="left" style={{ paddingRight: 20 }}>
                {this.inCart(product)}
              </Typography>
            </Products.CardActions>
          </Products.Card>
        ))}
      </Products>
    );
  }
}

export default ProductList;
