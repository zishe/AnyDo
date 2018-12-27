exports.up = (knex, Promise) => knex.schema.createTable('categories', t => {
  t.uuid('id').primary();
  t.string('name', 256).unique();
  t.text('description');
  t.string('image', 1000);
  t.timestamp('created_at', true).notNullable().defaultTo(knex.fn.now());
  t.timestamp('updated_at', true).notNullable().defaultTo(knex.fn.now());
});

exports.down = (knex, Promise) => knex.schema.dropTable('categories');