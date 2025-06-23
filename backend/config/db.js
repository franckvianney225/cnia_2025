const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'cnia',
  process.env.DB_USER || 'root', 
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false
  }
);

// Test de connexion
sequelize.authenticate()
  .then(() => console.log('Connecté à MySQL avec succès'))
  .catch(err => console.error('Erreur de connexion à MySQL:', err));

module.exports = sequelize;
