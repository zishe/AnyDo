import * as React from 'react';

import gql from 'graphql-tag';
import { DefaultQuery } from '..';
import { GET_PRODUCTS } from './products-queries';
import { ProductsList } from './products-list';

export class ProductsContainer extends React.Component {
    unsubscribe = null;

    render() {
        return (
            <DefaultQuery query={GET_PRODUCTS}>
                {({ data: { products }, subscribeToMore }) => {
                    return <ProductsList products={products} />;
                }}
            </DefaultQuery>
        );
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}
