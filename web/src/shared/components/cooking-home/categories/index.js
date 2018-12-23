import styled from 'styled-components';

import CategoryPanel from './CategoryPanel';
import Item from './Item';
import Title from './Title';

const Categories = styled.div`
  && {
    display: 'flex';
    flex-wrap: 'wrap';
    justify-content: 'space-around';
    overflow: 'hidden';
  }
`;

Categories.CategoryPanel = CategoryPanel;
Categories.Item = Item;
Categories.Title = Title;

export default Categories;
