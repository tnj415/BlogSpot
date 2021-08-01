const { User } = require('../models');

const userData = [
    {  
	"username": "testUser",
      "email": "test2@user.com",
      "password": "zzzzzz"
}
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
