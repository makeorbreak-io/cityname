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
      type: DataType.DECIMAL(10, 2),
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
      getPlaceByLatLng: (lat, lng, filter) => {
        const qry = `SELECT DISTINCT id, name, price, rating, lat, lng, distance
        FROM (SELECT z.id, z.name, z.price, z.rating, z.lat, z.lng,
              p.radius,
              p.distance_unit
                       * DEGREES(ACOS(COS(RADIANS(p.latpoint))
                       * COS(RADIANS(z.lat))
                       * COS(RADIANS(p.longpoint - z.lng))
                       + SIN(RADIANS(p.latpoint))
                       * SIN(RADIANS(z.lat)))) AS distance
        FROM WCs AS z
        JOIN (
              SELECT  ${lat}  AS latpoint,  ${lng} AS longpoint,
                      15.0 AS radius, 111.045 AS distance_unit
          ) AS p ON 1=1
        WHERE z.lat
           BETWEEN p.latpoint  - (p.radius / p.distance_unit)
               AND p.latpoint  + (p.radius / p.distance_unit)
          AND z.lng
           BETWEEN p.longpoint - (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
               AND p.longpoint + (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
       ) AS d WHERE distance <= radius ORDER BY distance ASC`;
        return sequelize.query(qry);
      },
    },
  });
  return WCs;
};
