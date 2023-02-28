const router = require('express').Router();
const commentsRoutes = require('./commentsRoutes.js');
const postsRoutes = require('./postsRoutes.js');
const userRoutes = require('./userRoutes');

router.use('/comments', commentsRoutes);
router.use('/posts', postsRoutes);
router.use('/users', userRoutes);

module.exports = router;
