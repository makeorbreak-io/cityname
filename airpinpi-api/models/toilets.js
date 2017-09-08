module.exports = (sequelize, DataType) => {
  const Toilets = sequelize.define('Toilets', {
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
    lat: {
      type: DataType.DECIMAL(10, 8),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lng: {
      type: DataType.DECIMAL(10, 8),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    rating: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Toilets.belongsTo(models.Users);
        Toilets.belongsTo(models.ToiletCategories);
        Toilets.hasMany(models.Ratings);
        Toilets.belongsToMany(models.ToiletExtras, { through: 'ToiletsExtras' });
      },
    },
  });
  return Toilets;
};
