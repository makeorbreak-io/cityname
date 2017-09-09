module.exports = (sequelize, DataType) => {
  const WCs = sequelize.define('WCs', {
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
    img: {
      type: DataType.TEXT,
      allowNull: false,
    },
    price: {
      type: DataType.DECIMAL(10, 8),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        WCs.belongsTo(models.Users);
        WCs.belongsTo(models.WCCategories);
        WCs.belongsTo(models.WCWashBasins);
        WCs.belongsTo(models.WCViews);
        WCs.belongsTo(models.WCUrinols);
        WCs.belongsTo(models.WCToilets);
        WCs.belongsTo(models.WCBathTubs);
        WCs.hasMany(models.Ratings);
        WCs.belongsToMany(models.WCExtras, { through: 'WCsExtras' });
      },
    },
  });
  return WCs;
};
