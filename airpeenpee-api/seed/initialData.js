module.exports = seed => {
  const Users = seed.db.models.Users;
  const WCCategories = seed.db.models.WCCategories;

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

  WCCategories.create({
    name: 'Master Bathroom',
  });

  WCCategories.create({
    name: 'Full Bathroom',
  });

  WCCategories.create({
    name: 'Three-Quarter bathroom',
  });

  WCCategories.create({
    name: 'Powder Room also known as a Half bath',
  });

  WCCategories.create({
    name: 'A room for shower only',
  });

  WCCategories.create({
    name: 'Bathroom with laundry facilities',
  });
};
