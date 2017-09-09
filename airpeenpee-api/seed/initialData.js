module.exports = seed => {
  const Users = seed.db.models.Users;
  const WCCategories = seed.db.models.WCCategories;
  const WCs = seed.db.models.WCs;

  Users.create({
    name: 'Hélder Pereira',
    email: 'helder@airpeenpee.tk',
    password: '123456',
  });

  Users.create({
    name: 'Ricardo Moreira',
    email: 'ricardo@airpeenpee.tk',
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

  WCs.create({
    name: 'Amazing toilet',
    description: 'amazing toilet in make or break',
    img: 'https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=12026540&id=984329&recipeId=728',
    lat: '51.5033640',
    lng: '-0.1276250',
    w_c_categories_id: 1,
  });
};
