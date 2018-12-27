import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Categories from './blocks';

export interface CategoryProps {
    products: Array<any>;
}

export class CategoriesList extends Component<CategoryProps> {
    render() {
        return (
            <Categories>
                <Categories.CategoryPanel cols={5}>
                    {this.props.categories.map(category => (
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
            </Categories>
        );
    }
}
