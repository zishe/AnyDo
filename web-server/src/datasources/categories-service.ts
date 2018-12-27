const uuid = require('uuid/v4');
import { DataSource } from 'apollo-datasource';
const Category = require('../db/models/Category');

export class CategoryService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getCategories() {
        return Category.query();
    }
}

// ----- Helper Functions -----
function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}
