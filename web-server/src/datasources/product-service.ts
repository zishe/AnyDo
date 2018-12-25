import { DataSource } from 'apollo-datasource';
import Product from '../db/models/Product';

export class ProductService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getProducts() {
        return Product.query();
    }
}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}
