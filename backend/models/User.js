const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/db')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    set(value) {
      const hash = bcrypt.hashSync(value, 10)
      this.setDataValue('password', hash)
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user'
  }
}, {
  timestamps: true,
  tableName: 'users'
})

// Méthode pour vérifier le mot de passe
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = User
