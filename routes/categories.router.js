const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    country: faker.address.country(),
    state: faker.address.state()
  });
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  res.json({
    id,
    categories: faker.address.countryCode()
  });
});

router.get('/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({ categoryId, productsId });
});

module.exports = router;
