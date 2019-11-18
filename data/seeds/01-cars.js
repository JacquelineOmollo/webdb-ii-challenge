exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "RangeRover",
          model: "XXL3",
          VIN: "XDFHK12345680",
          mileage: 156789
        },
        {
          make: "Ford",
          model: "Mustang",
          VIN: "XDFHK12345681",
          mileage: 19874
        },
        {
          make: "Jeep",
          model: "Wraggler",
          VIN: "XDFHK12345682",
          mileage: 1874
        }
      ]);
    });
};
