module.exports = (sequelize, DataType) => {
  const ToiletExtras = sequelize.define('ToiletExtras', {
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
        ToiletExtras.hasMany(models.Toilets);
      },
    },
  });
  return ToiletExtras;
};
