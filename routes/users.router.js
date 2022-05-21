const express = require('express');
const router = express.Router();

const UsersServices = require('../services/user.service');
const service = new UsersServices();

// GET
router.get('/', (req, res) => {
  const users = service.find();
  res.status(200).json(users);
});

// GET :id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.status(200).json(user);
});

// POST
router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

// PUT - PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateUser = service.update(id,body)
  res.status(201).json(updateUser)
})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = service.delete(id)
  res.json(deleteUser)
})

module.exports = router;
