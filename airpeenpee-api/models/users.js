import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
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
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    filters: {
      type: DataType.TEXT,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
    classMethods: {
      associate: models => {
        Users.hasMany(models.WCs);
        Users.hasMany(models.Ratings);
      },
      isPassword: (encodedPassword, password) => {
        return bcrypt.compareSync(password, encodedPassword);
      },
    },
  });
  return Users;
};
