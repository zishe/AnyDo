import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Categories from './categories/';

const QUERY = gql`
  query CategoriesQuery($limit: Int!) {
    categories(limit: $limit) {
      id
      name
      description
      image
    }
  }
`;

class CategoriesBlock extends Component {
  render() {
    return (
      <Categories>
        <Query query={QUERY} variables={{ limit: 5 }}>
          {({ loading, error, data }) => {
            if (loading) return <div />;
            if (error) {
              console.log(error);
              return <div />;
            }
            if (data) {
              console.log(data);

              return (
                <Categories.CategoryPanel cols={5}>
                  {data.categories.map(category => (
                    <Categories.Item key={category.id}>
                      <img src={category.image} alt={category.name} />
                      {/* <Categories.Title
                        title={category.name}
                        // subtitle={<span>by: {category.author}</span>}
                        // actionIcon={
                        //   <IconButton>
                        //     <InfoIcon />
                        //   </IconButton>
                        // }
                      /> */}
                    </Categories.Item>
                  ))}
                </Categories.CategoryPanel>
              );
            }
          }}
        </Query>
      </Categories>
    );
  }
}

export default CategoriesBlock;
