const Comments = require('./Comments');
const Posts = require('./Posts');

Comments.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(Comments, {
  foreignKey: 'user_id'
});

module.exports = { Comments, Posts };
