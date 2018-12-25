import { DataSource } from 'apollo-datasource';

export class ProductService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getProducts() {
        return Promise.resolve([
            { id: 1, name: 'Rice', description: '' },
            { id: 2, name: 'Potato', description: '' },
            { id: 3, name: 'Tom Yam', description: '' },
            { id: 4, name: 'Fried chicken', description: '' },
            { id: 5, name: 'Tea', description: '' }
        ]);
    }
}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}
