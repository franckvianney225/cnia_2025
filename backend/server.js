require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const registrationRoutes = require('./routes/registration');
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Middleware pour vérifier le token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if (!token) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET || 'secret_key_cnia_2025', (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// Synchronisation des modèles avec la base de données
sequelize.sync()
  .then(() => console.log('Base de données synchronisée'))
  .catch(err => console.error('Erreur de synchronisation:', err));

// Routes
app.use('/api/register', registrationRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
