const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { id: uuid(), name: 'Rice', description: '' },
        { id: uuid(), name: 'Potato', description: '' },
        { id: uuid(), name: 'Tom Yam', description: '' },
        { id: uuid(), name: 'Fried chicken', description: '' },
        { id: uuid(), name: 'Tea', description: '' }
      ]);
    });
};
