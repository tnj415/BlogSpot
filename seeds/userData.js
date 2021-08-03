const { User } = require('../models');

const userData = [
    {
        username: "testUser1",
        email: "test1@user.com",
        password: "testpass1"
    },
    {
        username: "testUser2",
        email: "test2@user.com",
        password: "testpass2"
    },
    {
        username: "testUser3",
        email: "test3@user.com",
        password: "testpass3"
    },
    {
        username: "testUser4",
        email: "test4@user.com",
        password: "testpass4"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
