import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Select from 'react-select';

const IngredientType = styled.div`
  && {
    /* float: left; */
  }
`;

// const Label = styled(InputLabel)`
//   && {
//     margin-right: 30px;
//     font-size: 11px;
//   }
// `;

const SelectIngredient = styled(Select)`
  && {
    min-width: 160px;
  }
`;

@inject('store')
@observer
class IngredientTypeSelect extends Component {
  static propTypes = {
    ingredient: PropTypes.object
  };

  handleChange = selectedOption => {
    console.log('selectedOption');
    console.log(selectedOption);
    this.props.store.productStore.ingredientsModification[this.props.ingredient.id] = {
      selected: selectedOption
    };
  };

  render() {
    const { ingredient } = this.props;
    return (
      <IngredientType>
        <SelectIngredient
          required="false"
          placeholder={'Тип'}
          noResultsText="Пусто"
          value={this.props.store.productStore?.ingredientsModification[ingredient.id]?.selected}
          onChange={this.handleChange}
          options={ingredient.ingredientTypes.map(x => {
            return { value: x.id, label: x.name };
          })}
        />
      </IngredientType>
    );
  }
}

export default IngredientTypeSelect;
