module.exports = (sequelize, DataType) => {
  const WCUrinols = sequelize.define('WCUrinols', {
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
  }, {
    classMethods: {
      associate: (models) => {
        WCUrinols.hasMany(models.WCs);
      },
    },
  });
  return WCUrinols;
};
