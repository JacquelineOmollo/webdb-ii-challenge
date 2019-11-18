exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl
      .text("VIN", 150)
      .unique()
      .notNullable();
    tbl.integer("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knew.schema.dropTableIfExist("cars");
};
