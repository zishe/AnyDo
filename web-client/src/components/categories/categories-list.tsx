import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Categories from './blocks';
import { GetCategories_categories } from './__generated__/GetCategories';

export interface CategoryProps {
    categories: Array<GetCategories_categories>;
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
