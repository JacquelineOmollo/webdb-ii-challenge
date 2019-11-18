const express = require("express");
const car = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  car("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  car("cars")
    .where({ id })
    .first()
    .then(auto => {
      res.json(auto);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  car("fruits")
    .insert(carData)
    .then(ids => {
      car("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data", error: err });
    });
});

module.exports = router;
