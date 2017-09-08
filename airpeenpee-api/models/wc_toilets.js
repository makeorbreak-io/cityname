module.exports = (sequelize, DataType) => {
  const WCToilets = sequelize.define('WCToilets', {
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
        WCToilets.hasMany(models.WCs);
      },
    },
  });
  return WCToilets;
};
