import styled from 'styled-components';

import Card from './Card';
import CardMedia from './CardMedia';
import CardActions from './CardActions';
import Content from './Content';
import AddButton from './AddButton';
import Info from './Info';
import AddToShoppingCart from './AddToShoppingCart';

const Products = styled.div`
  && {
    margin-right: 10px;
    align-items: left;
    text-align: left;
  }
`;

Products.Card = Card;
Products.CardMedia = CardMedia;
Products.CardActions = CardActions;
Products.Content = Content;
Products.AddButton = AddButton;
Products.Info = Info;
Products.AddToShoppingCart = AddToShoppingCart;

export default Products;
