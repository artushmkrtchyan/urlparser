/* jshint indent: 2 */
var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
module.exports = function (sequelize, DataTypes) {
  var Meta = sequelize.define('Meta', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    url_hash:{
       type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
     title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
     description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_path: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
    {
      tableName: 'meta',
      timestamps: true,
      getterMethods: { },
      classMethods: { }
    })
  return Meta
}
