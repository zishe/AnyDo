const uuid = require('uuid/v4');
import { DataSource } from 'apollo-datasource';
import { Category } from '../db/models/Category';

export class CategoryService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getCategories() {
        return Category.query();
        return Promise.resolve([
            { id: uuid(), name: 'Rice', description: '' },
            { id: uuid(), name: 'Potato', description: '' },
            { id: uuid(), name: 'Tom Yam', description: '' },
            { id: uuid(), name: 'Fried chicken', description: '' },
            { id: uuid(), name: 'Tea', description: '' }
        ]); //Category.query();
    }
}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}
