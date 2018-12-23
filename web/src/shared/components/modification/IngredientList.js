import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Ingredients from './ingredient-list';

@inject('store')
@observer
class IngredientList extends Component {
  static propTypes = {
    product: PropTypes.object
  };

  handleChangeTags = (ingredient, tags) => {
    console.log(tags);
    this.props.store.productStore.ingredientsModification[ingredient.id] = {
      tags: tags
    };
  };

  renderOption = option => {
    return <Ingredients.Option>{option.label}</Ingredients.Option>;
  };

  renderValue = option => {
    return <Ingredients.TypePlaceholder>{option.label}</Ingredients.TypePlaceholder>;
  };

  render() {
    const { store, product } = this.props;
    console.log(this.props);

    return (
      <Ingredients>
        {product.ingredients &&
          product.ingredients.map(ingredient => {
            // const selected = Object.keys(store.productStore.ingredientsModification).indexOf(ingredient.id) >= 0
            // console.log('ingredient selected ');
            // console.log(selected);
            // console.log(ingredient.tags.map((x) => { return {value: x.id, label: x.name } }));

            return (
              <Ingredients.Ingredient key={ingredient.id}>
                <Ingredients.Name>{ingredient.name}</Ingredients.Name>
                <Ingredients.Type ingredient={ingredient} />
                <Ingredients.Tags
                  value={store.productStore.ingredientsModification[ingredient.id]?.tags}
                  onChange={selectedItems => this.handleChangeTags(ingredient, selectedItems)}
                  placeholder="Другое"
                  isMulti
                  options={ingredient.tags.map(x => {
                    return { value: x.id, label: x.name };
                  })}
                  noResultsText="Пусто"
                  valueRenderer={this.renderValue}
                />
              </Ingredients.Ingredient>
            );
          })}
      </Ingredients>
    );
  }
}

export default IngredientList;
