import styled from 'styled-components';
import IngredientTypeSelect from './../IngredientTypeSelect';
import Select from 'react-select';
import { Typography } from '@material-ui/core';

const Ingredients = styled.div`
  && {
    width: 650px;
  }
  * {
    font-family: 'Roboto' !important;
  }
`;

const Type = styled(IngredientTypeSelect)`
  && {
    flex: 2;
    overflow: visible;
  }
`;

const Ingredient = styled.div`
  && {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    overflow: visible;
  }
`;

const Tags = styled(Select)`
  && {
    ::before {
      display: none;
    }
    margin-left: 20px;
    flex: 4;
  }
`;

const Name = styled(Typography)`
  && {
    flex: 1;
  }
`;

const Option = styled(Typography)`
  && {
  }
`;

const TypePlaceholder = styled(Typography)`
  && {
  }
`;

Ingredients.Type = Type;
Ingredients.Ingredient = Ingredient;
Ingredients.Tags = Tags;
Ingredients.Name = Name;
Ingredients.Option = Option;
Ingredients.TypePlaceholder = TypePlaceholder;

export default Ingredients;
