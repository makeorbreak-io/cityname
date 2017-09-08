module.exports = (sequelize, DataType) => {
  const WCExtras = sequelize.define('WCExtras', {
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
        WCExtras.hasMany(models.WCs);
      },
    },
  });
  return WCExtras;
};
