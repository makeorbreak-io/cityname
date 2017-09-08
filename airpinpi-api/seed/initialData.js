module.exports = seed => {
  const Users = seed.db.models.Users;
  // const ToiletCategories = app.db.models.ToiletCategories;

  Users.create({
    name: 'Hélder Pereira',
    email: 'helder@airpinpi.tk',
    password: '123456',
  });

  Users.create({
    name: 'Ricardo Moreira',
    email: 'ricardo@airpinpi.tk',
    password: '123456',
  });
};
