const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Registration = sequelize.define('Registration', {
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  telephone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  organisation: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  profil: {
    type: DataTypes.ENUM(
      'Étudiant',
      'Entrepreneur', 
      'Développeur',
      'Chercheur',
      'Administration publique',
      'Secteur privé',
      'Autre'
    ),
    allowNull: false
  },
  dateInscription: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'registrations'
});

module.exports = Registration;
