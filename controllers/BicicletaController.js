const {Bicicleta} = require('../models/Bicicleta');

module.exports = {
  async index(req, res) {
    try {
      const bicicletas = await Bicicleta.findAll();
      return res.json(bicicletas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async show(req, res) {
    try {
      const bicicleta = await Bicicleta.findByPk(req.params.id);
      if (!bicicleta) {
        return res.status(404).json({ error: 'Bicicleta not found' });
      }
      return res.json(bicicleta);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async store(req, res) {
    try {
      const bicicleta = await Bicicleta.create(req.body);
      return res.status(201).json(bicicleta);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async update(req, res) {
    try {
      const bicicleta = await Bicicleta.findByPk(req.params.id);
      if (!bicicleta) {
        return res.status(404).json({ error: 'Bicicleta not found' });
      }
      await bicicleta.update(req.body);
      return res.json(bicicleta);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async destroy(req, res) {
    try {
      const bicicleta = await Bicicleta.findByPk(req.params.id);
      if (!bicicleta) {
        return res.status(404).json({ error: 'Bicicleta not found' });
      }
      await bicicleta.destroy();
      return res.json({ message: 'Bicicleta deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};