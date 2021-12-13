const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 5
  for (let i = 0; i < limit; i++) {
    users.push({
      email: faker.internet.email(),
      name: faker.name.findName(),
    })

  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      nombre: 'equipo 1',
      precio: 100
    });
});

module.exports = router;
