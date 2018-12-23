import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import ProductList from './ProductList';

const QUERY = gql`
  query ProductsQuery($limit: Int!) {
    products(limit: $limit) {
      id
      name
      description
      image
    }
  }
`;

const Container = styled.div`
  && {
    text-align: center;
    align-items: center;
  }
`;

const ProductsTitle = styled(Typography)`
  && {
    text-align: center;
    font-size: 2rem;
    margin: 20px auto 10px;
  }
`;

class Products extends Component {
  render() {
    return (
      <Container>
        <ProductsTitle variant="headline" gutterBottom>
          Популярное
        </ProductsTitle>
        <Query query={QUERY} variables={{ limit: 8 }}>
          {({ loading, error, data }) => {
            if (loading) return <div />;
            if (error) {
              console.log(error);
              return <div />;
            }
            if (data) {
              console.log(data);
              return <ProductList products={data.products} />;
            }
          }}
        </Query>
      </Container>
    );
  }
}

export default Products;
