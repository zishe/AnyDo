import styled from 'styled-components';
import { GridListTile } from '@material-ui/core';

const padding = 15;
const Item = styled(GridListTile)`
  && {
    width: calc(25% -15px) !important;
    cursor: pointer;
  }
  padding: ${padding}px 0 ${padding}px ${padding}px !important;
  &:last-child {
    padding-right: ${padding}px !important;
  }
`;

export default Item;
