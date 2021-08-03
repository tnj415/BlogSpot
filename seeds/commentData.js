const { Comment } = require('../models');

const commentData = [
  {
    username: 'test_C1',
    content: 'test comment content #1 test comment content #1 test comment content #1 test comment content #1 test comment content #1 test comment content #1 '
  
  },
  {
    username: 'test_C2',
    content: 'test comment content #2 test comment content #2 test comment content #2 test comment content #2 test comment content #2 test comment content #2 '
    
  },
  {
    username: 'test_C3',
    content: 'test comment content #3 test comment content #3 test comment content #3 test comment content #3 test comment content #3 test comment content #3 '
  
  },
  {
    username: 'test_C4',
    content: 'test comment content #4 test comment content #4 test comment content #4 test comment content #4 test comment content #4 test comment content #4 '
 
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
