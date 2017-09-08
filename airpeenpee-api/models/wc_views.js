module.exports = (sequelize, DataType) => {
  const WCViews = sequelize.define('WCViews', {
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
        WCViews.hasMany(models.WCs);
      },
    },
  });
  return WCViews;
};
