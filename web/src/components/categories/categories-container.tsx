import * as React from 'react';

import gql from 'graphql-tag';
import { DefaultQuery } from '..';
import { GET_CATEGORIES } from './categories-queries';
import { CategoriesList } from './categories-list';

export class CategoriesContainer extends React.Component {
    unsubscribe = null;

    render() {
        return (
            <DefaultQuery query={GET_CATEGORIES}>
                {({ data: { categories }, subscribeToMore }) => {
                    console.log(categories);

                    return <CategoriesList categories={categories} />;
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
