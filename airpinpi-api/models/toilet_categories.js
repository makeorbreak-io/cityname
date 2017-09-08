module.exports = (sequelize, DataType) => {
  const ToiletCategories = sequelize.define('ToiletCategories', {
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
        ToiletCategories.hasMany(models.Toilets);
      },
    },
  });
  return ToiletCategories;
};
