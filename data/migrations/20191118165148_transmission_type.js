exports.up = function(knex) {
  return knex.schema.createTable("transmission", tbl => {
    tbl.text("transmission", 128).notNullable();
    tbl.text("titleClean", 128).notNullable();
    tbl.text("titleSalvage", 128).notNullable();
    tbl.text("used").notNullable();
    tbl.text("new").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("transmission");
  });
};
