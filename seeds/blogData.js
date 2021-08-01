const { Blog } = require('../models');

const blogData = [
    {
        username: 'test_B1',
        content: 'Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 Test Bog Content #1 '
      },
      {
        username: 'test_B2',
        content: 'Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 Test Bog Content #2 '
      },
      {
        username: 'test_B3',
        content: 'Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 Test Bog Content #3 '
      },
      {
        username: 'test_B4',
        content: 'Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 Test Bog Content #4 '
      },
      

];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
