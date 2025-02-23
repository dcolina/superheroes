const Hero = require('../models/hero.model');

class HeroService {
  async getAllHeroes(query = {}) {
    try {
      return await Hero.find(query);
    } catch (error) {
      throw new Error(`Error fetching heroes: ${error.message}`);
    }
  }

  async getHeroById(id) {
    try {
      const hero = await Hero.findById(id);
      if (!hero) throw new Error('Hero not found');
      return hero;
    } catch (error) {
      throw new Error(`Error fetching hero: ${error.message}`);
    }
  }

  async createHero(heroData) {
    try {
      return await Hero.create(heroData);
    } catch (error) {
      throw new Error(`Error creating hero: ${error.message}`);
    }
  }

  async updateHero(id, heroData) {
    try {
      const hero = await Hero.findByIdAndUpdate(id, heroData, {
        new: true,
        runValidators: true
      });
      if (!hero) throw new Error('Hero not found');
      return hero;
    } catch (error) {
      throw new Error(`Error updating hero: ${error.message}`);
    }
  }

  async deleteHero(id) {
    try {
      const hero = await Hero.findByIdAndDelete(id);
      if (!hero) throw new Error('Hero not found');
      return hero;
    } catch (error) {
      throw new Error(`Error deleting hero: ${error.message}`);
    }
  }
}

module.exports = new HeroService(); 