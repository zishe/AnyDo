import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import gql from 'graphql-tag';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Mutation } from 'react-apollo';
import { PanelHeader, ScrollingPaper } from '..';
import { GetProducts_products } from './__generated__/GetProducts';

export interface ProductsPanelProps {
    products: Array<GetProducts_products>;
}

@observer
export class ProductsPanel extends React.Component<ProductsPanelProps> {
    public render() {
        const { products } = this.props;

        return (
            <React.Fragment>
                <ScrollingPaper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map(product => (
                                <TableRow
                                    hover
                                    key={product.id}
                                >
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollingPaper>
            </React.Fragment>
        );
    }
}
