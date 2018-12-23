import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { isNullOrUndefined } from 'util';

const Modified = styled(Typography)`
  && {
    position: absolute;
    right: 70px;
    top: 11px;
    font-size: 12px;
    color: #6202ee;
  }
`;

const ItemPreview = styled(Avatar)`
  && {
    height: 80px;
    width: 80px;
    border-radius: 0;
  }
`;

const ShoppingList = styled(List)`
  && {
  }
`;

const Product = styled(ListItem)`
  && {
  }
`;

@inject('uiStore')
@inject('store')
@observer
class ShoppingCartList extends Component {
  static propTypes = {};

  handleRemoveProduct = (event, product) => {
    console.log(product);
    this.props.store.shoppingCartStore.removeProduct(product);
  };

  extraOptionsLine = (product, modificationData, ingredientsModification) => {
    const weight = modificationData?.servingWeight || product.servingWeight;
    let result = `${weight} гр.`;

    // if (modificationData) {
    //   result += `  Дополнительно: `

    //   console.log(modificationData);
    //   result += Object.keys(modificationData).map((key) => {
    //     const value = modificationData[key];
    //     return `${key}: ${value}`;
    //   }).join(', ')
    // }

    if (ingredientsModification) {
      result += `  Дополнительно: `;

      console.log(ingredientsModification);
      Object.keys(ingredientsModification)
        .map(id => {
          const modificationData = ingredientsModification[id];
          // const ingredientObj = product.ingredients.find((x) => x.id === id)

          console.log('ingredient');
          console.log(modificationData);
          if (!isNullOrUndefined(modificationData.selected))
            result += `Тип: ${modificationData.selected.label}`;

          if (!isNullOrUndefined(modificationData.tags))
            result += modificationData.tags
              .map(tag => {
                return `${tag.label}`;
              })
              .join(', ');
        })
        .join(', ');
    }
    return result;
  };

  render() {
    const { store } = this.props;

    // if (store.shoppingCartStore.products.length)

    return (
      <ShoppingList>
        {store.shoppingCartStore.products.length > 0 &&
          store.shoppingCartStore.products.map(item => {
            const { product, modificationData, ingredientsModification } = item;
            console.log('modificationData, ingredientsModification');
            console.log(modificationData, ingredientsModification);

            return (
              <Product key={product.id}>
                <ItemPreview>
                  <img src={product.image} alt={product.name} />
                </ItemPreview>
                {/* <ProductWeight>
                {modification?.modificationData?.weight || product.servingWeight}
              </ProductWeight> */}
                {modificationData && <Modified>Изменен</Modified>}
                <ListItemText
                  primary={product.name}
                  secondary={this.extraOptionsLine(
                    product,
                    modificationData,
                    ingredientsModification
                  )}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={e => {
                      return this.handleRemoveProduct(e, product);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </Product>
            );
          })}
      </ShoppingList>
    );
  }
}

export default ShoppingCartList;
