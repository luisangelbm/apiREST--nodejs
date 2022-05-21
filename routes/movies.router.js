const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('no hay parametros');
  }
});

router.get('/animals', (req, res) => {
  const animals = [];
  const {size} = req.query;
  const limit = size || 2
  for (let i = 0; i < limit; i++) {
    animals.push({
      dog: faker.animal.dog(),
      cat: faker.animal.cat(),
      rabbit: faker.animal.rabbit(),
    });
  }
 res.json(animals)
});

module.exports = router;
