module.exports = (sequelize, DataType) => {
  const WCWashBasins = sequelize.define('WCWashBasins', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        WCWashBasins.hasMany(models.WCs);
      },
    },
  });
  return WCWashBasins;
};
