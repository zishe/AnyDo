import * as React from 'react';

import gql from 'graphql-tag';
import { DefaultQuery } from '..';
import { MutationType } from '../../graphql-types';
import { ProductsPanel } from './products-panel';
import { GET_PRODUCTS } from './products-queries';

export class ProductsContainer extends React.Component {
    unsubscribe = null;

    render() {
        return (
            <DefaultQuery query={GET_PRODUCTS}>
                {({ data: { products }, subscribeToMore }) => {
                    return <ProductsPanel products={products} />;
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
