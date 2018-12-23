import styled from 'styled-components';
import { Card } from '@material-ui/core';

const ProductCard = styled(Card)`
  && {
    display: inline-block;
    margin: 0 0 10px 10px;
    width: calc(100% - 10px);
  }
  @media (min-width: 500px) {
    && {
      margin: 0 0 10px 10px;
      width: calc(50% - 10px);
    }
  }
  @media (min-width: 800px) {
    && {
      margin: 0 0 12px 12px;
      width: calc(33% - 10px);
    }
  }
  @media (min-width: 1280px) {
    && {
      margin: 0 0 14px 14px;
      width: calc(25% - 14px);
    }
  }
  @media (min-width: 1680px) {
    && {
      margin: 0 0 14px 14px;
      width: calc(20% - 14px);
    }
  }
`;

export default ProductCard;
