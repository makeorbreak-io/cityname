module.exports = (sequelize, DataType) => {
  const WCBathTubs = sequelize.define('WCBathTubs', {
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
        WCBathTubs.hasMany(models.WCs);
      },
    },
  });
  return WCBathTubs;
};
