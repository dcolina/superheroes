const express = require('express');
const router = express.Router();
const heroController = require('../controllers/hero.controller');

router.get('/', heroController.getAllHeroes);
router.get('/:id', heroController.getHeroById);
router.post('/', heroController.createHero);
router.put('/:id', heroController.updateHero);
router.delete('/:id', heroController.deleteHero);

module.exports = router; 