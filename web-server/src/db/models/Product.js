const Model = require('./Model');

class Product extends Model {
  static get tableName() {
    return 'products';
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'description'],
      properties: {
        id: { type: 'uuid' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 0, maxLength: 1000 }
      }
    };
  }
}

module.exports = Product;