const Model = require('./Model');

class Category extends Model {
  static get tableName() {
    return 'categories';
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'uuid' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 0, maxLength: 1000 },
        image: { type: 'string', minLength: 0, maxLength: 1000 }
      }
    };
  }
}

module.exports = Category;