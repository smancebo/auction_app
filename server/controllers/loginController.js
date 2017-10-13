const controller = require('express').Router();
const db = require('../models/index');

controller.post('/', (req, res) => {
  const { username } = req.body;
  db.Player.findOrCreate({ where: { username }, defaults: { coins: 1000, inventory: [] } })
    .spread(async (user, created) => {
      if (created) {
        const bread = await db.Item.findOne({ where: { name: 'Bread' } });
        const carrot = await db.Item.findOne({ where: { name: 'Carrot' } });
        const diamond = await db.Item.findOne({ where: { name: 'Diamond' } });

        await db.Inventory.create({ quantity: 30, ItemId: bread.id, PlayerId: user.id });
        await db.Inventory.create({ quantity: 18, ItemId: carrot.id, PlayerId: user.id });
        await db.Inventory.create({ quantity: 1, ItemId: diamond.id, PlayerId: user.id });
      }
      const player = await db.Player
        .findOne({ where: { id: user.id }, include: [{ model: db.Inventory, include: [{ model: db.Item }] }] });

      res.json({ player, created });
    });
});

module.exports = controller;
