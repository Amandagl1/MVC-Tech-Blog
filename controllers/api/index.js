const router = require('express').Router();
const commentsRoutes = require('./commentsRoutes.js');
const postsRoutes = require('./postsRoutes.js');

router.use('/comments', commentsRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
