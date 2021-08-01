const sequelize = require('../config/connection');
const seedBlogs = require('./blogData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogs();
  
  await seedComments();
  
  process.exit(0);
};

seedAll();