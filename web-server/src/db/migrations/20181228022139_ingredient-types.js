exports.up = (knex, Promise) => knex.schema.createTable('ingredient_types', t => {
  t.uuid('id').primary();
  t.string('name', 256).unique().index();
  t.text('description');
  t.string('image', 1000);
  t.uuid('ingredient_id').index().references('id').inTable('ingredients').notNull().onDelete('cascade');;
  t.timestamp('created_at', true).notNullable().defaultTo(knex.fn.now());
  t.timestamp('updated_at', true).notNullable().defaultTo(knex.fn.now());
});

exports.down = (knex, Promise) => knex.schema.dropTable('ingredient_types');