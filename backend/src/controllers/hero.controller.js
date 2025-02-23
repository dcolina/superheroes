const heroService = require('../services/hero.service');

class HeroController {
  async getAllHeroes(req, res) {
    try {
      const heroes = await heroService.getAllHeroes(req.query);
      res.json(heroes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getHeroById(req, res) {
    try {
      const hero = await heroService.getHeroById(req.params.id);
      res.json(hero);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async createHero(req, res) {
    try {
      const hero = await heroService.createHero(req.body);
      res.status(201).json(hero);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateHero(req, res) {
    try {
      const hero = await heroService.updateHero(req.params.id, req.body);
      res.json(hero);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteHero(req, res) {
    try {
      await heroService.deleteHero(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new HeroController(); 