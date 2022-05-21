const express = require('express');
const ProductsServices = require('../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  creatProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.chema');

const router = express.Router();
const service = new ProductsServices();

// GET
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo soy filter');
});

//GET :id
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (e) {
      next(e);
    }
  }
);

// POST
router.post(
  '/',
  validatorHandler(creatProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

// PATCH - PUT
router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (e) {
      next(e);
    }
  }
);

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
