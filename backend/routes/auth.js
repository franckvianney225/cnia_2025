const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_cnia_2025'
const JWT_EXPIRES_IN = '1h'

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    // Vérifier l'utilisateur
    const user = await User.findOne({ where: { username } })
    if (!user) {
      return res.status(401).json({ error: 'Identifiants incorrects' })
    }

    // Vérifier le mot de passe
    const validPassword = user.validPassword(password)
    if (!validPassword) {
      return res.status(401).json({ error: 'Identifiants incorrects' })
    }

    // Créer le token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    res.json({ token, user: { username: user.username, role: user.role } })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Vérifier le token (pour le frontend)
router.get('/verify', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ error: 'Token manquant' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    res.json({ valid: true, user: decoded })
  } catch (err) {
    res.status(401).json({ error: 'Token invalide' })
  }
})

// Créer un admin par défaut (à supprimer en production)
router.post('/create-default-admin', async (req, res) => {
  try {
    const adminExists = await User.findOne({ where: { username: 'admin' } })
    if (adminExists) {
      return res.status(400).json({ error: 'Admin existe déjà' })
    }

    const admin = await User.create({
      username: 'admin',
      password: 'admin2025', // Serahashé automatiquement
      role: 'admin'
    })

    res.status(201).json(admin)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
