const uuid = require('uuid/v4');
import { DataSource } from 'apollo-datasource';
import { Product } from '../db/models/Product';

export class ProductService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getProducts() {
        return Promise.resolve([
            { id: uuid(), name: 'Rice', description: '' },
            { id: uuid(), name: 'Potato', description: '' },
            { id: uuid(), name: 'Tom Yam', description: '' },
            { id: uuid(), name: 'Fried chicken', description: '' },
            { id: uuid(), name: 'Tea', description: '' }
        ]); //Product.query();
    }
}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}
