const express = require('express');
const router = express.Router();
const { ValidationError } = require('sequelize');
const Registration = require('../models/Registration');

// Enregistrer une nouvelle inscription
router.post('/', async (req, res) => {
  console.log('Requête POST reçue sur /api/register', req.body);
  try {
    const registration = await Registration.create({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      telephone: req.body.telephone,
      organisation: req.body.organisation,
      profil: req.body.profil
    });
    
    res.status(201).json(registration);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).json({ error: err.errors[0].message });
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Cet email est déjà enregistré' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// Récupérer toutes les inscriptions (pour l'administration)
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.findAll({
      order: [['dateInscription', 'DESC']],
      attributes: ['id', 'nom', 'prenom', 'email', 'telephone', 'organisation', 'profil', 'dateInscription']
    });
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Supprimer une inscription
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Registration.destroy({
      where: { id: req.params.id }
    });
    
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Inscription non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
