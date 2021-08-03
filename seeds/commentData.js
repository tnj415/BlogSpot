const { Comment } = require('../models');

const commentData = [
  {
    username: 'test_C1',
    content: 'test comment content #1 test comment content #1 test comment content #1 test comment content #1 test comment content #1 test comment content #1 ',
    blog_id: 1,
    user_id: 1
  
  },
  {
    username: 'test_C2',
    content: 'test comment content #2 test comment content #2 test comment content #2 test comment content #2 test comment content #2 test comment content #2 ',
    blog_id: 2,
    user_id: 2
    
  },
  {
    username: 'test_C3',
    content: 'test comment content #3 test comment content #3 test comment content #3 test comment content #3 test comment content #3 test comment content #3 ',
    blog_id: 3,
    user_id: 3
  
  },
  {
    username: 'test_C4',
    content: 'test comment content #4 test comment content #4 test comment content #4 test comment content #4 test comment content #4 test comment content #4 ',
    blog_id: 4,
    user_id: 4
 
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
